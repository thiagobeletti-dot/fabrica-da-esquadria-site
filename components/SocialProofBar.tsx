import Link from 'next/link';

export default function SocialProofBar() {
  return (
    <section className="bg-white border-b border-neutro-200">
      <div className="max-w-site mx-auto px-5 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
        <Link href="#case-bmw" className="flex items-center gap-3 text-neutro-500 hover:text-aco transition-colors">
          {/* Placeholder texto enquanto não temos o logo BMW SVG */}
          <span className="text-sm font-medium tracking-marca uppercase">BMW Jundiaí</span>
          <span className="text-xs">— parceiro há 4 anos</span>
        </Link>
        <div className="hidden md:block h-6 w-px bg-neutro-200" aria-hidden />
        <p className="text-xs tracking-marca uppercase text-aco font-medium">
          16 Anos no ofício · Desde 2010
        </p>
        <div className="hidden md:block h-6 w-px bg-neutro-200" aria-hidden />
        <a
          href="https://instagram.com/fabricadaesquadria"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-neutro-500 hover:text-aco transition-colors"
        >
          <span className="font-medium text-neutro-900">@fabricadaesquadria</span> · 1.078 seguidores
        </a>
      </div>
    </section>
  );
}
