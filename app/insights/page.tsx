import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Ideas for leaders building stronger organizations.' };

export default function Page() {
  return (
    <main id="main">
      <section className="pageHero"><div className="container"><p className="eyebrow">MarimeTech Solutions</p><h1>Ideas for leaders building stronger organizations.</h1><p>A home for practical perspectives on technology, transformation, entrepreneurship, leadership and the bottlenecks that shape growth.</p></div></section>
      
      <section className="section">
        <div className="container">
          <div className="articleGrid">
            <article className="card articleCard"><div><span className="tag">Transformation</span><h3 style={{marginTop:22}}>Why buying another tool rarely fixes the real problem</h3><p>How to separate technology symptoms from the business bottleneck underneath.</p></div><span className="textLink">Article coming soon</span></article>
            <article className="card articleCard"><div><span className="tag">AI</span><h3 style={{marginTop:22}}>AI readiness begins before the first use case</h3><p>The operating, governance and adoption questions leaders should answer early.</p></div><span className="textLink">Article coming soon</span></article>
            <article className="card articleCard"><div><span className="tag">Leadership</span><h3 style={{marginTop:22}}>What founders teach us about showing up</h3><p>Lessons from the people building businesses without perfect conditions.</p></div><span className="textLink">Article coming soon</span></article>
          </div>
        </div>
      </section>
      <section className="section soft"><div className="container band"><div><p className="eyebrow">MarimeTech Insights</p><h2 style={{marginBottom:12}}>This section is ready for your LinkedIn newsletters and founder interviews.</h2><p>Add your first three articles after launch and begin building a searchable library around your expertise.</p></div><Link className="btn btnPrimary" href="/contact">Work with MarimeTech</Link></div></section>

    </main>
  );
}
