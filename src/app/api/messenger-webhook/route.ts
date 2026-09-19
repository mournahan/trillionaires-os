import { NextRequest, NextResponse } from "next/server";
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const mode = searchParams.get("hub.mode");
  const token = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");

  const expectedToken = process.env.FB_VERIFY_TOKEN || "trillionaires_liaison_secret";

  if (mode === "subscribe" && token === expectedToken) {
    console.log("[Liaison Webhook] Verified successfully by Meta.");
    return new Response(challenge, {
      status: 200,
      headers: { "Content-Type": "text/plain" },
    });
  }

  console.warn("[Liaison Webhook] Token verification failed:", { mode, token, expectedToken });
  return NextResponse.json({ error: "Verification token mismatch" }, { status: 403 });
}

export async function POST(request: NextRequest) {
  try {
    const rawBody = await request.text();
    const appSecret = process.env.FB_APP_SECRET;
    const signature = request.headers.get("x-hub-signature-256");

    if (appSecret && signature) {
      const parts = signature.split("=");
      if (parts.length === 2 && parts[0] === "sha256") {
        const expected = crypto.createHmac("sha256", appSecret).update(rawBody).digest("hex");
        if (parts[1] !== expected) {
          console.warn("[Liaison Webhook] Signature mismatch.");
          return NextResponse.json({ error: "Invalid signature" }, { status: 403 });
        }
      }
    }

    const payload = JSON.parse(rawBody);

    if (payload.object === "page") {
      for (const entry of payload.entry || []) {
        for (const messagingEvent of entry.messaging || []) {
          const senderId = messagingEvent.sender?.id;
          const message = messagingEvent.message;

          if (senderId && message?.text) {
            console.log(`[Liaison] Inbound feedback from Daisy (${senderId}): "${message.text}"`);

            // 1. Log to Trillionaires OS command stream
            try {
              const streamPath = path.join(process.cwd(), "src", "data", "stream.json");
              if (fs.existsSync(streamPath)) {
                const stream = JSON.parse(fs.readFileSync(streamPath, "utf8"));
                stream.unshift({
                  id: String(Date.now()),
                  timestamp: new Date().toISOString(),
                  author: "Daisy Bliss (Courtney)",
                  message: `💬 Studio Directives: "${message.text}"`
                });
                fs.writeFileSync(streamPath, JSON.stringify(stream.slice(0, 50), null, 2));
              }
            } catch (err: any) {
              console.error("[Liaison] Stream log failed:", err.message);
            }
          }
        }
      }
      return new Response("EVENT_RECEIVED", { status: 200 });
    }

    return NextResponse.json({ error: "Not found" }, { status: 404 });
  } catch (err: any) {
    console.error("[Liaison Webhook Error]:", err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
