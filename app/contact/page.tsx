'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main id="main">
      <section className="pageHero"><div className="container"><p className="eyebrow">Contact</p><h1>Let us talk about what is slowing the business down.</h1><p>Tell us what is happening, what you have already tried and what success needs to look like.</p></div></section>
      <section className="section soft">
        <div className="container contactGrid">
          <aside className="contactPanel">
            <p className="eyebrow">MarimeTech Solutions Inc.</p>
            <h2 style={{fontSize:'2.2rem'}}>Start with a focused conversation.</h2>
            <p>Whether the challenge is cloud, cybersecurity, systems, delivery, AI, process or technology leadership, the first step is understanding the real constraint.</p>
            <ul className="contactList">
              <li><strong>Email</strong><a href="mailto:info@marimetechsolutions.com">info@marimetechsolutions.com</a></li>
              <li><strong>Website</strong><a href="https://marimetechsolutions.com">marimetechsolutions.com</a></li>
              <li><strong>Location</strong>Toronto, Ontario, Canada</li>
            </ul>
          </aside>
          <div className="formCard">
            <h2 style={{fontSize:'2.2rem'}}>Tell us about your challenge</h2>
            <p className="muted">This form is configured for direct submissions through Netlify Forms.</p>
            {submitted ? (
              <div className="serviceBlock"><h3>Thank you.</h3><p>Your message has been submitted. MarimeTech will follow up using the email address you provided.</p></div>
            ) : (
              <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={() => setSubmitted(true)}>
                <input type="hidden" name="form-name" value="contact" />
                <p style={{display:'none'}}><label>Do not fill this out: <input name="bot-field" /></label></p>
                <div className="formGrid">
                  <div className="field"><label htmlFor="name">Name *</label><input id="name" name="name" required /></div>
                  <div className="field"><label htmlFor="email">Email *</label><input id="email" name="email" type="email" required /></div>
                  <div className="field"><label htmlFor="company">Company</label><input id="company" name="company" /></div>
                  <div className="field"><label htmlFor="service">Area of interest *</label><select id="service" name="service" required><option value="">Choose one</option><option>Technology or AI Strategy</option><option>Digital Transformation</option><option>Cloud or Infrastructure</option><option>Cybersecurity and Governance</option><option>Program Delivery or PMO</option><option>Executive Advisory</option><option>Other</option></select></div>
                  <div className="field fieldFull"><label htmlFor="message">What challenge are you trying to solve? *</label><textarea id="message" name="message" required /></div>
                  <div className="field fieldFull"><button className="btn btnDark" type="submit">Send enquiry</button><p className="note">Netlify will store submissions in your site dashboard and can send email notifications.</p></div>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
