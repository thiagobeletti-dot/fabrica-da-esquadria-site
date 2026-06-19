import type { Metadata } from 'next';
import PaginaCidade from '@/components/PaginaCidade';

export const metadata: Metadata = {
  title: 'Esquadrias de alumínio em Vinhedo',
  description:
    'Atendimento em Vinhedo — obra alto padrão, condomínios fechados, casas de campo. Linhas Gold e Suprema, Vidro Jumbo, Consultoria técnica.',
};

export default function Page() {
  return <PaginaCidade slug="vinhedo" />;
}
