import Link from 'next/link';
import {
  ArrowRight,
  CalendarDays,
  Search,
  BarChart3,
  Wrench,
  TrendingUp,
  Monitor,
  Bot,
  ShieldCheck,
  CloudCog,
  Headphones,
  Users,
  CheckCircle2,
  Layers3,
  BriefcaseBusiness,
  TimerReset,
  Server,
  LockKeyhole,
} from 'lucide-react';

const methodology = [
  {
    n: '01',
    icon: Search,
    title: 'Find the Friction',
    text: 'We uncover the hidden constraints slowing your business down.',
  },
  {
    n: '02',
    icon: BarChart3,
    title: 'Measure the Impact',
    text: 'We quantify the cost so you can see exactly what the constraint is costing you.',
  },
  {
    n: '03',
    icon: Wrench,
    title: 'Fix What Matters',
    text: 'We implement the right technology, process or strategy to remove the constraint.',
  },
  {
    n: '04',
    icon: TrendingUp,
    title: 'Grow',
    text: 'With the friction removed, your business operates better, scales faster and grows smarter.',
  },
];

const solutions = [
  {
    icon: Monitor,
    title: 'Digital Presence',
    text: 'Websites and digital experiences that build credibility and turn attention into action.',
    href: '/launch-your-business',
  },
  {
    icon: Bot,
    title: 'AI & Automation',
    text: 'Automate workflows, eliminate manual work and unlock productivity with practical AI.',
    href: '/services',
  },
  {
    icon: ShieldCheck,
    title: 'Cybersecurity',
    text: 'Protect your business, your data and your customers with resilient, layered security.',
    href: '/services',
  },
  {
    icon: CloudCog,
    title: 'Technology Transformation',
    text: 'Modernize systems, migrate to the cloud and build a future-ready technology foundation.',
    href: '/services',
  },
  {
    icon: Headphones,
    title: 'IT Support',
    text: 'Reliable support that keeps your systems running and your team productive.',
    href: '/services',
  },
  {
    icon: Users,
    title: 'Tech Consultancy',
    text: 'Expert guidance to make better technology decisions and invest where it truly matters.',
    href: '/services',
  },
];

const experience = [
  {
    icon: Server,
    tag: 'Infrastructure Transformation',
    title: 'Data Center Relocation',
    text: '$10.5M enterprise relocation delivered with minimal business disruption.',
  },
  {
    icon: CloudCog,
    tag: 'Cloud Transformation',
    title: 'Azure Migration',
    text: 'Large-scale cloud migration that reduced downtime and improved operational resilience.',
  },
  {
    icon: LockKeyhole,
    tag: 'Cyber Resilience',
    title: 'Ransomware Recovery',
    text: 'Coordinated recovery and restoration across dozens of affected customer environments.',
  },
];

export default function Home() {
  return (
    <main id="main" className="referenceHome">
      <section className="referenceHero">
        <div className="referenceHeroGlow" aria-hidden="true" />
        <div className="container referenceHeroGrid">
          <div className="referenceHeroCopy">
            <p className="referenceEyebrow">Your business can do more.</p>
            <h1>
              We find what&apos;s<br />
              holding <span>you back.</span>
            </h1>
            <p className="referenceHeroLead">
              We identify the technology, process and operational constraints costing you time,
              money and growth — and implement solutions that remove them.
            </p>
            <div className="referenceHeroActions">
              <Link className="referenceBtn referenceBtnGold" href="/book-a-call">
                Book a Free Consultation <ArrowRight size={17} />
              </Link>
              <a className="referenceBtn referenceBtnOutline" href="#solutions">
                Explore Our Services <ArrowRight size={17} />
              </a>
            </div>
            <a className="referenceTextAction" href="#methodology">
              <span className="referencePlay">▶</span>
              See how we help businesses grow
            </a>
          </div>

          <div className="referenceHeroVisual" aria-label="MarimeTech leadership">
            <div className="referencePortrait" />
            <div className="referencePortraitShade" aria-hidden="true" />
            <div className="referenceHeroLogoChip">
              <img src="/marimetech-icon.png" alt="" aria-hidden="true" />
            </div>
          </div>
        </div>

        <div className="container referenceStatsWrap">
          <div className="referenceStats">
            <div className="referenceStat">
              <TrendingUp />
              <strong>75+</strong>
              <span>Projects Delivered</span>
            </div>
            <div className="referenceStat">
              <BriefcaseBusiness />
              <strong>15+</strong>
              <span>Years of Experience</span>
            </div>
            <div className="referenceStat">
              <Layers3 />
              <strong>End-to-End</strong>
              <span>Strategy to Execution</span>
            </div>
            <div className="referenceStat">
              <CheckCircle2 />
              <strong>Business-First</strong>
              <span>Problem Before Tool</span>
            </div>
          </div>
        </div>
      </section>

      <section className="referenceMethod" id="methodology">
        <div className="container">
          <div className="referenceSectionHeading referenceSectionHeadingDark">
            <p>Our Methodology</p>
            <h2>From Friction to Growth.</h2>
          </div>
          <div className="referenceMethodGrid">
            {methodology.map(({ n, icon: Icon, title, text }, index) => (
              <article className="referenceMethodStep" key={n}>
                <span className="referenceMethodNumber">{n}</span>
                <div className="referenceMethodIcon"><Icon /></div>
                {index < methodology.length - 1 && <div className="referenceMethodArrow">→</div>}
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="referenceSolutions" id="solutions">
        <div className="container">
          <div className="referenceSectionHeading">
            <p>Solutions That Drive Results</p>
            <h2>The Right Solutions. The Right Impact.</h2>
          </div>
          <div className="referenceSolutionsGrid">
            {solutions.map(({ icon: Icon, title, text, href }) => (
              <article className="referenceSolutionCard" key={title}>
                <div className="referenceSolutionIcon"><Icon /></div>
                <h3>{title}</h3>
                <p>{text}</p>
                <Link href={href}>Learn more <ArrowRight size={14} /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="referenceWork" id="experience">
        <div className="container">
          <div className="referenceWorkHeading">
            <div>
              <p>Real Problems. Real Results.</p>
              <h2>Experience That Makes a Difference.</h2>
            </div>
            <Link className="referenceBtn referenceBtnOutline referenceSmallBtn" href="/about">
              See Our Experience <ArrowRight size={15} />
            </Link>
          </div>
          <div className="referenceWorkGrid">
            {experience.map(({ icon: Icon, tag, title, text }, index) => (
              <article className={`referenceWorkCard referenceWorkCard${index + 1}`} key={title}>
                <div className="referenceWorkOverlay" />
                <div className="referenceWorkContent">
                  <span className="referenceWorkTag">{tag}</span>
                  <Icon className="referenceWorkIcon" />
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <Link href="/about">Learn more <ArrowRight size={14} /></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="referenceCta">
        <div className="container referenceCtaGrid">
          <div>
            <h2>Ready to remove what&apos;s<br />holding your business <span>back?</span></h2>
            <p>Let&apos;s find the friction and unlock your next level of growth.</p>
          </div>
          <div className="referenceCtaAction">
            <Link className="referenceBtn referenceBtnGold referenceCtaButton" href="/book-a-call">
              <CalendarDays size={17} /> Book a Free Consultation <ArrowRight size={17} />
            </Link>
            <div className="referenceCtaTrust">
              <span><CheckCircle2 /> No obligation</span>
              <span><CheckCircle2 /> Expert advice</span>
              <span><CheckCircle2 /> Clear next steps</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
