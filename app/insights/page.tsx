import Link from 'next/link';

export default function InsightsPage() {
  return (
    <main id="main">
      <section className="pageHero"><div className="container"><p className="eyebrow">Insights</p><h1>Practical thinking for leaders navigating change.</h1><p>Articles, newsletters, founder conversations and lessons from technology transformation.</p></div></section>
      <section className="section"><div className="container"><div className="card"><h2>Insights are coming next.</h2><p className="lead muted">For Version 1, the page is live and ready. We will begin adding MarimeTech articles, newsletters, podcast episodes and case studies here.</p><Link className="btn btnDark" href="/contact">Start a conversation</Link></div></div></section>
    </main>
  );
}
