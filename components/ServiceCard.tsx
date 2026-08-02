import Link from 'next/link';
import type { ReactNode } from 'react';

export default function ServiceCard({icon,title,children}:{icon:ReactNode,title:string,children:ReactNode}) {
  return (
    <article className="card">
      <div className="iconBox">{icon}</div>
      <h3>{title}</h3>
      <p>{children}</p>
      <Link className="textLink" href="/services">Explore this capability →</Link>
    </article>
  );
}
