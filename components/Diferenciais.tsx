const PILARES = [
  {
    titulo: 'Foco no Cliente',
    texto:
      'Buscamos sempre a melhor solução pra cada detalhe do seu projeto.',
  },
  {
    titulo: 'Atendimento de excelência',
    texto:
      'Ensinamos e orientamos cada detalhe — normas técnicas e segurança incluídas.',
  },
  {
    titulo: 'Produtos de Qualidade',
    texto:
      'Qualidade do material à instalação. Sem atalho em nenhuma etapa.',
  },
  {
    titulo: 'Preço Justo',
    texto:
      'Melhor custo-benefício, sem comprometer material, acessórios ou execução.',
  },
];

export default function Diferenciais() {
  return (
    <section className="py-20 md:py-28 bg-aco-dark text-white">
      <div className="max-w-site mx-auto px-5 lg:px-10">
        <p className="titulo-secao text-aco-gelo mb-4">Nossos pilares</p>
        <h2 className="text-2xl md:text-3xl font-medium mb-12 max-w-2xl">
          Os quatro pilares que sustentam cada obra que entregamos.
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {PILARES.map(({ titulo, texto }) => (
            <article
              key={titulo}
              className="p-5 md:p-7 lg:p-8 bg-white text-neutro-900 rounded-sm flex flex-col"
            >
              <h3 className="text-base md:text-lg lg:text-xl font-medium mb-3 md:mb-4">{titulo}</h3>
              <p className="text-xs md:text-sm text-neutro-500 leading-relaxed">{texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
