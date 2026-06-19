import type { Metadata } from 'next';
import PaginaCidade from '@/components/PaginaCidade';

export const metadata: Metadata = {
  title: 'Esquadrias de alumínio em Itupeva',
  description:
    'Atendimento em Itupeva — condomínios serranos e obras de cidade. Consultoria técnica antes do orçamento.',
};

export default function Page() {
  return <PaginaCidade slug="itupeva" />;
}
