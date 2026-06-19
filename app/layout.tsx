import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://fabricadaesquadria.com.br'),
  title: {
    default: 'Fábrica da Esquadria | Vidro Jumbo, porta articulada e serralheria fina em Jundiaí',
    template: '%s | Fábrica da Esquadria',
  },
  description:
    'Fabricação e instalação de esquadrias premium em Jundiaí desde 2010. Vidro Jumbo, porta articulada e serralheria fina. Consultoria técnica embutida em todo projeto.',
  openGraph: {
    title: 'Fábrica da Esquadria',
    description:
      'Vidro Jumbo, porta articulada e serralheria fina. Em Jundiaí, há 16 anos.',
    url: '/',
    siteName: 'Fábrica da Esquadria',
    locale: 'pt_BR',
    type: 'website',
    // Fallback: usando hero principal até gerar OG dedicado 1200x630.
    images: ['/images/hero/hero-interior-vista-por-do-sol.jpg'],
  },
  icons: {
    icon: '/favicon.svg',
  },
};

// Fallback hardcoded: GA4 e Pixel IDs são públicos (aparecem no HTML servido).
// Env vars permitem override pra dev/staging.
const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID || '322125736825942';
const gaId = process.env.NEXT_PUBLIC_GA_ID || 'G-9C5LJGF31J';

const schemaOrgLD = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Fábrica da Esquadria',
  description:
    'Fabricação e instalação de esquadrias premium em Jundiaí desde 2010. Vidro Jumbo, portas articuladas, coberturas em vidro, guarda-corpos e serralheria fina.',
  url: 'https://fabricadaesquadria.com.br',
  telephone: '+55-11-94294-0800',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rua da Árvore, 30',
    addressLocality: 'Jundiaí',
    addressRegion: 'SP',
    postalCode: '13218-541',
    addressCountry: 'BR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -23.16409633326732,
    longitude: -46.83952648650755,
  },
  areaServed: [
    { '@type': 'City', name: 'Jundiaí' },
    { '@type': 'City', name: 'Cabreúva' },
    { '@type': 'City', name: 'Itupeva' },
    { '@type': 'City', name: 'Louveira' },
    { '@type': 'City', name: 'Vinhedo' },
    { '@type': 'City', name: 'Valinhos' },
  ],
  image: 'https://fabricadaesquadria.com.br/images/hero/hero-interior-vista-por-do-sol.jpg',
  sameAs: [
    'https://www.instagram.com/fabricadaesquadria',
    'https://www.facebook.com/fabricadaesquadria',
  ],
  priceRange: '$$$',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgLD) }}
        />
        {pixelId && (
          <Script id="meta-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${pixelId}');
              fbq('track', 'PageView');
            `}
          </Script>
        )}
        {gaId && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
