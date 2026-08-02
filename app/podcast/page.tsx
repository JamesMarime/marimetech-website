import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'The Becoming Sessions' };

export default function Page() {
  return (
    <main id="main">
      <section className="pageHero"><div className="container"><p className="eyebrow">MarimeTech Solutions</p><h1>The Becoming Sessions</h1><p>Faith, resilience, purpose and the honest journey of becoming. A podcast hosted by James and Joanne Marime.</p></div></section>
      
      <section className="section">
        <div className="container split">
          <div className="visual"><div className="visualCaption">Honest conversations about faith, resilience and becoming.</div></div>
          <div><p className="eyebrow">Podcast</p><h2>Stories that strengthen people.</h2><p className="lead muted">The Becoming Sessions creates space for honest conversations about faith, spiritual growth, recovery, family, purpose and the lessons hidden inside difficult seasons.</p><p>Watch the latest conversations, testimonies and practical discussions on faith, resilience and becoming.</p><a className="btn btnPrimary" href="https://www.youtube.com/@BecomingSessions" target="_blank" rel="noreferrer">Visit The Becoming Sessions on YouTube</a></div>
        </div>
      </section>

    </main>
  );
}
