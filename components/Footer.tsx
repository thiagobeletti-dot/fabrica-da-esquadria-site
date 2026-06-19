import Link from 'next/link';
import Logo from './Logo';
import { CATEGORIAS } from '@/lib/produtos';
import { CIDADES } from '@/lib/cidades';

export default function Footer() {
  return (
    <footer className="bg-neutro-50 border-t border-neutro-200 mt-24">
      <div className="max-w-site mx-auto px-5 lg:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <Logo variant="principal" className="h-24 w-auto mb-5" />
            <p className="text-sm text-neutro-500 leading-relaxed">
              Rua da Árvore, 30<br />
              Jundiaí/SP — CEP 13218-541
            </p>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-marca text-aco mb-4">Produtos</h3>
            <ul className="space-y-2 text-sm">
              {CATEGORIAS.map((c) => (
                <li key={c.slug}>
                  <Link href={`/${c.slug}`} className="text-neutro-900 hover:text-aco">
                    {c.nome}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-marca text-aco mb-4">Cidades</h3>
            <ul className="space-y-2 text-sm">
              {CIDADES.map((c) => (
                <li key={c.slug}>
                  <Link href={`/${c.slug}`} className="text-neutro-900 hover:text-aco">
                    {c.nome}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-marca text-aco mb-4">Contato</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://wa.me/5511942940800"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutro-900 hover:text-aco"
                >
                  WhatsApp (11) 94294-0800
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/fabricadaesquadria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutro-900 hover:text-aco"
                >
                  Instagram @fabricadaesquadria
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-neutro-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutro-500">
          <p>© 2026 Fábrica da Esquadria. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <Link href="/politica-de-privacidade" className="hover:text-aco">Política de Privacidade</Link>
            <Link href="/termos" className="hover:text-aco">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
