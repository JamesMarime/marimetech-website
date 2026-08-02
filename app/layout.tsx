import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://marimetechsolutions.com'),
  title: {
    default: 'MarimeTech Solutions | Technology Strategy & Transformation',
    template: '%s | MarimeTech Solutions',
  },
  description: 'MarimeTech Solutions helps organizations remove bottlenecks, modernize technology, strengthen cybersecurity and scale with confidence.',
  openGraph: {
    title: 'MarimeTech Solutions',
    description: 'Leverage technology. Transform. Grow.',
    url: 'https://marimetechsolutions.com',
    siteName: 'MarimeTech Solutions',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
