'use client';
import { useEffect, useRef, useState } from 'react';
import { makeMessage } from '../lib/analyze';
import Inbox from '../components/Inbox';
import Faq from '../components/Faq';
import { Policies, Integration } from '../components/Info';

const SEED = [
  'amar 2000 taka kete nise kintu send hoy nai TXN4F82K9Q1',
  'আমি ভুল নম্বরে ৫০০ টাকা পাঠিয়ে ফেলেছি',
  'how do I reset my PIN? I forgot pin',
  'একজন ফোন করে ওটিপি চেয়েছে, বলেছে পুরস্কার জিতেছি',
  'my account is locked, my pin 4821 not working',
  'koto charge kate cash out korle?',
];
const TABS = [['inbox', 'Inbox'], ['faq', 'My FAQ'], ['pol', 'Reply policies'], ['int', 'Integration']];

export default function Page() {
  const [tab, setTab] = useState('inbox');
  const [msgs, setMsgs] = useState([]);
  const [sel, setSel] = useState(null);
  const [faqs, setFaqs] = useState([]);
  const n = useRef(0);

  useEffect(() => {
    let f = [];
    try { f = JSON.parse(localStorage.getItem('upay_faqs') || '[]'); } catch (e) {}
    setFaqs(f);
    n.current = 0;
    const ms = SEED.map((t) => makeMessage(t, ++n.current, f));
    setMsgs(ms);
    setSel(ms[0].id);
  }, []);

  const save = (f) => { setFaqs(f); try { localStorage.setItem('upay_faqs', JSON.stringify(f)); } catch (e) {} };
  const receive = (text) => { const m = makeMessage(text, ++n.current, faqs); setMsgs((ms) => [m, ...ms]); setSel(m.id); };
  const patch = (id, ch) => setMsgs((ms) => ms.map((m) => (m.id === id ? { ...m, ...ch } : m)));
  const count = (k) => msgs.filter((m) => m.status === k).length;

  return (
    <div className="wrap">
      <header>
        <div className="logo">u</div>
        <div>
          <h1 style={{ fontSize: 24, margin: 0 }}>upay Message Assistant</h1>
          <p>Reads messages from the upay app, replies when it is safe, and hands the rest to a person.</p>
        </div>
        <span className="tag info" style={{ marginLeft: 'auto' }}>Demo · sample data</span>
      </header>
      <div className="kpis">
        {[['Messages', msgs.length], ['Auto-replied', count('auto_sent')], ['Needs review', count('needs_review')], ['Escalated', count('escalated')]].map(([l, v]) => (
          <div className="kpi" key={l}><b>{v}</b><span>{l}</span></div>
        ))}
      </div>
      <nav role="tablist">
        {TABS.map(([id, l]) => (
          <button key={id} role="tab" aria-selected={tab === id} onClick={() => setTab(id)}>{l}</button>
        ))}
      </nav>
      {tab === 'inbox' && <Inbox msgs={msgs} sel={sel} setSel={setSel} receive={receive} patch={patch} />}
      {tab === 'faq' && <Faq faqs={faqs} save={save} test={(q) => { receive(q); setTab('inbox'); }} />}
      {tab === 'pol' && <Policies />}
      {tab === 'int' && <Integration />}
      <footer>Prototype for AI Hackathon 2026. All data is synthetic. Not connected to any upay system.</footer>
    </div>
  );
}
