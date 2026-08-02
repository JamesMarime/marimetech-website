import Link from 'next/link';
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  CalendarDays,
  CheckCircle2,
  Focus,
  ShieldCheck,
  UsersRound,
  Workflow
} from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';

export default function Home() {
  return (
    <main id="main">
      <section className="hero launchHero">
        <div className="launchNetwork" aria-hidden="true">
          <span className="networkOrb networkOrbOne" />
          <span className="networkOrb networkOrbTwo" />
          <span className="networkOrb networkOrbThree" />
          <span className="networkOrb networkOrbFour" />
          <span className="networkLine networkLineOne" />
          <span className="networkLine networkLineTwo" />
          <span className="networkLine networkLineThree" />
          <span className="networkLine networkLineFour" />
        </div>

        <div className="container launchHeroInner">
          <div className="launchHeroCopy">
            <p className="eyebrow launchEyebrow">Technology strategy · Transformation · Executive advisory</p>
            <h1>
              Leverage.<br />
              Technology.<br />
              <span className="gold">Transform.<br />Grow.</span>
            </h1>
            <div className="launchRule" />
            <p className="lead">
              We help growing organizations remove operational bottlenecks through
              <strong> technology, AI</strong> and transformation.
            </p>
            <div className="actions launchActions">
              <Link className="btn btnPrimary launchPrimary" href="/contact">
                <CalendarDays size={19}/> Book a strategy call
              </Link>
              <Link className="btn btnGhost launchSecondary" href="/services">
                Explore our services <ArrowRight size={18}/>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="credibilityBar">
        <div className="container credibilityGrid">
          <div className="credibilityItem">
            <ShieldCheck />
            <strong>15+</strong>
            <span>Years of experience</span>
          </div>
          <div className="credibilityItem">
            <UsersRound />
            <strong>Enterprise experience</strong>
            <span>Across industries</span>
          </div>
          <div className="credibilityItem">
            <Focus />
            <strong>Focused on results</strong>
            <span>Not just projects</span>
          </div>
          <div className="credibilityItem">
            <BarChart3 />
            <strong>Transform. Grow. Scale.</strong>
            <span>Built for what comes next</span>
          </div>
        </div>
      </section>

      <section className="section whoWeHelp">
        <div className="container whoGrid">
          <div>
            <p className="eyebrow">Who we help</p>
            <h2>Organizations with complex challenges.</h2>
          </div>
          <div>
            <p className="lead muted">
              We partner with founders, executives and operational leaders who are ready
              to remove bottlenecks, strengthen their technology foundation and unlock growth.
            </p>
            <ul className="checks">
              <li>Growing organizations facing operational friction</li>
              <li>Leaders modernizing systems, cloud or infrastructure</li>
              <li>Teams introducing AI with clear governance and purpose</li>
              <li>Businesses needing experienced technology leadership</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <p className="eyebrow">What we do</p>
          <h2>Clarity before complexity.</h2>
          <p className="lead muted" style={{maxWidth:780}}>
            We connect business priorities, operating realities and technology decisions
            so leaders can invest with confidence and deliver change that lasts.
          </p>
          <div className="grid3" style={{marginTop:42}}>
            <ServiceCard icon={<BrainCircuit/>} title="Technology & AI Strategy">
              Practical roadmaps that connect business priorities to the right technology,
              operating model and investment sequence.
            </ServiceCard>
            <ServiceCard icon={<Workflow/>} title="Digital Transformation">
              Modernization of cloud, infrastructure, systems, workflows and service delivery
              with disciplined execution.
            </ServiceCard>
            <ServiceCard icon={<ShieldCheck/>} title="Security & Executive Advisory">
              Cybersecurity, governance, vendor oversight and trusted leadership support for
              high-impact decisions.
            </ServiceCard>
          </div>
        </div>
      </section>

      <section className="section">
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
            <p className="lead muted">
              Too many organizations buy tools before defining the real problem.
              We start with the business bottleneck, then build the solution around
              people, process, risk and technology.
            </p>
            <ul className="checks">
              <li>Independent, vendor-neutral advice</li>
              <li>Experience across cloud, infrastructure, cybersecurity and enterprise programs</li>
              <li>Practical solutions for growing organizations</li>
              <li>Clear communication from boardroom strategy to implementation detail</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container band">
          <div>
            <p className="eyebrow">Ready to move forward?</p>
            <h2 style={{marginBottom:12}}>Let us identify what is holding your organization back.</h2>
            <p>
              A focused conversation can reveal whether the real issue is strategy,
              process, capability, technology, security or execution.
            </p>
          </div>
          <Link className="btn btnPrimary" href="/contact">Book a conversation</Link>
        </div>
      </section>
    </main>
  );
}
