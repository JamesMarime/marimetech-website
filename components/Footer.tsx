import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footerGrid">
          <div>
            <Link href="/" className="brand">
              <span className="brandMark">M</span>
              <span className="brandText">MARIMETECH <small>SOLUTIONS INC.</small></span>
            </Link>
            <p style={{maxWidth:520, marginTop:18}}>Helping organizations remove bottlenecks, modernize technology, strengthen security and scale with confidence.</p>
          </div>
          <div>
            <h3>Navigate</h3>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/founder">Founder</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3>Connect</h3>
            <ul>
              <li><a href="https://www.linkedin.com/in/james-marime/" target="_blank" rel="noreferrer">James on LinkedIn</a></li>
              <li><a href="https://www.youtube.com/@BecomingSessions" target="_blank" rel="noreferrer">The Becoming Sessions</a></li>
              <li><a href="mailto:info@marimetechsolutions.com">info@marimetechsolutions.com</a></li>
            </ul>
          </div>
        </div>
        <div className="footerBottom">
          <span>© {new Date().getFullYear()} MarimeTech Solutions Inc. All rights reserved.</span>
          <span>Toronto, Ontario · Serving organizations across Canada and beyond</span>
        </div>
      </div>
    </footer>
  );
}
