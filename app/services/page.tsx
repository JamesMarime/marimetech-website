import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Technology services built around business outcomes.' };

export default function Page() {
  return (
    <main id="main">
      <section className="pageHero"><div className="container"><p className="eyebrow">MarimeTech Solutions</p><h1>Technology services built around business outcomes.</h1><p>From strategy and modernization to cybersecurity and executive advisory, every engagement begins with the constraint that matters most.</p></div></section>
      
      <section className="section">
        <div className="container">
          <div className="grid2">
            <div className="serviceBlock"><h3>Technology Strategy</h3><p>Align technology investments to business priorities, risk appetite and growth plans.</p><ul><li>Technology roadmaps</li><li>Operating model design</li><li>Vendor and platform decisions</li></ul></div>
            <div className="serviceBlock"><h3>AI Enablement</h3><p>Identify practical use cases, establish guardrails and move from experimentation to measurable value.</p><ul><li>Workflow discovery</li><li>AI readiness and governance</li><li>Adoption planning</li></ul></div>
            <div className="serviceBlock"><h3>Digital Transformation</h3><p>Lead complex change across systems, infrastructure, cloud, process and service delivery.</p><ul><li>Transformation roadmaps</li><li>Program leadership</li><li>Change and adoption</li></ul></div>
            <div className="serviceBlock"><h3>Cloud & Infrastructure</h3><p>Modernize the technology foundation without losing control of reliability, cost or risk.</p><ul><li>Cloud migration</li><li>Infrastructure modernization</li><li>Resilience and continuity</li></ul></div>
            <div className="serviceBlock"><h3>Cybersecurity & Governance</h3><p>Strengthen controls, accountability and visibility as the organization grows.</p><ul><li>Security gap assessments</li><li>IAM and access controls</li><li>Governance and risk management</li></ul></div>
            <div className="serviceBlock"><h3>Executive Advisory</h3><p>Experienced leadership for organizations that need senior technology guidance without a full-time executive hire.</p><ul><li>Fractional CIO/CTO support</li><li>Board and executive guidance</li><li>Technology due diligence</li></ul></div>
          </div>
        </div>
      </section>
      <section className="section soft"><div className="container band"><div><p className="eyebrow">Not sure where to begin?</p><h2 style={{marginBottom:12}}>Start with the bottleneck.</h2><p>We will help you diagnose what is slowing performance and identify the most sensible next step.</p></div><Link className="btn btnPrimary" href="/contact">Discuss your challenge</Link></div></section>

    </main>
  );
}
