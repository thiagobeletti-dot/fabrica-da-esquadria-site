import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Bloco 1: crawlers tradicionais (Google, Bing, Yahoo, DuckDuckGo, etc.)
      {
        userAgent: '*',
        allow: '/',
      },
      // Bloco 2: bots de IA — permitidos explicitamente pra serem citados
      // em respostas geradas por ChatGPT, Claude, Perplexity, Google AI Overviews,
      // Apple Intelligence e similares. Estratégia GEO 2026.
      {
        userAgent: [
          'GPTBot',            // OpenAI — treinamento de modelos
          'OAI-SearchBot',     // OpenAI — resultados de busca ChatGPT
          'ChatGPT-User',      // OpenAI — navegação on-demand do ChatGPT
          'ClaudeBot',         // Anthropic — treinamento de modelos
          'Claude-SearchBot',  // Anthropic — busca do Claude
          'Claude-User',       // Anthropic — navegação on-demand do Claude
          'PerplexityBot',     // Perplexity — treinamento
          'Perplexity-User',   // Perplexity — navegação on-demand
          'Google-Extended',   // Google — treinamento de IA (separado do Googlebot)
          'Applebot-Extended', // Apple — treinamento Apple Intelligence
        ],
        allow: '/',
      },
    ],
    sitemap: 'https://fabricadaesquadria.com.br/sitemap.xml',
  };
}
