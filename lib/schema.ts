/**
 * Geradores de Schema.org JSON-LD pra páginas internas.
 * Estratégia "schema stacking" — cada página pode injetar múltiplos schemas
 * complementares (Service + FAQPage + BreadcrumbList, por exemplo).
 *
 * Layout root já injeta HomeAndConstructionBusiness global em app/layout.tsx.
 *
 * Uso típico em uma page.tsx:
 *
 *   import { breadcrumbSchema, serviceSchema } from '@/lib/schema';
 *   import JsonLd from '@/components/JsonLd';
 *
 *   const breadcrumb = breadcrumbSchema([
 *     { name: 'Home', url: '/' },
 *     { name: 'Produtos', url: '/#produtos' },
 *     { name: 'Coberturas', url: '/coberturas' },
 *   ]);
 *
 *   const service = serviceSchema({
 *     name: 'Cobertura em Vidro',
 *     description: '...',
 *     url: '/coberturas',
 *   });
 *
 *   return (
 *     <>
 *       <JsonLd data={breadcrumb} />
 *       <JsonLd data={service} />
 *       ...
 *     </>
 *   );
 */

const BASE_URL = 'https://fabricadaesquadria.com.br';
const ORG_NAME = 'Fábrica da Esquadria';

// ---------- BreadcrumbList ----------

export type BreadcrumbItem = { name: string; url: string };

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${BASE_URL}${item.url}`,
    })),
  };
}

// ---------- Service ----------

export type ServiceOpts = {
  name: string;
  description: string;
  url: string;            // path relativo, ex: /coberturas
  image?: string;         // path relativo opcional
  serviceType?: string;   // ex: 'Cobertura em vidro'
  areaServedCities?: string[]; // default: 6 cidades do raio
};

const DEFAULT_AREAS = ['Jundiaí', 'Cabreúva', 'Itupeva', 'Louveira', 'Vinhedo', 'Valinhos'];

export function serviceSchema(opts: ServiceOpts) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    url: `${BASE_URL}${opts.url}`,
    serviceType: opts.serviceType ?? opts.name,
    provider: {
      '@type': 'HomeAndConstructionBusiness',
      name: ORG_NAME,
      url: BASE_URL,
      telephone: '+55-11-94294-0800',
    },
    areaServed: (opts.areaServedCities ?? DEFAULT_AREAS).map((city) => ({
      '@type': 'City',
      name: city,
    })),
    ...(opts.image && {
      image: opts.image.startsWith('http') ? opts.image : `${BASE_URL}${opts.image}`,
    }),
  };
}

// ---------- Article ----------

export type ArticleOpts = {
  headline: string;
  description: string;
  url: string;
  image: string;
  datePublished: string; // ISO ex: '2026-05-25'
  dateModified?: string;
  authorName?: string;   // default: nome da empresa
};

export function articleSchema(opts: ArticleOpts) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.headline,
    description: opts.description,
    url: `${BASE_URL}${opts.url}`,
    image: opts.image.startsWith('http') ? opts.image : `${BASE_URL}${opts.image}`,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    author: {
      '@type': 'Organization',
      name: opts.authorName ?? ORG_NAME,
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: ORG_NAME,
      url: BASE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/logo/logo-principal.svg`,
      },
    },
  };
}

// ---------- Place (cidade atendida) ----------

export type CityGeo = {
  name: string;
  latitude: number;
  longitude: number;
};

// Coordenadas das 6 cidades atendidas (centroides aproximados).
export const CITY_GEO: Record<string, CityGeo> = {
  jundiai: { name: 'Jundiaí', latitude: -23.1857, longitude: -46.8978 },
  cabreuva: { name: 'Cabreúva', latitude: -23.3092, longitude: -47.1322 },
  itupeva: { name: 'Itupeva', latitude: -23.1525, longitude: -47.0578 },
  louveira: { name: 'Louveira', latitude: -23.0866, longitude: -46.9519 },
  vinhedo: { name: 'Vinhedo', latitude: -23.0297, longitude: -46.9750 },
  valinhos: { name: 'Valinhos', latitude: -22.9706, longitude: -46.9956 },
};

/**
 * Schema combinado pra páginas de cidade: Service específico pra aquela cidade
 * + Place representando a cidade. Aponta entidade da empresa como provider
 * (consistente com LocalBusiness global no layout root).
 */
export function citySchema(slug: string) {
  const geo = CITY_GEO[slug];
  if (!geo) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Esquadrias de Alumínio em ${geo.name}`,
    description: `Fabricação e instalação de esquadrias de alumínio, Vidro Jumbo, coberturas em vidro, guarda-corpos e serralheria fina em ${geo.name}. Mesma fábrica de Jundiaí.`,
    url: `${BASE_URL}/${slug}`,
    provider: {
      '@type': 'HomeAndConstructionBusiness',
      name: ORG_NAME,
      url: BASE_URL,
      telephone: '+55-11-94294-0800',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Rua da Árvore, 30',
        addressLocality: 'Jundiaí',
        addressRegion: 'SP',
        postalCode: '13218-541',
        addressCountry: 'BR',
      },
    },
    areaServed: {
      '@type': 'City',
      name: geo.name,
      geo: {
        '@type': 'GeoCoordinates',
        latitude: geo.latitude,
        longitude: geo.longitude,
      },
    },
  };
}
