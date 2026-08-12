import Link from 'next/link';
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Cloud,
  Globe2,
  Laptop,
  Building2,
  LockKeyhole,
  Mail,
  Search,
  Smartphone,
  Wrench
} from 'lucide-react';
import KitSignupForm from '@/components/KitSignupForm';

const included = [
  ['Professional website', 'A modern, mobile-friendly website built around your business.', <Laptop key="i"/>],
  ['Custom domain', 'A professional web address that strengthens your identity.', <Globe2 key="i"/>],
  ['Business email', 'A branded email address using your company domain.', <Mail key="i"/>],
  ['LinkedIn company page', 'A credible company presence where professional customers already spend time.', <Building2 key="i"/>],
  ['SSL security', 'Secure HTTPS encryption from the day your website goes live.', <LockKeyhole key="i"/>],
  ['Mobile responsive design', 'A clean experience across desktop, tablet and mobile.', <Smartphone key="i"/>],
  ['Google search setup', 'The essential setup that helps search engines discover your business.', <Search key="i"/>],
  ['Cloud hosting and deployment', 'Reliable hosting with a modern deployment foundation.', <Cloud key="i"/>],
  ['Technical setup', 'We handle the technical details so you can focus on the business.', <Wrench key="i"/>],
];

export default function LaunchYourBusinessPage() {
  return (
    <main id="main">
      <section className="pageHero launchPageHero">
        <div className="container launchHeroLayout">
          <div>
            <p className="eyebrow">MarimeTech Business Launch</p>
            <h1>Launch Your Business. <span className="gold">Professionally.</span></h1>
            <p>Everything you need to establish a credible, secure online presence—without the technical headaches.</p>
            <div className="actions">
              <Link className="btn btnPrimary" href="/book-a-call"><CalendarDays size={18}/> Book a conversation</Link>
              <a className="btn btnOutlineGold" href="#blueprint">Get the free blueprint <ArrowRight size={18}/></a>
            </div>
          </div>
          <div className="launchPromise">
            <strong>From idea to a professional online presence</strong>
            <span>in days—not weeks.</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionIntro">
            <p className="eyebrow">Everything you need</p>
            <h2>Your first digital foundation, handled properly.</h2>
            <p className="lead muted">Your customers may look you up before they call, email or visit. We help make sure they find a business that looks credible and ready to serve.</p>
          </div>
          <div className="launchIncludedGrid">
            {included.map(([title, text, icon]) => (
              <article className="launchIncludedCard" key={String(title)}>
                <span>{icon}</span><h3>{title}</h3><p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section launchProcessSection">
        <div className="container">
          <div className="centerHeading lightHeading">
            <p className="eyebrow">A clear process</p>
            <h2>From conversation to launch.</h2>
          </div>
          <div className="launchProcess">
            {['Discovery', 'Launch plan', 'Build', 'Review', 'Go live'].map((step, index) => (
              <div className="launchStep" key={step}><span>{String(index + 1).padStart(2,'0')}</span><strong>{step}</strong></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section blueprintSection" id="blueprint">
        <div className="container blueprintGrid">
          <div>
            <p className="eyebrow">Free resource</p>
            <h2>Get the Business Launch Blueprint.</h2>
            <p className="lead muted">Everything you need before your first customer finds you online. Join the list now and we&apos;ll send the blueprint as soon as it is ready.</p>
            <ul className="checks compactChecks">
              <li>Domain and professional email</li>
              <li>Website and mobile readiness</li>
              <li>LinkedIn and Google visibility</li>
              <li>Security and launch essentials</li>
            </ul>
          </div>
          <div className="blueprintFormPanel">
            <p className="eyebrow">Join the list</p>
            <h3>Get My Free Blueprint Now</h3>
            <KitSignupForm />
          </div>
        </div>
      </section>

      <section className="section faqSection">
        <div className="container">
          <div className="centerHeading"><p className="eyebrow">Common questions</p><h2>Before we get started.</h2></div>
          <div className="faqGrid">
            <details><summary>Do I need to own a domain already?</summary><p>No. We can help you choose and register a suitable domain.</p></details>
            <details><summary>Can you work with my existing logo and content?</summary><p>Yes. We can use what you already have and recommend only the improvements that are genuinely needed.</p></details>
            <details><summary>How long will the launch take?</summary><p>The timeline depends on the scope and how quickly content is approved, but the goal is days rather than weeks for a focused launch.</p></details>
            <details><summary>Can MarimeTech support the business after launch?</summary><p>Yes. We can continue helping with security, cloud, AI, transformation and technology advisory as your needs grow.</p></details>
          </div>
        </div>
      </section>

      <section className="conversationCta">
        <div className="container conversationCtaInner">
          <div><h2>Ready to launch professionally?</h2><p>Let&apos;s talk about your business, what is already in place and the fastest practical path forward.</p></div>
          <Link className="btn btnPrimary" href="/book-a-call"><CalendarDays size={18}/> Book a conversation</Link>
        </div>
      </section>
    </main>
  );
}
