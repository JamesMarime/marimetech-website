'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const links = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/services', 'Services'],
  ['/#experience', 'Our Work'],
  ['/insights', 'Resources'],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="header referenceHeader">
        <div className="container navbar referenceNavbar">
          <Link href="/" className="referenceBrand" aria-label="MarimeTech Solutions Inc. home">
            <img src="/marimetech-header-logo.png" alt="MarimeTech Solutions Inc." />
          </Link>
          <button className="navToggle" aria-expanded={open} aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
            <span></span><span></span><span></span>
          </button>
          <nav className={`navLinks referenceNavLinks ${open ? 'open' : ''}`} aria-label="Primary navigation">
            {links.map(([href, label]) => (
              <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>
            ))}
            <Link className="referenceNavCta" href="/book-a-call" onClick={() => setOpen(false)}>
              Book a Call <ArrowRight size={15} />
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
