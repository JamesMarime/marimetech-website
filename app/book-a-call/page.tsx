import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Book a Call',
  description: 'Book a focused conversation with MarimeTech Solutions to discuss your business, technology, security or digital transformation priorities.',
};

export default function BookACallPage() {
  return (
    <main id="main">
      <section className="bookingLanding">
        <div className="container bookingLandingInner">
          <p className="bookingKicker">MARIMETECH SOLUTIONS INC.</p>
          <h1>Let&apos;s talk about what your business needs next.</h1>
          <p className="bookingLead">
            A focused conversation to understand where you are today, what you are trying to achieve,
            and whether MarimeTech can help you move forward securely and practically.
          </p>

          <a
            className="bookingPrimaryButton"
            href="https://tidycal.com/1d4rvwj"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Your Call <ArrowRight size={20} />
          </a>

          <div className="bookingLandingTopics" aria-label="Topics we can discuss">
            <span><CheckCircle2 size={17} /> Technology &amp; Transformation</span>
            <span><CheckCircle2 size={17} /> Operations &amp; Business Systems</span>
            <span><CheckCircle2 size={17} /> Cybersecurity &amp; Resilience</span>
            <span><CheckCircle2 size={17} /> AI &amp; Workflow Opportunities</span>
          </div>

          <p className="bookingMicrocopy">No obligation. Just a practical first conversation.</p>
        </div>
      </section>
    </main>
  );
}
