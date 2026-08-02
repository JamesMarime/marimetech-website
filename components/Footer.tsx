import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer premiumFooter">
      <div className="container footerGrid compactFooterGrid">
        <div>
          <img className="footerMark" src="/marimetech-icon.png" alt="MarimeTech Solutions" />
          <p className="footerStatement">Helping organizations identify and remove business bottlenecks through secure technology transformation.</p>
        </div>
        <div>
          <h3>Quick links</h3>
          <ul><li><Link href="/">Home</Link></li><li><Link href="/launch-your-business">Launch Your Business</Link></li><li><Link href="/services">Solutions</Link></li><li><Link href="/founder">Founder</Link></li><li><Link href="/insights">Insights</Link></li></ul>
        </div>
        <div>
          <h3>Let&apos;s connect</h3>
          <ul><li><a href="mailto:info@marimetechsolutions.com">info@marimetechsolutions.com</a></li><li>Toronto, Ontario, Canada</li><li><a href="https://www.linkedin.com/in/james-marime/" target="_blank" rel="noreferrer">LinkedIn</a></li></ul>
        </div>
      </div>
      <div className="container footerBottom"><span>© 2026 MarimeTech Solutions Inc.</span><span>Secure. Resilient. Business-first.</span></div>
    </footer>
  );
}
