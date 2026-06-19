import type { Metadata } from 'next';
import { linkWhatsApp, mensagemProduto } from '@/lib/whatsapp';
import { getGaleria } from '@/lib/galerias';
import TeaserConsultoria from '@/components/TeaserConsultoria';

export const metadata: Metadata = {
  title: 'Guarda-corpo de Vidro em Jundiaí — Fixação invisível ou Clássica | Fábrica da Esquadria',
  description:
    'Guarda-corpos em vidro temperado laminado. Sistema Premium (fixação invisível) ou Clássica (torre de inox + conectores). Escadas, sacadas, mezaninos. Fabricação em Jundiaí.',
};

const NOME = 'Guarda-corpo';
const MSG_WHATSAPP = mensagemProduto(NOME);

export default function GuardaCorpo() {
  return (
    <>
      <section
        className="relative bg-neutro-900 min-h-[55vh] flex items-center"
        style={{
          backgroundImage:
            'linear-gradient(135deg, rgba(26,26,26,0.55), rgba(42,126,164,0.30)), url(/images/guarda-corpo/037-20241017_155535.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-site mx-auto px-5 lg:px-10 py-20 md:py-24 w-full">
          <p className="text-xs uppercase tracking-marca text-aco-gelo mb-4">Produtos / Guarda-corpo |</p>
          <h1 className="text-white text-3xl md:text-5xl font-medium leading-tight max-w-3xl">
            Guarda-corpo
          </h1>
          <p className="text-white/85 text-lg md:text-xl mt-4 max-w-2xl leading-relaxed">
            Estrutura mínima, vidro em destaque. O guarda-corpo deixa de ser obstáculo e vira parte do projeto.
          </p>
          <div className="mt-10">
            <a
              href={linkWhatsApp(MSG_WHATSAPP)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-12 px-7 bg-white text-aco-dark font-medium hover:bg-aco-gelo transition-colors rounded-sm"
            >
              Conversar agora
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-5 lg:px-10">
          <p className="titulo-secao mb-4">O que entregamos</p>
          <h2 className="text-2xl md:text-3xl font-medium text-neutro-900 mb-6">
            O guarda-corpo de vidro vira protagonista da circulação.
          </h2>
          <p className="text-base md:text-lg text-neutro-500 leading-relaxed mb-4">
            Em escada, sacada, mezanino ou área externa, o guarda-corpo de vidro
            <strong> mantém o visual da arquitetura limpo e contínuo</strong> — sem ferragens
            grosseiras, sem grade pesando o ambiente. Mais luz, mais amplitude, e proteção
            real calculada pra norma.
          </p>
          <p className="text-base md:text-lg text-neutro-500 leading-relaxed">
            Funciona em casa, sobrado e área comercial. Na escada vira destaque: o vidro
            deixa o desenho dos degraus aparecer e o lance flui sem peso.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-neutro-50">
        <div className="max-w-site mx-auto px-5 lg:px-10">
          <p className="titulo-secao mb-4">Sistemas de fixação</p>
          <h2 className="text-2xl md:text-3xl font-medium text-neutro-900 mb-10 max-w-2xl">
            Duas formas de fazer. Cada uma com seu lugar.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="p-6 md:p-8 bg-white border border-neutro-200">
              <p className="text-xs uppercase tracking-marca text-aco mb-3 font-medium">Premium |</p>
              <h3 className="text-xl font-medium text-neutro-900 mb-3">Fixação invisível</h3>
              <p className="text-sm text-neutro-500 leading-relaxed">
                Perfil de base embutido no piso ou na alvenaria. O vidro parece flutuar, sem nada
                à vista. Visual contínuo, acabamento de arquitetura. A escolha onde o projeto
                pede protagonismo absoluto do vidro — escadas internas, mezaninos, ambientes
                onde o desenho não pode ser quebrado.
              </p>
            </article>
            <article className="p-6 md:p-8 bg-white border border-neutro-200">
              <p className="text-xs uppercase tracking-marca text-aco mb-3 font-medium">Clássica |</p>
              <h3 className="text-xl font-medium text-neutro-900 mb-3">Torre de inox</h3>
              <p className="text-sm text-neutro-500 leading-relaxed">
                Torre de inox de 40cm com dois pontos de fixação no piso e conectores de
                alinhamento entre os vidros. Mais ancoragem, vidros que ficam nivelados ao
                longo do tempo, manutenção fácil. Pintura certificada nas peças metálicas.
                Mesma segurança da Premium, com investimento menor.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-5 lg:px-10">
          <p className="titulo-secao mb-4">Como instalamos</p>
          <h2 className="text-2xl md:text-3xl font-medium text-neutro-900 mb-6">
            Detalhe que dura.
          </h2>
          <p className="text-base md:text-lg text-neutro-500 leading-relaxed mb-8">
            Vidro que ainda está nivelado. Torre que não bambeia. Acabamento que não descascou no sol.
          </p>
          <ul className="space-y-3 text-base text-neutro-700 leading-relaxed">
            <li>• <strong>Torre de inox de 40cm</strong> com dois pontos de fixação no piso — ancoragem reforçada, vidro firme</li>
            <li>• <strong>Conectores de alinhamento</strong> entre os vidros — peças se mantêm niveladas com o uso, sem desalinhar</li>
            <li>• <strong>Pintura certificada</strong> nas peças metálicas — resistência a sol, chuva e maresia. Acabamento que envelhece bem</li>
          </ul>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-neutro-50">
        <div className="max-w-site mx-auto px-5 lg:px-10">
          <p className="titulo-secao mb-4">Guarda-corpos entregues</p>
          <h2 className="text-2xl md:text-3xl font-medium text-neutro-900 mb-10">
            Projetos em Jundiaí e região.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {getGaleria('guarda-corpo').map((src, i) => (
              <div
                key={i}
                className="aspect-square bg-aco-gelo bg-cover bg-center"
                style={{ backgroundImage: `url(${src})` }}
                role="img"
                aria-label={`Guarda-corpo ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <TeaserConsultoria />

      <section className="py-16 bg-neutro-900 text-white">
        <div className="max-w-3xl mx-auto px-5 lg:px-10 text-center">
          <p className="text-lg md:text-xl mb-6">Quer um guarda-corpo de outro patamar?</p>
          <a
            href={linkWhatsApp(MSG_WHATSAPP)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center min-h-12 px-8 bg-white text-aco-dark font-medium hover:bg-aco-gelo transition-colors rounded-sm"
          >
            Conversar agora
          </a>
        </div>
      </section>
    </>
  );
}
