import type { Metadata } from 'next';
import PaginaCidade from '@/components/PaginaCidade';

export const metadata: Metadata = {
  title: 'Esquadrias de alumínio em Cabreúva',
  description:
    'Atendimento em Cabreúva — casas de campo, condomínios fechados e obras de alto padrão na serra. Visita técnica em até 48h.',
};

export default function Page() {
  return <PaginaCidade slug="cabreuva" />;
}
