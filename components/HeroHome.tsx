import { linkWhatsApp, mensagemConversar } from '@/lib/whatsapp';

export default function HeroHome() {
  return (
    <section className="bg-aco-dark">
      <div className="max-w-site mx-auto grid grid-cols-1 lg:grid-cols-2 items-stretch">
        <div className="px-5 lg:px-10 py-16 md:py-24 flex flex-col justify-center">
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-medium leading-[1.15] max-w-xl">
            Transformando projetos em realidade.
          </h1>
          <p className="text-white/85 text-xs md:text-sm uppercase tracking-wider mt-6 md:mt-8 max-w-md">
            Esquadrias · Coberturas · Guarda-corpos · Projetos Especiais
          </p>
          <p className="text-white text-xl md:text-2xl font-medium mt-8 md:mt-10">
            Diga: como podemos ajudar?
          </p>
          <div className="mt-10">
            <a
              href={linkWhatsApp(mensagemConversar())}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-12 px-8 bg-white text-aco-dark font-medium hover:bg-aco-gelo transition-colors rounded-sm tracking-wide"
            >
              Conversar agora
            </a>
          </div>
        </div>
        {/* Foto desktop — mesmo tamanho do painel de texto. Mask faz a foto
            se dissolver nas duas pontas (esquerda funde com o escuro do texto,
            direita funde com o azul-aço do contorno). Sem véu por cima. */}
        <div
          className="hidden lg:block bg-cover bg-center min-h-[520px]"
          style={{
            backgroundImage: 'url(/images/hero/hero-interior-vista-por-do-sol.jpg)',
            maskImage:
              'linear-gradient(90deg, transparent 0%, #000 18%, #000 90%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(90deg, transparent 0%, #000 18%, #000 90%, transparent 100%)',
          }}
          role="img"
          aria-label="Sala de estar com escada de mármore, guarda-corpo de vidro e vidro jumbo ao pôr do sol"
        />
      </div>
    </section>
  );
}
