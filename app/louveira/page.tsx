import type { Metadata } from 'next';
import PaginaCidade from '@/components/PaginaCidade';

export const metadata: Metadata = {
  title: 'Esquadrias de alumínio em Louveira',
  description:
    'Atendimento em Louveira desde 2010. Vidro Jumbo, porta articulada e serralheria fina pra obras de alto padrão.',
};

export default function Page() {
  return <PaginaCidade slug="louveira" />;
}
