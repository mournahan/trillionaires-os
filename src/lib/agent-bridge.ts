import { db, auth } from './firebase';
import {
  collection,
  addDoc,
  query,
  where,
  orderBy,
  limit,
  onSnapshot,
  doc,
  setDoc,
  serverTimestamp,
  Timestamp
} from 'firebase/firestore';

export const AUTHORIZED_SUPERUSER = 'johnmournahan@gmail.com';

export type DispatchType = 'chat' | 'idea' | 'site_diagnose' | 'site_repair';

export type SubagentId =
  | 'chief'
  | 'seeker'
  | 'architect'
  | 'inspector'
  | 'sentry'
  | 'localops'
  | 'lifeops'
  | 'patentforge';

export interface AgentDispatch {
  id?: string;
  type: DispatchType;
  targetAgent?: SubagentId;
  targetSite?: string;
  prompt?: string;
  title?: string;
  severity?: 'low' | 'medium' | 'high' | 'critical';
  status: 'pending' | 'processing' | 'completed' | 'error';
  reply?: string;
  diff?: string;
  logs?: string[];
  userEmail: string;
  timestamp: number;
  updatedAt?: number;
}

export interface TrackedProject {
  id: string;
  name: string;
  url: string;
  path: string;
  stack: string;
  category: 'Commercial' | 'Infrastructure' | 'Hardware';
}

export const TRACKED_PROJECTS: TrackedProject[] = [
  {
    id: 'samaritan_os',
    name: 'Samaritan OS',
    url: 'https://samaritanos.vercel.app',
    path: 'c:\\Users\\JohnMournahan\\Antigravity\\trillionaires_ai\\projects\\samaritan_os',
    stack: 'Next.js, Tailwind, Firebase, Twilio',
    category: 'Commercial'
  },
  {
    id: 'ok_fair',
    name: 'Okanogan County Fair',
    url: 'https://ok-fair.vercel.app',
    path: 'c:\\Users\\JohnMournahan\\Antigravity\\trillionaires_ai\\projects\\ok_fair',
    stack: 'Next.js, Firebase, Twilio SMS',
    category: 'Commercial'
  },
  {
    id: 'eb_tattoo',
    name: 'EB Tattoo / Studio OS',
    url: 'https://eternal-bliss-tattoo.vercel.app',
    path: 'c:\\Users\\JohnMournahan\\EB Tattoo',
    stack: 'Next.js, Stripe, Twilio',
    category: 'Commercial'
  },
  {
    id: 'rotary_os',
    name: 'Rotary OS',
    url: 'https://rotary-os.vercel.app',
    path: 'c:\\Users\\JohnMournahan\\Antigravity\\trillionaires_ai\\Rotary OS',
    stack: 'Next.js, Tailwind',
    category: 'Commercial'
  },
  {
    id: 'elite_electric',
    name: 'Elite Electric Power',
    url: 'https://elite-electric-power.vercel.app',
    path: 'c:\\Users\\JohnMournahan\\Antigravity\\elite_electric',
    stack: 'Node.js, HTML5/CSS',
    category: 'Commercial'
  },
  {
    id: 'trillionaires_co',
    name: 'Trillionaires Co Brand',
    url: 'https://trillionaires-co-brand.vercel.app',
    path: 'c:\\Users\\JohnMournahan\\trillionaires-co',
    stack: 'Next.js, Tailwind',
    category: 'Commercial'
  },
  {
    id: 'tradeops',
    name: 'TradeOps MVP Template',
    url: 'http://100.103.159.46:3005',
    path: 'c:\\Users\\JohnMournahan\\packages\\tradeops-template',
    stack: 'Next.js 15, Tailwind v4, Twilio',
    category: 'Commercial'
  },
  {
    id: 'holdover',
    name: 'Holdover Sentinel',
    url: 'Hardware Prototype',
    path: 'c:\\Users\\JohnMournahan\\Antigravity\\Holdover',
    stack: 'OpenSCAD, C++, FLIR Lepton 3.5',
    category: 'Hardware'
  },
  {
    id: 'trillionaires_os',
    name: 'TrillionOS Core',
    url: 'https://trillionaires-os.vercel.app',
    path: 'c:\\Users\\JohnMournahan\\Antigravity\\trillionaires-os',
    stack: 'Next.js 16, TypeScript, Tailwind',
    category: 'Infrastructure'
  }
];

export const SUBAGENTS = [
  { id: 'chief', name: 'Chief', role: 'Lead Architect & Operations Director', badge: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40' },
  { id: 'seeker', name: 'Seeker', role: 'Prior-Art Scout & Tech Researcher', badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' },
  { id: 'architect', name: 'Architect', role: 'Full-Stack Software & CAD Engineer', badge: 'bg-blue-500/20 text-blue-300 border-blue-500/40' },
  { id: 'inspector', name: 'Inspector', role: 'Verification & QA Engineer', badge: 'bg-amber-500/20 text-amber-300 border-amber-500/40' },
  { id: 'sentry', name: 'Sentry', role: 'Cybersecurity & Perimeter Defense', badge: 'bg-rose-500/20 text-rose-300 border-rose-500/40' },
  { id: 'localops', name: 'LocalOps', role: 'Offline RTX 4060 Ti Token Arbitrage', badge: 'bg-purple-500/20 text-purple-300 border-purple-500/40' },
  { id: 'lifeops', name: 'LifeOps', role: 'Longevity, Fermentation & Health Coach', badge: 'bg-teal-500/20 text-teal-300 border-teal-500/40' },
  { id: 'patentforge', name: 'PatentForge', role: 'Hardware Inventions & Claim Drafting', badge: 'bg-orange-500/20 text-orange-300 border-orange-500/40' }
] as const;

/**
 * Sends an agent dispatch command to Firestore
 */
export async function sendAgentDispatch(
  payload: Omit<AgentDispatch, 'status' | 'timestamp' | 'userEmail'>
): Promise<string> {
  const user = auth.currentUser;
  if (!user || user.email !== AUTHORIZED_SUPERUSER) {
    throw new Error('Unauthorized: Only sovereign administrator can issue agent dispatches.');
  }

  const dispatchData = {
    ...payload,
    userEmail: user.email,
    status: 'pending' as const,
    timestamp: Date.now()
  };

  let docId = `disp_${Date.now()}`;

  // 1. Attempt Firestore write
  try {
    const docRef = await addDoc(collection(db, 'agent_dispatches'), {
      ...dispatchData,
      createdAt: serverTimestamp()
    });
    docId = docRef.id;
  } catch (fsErr) {
    console.warn('Firestore write deferred, falling back to API route:', fsErr);
  }

  // 2. Call Next.js API route for instant response
  try {
    const res = await fetch('/api/agent/dispatch', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dispatchData)
    });
    const result = await res.json();

    if (result.success && result.reply) {
      try {
        const docRef = doc(db, 'agent_dispatches', docId);
        await setDoc(
          docRef,
          {
            ...dispatchData,
            status: 'completed',
            reply: result.reply,
            diff: result.diff || '',
            updatedAt: Date.now()
          },
          { merge: true }
        );
      } catch (updateErr) {
        console.warn('Firestore status update notice:', updateErr);
      }
    }
  } catch (apiErr) {
    console.warn('API route call error:', apiErr);
  }

  return docId;
}

/**
 * Subscribes to real-time dispatches and conversation stream
 */
export function subscribeAgentDispatches(
  callback: (dispatches: AgentDispatch[]) => void
): () => void {
  const user = auth.currentUser;
  if (!user || user.email !== AUTHORIZED_SUPERUSER) {
    return () => {};
  }

  const q = query(
    collection(db, 'agent_dispatches'),
    where('userEmail', '==', AUTHORIZED_SUPERUSER),
    orderBy('timestamp', 'desc'),
    limit(50)
  );

  return onSnapshot(q, (snapshot) => {
    const items: AgentDispatch[] = snapshot.docs.map((d) => ({
      id: d.id,
      ...(d.data() as Omit<AgentDispatch, 'id'>)
    }));
    callback(items);
  }, (err) => {
    console.error('Agent dispatches listener error:', err);
  });
}

/**
 * Subscribes to real-time system telemetry beacon
 */
export function subscribeSystemTelemetry(
  callback: (telemetry: any) => void
): () => void {
  const telemetryDocRef = doc(db, 'system_telemetry', 'workstation_msi');
  return onSnapshot(telemetryDocRef, (snap) => {
    if (snap.exists()) {
      callback(snap.data());
    } else {
      callback({ status: 'offline', lastHeartbeat: 0 });
    }
  }, (err) => {
    console.error('System telemetry listener error:', err);
  });
}
