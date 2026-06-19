import type { MetadataRoute } from 'next';

const BASE = 'https://fabricadaesquadria.com.br';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    // Home — prioridade máxima
    { url: BASE, lastModified: now, changeFrequency: 'monthly', priority: 1.0 },

    // Categorias principais
    { url: `${BASE}/projetos-de-esquadrias`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/coberturas`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/guarda-corpo`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/projetos-especiais`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },

    // Subcategorias de Coberturas
    { url: `${BASE}/coberturas/coberturas-pergolados`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/coberturas/domus-claraboias`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // Serviços complementares
    { url: `${BASE}/consultoria`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/orcamento`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/acessorios`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },

    // Portfólio
    { url: `${BASE}/portfolio`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/portfolio/bmw-jundiai`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // Cidades atendidas
    { url: `${BASE}/jundiai`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/cabreuva`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/itupeva`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/louveira`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/vinhedo`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/valinhos`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },

    // Páginas institucionais
    { url: `${BASE}/termos`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/politica-de-privacidade`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];
}
