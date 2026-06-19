import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description: 'Como a Fábrica da Esquadria trata os dados pessoais coletados via formulário e WhatsApp.',
};

export default function Politica() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-5 lg:px-10">
        <p className="titulo-secao mb-4">Legal |</p>
        <h1 className="text-3xl md:text-4xl font-medium text-neutro-900 mb-10">
          Política de Privacidade
        </h1>
        <div className="space-y-5 text-base text-neutro-900 leading-relaxed">
          <p>
            Esta política descreve como a <strong>Fábrica da Esquadria</strong>
            (Rua da Árvore, 30, Jundiaí/SP) trata os dados pessoais coletados
            através deste site.
          </p>
          <h2 className="text-xl font-medium text-neutro-900 mt-8">Dados coletados</h2>
          <p>
            Coletamos apenas o necessário pra te responder um pedido de orçamento:
            nome, telefone (WhatsApp), cidade, tipo de obra e descrição opcional do
            projeto.
          </p>
          <h2 className="text-xl font-medium text-neutro-900 mt-8">Finalidade</h2>
          <p>
            Os dados são usados exclusivamente pra atendimento comercial — responder
            ao pedido, agendar visita técnica, enviar orçamento. Não compartilhamos
            seus dados com terceiros pra marketing.
          </p>
          <h2 className="text-xl font-medium text-neutro-900 mt-8">Como funciona o formulário</h2>
          <p>
            O formulário do site não armazena dados em banco de dados próprio. Ao
            enviar, o site monta a mensagem com seus dados e abre o WhatsApp do dono
            da fábrica — os dados ficam na conversa do WhatsApp, sob os termos do
            próprio WhatsApp.
          </p>
          <h2 className="text-xl font-medium text-neutro-900 mt-8">Seus direitos (LGPD)</h2>
          <p>
            Conforme a Lei Geral de Proteção de Dados (LGPD), você tem direito a
            consultar, corrigir ou solicitar a exclusão dos seus dados a qualquer
            momento. Pra exercer esses direitos, fale com a gente no WhatsApp
            <a href="https://wa.me/5511942940800" target="_blank" rel="noopener noreferrer" className="text-aco hover:underline"> (11) 94294-0800</a>.
          </p>
          <h2 className="text-xl font-medium text-neutro-900 mt-8">Cookies</h2>
          <p>
            Este site usa cookies essenciais pra funcionamento e cookies de análise
            (Google Analytics e Meta Pixel) pra entender o tráfego. Você pode
            desativar cookies nas configurações do seu navegador.
          </p>
          <p className="text-sm text-neutro-500 mt-12">Última atualização: 25 de maio de 2026.</p>
        </div>
      </div>
    </section>
  );
}
