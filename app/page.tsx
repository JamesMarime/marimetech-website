import Link from 'next/link';
import {
  ArrowRight, CalendarDays, CheckCircle2, Gauge, Search, ShieldCheck,
  Sparkles, TrendingUp, Workflow, Globe2, LockKeyhole, Bot, CloudCog
} from 'lucide-react';

const steps = [
  { n:'01', icon: Search, title:'Find the Friction', text:'We look beyond symptoms to identify the process, technology and operational constraints slowing the business down.' },
  { n:'02', icon: Gauge, title:'Measure the Impact', text:'We quantify what the constraint is costing in time, money, capacity, risk or missed opportunity.' },
  { n:'03', icon: Workflow, title:'Fix What Matters', text:'We apply the right solution — technology, automation, security, process redesign or digital experience.' },
  { n:'04', icon: TrendingUp, title:'Grow', text:'We build for adoption, resilience and scale so the improvement keeps creating value after launch.' },
];

const capabilities = [
  { icon: Globe2, title:'Digital Presence', text:'Web experiences that make your business look as credible as the company you have become.', href:'/launch-your-business' },
  { icon: Bot, title:'AI & Automation', text:'Practical workflows that remove repetitive work and give teams back capacity.', href:'/services' },
  { icon: LockKeyhole, title:'Security', text:'Security foundations that protect your people, systems and growth.', href:'/services' },
  { icon: CloudCog, title:'Technology Transformation', text:'Modernize infrastructure, systems and operations without losing sight of the business outcome.', href:'/services' },
];

export default function Home() {
  return (
    <main id="main" className="signatureHome">
      <section className="signatureHero">
        <div className="heroTexture" aria-hidden="true" />
        <div className="container signatureHeroGrid">
          <div className="signatureHeroCopy">
            <p className="eyebrow">Technology strategy · transformation · growth</p>
            <h1>Your business<br/>can do <span>more.</span></h1>
            <p className="signatureKicker">We find what&apos;s holding it back.</p>
            <p className="lead">MarimeTech identifies the technology, process and operational constraints costing your business <strong>time, money, capacity and opportunity</strong> — then implements practical solutions to remove them.</p>
            <div className="actions">
              <Link className="btn btnPrimary signatureBtn" href="/book-a-call"><CalendarDays size={18}/> Book a conversation</Link>
              <a className="btn signatureGhost signatureBtn" href="#method">See how we work <ArrowRight size={18}/></a>
            </div>
            <div className="heroTrustLine"><CheckCircle2 size={17}/> Business first <span/> <CheckCircle2 size={17}/> Secure by design <span/> <CheckCircle2 size={17}/> Built for measurable outcomes</div>
          </div>

          <div className="signatureHeroVisual" aria-label="MarimeTech business transformation framework">
            <div className="visualHalo" />
            <div className="visualCard visualCardMain">
              <div className="visualCardTop"><Sparkles size={18}/><span>THE MARIMETECH METHOD</span></div>
              <div className="visualStatement">Don&apos;t start with the tool.<br/><strong>Start with the constraint.</strong></div>
              <div className="visualFlow">
                <div><span>01</span><b>Find</b><small>the friction</small></div>
                <ArrowRight/>
                <div><span>02</span><b>Measure</b><small>the impact</small></div>
                <ArrowRight/>
                <div><span>03</span><b>Fix</b><small>what matters</small></div>
                <ArrowRight/>
                <div><span>04</span><b>Grow</b><small>with confidence</small></div>
              </div>
            </div>
            <div className="floatingProof proofOne"><strong>15+ years</strong><span>technology leadership</span></div>
            <div className="floatingProof proofTwo"><ShieldCheck/><span>Strategy to execution</span></div>
          </div>
        </div>
      </section>

      <section className="signatureProofBar">
        <div className="container signatureProofGrid">
          <div><strong>15+</strong><span>Years leading technology & transformation</span></div>
          <div><strong>Business-first</strong><span>Technology follows the problem</span></div>
          <div><strong>End-to-end</strong><span>From diagnosis to implementation</span></div>
          <div><strong>Secure</strong><span>Resilience built into every solution</span></div>
        </div>
      </section>

      <section className="signatureIntro section">
        <div className="container signatureIntroGrid">
          <div><p className="eyebrow">A different starting point</p><h2>Technology isn&apos;t the strategy.<br/><span className="goldText">Better business is.</span></h2></div>
          <div className="signatureIntroCopy"><p className="lead">Most businesses don&apos;t need more technology. They need clarity about what is actually getting in the way.</p><p>That constraint might be a manual process, an outdated website, disconnected systems, a security gap, poor visibility into data, or infrastructure that can no longer support growth. We diagnose first — then choose the right intervention.</p></div>
        </div>
      </section>

      <section className="methodSection section" id="method">
        <div className="container">
          <div className="methodHeading"><div><p className="eyebrow">Our approach</p><h2>Find the friction.<br/>Fix what matters.</h2></div><p>One disciplined path from business problem to measurable improvement.</p></div>
          <div className="methodGrid">
            {steps.map(({n,icon:Icon,title,text}) => <article className="methodCard" key={n}><div className="methodNumber">{n}</div><Icon/><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="capabilitiesSection section">
        <div className="container">
          <div className="capabilitiesHeading"><p className="eyebrow">What we can deploy</p><h2>The right capability for the constraint.</h2><p>We don&apos;t force every problem into the same solution. MarimeTech brings together the capabilities needed to move the business forward.</p></div>
          <div className="capabilitiesGrid">
            {capabilities.map(({icon:Icon,title,text,href}) => <article className="capabilityCard" key={title}><div className="capabilityCardIcon"><Icon/></div><h3>{title}</h3><p>{text}</p><Link href={href}>Explore <ArrowRight size={16}/></Link></article>)}
          </div>
        </div>
      </section>

      <section className="signatureCta">
        <div className="container signatureCtaInner">
          <div><p className="eyebrow">Start with the problem</p><h2>What&apos;s holding your business back?</h2><p>Bring us the challenge. We&apos;ll help you understand the constraint, the impact and the smartest path forward.</p></div>
          <Link className="btn btnPrimary signatureBtn" href="/book-a-call"><CalendarDays size={18}/> Book a conversation</Link>
        </div>
      </section>
    </main>
  );
}
