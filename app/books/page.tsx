import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Books and resources' };

export default function Page() {
  return (
    <main id="main">
      <section className="pageHero"><div className="container"><p className="eyebrow">MarimeTech Solutions</p><h1>Books and resources</h1><p>Stories, lessons and practical resources from James Marime on money, faith, leadership, entrepreneurship and becoming.</p></div></section>
      
      <section className="section">
        <div className="container grid2">
          <div className="card"><span className="tag">In progress</span><h2 style={{fontSize:'2.4rem',marginTop:22}}>A story of money, mistakes and becoming</h2><p>A deeply personal memoir about earning, losing, learning, rebuilding and discovering that financial mistakes do not have to be the end of the story.</p></div>
          <div className="card"><span className="tag">Future library</span><h2 style={{fontSize:'2.4rem',marginTop:22}}>Founder stories and practical guides</h2><p>This space is ready for future books, free downloads, founder interviews and lead magnets connected to the MarimeTech ecosystem.</p></div>
        </div>
      </section>

    </main>
  );
}
