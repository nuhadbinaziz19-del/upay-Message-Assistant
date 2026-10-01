'use client';
import { KB } from '../lib/analyze';

export function Policies() {
  return (
    <div className="card">
      <h3>Reply policies</h3>
      <p className="lead">Each topic has an approved reply and a rule for who sends it. These are sample texts. upay's support team replaces them with approved wording.</p>
      <table>
        <thead><tr><th>Topic</th><th>Who replies</th><th>Route</th><th>Sample reply (English)</th></tr></thead>
        <tbody>
          {Object.values(KB).map((k) => (
            <tr key={k.label}>
              <td><b>{k.label}</b></td>
              <td>{k.esc ? 'Specialist team' : k.auto ? 'Assistant' : 'Agent approves'}</td>
              <td>{k.team}</td>
              <td>{k.en({})}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="note">Safety rules apply to every message: never ask for a PIN or OTP, mask phone numbers and secret codes, send fraud reports to the fraud team, and never promise a refund the system cannot guarantee.</div>
    </div>
  );
}

const REQ = `{
  "message_id": "m_1042",
  "text": "taka kete nise but send hoy nai",
  "faqs": []
}`;
const RES = `{
  "intent": "failed_txn",
  "language": "Bangla (romanized)",
  "confidence": 0.9,
  "priority": "high",
  "decision": "AUTO_REPLY",
  "route_to": "Payments Ops",
  "reply": "...",
  "flags": []
}`;

export function Integration() {
  return (
    <div className="card">
      <h3>How it connects to the upay app</h3>
      <p className="lead">This Next.js project includes a working API route. The app's backend sends each message to it and gets the analysis and reply back.</p>
      <div className="flow">
        {['App message', 'POST /v1/messages', 'Redact and analyze', 'Policy lookup', 'Decision rules', 'Auto-reply or agent queue'].map((x) => <div key={x}>{x}</div>)}
      </div>
      <div className="g2">
        <div><b>Request: <code>POST /v1/messages</code></b><pre>{REQ}</pre></div>
        <div><b>Response</b><pre>{RES}</pre></div>
      </div>
      <div className="note">The logic lives in <code>lib/analyze.js</code>, shared by the screen and the API route. Replace it with a Bangla/English classifier and retrieval over upay's approved documents when real data is available. FAQs are saved in the browser only. A shared team FAQ needs a database.</div>
    </div>
  );
}
