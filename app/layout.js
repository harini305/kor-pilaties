import { Montserrat, DM_Sans } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { site } from '@/config/site';
import './globals.css';

// Exactly two families site-wide (audit 09 §5): Montserrat for headings and price
// figures, DM Sans for body, navigation, buttons, forms and the footer.
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-montserrat',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const description =
  'KOR Pilates Bali: Reformer group classes in Berawa, Mat classes at CRATE Café Pererenan, and 1-on-1 private reformer sessions.';

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'KOR Pilates Bali | Reformer and Mat Pilates in Berawa and Pererenan',
    template: '%s | KOR Pilates Bali',
  },
  description,
  applicationName: 'KOR Pilates Bali',
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    siteName: 'KOR Pilates Bali',
    locale: 'en_US',
    title: 'KOR Pilates Bali',
    description,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Reformers in the KOR Pilates Berawa studio' }],
  },
  twitter: { card: 'summary_large_image' },
};

export const viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
};

// Adds html.js before first paint only when motion is allowed, so the hero entrance
// never flashes and reduced-motion / no-JS visitors see content immediately.
const motionScript = `try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('js')}catch(e){}`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${dmSans.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionScript }} />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <ScrollToTop />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
