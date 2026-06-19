import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { linkWhatsApp, mensagemProduto } from '@/lib/whatsapp';
import { getGaleria } from '@/lib/galerias';
import { breadcrumbSchema, serviceSchema } from '@/lib/schema';
import JsonLd from '@/components/JsonLd';
import TeaserConsultoria from '@/components/TeaserConsultoria';

export const metadata: Metadata = {
  title: 'Projetos Especiais — Vidro Jumbo, vãos grandes, Fluttua, brises, domus',
  description:
    'Quando o projeto pede mais que o catálogo padrão. Vidro Jumbo, vãos grandes (correr e pivotantes), Porta Fluttua autoral, porta articulada, brises e domus em Jundiaí.',
};

const NOME = 'Projetos Especiais';
const MSG_WHATSAPP = mensagemProduto(NOME);

const TIPOS = [
  {
    tag: 'Especialidade',
    titulo: 'Vidro Jumbo',
    texto:
      'Chapas de grande formato — fachadas, coberturas e fechamentos sem caixilhos no meio do vão. Cadeia logística e técnica que poucos no país operam. Especialidade da casa há mais de uma década.',
  },
  {
    tag: 'Vãos grandes',
    titulo: 'Portas de correr grande vão',
    texto:
      'Sistemas de correr pra vãos amplos — múltiplas folhas, vidro temperado laminado, acessórios reforçados, trilho embutido quando o piso pede continuidade. Pé-direito duplo, integração sala-varanda alto padrão.',
  },
  {
    tag: 'Vãos grandes',
    titulo: 'Porta pivotante',
    texto:
      'Sistema de eixo central, sem trilho. Abre com toque, fecha com presença. Painel único de grandes dimensões — entradas residenciais, showrooms, espaços com pé-direito de impacto.',
  },
  {
    tag: 'Autoral',
    titulo: 'Porta Fluttua',
    texto:
      'Sistema autoral da Fábrica da Esquadria. Sem trilho inferior — o piso atravessa o vão sem interrupção, do interior à varanda. Vedação completa, deslize suspenso. Onde o trilho atrapalharia a continuidade do projeto.',
  },
  {
    tag: 'Articulada',
    titulo: 'Porta articulada',
    texto:
      'Painéis que se dobram lateralmente. Aberta, libera o vão por inteiro e some pra fora do campo visual. Fechada, vira pano único. Integração sala-varanda, área gourmet, salão-jardim.',
  },
  {
    tag: 'Fachada / Conforto',
    titulo: 'Brises e ripados',
    texto:
      'Elementos arquitetônicos de controle de luz e ventilação — brises horizontais e verticais, ripados em alumínio com acabamento sob medida. Pra fachadas que pedem desenho além do envidraçamento.',
  },
];

const breadcrumb = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Produtos', url: '/#produtos' },
  { name: 'Projetos Especiais', url: '/projetos-especiais' },
]);

const service = serviceSchema({
  name: 'Projetos Especiais — Vidro Jumbo, Porta Fluttua e Vãos Grandes',
  description:
    'Soluções fora do catálogo padrão: Vidro Jumbo (chapas de grande formato), Porta Fluttua autoral (sem trilho inferior), porta pivotante, porta articulada, brises e ripados arquitetônicos.',
  url: '/projetos-especiais',
  serviceType: 'Esquadria sob medida',
});

export default function ProjetosEspeciais() {
  return (
    <>
      <JsonLd data={breadcrumb} />
      <JsonLd data={service} />
      <section
        className="relative bg-neutro-900 min-h-[55vh] flex items-center"
        style={{
          backgroundImage:
            'linear-gradient(135deg, rgba(26,26,26,0.65), rgba(42,126,164,0.35)), url(/images/cards/card-portas-especiais.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-site mx-auto px-5 lg:px-10 py-20 md:py-24 w-full">
          <p className="text-xs uppercase tracking-marca text-aco-gelo mb-4">Produtos / Projetos Especiais |</p>
          <h1 className="text-white text-3xl md:text-5xl font-medium leading-tight max-w-3xl">
            Projetos Especiais
          </h1>
          <p className="text-white/85 text-lg md:text-xl mt-4 max-w-2xl leading-relaxed">
            Quando o projeto pede mais que o catálogo padrão entrega.
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
        <div className="max-w-site mx-auto px-5 lg:px-10">
          <p className="titulo-secao mb-4">Tipos de projeto</p>
          <h2 className="text-2xl md:text-3xl font-medium text-neutro-900 mb-4 max-w-2xl">
            Seis soluções fora do catálogo padrão.
          </h2>
          <p className="text-base md:text-lg text-neutro-500 leading-relaxed mb-10 max-w-3xl">
            São obras que exigem engenharia além da esquadria comercial — vidros maiores
            que o transporte convencional, painéis sem trilho aparente, sistemas autorais.
            A Fábrica trabalha esse nível desde 2010.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TIPOS.map((t, i) => (
              <article
                key={i}
                className="p-6 md:p-8 border bg-neutro-50 border-neutro-200"
              >
                <p className="text-xs uppercase tracking-marca text-aco mb-3 font-medium">
                  {t.tag} |
                </p>
                <h3 className="text-xl font-medium text-neutro-900 mb-3">{t.titulo}</h3>
                <p className="text-sm text-neutro-500 leading-relaxed">{t.texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-neutro-50">
        <div className="max-w-site mx-auto px-5 lg:px-10">
          <p className="titulo-secao mb-4">Projetos especiais entregues</p>
          <h2 className="text-2xl md:text-3xl font-medium text-neutro-900 mb-10">
            Obras em Jundiaí e região.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {getGaleria('projetos-especiais').map((src, i) => (
              <div
                key={i}
                className="aspect-square bg-aco-gelo bg-cover bg-center"
                style={{ backgroundImage: `url(${src})` }}
                role="img"
                aria-label={`Projeto especial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-5 lg:px-10 text-center">
          <p className="titulo-secao mb-4">Case real de Projeto Especial</p>
          <p className="text-base md:text-lg text-neutro-500 leading-relaxed mb-6">
            A concessionária <strong>BMW Jundiaí</strong> foi construída em Vidro Jumbo
            com codesenho da Fábrica desde o briefing. 4 anos depois, seguimos fornecendo
            peças novas e manutenção.
          </p>
          <Link
            href="/portfolio/bmw-jundiai"
            className="inline-flex items-center gap-2 text-sm font-medium text-aco hover:text-aco-dark transition-colors"
          >
            Conhecer o case BMW Jundiaí
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <TeaserConsultoria />

      <section className="py-16 bg-neutro-900 text-white">
        <div className="max-w-3xl mx-auto px-5 lg:px-10 text-center">
          <p className="text-lg md:text-xl mb-6">
            Tem um projeto fora do padrão? Vamos olhar juntos.
          </p>
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
