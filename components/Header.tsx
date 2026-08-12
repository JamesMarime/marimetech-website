'use client';

import Link from 'next/link';
import { useState } from 'react';
import { CalendarDays } from 'lucide-react';

const links = [
  ['/', 'Home'],
  ['/launch-your-business', 'Launch Your Business'],
  ['/services', 'Solutions'],
  ['/about', 'About Us'],
  ['/insights', 'Insights'],
  ['/contact', 'Contact'],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="header premiumHeader">
        <div className="container navbar premiumNavbar">
          <Link href="/" className="brand brandLockup" aria-label="MarimeTech Solutions Inc. home">
            <img className="markOnlyLogo" src="/marimetech-icon.png" alt="" aria-hidden="true" />
            <span className="brandWordmark">
              <strong>MARIMETECH</strong>
              <small>Solutions Inc.</small>
            </span>
          </Link>
          <button className="navToggle" aria-expanded={open} aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
            <span></span><span></span><span></span>
          </button>
          <nav className={`navLinks premiumNavLinks ${open ? 'open' : ''}`} aria-label="Primary navigation">
            {links.map(([href,label]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
            <Link className="btn btnOutlineGold navCta" href="/book-a-call" onClick={() => setOpen(false)}>
              <CalendarDays size={17}/> Book a conversation
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
