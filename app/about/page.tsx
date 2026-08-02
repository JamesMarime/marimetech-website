import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Transforming today. Empowering tomorrow.' };

export default function Page() {
  return (
    <main id="main">
      <section className="pageHero"><div className="container"><p className="eyebrow">MarimeTech Solutions</p><h1>Transforming today. Empowering tomorrow.</h1><p>MarimeTech Solutions Inc. is a Toronto-based technology advisory and transformation company helping organizations solve operational bottlenecks, modernize securely and build stronger foundations for growth.</p></div></section>
      
      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">Our point of view</p>
            <h2>The best technology decision begins with the right business question.</h2>
            <p className="lead muted">Organizations rarely struggle because they lack another tool. More often, the challenge is unclear strategy, fragmented process, unmanaged risk, poor adoption or a delivery gap.</p>
            <p>MarimeTech brings together enterprise technology leadership, program delivery, cybersecurity, cloud, infrastructure and transformation experience to help leaders make better decisions and execute them with confidence.</p>
          </div>
          <div className="card">
            <h3>Our mission</h3>
            <p>To help organizations leverage technology with clarity, remove the bottlenecks that limit performance and create sustainable capacity for growth.</p>
            <h3 style={{marginTop:28}}>Our promise</h3>
            <p>We remain practical, transparent and focused on the outcome the business actually needs.</p>
          </div>
        </div>
      </section>
      <section className="section soft">
        <div className="container">
          <p className="eyebrow">What guides us</p>
          <h2>Principles that shape every engagement.</h2>
          <div className="grid2" style={{marginTop:40}}>
            <div className="serviceBlock"><h3>Business before technology</h3><p>We start with the outcome, constraint and operating reality before recommending a platform or tool.</p></div>
            <div className="serviceBlock"><h3>Clarity and accountability</h3><p>Roles, decisions, risks and success measures should be visible from the beginning.</p></div>
            <div className="serviceBlock"><h3>Security by design</h3><p>Growth should not create unmanaged exposure. Security and governance are built into the solution.</p></div>
            <div className="serviceBlock"><h3>Transformation that sticks</h3><p>Technology creates value only when people adopt it and the organization can sustain it.</p></div>
          </div>
        </div>
      </section>
      <section className="section"><div className="container band"><div><p className="eyebrow">Work with us</p><h2 style={{marginBottom:12}}>Bring us the business problem, not a polished brief.</h2><p>We can help frame the challenge, understand the options and determine the right next move.</p></div><Link className="btn btnPrimary" href="/contact">Start a conversation</Link></div></section>

    </main>
  );
}
