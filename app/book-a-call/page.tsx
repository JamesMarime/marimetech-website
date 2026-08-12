import type { Metadata } from 'next';
import { CalendarDays, CheckCircle2 } from 'lucide-react';
import TidyCalEmbed from '@/components/TidyCalEmbed';

export const metadata: Metadata = {
  title: 'Book a Call',
  description: 'Book a focused conversation with MarimeTech Solutions to discuss your business, technology, security or digital transformation priorities.',
};

export default function BookACallPage() {
  return (
    <main id="main">
      <section className="pageHero bookingHero">
        <div className="container bookingHeroInner">
          <p className="eyebrow">Book a conversation</p>
          <h1>Let&apos;s talk about your business.</h1>
          <p>
            Choose a convenient time below for a focused conversation about where you are today,
            what you are trying to achieve and whether MarimeTech can help.
          </p>
        </div>
      </section>

      <section className="section bookingSection">
        <div className="container bookingGrid">
          <aside className="bookingIntro">
            <div className="bookingIcon"><CalendarDays size={26} /></div>
            <p className="eyebrow">A focused first conversation</p>
            <h2>Start with the business need.</h2>
            <p className="lead muted">
              This is not a sales presentation. It is an opportunity to understand the challenge,
              the outcome you need and the most sensible next step.
            </p>
            <div className="bookingTopics">
              <div><CheckCircle2 size={19} /><span>Technology strategy &amp; transformation</span></div>
              <div><CheckCircle2 size={19} /><span>Operations &amp; business systems</span></div>
              <div><CheckCircle2 size={19} /><span>Cybersecurity &amp; resilience</span></div>
              <div><CheckCircle2 size={19} /><span>AI &amp; workflow opportunities</span></div>
              <div><CheckCircle2 size={19} /><span>Launching or strengthening your digital presence</span></div>
            </div>
            <p className="bookingNote">Select the meeting option and time that works best for you. You&apos;ll receive the booking confirmation directly from TidyCal.</p>
          </aside>

          <div className="bookingCard">
            <div className="bookingCardHeader">
              <p className="eyebrow">Choose a time</p>
              <h2>Book your conversation</h2>
              <p className="muted">Available times are shown in your local timezone.</p>
            </div>
            <TidyCalEmbed />
          </div>
        </div>
      </section>
    </main>
  );
}
