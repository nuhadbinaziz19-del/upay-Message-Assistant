'use client';
import { useState } from 'react';

export default function Faq({ faqs, save, test }) {
  const [q, setQ] = useState('');
  const [alt, setAlt] = useState('');
  const [a, setA] = useState('');
  const [auto, setAuto] = useState(true);
  const [msg, setMsg] = useState('');

  const add = () => {
    if (!q.trim() || !a.trim()) { setMsg('Write both the question and the answer.'); return; }
    save([...faqs, { q: q.trim(), alt: alt.split('\n').map((x) => x.trim()).filter(Boolean), a: a.trim(), auto }]);
    setQ(''); setAlt(''); setA('');
    setMsg('Saved. Customers who ask this now get your answer.');
  };

  return (
    <div className="g2">
      <div className="card">
        <h3>Add a common question</h3>
        <p className="lead">Write the question and your answer. When a customer asks it, the assistant sends your answer.</p>
        <label htmlFor="fq">Question</label>
        <input id="fq" value={q} onChange={(e) => setQ(e.target.value)} placeholder="e.g. How do I add money?" />
        <label htmlFor="fv">Other ways customers ask it (one per line, optional)</label>
        <textarea id="fv" rows={3} value={alt} onChange={(e) => setAlt(e.target.value)} />
        <label htmlFor="fa">Your answer</label>
        <textarea id="fa" rows={4} value={a} onChange={(e) => setA(e.target.value)} />
        <label className="chk"><input type="checkbox" checked={auto} onChange={(e) => setAuto(e.target.checked)} /> Send automatically</label>
        <button className="btn" onClick={add}>Save question</button>
        <p className="lead" role="status" style={{ marginTop: 8 }}>{msg}</p>
      </div>
      <div className="card">
        <h3>Saved questions</h3>
        {faqs.length === 0 && <p className="lead">No saved questions yet.</p>}
        {faqs.map((f, i) => (
          <div key={i} style={{ border: '1px solid var(--line)', borderRadius: 10, padding: 10, marginBottom: 8 }}>
            <span className={'tag ' + (f.auto ? 'ok' : 'warn')}>{f.auto ? 'Auto-reply' : 'Agent review'}</span>
            <b>{f.q}</b>
            <div style={{ color: 'var(--mute)', fontSize: 13.5, marginTop: 4 }}>{f.a.slice(0, 110)}</div>
            <button className="btn alt" style={{ marginLeft: 0 }} onClick={() => test(f.q)}>Test</button>
            <button className="btn alt" onClick={() => save(faqs.filter((_, j) => j !== i))}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
