import type { Metadata } from 'next';
import PaginaCidade from '@/components/PaginaCidade';

export const metadata: Metadata = {
  title: 'Esquadrias de alumínio em Jundiaí',
  description:
    'Fabricação e instalação de Vidro Jumbo, porta articulada e serralheria fina em Jundiaí. Sede da fábrica desde 2010. Linhas Gold e Suprema, acessórios Udinese.',
};

export default function Page() {
  return <PaginaCidade slug="jundiai" />;
}
