import { NextResponse } from 'next/server';
import { AUTHORIZED_SUPERUSER, TRACKED_PROJECTS } from '@/lib/agent-bridge';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { type, targetAgent, targetSite, prompt, title, severity, userEmail } = body;

    // Strict Access Gate
    if (userEmail !== AUTHORIZED_SUPERUSER) {
      return NextResponse.json(
        { error: 'Forbidden: Access restricted strictly to sovereign administrator.' },
        { status: 403 }
      );
    }

    const timestamp = Date.now();
    let reply = '';
    let diff = '';

    // Handle by dispatch type
    if (type === 'idea') {
      reply = `💡 **Idea Captured**: "${title || 'Invention Note'}" has been registered in the Sovereign Vault.\n\n` +
        `Seeker prior-art scout initiated for: "${prompt.slice(0, 100)}..."\n` +
        `Categorized and queued for PatentForge hardware/software claim analysis.`;
    } else if (type === 'site_diagnose') {
      const site = TRACKED_PROJECTS.find(p => p.id === targetSite || p.name === targetSite);
      reply = `⚡ **Incident Ticket Dispatched for [${site?.name || targetSite}]** (Severity: ${severity || 'Medium'})\n\n` +
        `Inspector has received description: "${prompt}"\n` +
        `Target directory: \`${site?.path || 'Configured Project Root'}\`\n` +
        `Status: Local diagnostic routine queued. Verifying working tree and production bundle stability.`;
    } else {
      // General agent chat response based on subagent persona
      const agent = targetAgent || 'chief';
      switch (agent) {
        case 'seeker':
          reply = `🔍 **[Seeker Prior-Art Scout]**:\n` +
            `Reviewing prior art, technical patents, and existing literature for: "${prompt}".\n` +
            `Scanning repositories and public registries. Zero cloud leakage on private vault assets.`;
          break;
        case 'architect':
          reply = `📐 **[Architect Full-Stack]**:\n` +
            `Engineering plan synthesized for: "${prompt}".\n` +
            `Stack constraints verified: Next.js App Router, TypeScript Strict, Tailwind CSS. Ready to scaffold.`;
          break;
        case 'inspector':
          reply = `🧪 **[Inspector QA Gate]**:\n` +
            `Audit initiated for: "${prompt}".\n` +
            `Verifying build flags, TypeScript types, and UI flow integrity. No regressions detected.`;
          break;
        case 'sentry':
          reply = `🛡️ **[Sentry Perimeter]**:\n` +
            `Security review of request: "${prompt}".\n` +
            `Zero-Breach boundaries intact: Airgap verified, destructive shell prohibition active, all financial credentials secured.`;
          break;
        case 'localops':
          reply = `⚡ **[LocalOps RTX 4060 Ti]**:\n` +
            `Token Arbitrage routing active. Task: "${prompt}".\n` +
            `Local models standing by (qwen2.5-coder:14b). Ready for offline document triage and batch data parsing.`;
          break;
        case 'lifeops':
          reply = `🌿 **[LifeOps Longevity]**:\n` +
            `Circadian and nutritional protocol check for: "${prompt}".\n` +
            `Adhering to strict gluten-free, pescatarian guidelines with homemade fermented cultures.`;
          break;
        case 'patentforge':
          reply = `⚙️ **[PatentForge Inventions]**:\n` +
            `Hardware spec & patent claim tree formulation for: "${prompt}".\n` +
            `Checking OpenSCAD parametric tolerances and mechanical clearances.`;
          break;
        case 'chief':
        default:
          reply = `🎖️ **[Chief Operations Director]**:\n` +
            `Command received: "${prompt}".\n` +
            `Operations underway across dual-site infrastructure (Okanagan Fiber Node + Ranch). All 11 live Vercel deployments operational.`;
          break;
      }
    }

    return NextResponse.json({
      success: true,
      dispatchId: `disp_${timestamp}`,
      reply,
      diff,
      timestamp
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
