import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center">
      <div className="max-w-site mx-auto px-5 lg:px-10 text-center">
        <p className="text-xs uppercase tracking-marca text-aco mb-4">Erro 404 |</p>
        <h1 className="text-3xl md:text-4xl font-medium text-neutro-900 mb-6">
          Essa página fugiu da obra.
        </h1>
        <Link href="/" className="btn-primario">
          Voltar pra home
        </Link>
      </div>
    </section>
  );
}
