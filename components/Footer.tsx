import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer referenceFooter">
      <div className="container referenceFooterGrid">
        <div className="referenceFooterBrand">
          <img src="/marimetech-header-logo.png" alt="MarimeTech Solutions Inc." />
          <p>Innovate. Automate. Grow.</p>
          <small>Technology should solve the constraint — not become another one.</small>
        </div>
        <div>
          <h3>Company</h3>
          <ul>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/#experience">Our Work</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3>Services</h3>
          <ul>
            <li><Link href="/launch-your-business">Digital Presence</Link></li>
            <li><Link href="/services">AI & Automation</Link></li>
            <li><Link href="/services">Cybersecurity</Link></li>
            <li><Link href="/services">Technology Transformation</Link></li>
          </ul>
        </div>
        <div>
          <h3>Resources</h3>
          <ul>
            <li><Link href="/insights">Insights</Link></li>
            <li><Link href="/insights">Blueprint</Link></li>
          </ul>
        </div>
        <div>
          <h3>Let&apos;s Connect</h3>
          <ul>
            <li><a href="mailto:info@marimetechsolutions.com">Email us</a></li>
            <li><a href="https://www.linkedin.com/in/james-marime/" target="_blank" rel="noreferrer">LinkedIn</a></li>
          </ul>
          <Link className="referenceFooterCta" href="/book-a-call">Book a Call <ArrowRight size={14}/></Link>
        </div>
      </div>
      <div className="container referenceFooterBottom">
        <span>© 2026 MarimeTech Solutions Inc. All rights reserved.</span>
        <span>Toronto, Ontario, Canada</span>
      </div>
    </footer>
  );
}
