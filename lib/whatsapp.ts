/**
 * Gera link wa.me com mensagem pré-preenchida.
 * Centraliza geração de URLs de WhatsApp em um só lugar.
 */

const NUMERO = process.env.NEXT_PUBLIC_WHATSAPP || '5511942940800';

export function linkWhatsApp(mensagem?: string): string {
  const base = `https://wa.me/${NUMERO}`;
  if (!mensagem) return base;
  return `${base}?text=${encodeURIComponent(mensagem)}`;
}

export function mensagemOrcamento(dados: {
  nome: string;
  cidade: string;
  tipoObra: string;
  produto?: string;
  mensagem?: string;
}): string {
  const linhas = [
    `Olá! Pedi orçamento pelo site.`,
    ``,
    `*Nome:* ${dados.nome}`,
    `*Cidade:* ${dados.cidade}`,
    `*Tipo de obra:* ${dados.tipoObra}`,
  ];
  if (dados.produto) linhas.push(`*Produto:* ${dados.produto}`);
  if (dados.mensagem) {
    linhas.push(``);
    linhas.push(`*Detalhes:* ${dados.mensagem}`);
  }
  return linhas.join('\n');
}

export function mensagemProduto(produto: string): string {
  return `Olá! Vi o site da Fábrica da Esquadria e quero orçamento de ${produto}.`;
}

export function mensagemSimples(): string {
  return 'Olá! Vi o site da Fábrica da Esquadria e quero pedir um orçamento.';
}

export function mensagemConversar(): string {
  return 'Olá! Vi o site da Fábrica da Esquadria e gostaria de conversar sobre meu projeto.';
}
