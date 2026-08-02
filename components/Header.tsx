'use client';

import Link from 'next/link';
import { useState } from 'react';

const links = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/services', 'Services'],
  ['/founder', 'Founder'],
  ['/contact', 'Contact'],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="header">
        <div className="container navbar">
          <Link href="/" className="brand" aria-label="MarimeTech Solutions home">
            <span className="brandMark">M</span>
            <span className="brandText">MARIMETECH <small>SOLUTIONS INC.</small></span>
          </Link>
          <button className="navToggle" aria-expanded={open} aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
            <span></span><span></span><span></span>
          </button>
          <nav className={`navLinks ${open ? 'open' : ''}`} aria-label="Primary navigation">
            {links.map(([href,label]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
            <Link className="btn btnPrimary" href="/contact" onClick={() => setOpen(false)}>Book a conversation</Link>
          </nav>
        </div>
      </header>
    </>
  );
}
