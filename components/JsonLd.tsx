/**
 * Componente utilitário pra injetar JSON-LD inline em qualquer página.
 * Usa <script type="application/ld+json"> via dangerouslySetInnerHTML —
 * padrão recomendado pelo Next.js 14 pra structured data dinâmico.
 *
 * Aceita um objeto ou array de objetos (pra múltiplos schemas na mesma página).
 */
export default function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
