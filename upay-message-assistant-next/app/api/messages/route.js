import { analyze } from '../../../lib/analyze';
const DEC = { auto_sent: 'AUTO_REPLY', needs_review: 'AGENT_REVIEW', escalated: 'ESCALATE' };
export async function POST(req) {
  let b;
  try { b = await req.json(); } catch { return Response.json({ error: 'invalid_json' }, { status: 400 }); }
  if (!b || typeof b.text !== 'string' || !b.text.trim()) return Response.json({ error: 'text is required' }, { status: 400 });
  const a = analyze(b.text, Array.isArray(b.faqs) ? b.faqs : []);
  return Response.json({
    message_id: b.message_id || null, intent: a.intent, language: a.lang, confidence: +a.conf.toFixed(2),
    priority: a.pri, decision: DEC[a.dec], route_to: a.team, policy: a.policy, flags: a.flags,
    redacted_text: a.shown, reply: a.reply,
  });
}
