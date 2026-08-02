import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Leadership grounded in delivery, not theory.' };

export default function Page() {
  return (
    <main id="main">
      <section className="pageHero"><div className="container"><p className="eyebrow">MarimeTech Solutions</p><h1>Leadership grounded in delivery, not theory.</h1><p>James Marime founded MarimeTech Solutions to help organizations make better technology decisions and execute transformation with clarity.</p></div></section>
      
      <section className="section">
        <div className="container founderCard">
          <div className="founderPortrait founderPhoto" role="img" aria-label="James Marime, Founder and CEO of MarimeTech Solutions"></div>
          <div className="founderCopy">
            <p className="eyebrow">Founder & CEO</p>
            <h2>James Marime</h2>
            <p>James is a technology and transformation leader with more than 15 years of experience leading enterprise programs across cloud, infrastructure, cybersecurity, IT operations and business systems.</p>
            <p>His work has spanned healthcare, financial services, manufacturing, cloud services, education, nonprofit and multinational environments. He founded MarimeTech around a simple belief: organizations do not need more complexity. They need clarity about what is holding them back and disciplined support to fix it.</p>
            <p>His approach combines executive-level thinking with practical delivery experience, helping leaders move from uncertainty to decisions, roadmaps and measurable action.</p>
            <div className="actions"><Link className="btn btnPrimary" href="/contact">Connect with James</Link><a className="btn btnGhost" href="https://www.linkedin.com/in/james-marime/" target="_blank" rel="noreferrer">View LinkedIn</a></div>
          </div>
        </div>
      </section>
      <section className="section soft">
        <div className="container">
          <p className="eyebrow">Leadership perspective</p>
          <h2>Business outcomes first. Technology in service of the mission.</h2>
          <div className="grid3" style={{marginTop:38}}>
            <div className="card"><h3>Translate complexity</h3><p>Make difficult technology decisions understandable to executives, teams and stakeholders.</p></div>
            <div className="card"><h3>Lead through change</h3><p>Bring structure, accountability and momentum to transformations that cross functions and geographies.</p></div>
            <div className="card"><h3>Build trust</h3><p>Be honest about trade-offs, risks and what the organization is genuinely ready to absorb.</p></div>
          </div>
        </div>
      </section>

    </main>
  );
}
