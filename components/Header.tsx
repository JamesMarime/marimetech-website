'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Header(){
  const [open,setOpen]=useState(false);
  const [services,setServices]=useState(false);
  const pathname=usePathname();
  const dropRef=useRef<HTMLDivElement>(null);
  const closeAll=()=>{setOpen(false);setServices(false)};
  useEffect(()=>{closeAll()},[pathname]);
  useEffect(()=>{
    const outside=(e:MouseEvent)=>{if(dropRef.current&&!dropRef.current.contains(e.target as Node))setServices(false)};
    const key=(e:KeyboardEvent)=>{if(e.key==='Escape')closeAll()};
    document.addEventListener('mousedown',outside);document.addEventListener('keydown',key);
    return()=>{document.removeEventListener('mousedown',outside);document.removeEventListener('keydown',key)};
  },[]);
  const nav=(href:string,label:string)=><Link href={href} onClick={closeAll}>{label}</Link>;
  return <><a className="skip" href="#main">Skip to content</a><header className="premiumHeader"><div className="container premiumNav">
    <Link href="/" className="premiumBrand" aria-label="MarimeTech Solutions Inc. home" onClick={closeAll}><img src="/marimetech-logo.png" alt="MarimeTech Solutions Inc."/></Link>
    <button className="navToggle" aria-expanded={open} aria-label="Toggle navigation" onClick={()=>{setOpen(!open);setServices(false)}}><span/><span/><span/></button>
    <nav className={`premiumNavLinks ${open?'open':''}`}>
      {nav('/','Home')}
      <div className="premiumDropdown" ref={dropRef}><button aria-expanded={services} onClick={()=>setServices(!services)}>Services <ChevronDown size={14}/></button><div className={`premiumDropdownMenu ${services?'show':''}`}>
        {nav('/launch-your-business','Launch Your Business')}{nav('/services#managed-it','Managed IT & Support')}{nav('/services#cloud','Cloud & Modern Workplace')}{nav('/services#cybersecurity','Cybersecurity & Resilience')}{nav('/services#transformation','Digital Transformation & AI')}{nav('/services#advisory','Strategy & Advisory')}
      </div></div>
      {nav('/launch-your-business','Launch Your Business')}{nav('/our-work','Our Work')}{nav('/about','About')}{nav('/insights','Insights')}{nav('/contact','Contact')}
    </nav>
    <Link className="premiumNavCta" href="/book-a-call" onClick={closeAll}>Book a Conversation <ArrowRight size={15}/></Link>
  </div></header></>
}
