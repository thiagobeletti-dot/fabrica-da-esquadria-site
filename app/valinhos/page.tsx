import type { Metadata } from 'next';
import PaginaCidade from '@/components/PaginaCidade';

export const metadata: Metadata = {
  title: 'Esquadrias de alumínio em Valinhos',
  description:
    'Atendimento em Valinhos — obras novas e reformas premium. Linhas Gold e Suprema, Vidro Jumbo, Consultoria técnica.',
};

export default function Page() {
  return <PaginaCidade slug="valinhos" />;
}
