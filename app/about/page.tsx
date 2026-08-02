import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, ShieldCheck, UsersRound } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about MarimeTech Solutions Inc., our approach and our leadership.'
};

export default function AboutPage() {
  return (
    <main id="main">
      <section className="pageHero">
        <div className="container">
          <p className="eyebrow">About Us</p>
          <h1>About MarimeTech Solutions Inc.</h1>
          <p>
            MarimeTech Solutions Inc. helps organizations identify and remove business
            bottlenecks through secure technology transformation.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">Who we are</p>
            <h2>The right technology decision starts with the right business question.</h2>
            <p className="lead muted">
              Organizations rarely struggle because they lack another tool. More often,
              the real constraint is unclear strategy, fragmented processes, unmanaged
              risk, poor adoption or a delivery gap.
            </p>
            <p>
              MarimeTech brings together enterprise technology leadership, program
              delivery, cybersecurity, cloud, infrastructure and transformation
              experience to help leaders make better decisions and execute them with confidence.
            </p>
          </div>
          <div className="card">
            <h3>Our mission</h3>
            <p>
              To help organizations remove the bottlenecks that limit performance and
              build stronger foundations for sustainable growth.
            </p>
            <h3 style={{marginTop: 28}}>Our promise</h3>
            <p>
              Practical advice, transparent communication and solutions designed around
              the outcome the business actually needs.
            </p>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <div className="centerHeading">
            <p className="eyebrow">Our approach</p>
            <h2>How We Work</h2>
          </div>
          <div className="approachGrid">
            <article className="approachItem">
              <span className="approachIcon"><UsersRound /></span>
              <h3>Business First</h3>
              <p>
                We begin with your goals, operating reality and the constraint that is
                slowing progress.
              </p>
            </article>
            <article className="approachItem">
              <span className="approachIcon"><ShieldCheck /></span>
              <h3>Secure by Design</h3>
              <p>
                Security is built into every solution from the start—not added as an
                afterthought.
              </p>
            </article>
            <article className="approachItem">
              <span className="approachIcon"><CheckCircle2 /></span>
              <h3>Built for Resilience</h3>
              <p>
                We design technology that is reliable, scalable and ready to support
                your business as it changes.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section leadershipSection">
        <div className="container">
          <div className="sectionIntro">
            <p className="eyebrow">Leadership</p>
            <h2>Experience grounded in delivery, not theory.</h2>
          </div>
          <div className="founderCard leadershipCard">
            <div
              className="founderPortrait founderPhoto"
              role="img"
              aria-label="James Marime, Founder and CEO of MarimeTech Solutions"
            />
            <div className="founderCopy">
              <p className="eyebrow">Founder & CEO</p>
              <h2>James Marime</h2>
              <p>
                James is a technology and transformation leader with more than 15 years
                of experience across cloud, infrastructure, cybersecurity, IT operations
                and enterprise programs.
              </p>
              <p>
                He founded MarimeTech around a simple belief: organizations do not need
                more complexity. They need clarity about what is holding them back and
                disciplined support to fix it.
              </p>
              <div className="actions">
                <Link className="btn btnPrimary" href="/contact">Start a conversation</Link>
                <a
                  className="btn btnGhost"
                  href="https://www.linkedin.com/in/james-marime/"
                  target="_blank"
                  rel="noreferrer"
                >
                  View LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container band">
          <div>
            <p className="eyebrow">Work with us</p>
            <h2 style={{marginBottom: 12}}>Bring us the business problem, not a polished brief.</h2>
            <p>
              We can help frame the challenge, understand the options and determine the
              right next move.
            </p>
          </div>
          <Link className="btn btnPrimary" href="/contact">Book a conversation</Link>
        </div>
      </section>
    </main>
  );
}
