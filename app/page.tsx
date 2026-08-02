import Link from 'next/link';
import { ArrowRight, BrainCircuit, CheckCircle2, ShieldCheck, Workflow } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';

export default function Home() {
  return (
    <main id="main">
      <section className="hero heroRedesign">
        <div className="heroGlow heroGlowOne" aria-hidden="true" />
        <div className="heroGlow heroGlowTwo" aria-hidden="true" />
        <div className="container heroGrid">
          <div className="heroContent heroCopy">
            <p className="eyebrow">Technology strategy · Transformation · Executive advisory</p>
            <h1>Remove the bottlenecks. <span className="gold">Build what comes next.</span></h1>
            <p className="lead">MarimeTech helps growing organizations turn technology, process and execution challenges into practical roadmaps for stronger performance, security and growth.</p>
            <div className="actions">
              <Link className="btn btnPrimary" href="/contact">Start the conversation <ArrowRight size={18}/></Link>
              <Link className="btn btnGhost" href="/services">Explore our capabilities</Link>
            </div>
            <div className="proof">
              <div className="proofItem"><strong>Business-first</strong><span>We solve the constraint, not chase the trend.</span></div>
              <div className="proofItem"><strong>Enterprise experience</strong><span>Complex programs translated into practical action.</span></div>
              <div className="proofItem"><strong>Built to scale</strong><span>Secure foundations for growth and change.</span></div>
            </div>
          </div>

          <div className="heroBrandWrap" aria-label="MarimeTech Solutions brand">
            <div className="heroBrandPanel">
              <img src="/marimetech-premium-logo.jpg" alt="MarimeTech Solutions Inc. — Leverage. Technology. Transform. Grow." />
            </div>
            <div className="heroMetric heroMetricTop"><strong>15+ years</strong><span>Technology leadership</span></div>
            <div className="heroMetric heroMetricBottom"><strong>Business-first</strong><span>Strategy through delivery</span></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">What we do</p>
          <h2>Clarity before complexity.</h2>
          <p className="lead muted" style={{maxWidth:780}}>We connect business priorities, operating realities and technology decisions so leaders can invest with confidence and deliver change that lasts.</p>
          <div className="grid3" style={{marginTop:42}}>
            <ServiceCard icon={<BrainCircuit/>} title="Technology & AI Strategy">Practical roadmaps that connect business priorities to the right technology, operating model and investment sequence.</ServiceCard>
            <ServiceCard icon={<Workflow/>} title="Digital Transformation">Modernization of cloud, infrastructure, systems, workflows and service delivery with disciplined execution.</ServiceCard>
            <ServiceCard icon={<ShieldCheck/>} title="Security & Executive Advisory">Cybersecurity, governance, vendor oversight and trusted leadership support for high-impact decisions.</ServiceCard>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container split">
          <div className="outcomePanel">
            <p className="eyebrow">The MarimeTech approach</p>
            <h3>Start with the business constraint.</h3>
            <div className="outcomeFlow">
              <div><span>01</span><strong>Diagnose</strong><small>What is actually slowing performance?</small></div>
              <div><span>02</span><strong>Prioritize</strong><small>What should change first—and why?</small></div>
              <div><span>03</span><strong>Deliver</strong><small>How do we make the improvement stick?</small></div>
            </div>
            <div className="outcomeQuote">“Technology is valuable only when it makes the organization work better.”</div>
          </div>
          <div>
            <p className="eyebrow">Why MarimeTech</p>
            <h2>Technology should make the business work better.</h2>
            <p className="lead muted">Too many organizations buy tools before defining the real problem. We start with the business bottleneck, then build the solution around people, process, risk and technology.</p>
            <ul className="checks">
              <li>Independent, vendor-neutral advice</li>
              <li>Experience across cloud, infrastructure, cybersecurity and enterprise programs</li>
              <li>Practical solutions for growing organizations</li>
              <li>Clear communication from boardroom strategy to implementation detail</li>
            </ul>
          </div>
        </div>
        <div className="container stats">
          <div className="stat"><strong>15+ years</strong><span>Technology and program leadership</span></div>
          <div className="stat"><strong>Multi-sector</strong><span>Experience across complex environments</span></div>
          <div className="stat"><strong>End-to-end</strong><span>From strategy through delivery</span></div>
          <div className="stat"><strong>Business-first</strong><span>Outcomes before tools</span></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">How we work</p>
          <h2>A disciplined path from friction to progress.</h2>
          <div className="grid3" style={{marginTop:42}}>
            <article className="card"><span className="tag">01 · Diagnose</span><h3 style={{marginTop:24}}>Find the real constraint</h3><p>We clarify the problem, business impact, dependencies and risk of doing nothing.</p></article>
            <article className="card"><span className="tag">02 · Design</span><h3 style={{marginTop:24}}>Build the right roadmap</h3><p>We define realistic options, ownership, measures, priorities and the technology approach.</p></article>
            <article className="card"><span className="tag">03 · Deliver</span><h3 style={{marginTop:24}}>Make the change stick</h3><p>We lead execution, governance and adoption so the solution produces measurable value.</p></article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container band">
          <div>
            <p className="eyebrow">Ready to move forward?</p>
            <h2 style={{marginBottom:12}}>Let us identify what is holding your organization back.</h2>
            <p>A focused conversation can reveal whether the real issue is strategy, process, capability, technology, security or execution.</p>
          </div>
          <Link className="btn btnPrimary" href="/contact">Book a conversation</Link>
        </div>
      </section>
    </main>
  );
}
