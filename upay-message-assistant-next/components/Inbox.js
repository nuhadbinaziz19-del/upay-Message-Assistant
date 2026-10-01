'use client';
import { useEffect, useState } from 'react';
import { ts } from '../lib/analyze';

export const ST = {
  auto_sent: ['Auto-replied', 'ok'], needs_review: ['Needs review', 'warn'],
  escalated: ['Escalated', 'bad'], agent_sent: ['Sent by agent', 'info'],
};

export default function Inbox({ msgs, sel, setSel, receive, patch }) {
  const [text, setText] = useState('');
  const [draft, setDraft] = useState('');
  const m = msgs.find((x) => x.id === sel);
  const a = m && m.a;
  useEffect(() => { setDraft(m ? m.draft : ''); }, [sel]); // eslint-disable-line

  return (
    <div className="cols">
      <div className="card">
        <h3>Receive a message</h3>
        <p className="lead">Type what a customer might send, in Bangla or English.</p>
        <textarea rows={3} aria-label="Customer message" value={text} onChange={(e) => setText(e.target.value)} />
        <button className="btn" onClick={() => { if (text.trim()) { receive(text.trim()); setText(''); } }}>Receive message</button>
        <ul className="list" role="listbox" aria-label="Inbox">
          {msgs.map((x) => (
            <li key={x.id} tabIndex={0} role="option" aria-selected={x.id === sel} onClick={() => setSel(x.id)} onKeyDown={(e) => e.key === 'Enter' && setSel(x.id)}>
              <span className={'tag ' + ST[x.status][1]}>{ST[x.status][0]}</span>
              <b>{x.a.policy}</b>
              <small>{x.a.shown.slice(0, 60)}</small>
            </li>
          ))}
        </ul>
      </div>

      <div className="card">
        {!m ? <p className="lead">Select a message or receive a new one.</p> : (
          <>
            <h3>{m.who} <small style={{ color: 'var(--mute)', fontWeight: 400 }}>{m.at}</small></h3>
            <div className="bub cu">{a.shown}</div>
            {m.out ? (
              <>
                <div className="bub ai">{m.out}</div>
                <p className="lead">{m.status === 'auto_sent' ? 'Sent automatically by the assistant.' : 'Sent by ' + a.team + ' agent.'}</p>
              </>
            ) : (
              <>
                <label htmlFor="dr" style={{ fontWeight: 600, fontSize: 14 }}>
                  {m.status === 'escalated' ? 'Holding reply (fraud team takes over)' : 'Draft reply for agent review'}
                </label>
                <textarea id="dr" rows={5} value={draft} onChange={(e) => setDraft(e.target.value)} />
                <button className="btn" onClick={() => patch(m.id, { out: draft, status: 'agent_sent', audit: [...m.audit, 'Agent approved reply ' + ts()] })}>Approve and send</button>
                {m.status === 'needs_review' && (
                  <button className="btn alt" onClick={() => patch(m.id, { status: 'escalated', audit: [...m.audit, 'Escalated to ' + a.team + ' ' + ts()] })}>Escalate to {a.team}</button>
                )}
              </>
            )}
          </>
        )}
      </div>

      <div className="card">
        {m && (
          <>
            <h3>AI analysis</h3>
            <p>
              <span className={'tag ' + (a.pri === 'urgent' ? 'bad' : a.pri === 'high' ? 'warn' : 'info')}>{a.pri} priority</span>
              <span className={'tag ' + ST[m.status][1]}>{ST[m.status][0]}</span>
            </p>
            <ul className="why">
              <li><span>Topic</span><b>{a.policy}</b></li>
              <li><span>Language</span><b>{a.lang}</b></li>
              <li><span>Route to</span><b>{a.team}</b></li>
              <li><span>Matched words</span><b>{a.hits.join(', ') || 'none'}</b></li>
              {Object.entries(a.ent).map(([k, v]) => <li key={k}><span>Found {k}</span><b>{v}</b></li>)}
            </ul>
            <p style={{ margin: '10px 0 0', fontSize: 14 }}>Confidence {Math.round(a.conf * 100)}%</p>
            <div className="bar"><i style={{ width: a.conf * 100 + '%' }} /></div>
            {a.flags.map((f) => <p key={f}><span className="tag bad">Flag</span>{f}</p>)}
            <p className="lead" style={{ margin: '8px 0 4px' }}>Why this decision</p>
            <p style={{ fontSize: 14, margin: 0 }}>
              {a.dec === 'auto_sent' ? 'Policy allows automation, confidence is high, and no safety flags.'
                : a.dec === 'escalated' ? 'Fraud reports always go to a specialist team.'
                : 'Policy needs a person, or confidence is low, or a safety flag was raised.'}
            </p>
            <p className="lead" style={{ margin: '12px 0 4px' }}>Audit trail</p>
            <ul className="why">{m.audit.map((x, i) => <li key={i}><span>{x}</span></li>)}</ul>
          </>
        )}
      </div>
    </div>
  );
}
