'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const MENU = [
  { href: '/#produtos', label: 'Produtos' },
  { href: '/consultoria', label: 'Consultoria' },
  { href: '/portfolio', label: 'Portfólio' },
  { href: '/#cidades', label: 'Cidades' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-neutro-200">
      <div className="max-w-site mx-auto px-5 lg:px-10 h-20 flex items-center justify-between">
        <Logo variant="horizontal" className="h-10 w-auto" />
        <nav className="hidden md:flex items-center gap-8 text-sm text-neutro-900">
          {MENU.map((m) => (
            <Link key={m.href} href={m.href} className="hover:text-aco transition-colors">
              {m.label}
            </Link>
          ))}
        </nav>
        <Link href="/orcamento" className="hidden md:inline-flex btn-primario text-sm h-10 px-5">
          Pedir Orçamento
        </Link>
        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-neutro-200 bg-white">
          <nav className="px-5 py-4 flex flex-col gap-3">
            {MENU.map((m) => (
              <Link
                key={m.href}
                href={m.href}
                onClick={() => setOpen(false)}
                className="py-2 text-neutro-900"
              >
                {m.label}
              </Link>
            ))}
            <Link
              href="/orcamento"
              onClick={() => setOpen(false)}
              className="btn-primario mt-2"
            >
              Pedir Orçamento
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
