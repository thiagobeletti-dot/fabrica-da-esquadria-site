import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { linkWhatsApp, mensagemProduto } from '@/lib/whatsapp';
import TeaserConsultoria from '@/components/TeaserConsultoria';

export const metadata: Metadata = {
  title: 'Coberturas e Pergolados em Vidro em Jundiaí | Fábrica da Esquadria',
  description:
    'Coberturas em vidro e pergolados pra varanda, área gourmet, terraço e quintal. Transforme área externa em ambiente útil o ano inteiro. Fabricação em Jundiaí.',
};

const NOME = 'Coberturas e Pergolados';
const MSG_WHATSAPP = mensagemProduto(NOME);

// 10 primeiras fotos da pasta coberturas-curadas (são todas Coberturas/Pergolados)
const FOTOS = Array.from({ length: 10 }, (_, i) =>
  `/images/coberturas-curadas/${String(i + 1).padStart(2, '0')}.jpg`
);

export default function CoberturasPergolados() {
  return (
    <>
      <section
        className="relative bg-neutro-900 min-h-[55vh] flex items-center"
        style={{
          backgroundImage:
            'linear-gradient(135deg, rgba(26,26,26,0.55), rgba(42,126,164,0.30)), url(/images/coberturas-curadas/card-coberturas-pergolados.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-site mx-auto px-5 lg:px-10 py-20 md:py-24 w-full">
          <p className="text-xs uppercase tracking-marca text-aco-gelo mb-4">
            Produtos / Coberturas / Coberturas e Pergolados |
          </p>
          <h1 className="text-white text-3xl md:text-5xl font-medium leading-tight max-w-3xl">
            Coberturas e Pergolados
          </h1>
          <p className="text-white/85 text-lg md:text-xl mt-4 max-w-2xl leading-relaxed">
            Sua área externa vira ambiente. Mais uso, mais integração, mais conforto — chuva ou sol.
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
            Cobertura é ganhar metragem útil sem mexer na planta.
          </h2>
          <p className="text-base md:text-lg text-neutro-500 leading-relaxed mb-4">
            Cobrem a varanda, a área gourmet, o terraço ou o quintal — e transformam aquele
            espaço em <strong>ambiente de verdade</strong>, usável o ano inteiro. Sem
            depender do tempo, sem renunciar à amplitude.
          </p>
          <p className="text-base md:text-lg text-neutro-500 leading-relaxed">
            <strong>Pergolados</strong> com perfil de alumínio projetado exclusivamente
            pra cada necessidade. <strong>Coberturas de vidro</strong> podem usar a
            estrutura existente da obra (concreto, madeira, ferro ou alumínio) — ou a
            Fábrica projeta a estrutura nova quando o projeto exige.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-neutro-50">
        <div className="max-w-3xl mx-auto px-5 lg:px-10">
          <p className="titulo-secao mb-4">Tipos de vidro</p>
          <h2 className="text-2xl md:text-3xl font-medium text-neutro-900 mb-6">
            Incolor, colorido ou de controle solar.
          </h2>
          <p className="text-base md:text-lg text-neutro-500 leading-relaxed mb-6">
            Pra cada projeto, especificamos o vidro certo. O <strong>incolor</strong> dá
            transparência total. O <strong>colorido</strong> traz desenho e privacidade.
            E o <strong>vidro de controle solar</strong> (também chamado de vidro
            inteligente) deixa a luz passar mas <strong>bloqueia o calor</strong> —
            transforma a cobertura em conforto real, não em estufa.
          </p>
          <div className="p-6 md:p-8 bg-aco-gelo border-l-4 border-aco mb-6">
            <p className="text-base md:text-lg text-neutro-900 leading-relaxed mb-4 font-medium">
              Benefícios do vidro de controle solar:
            </p>
            <ul className="space-y-2 text-base text-neutro-900 leading-relaxed">
              <li>• <strong>Até 70% menos calor</strong> — ambiente confortável o dia todo</li>
              <li>• <strong>Proteção contra raios UV</strong> — móveis, tecidos e objetos não desbotam</li>
              <li>• <strong>Mais privacidade</strong> sem perder a luz natural</li>
              <li>• <strong>Até 30% de economia</strong> com ar-condicionado e luz artificial</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-5 lg:px-10">
          <p className="titulo-secao mb-4">Por que só vidro laminado</p>
          <h2 className="text-2xl md:text-3xl font-medium text-neutro-900 mb-6">
            Cobertura com vidro temperado, nunca. Aqui é uma regra.
          </h2>
          <p className="text-base md:text-lg text-neutro-500 leading-relaxed mb-4">
            A norma <strong>NBR 7199</strong> determina vidro de segurança em coberturas
            envidraçadas, e a Fábrica só trabalha com <strong>vidro laminado</strong> —
            duas (ou mais) lâminas de vidro unidas permanentemente por uma película de
            PVB (polivinil butiral). Se o vidro trinca ou quebra, os fragmentos
            <strong> ficam aderidos à película</strong> e não caem.
          </p>
          <p className="text-base md:text-lg text-neutro-500 leading-relaxed mb-4">
            Vidro temperado é resistente e útil em várias aplicações, mas
            <strong> não em cobertura</strong>. Mesmo fragmentando-se em pedaços
            arredondados quando quebra, esses pedaços caem — e cair vidro de altura
            em cima de quem está embaixo é risco que não vale correr. Existe registro
            de acidentes graves no setor por essa escolha.
          </p>
          <div className="p-6 md:p-8 bg-red-50 border-l-4 border-red-600">
            <p className="text-base md:text-lg text-neutro-900 leading-relaxed">
              <strong>Atenção:</strong> se alguém ofereceu cobertura em vidro temperado,
              recuse. O preço mais baixo nessa hora é risco à segurança da sua família.
              Pergunte, exija ficha técnica, e confirme que o vidro tem certificado
              de laminado.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-neutro-50">
        <div className="max-w-site mx-auto px-5 lg:px-10">
          <p className="titulo-secao mb-4">Obras entregues</p>
          <h2 className="text-2xl md:text-3xl font-medium text-neutro-900 mb-10">
            Coberturas e pergolados em Jundiaí e região.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {FOTOS.map((src, i) => (
              <div
                key={i}
                className="aspect-square bg-aco-gelo bg-cover bg-center"
                style={{ backgroundImage: `url(${src})` }}
                role="img"
                aria-label={`Cobertura ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-5 lg:px-10 text-center">
          <p className="text-base md:text-lg text-neutro-500 leading-relaxed mb-6">
            Procurando luz natural pra dentro da casa? Veja também:
          </p>
          <Link
            href="/coberturas/domus-claraboias"
            className="inline-flex items-center gap-2 text-sm font-medium text-aco hover:text-aco-dark transition-colors"
          >
            Domus e Claraboias
          </Link>
        </div>
      </section>

      <TeaserConsultoria />

      <section className="py-16 bg-neutro-900 text-white">
        <div className="max-w-3xl mx-auto px-5 lg:px-10 text-center">
          <p className="text-lg md:text-xl mb-6">Quer cobrir sua área externa com a gente?</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={linkWhatsApp(MSG_WHATSAPP)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-12 px-8 bg-white text-aco-dark font-medium hover:bg-aco-gelo transition-colors rounded-sm"
            >
              Conversar agora
            </a>
            <Link
              href="/coberturas"
              className="inline-flex items-center gap-2 min-h-12 px-7 border border-white/30 text-white font-medium hover:bg-white/10 transition-colors rounded-sm"
            >
              <ArrowLeft size={16} />
              Voltar pra Coberturas
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
