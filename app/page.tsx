import Link from 'next/link';
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Focus,
  Gauge,
  Rocket,
  ShieldCheck,
  UsersRound,
  Workflow
} from 'lucide-react';


export default function Home() {
  return (
    <main id="main">
      <section className="hero premiumHero">
        <div className="container premiumHeroGrid">
          <div className="premiumHeroCopy">
            <p className="eyebrow heroDescriptor">Technology strategy · Transformation · Executive advisory</p>
            <h1>Leverage.<br/>Technology.<br/><span className="gold">Transform.<br/>Grow.</span></h1>
            <div className="heroGoldRule" />
            <p className="lead heroStatement">
              Helping organizations identify and remove business bottlenecks through <strong>secure</strong> technology transformation.
            </p>
            <div className="actions premiumHeroActions">
              <Link className="btn btnPrimary" href="/book-a-call"><CalendarDays size={18}/> Book a conversation</Link>
              <Link className="btn btnOutlineGold" href="/services">Explore our solutions <ArrowRight size={18}/></Link>
            </div>
          </div>

          <div className="heroCapabilitiesVisual">
            <img
              src="/marimetech-capabilities.webp"
              alt="MarimeTech capabilities: Strategy, Transformation, Operations, Data and AI, Security, and Growth"
              width="1400"
              height="933"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section className="credibilityBar premiumCredibility">
        <div className="container credibilityGrid">
          <div className="credibilityItem"><ShieldCheck/><strong>15+</strong><span>Years of experience</span></div>
          <div className="credibilityItem"><UsersRound/><strong>Enterprise experience</strong><span>Across industries</span></div>
          <div className="credibilityItem"><Focus/><strong>Focused on results</strong><span>Not just projects</span></div>
          <div className="credibilityItem"><Gauge/><strong>Transform. Grow. Scale.</strong><span>Built for what comes next</span></div>
        </div>
      </section>

      <section className="section approachSection">
        <div className="container">
          <div className="centerHeading">
            <p className="eyebrow">Our approach</p>
            <h2>How We Work</h2>
          </div>
          <div className="approachGrid">
            <article className="approachItem">
              <span className="approachIcon"><UsersRound/></span>
              <h3>Business First</h3>
              <p>We start with your business goals, identify what is slowing you down, and deliver technology that creates measurable value.</p>
            </article>
            <article className="approachItem">
              <span className="approachIcon"><ShieldCheck/></span>
              <h3>Secure by Design</h3>
              <p>Security is built into every solution from the start—not added as an afterthought.</p>
            </article>
            <article className="approachItem">
              <span className="approachIcon"><CheckCircle2/></span>
              <h3>Built for Resilience</h3>
              <p>We design technology that is reliable, scalable, and ready to support your business as it grows and changes.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section solutionPreviewSection">
        <div className="container">
          <div className="centerHeading lightHeading">
            <p className="eyebrow">What we do</p>
            <h2>Solutions That Drive Results</h2>
          </div>
          <div className="solutionPreviewGrid">
            <article className="solutionPreviewCard">
              <Rocket/><h3>Launch</h3>
              <p>Build a professional online presence that inspires confidence from day one.</p>
              <Link href="/launch-your-business">Learn more <ArrowRight size={16}/></Link>
            </article>
            <article className="solutionPreviewCard">
              <Workflow/><h3>Transform</h3>
              <p>Modernize systems and processes to remove bottlenecks and improve efficiency.</p>
              <Link href="/services">Learn more <ArrowRight size={16}/></Link>
            </article>
            <article className="solutionPreviewCard">
              <ShieldCheck/><h3>Secure</h3>
              <p>Strengthen your security posture and protect what matters most.</p>
              <Link href="/services">Learn more <ArrowRight size={16}/></Link>
            </article>
          </div>
        </div>
      </section>

      <section className="conversationCta">
        <div className="container conversationCtaInner">
          <div>
            <h2>Ready to move your business forward?</h2>
            <p>Let&apos;s start with a conversation about your goals, your challenges, and the technology that can help remove the bottlenecks holding you back.</p>
          </div>
          <Link className="btn btnPrimary" href="/book-a-call"><CalendarDays size={18}/> Book a conversation</Link>
        </div>
      </section>
    </main>
  );
}
