'use client';

import Script from 'next/script';

export default function TidyCalEmbed() {
  return (
    <>
      <div className="tidycal-embed" data-path="1d4rvwj" data-showavatar="true" />
      <Script src="https://tidycal.com/js/embed.js" strategy="afterInteractive" />
    </>
  );
}
