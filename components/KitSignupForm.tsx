'use client';

import { FormEvent, useState } from 'react';

export default function KitSignupForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(_event: FormEvent<HTMLFormElement>) {
    window.setTimeout(() => setSubmitted(true), 500);
  }

  if (submitted) {
    return (
      <div className="kitSuccess" role="status">
        <strong>You&apos;re almost there.</strong>
        <span>Check your inbox and confirm your email address. Please also check your spam or junk folder.</span>
      </div>
    );
  }

  return (
    <>
      <iframe className="kitSubmissionFrame" name="kit-submission-frame" title="Kit form response" />
      <form
        className="kitCustomForm"
        action="https://app.kit.com/forms/9756226/subscriptions"
        method="post"
        target="kit-submission-frame"
        onSubmit={handleSubmit}
      >
        <label htmlFor="blueprint-email">Business email address</label>
        <div className="kitFormRow">
          <input
            id="blueprint-email"
            name="email_address"
            type="email"
            required
            autoComplete="email"
            placeholder="you@yourcompany.com"
          />
          <button className="btn btnPrimary kitSubmit" type="submit">Get My Free Blueprint Now</button>
        </div>
        <p className="kitFinePrint">You&apos;ll receive one confirmation email. Unsubscribe anytime.</p>
        <a className="kitCredit" href="https://kit.com/features/forms" target="_blank" rel="nofollow noopener">Built with Kit</a>
      </form>
    </>
  );
}
