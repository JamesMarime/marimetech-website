import Link from 'next/link';
import { ArrowRight, CalendarDays, CheckCircle2, Cloud, Headphones, Rocket, ShieldCheck, Sparkles, Users, Server, Globe2, HeartHandshake } from 'lucide-react';

const services = [
  {icon: Rocket, title:'Launch Your Business', text:'Website, domain, professional email and the essential technology setup to get you started right.', href:'/launch-your-business'},
  {icon: Headphones, title:'Managed IT & Support', text:'Day-to-day IT management, device and user support, Microsoft 365 and vendor coordination.', href:'/services'},
  {icon: Cloud, title:'Cloud & Modern Workplace', text:'Cloud migrations, infrastructure modernization and collaboration tools that help you work smarter.', href:'/services'},
  {icon: ShieldCheck, title:'Cybersecurity & Resilience', text:'Protect your business with stronger security, identity management and disaster recovery.', href:'/services'},
  {icon: Sparkles, title:'Digital Transformation & AI', text:'Process improvement, automation and AI-enabled solutions for measurable business value.', href:'/services'},
  {icon: Users, title:'Technology Strategy & Advisory', text:'Fractional CIO/CTO, roadmaps and executive guidance to help you make the right decisions.', href:'/services'},
];

const work = [
  {icon: Server, kicker:'Infrastructure Modernization', title:'Enterprise infrastructure, delivered with control.', text:'Data centre relocation, cloud migration and resilient technology foundations for growing organizations.'},
  {icon: Globe2, kicker:'Digital Presence & Web Platforms', title:'Digital experiences that earn attention and trust.', text:'Modern websites and digital platforms built to tell your story, work beautifully on mobile and support growth.'},
  {icon: HeartHandshake, kicker:'Mission-Driven Organizations', title:'Technology that helps teams do more good.', text:'Secure, practical modernization for non-profits and community organizations working with real-world constraints.'},
  {icon: Headphones, kicker:'Growing Businesses', title:'A technology partner as you scale.', text:'Ongoing support, security and strategic guidance without the overhead of building a full internal IT function.'},
];

export default function Home() {
  return <main id="main" className="mtHome">
    <section className="mtHero">
      <div className="mtHeroPhoto" aria-hidden="true" />
      <div className="container mtHeroInner">
        <div className="mtHeroCopy">
          <p className="mtKicker">Technology transformation for growing organizations</p>
          <h1>Technology that<br/>moves you <span>forward.</span></h1>
          <p className="mtHeroLead">Practical, secure and scalable solutions to help you start, grow and build a stronger tomorrow.</p>
          <div className="mtActions"><Link href="/book-a-call" className="mtBtn mtBtnPrimary">Book a Conversation <ArrowRight size={17}/></Link><a href="#services" className="mtBtn mtBtnGhost">Explore Our Services</a></div>
        </div>
      </div>
      <div className="container mtTrustStrip"><span><CheckCircle2/> Trusted partner for growing businesses</span><span><ShieldCheck/> Secure, reliable and future-ready</span><span><Sparkles/> From ideas to real impact</span></div>
    </section>

    <section className="mtSection" id="services"><div className="container">
      <div className="mtSectionHead"><div><p className="mtKicker">Our services</p><h2>Complete technology support.<br/>At every stage of your journey.</h2></div><p>Whether you’re launching a new business, modernizing your infrastructure or looking for a long-term technology partner, MarimeTech delivers practical, secure and scalable solutions.</p></div>
      <div className="mtServiceGrid">{services.map(({icon:Icon,title,text,href})=><article className="mtServiceCard" key={title}><div className="mtServiceIcon"><Icon/></div><h3>{title}</h3><p>{text}</p><Link href={href}>Learn more <ArrowRight size={14}/></Link></article>)}</div>
    </div></section>

    <section className="mtPartner"><div className="container mtPartnerGrid">
      <div className="mtPartnerCopy"><p className="mtKicker">About MarimeTech</p><h2>More than IT services.<br/>A long-term partner.</h2><p>We help organizations leverage technology to operate more efficiently, securely and competitively. We combine real-world experience with practical solutions designed to create lasting value.</p><Link href="/about" className="mtBtn mtBtnPrimary">Our Story <ArrowRight size={16}/></Link><div className="mtNumbers"><div><strong>15+</strong><span>Years experience</span></div><div><strong>75+</strong><span>Projects delivered</span></div><div><strong>End-to-end</strong><span>Strategy to execution</span></div></div></div>
      <div className="mtPartnerVisual"><img src="/marimetech-capabilities.webp" alt="MarimeTech technology capabilities: strategy, transformation, data and AI, growth, security and operations"/></div>
    </div></section>

    <section className="mtSection mtWork"><div className="container"><div className="mtSectionHead mtWorkHead"><div><p className="mtKicker">Selected work</p><h2>Real organizations. Real outcomes.</h2></div><Link href="/about">See our experience <ArrowRight size={14}/></Link></div><div className="mtWorkGrid">{work.map(({icon:Icon,kicker,title,text})=><article className="mtWorkCard" key={kicker}><div className="mtWorkImage"><Icon/></div><p className="mtWorkKicker">{kicker}</p><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="mtQuote"><div className="container"><blockquote>“Practical technology. Clear decisions. A partner focused on what your organization actually needs.”</blockquote></div></section>

    <section className="mtFinalCta"><div className="container mtFinalInner"><div><p className="mtKicker mtKickerLight">Let’s talk</p><h2>A better, more capable tomorrow<br/>starts with a conversation.</h2></div><div><Link href="/book-a-call" className="mtBtn mtBtnLight"><CalendarDays size={17}/> Book a Conversation <ArrowRight size={17}/></Link><p>No pressure. Just a conversation about your goals.</p></div></div></section>
  </main>
}
