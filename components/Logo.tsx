import Link from 'next/link';

type Variant = 'principal' | 'horizontal' | 'tagline' | 'branco' | 'mono';

const variants: Record<Variant, { src: string; alt: string; w: number; h: number }> = {
  principal: { src: '/logo/logo-principal.svg', alt: 'Fábrica da Esquadria', w: 160, h: 80 },
  horizontal: { src: '/logo/logo-horizontal.svg', alt: 'Fábrica da Esquadria', w: 260, h: 40 },
  tagline: { src: '/logo/logo-tagline.svg', alt: 'Fábrica da Esquadria — Jundiaí, desde 2010', w: 260, h: 55 },
  branco: { src: '/logo/logo-branco.svg', alt: 'Fábrica da Esquadria', w: 260, h: 40 },
  mono: { src: '/logo/logo-mono.svg', alt: 'Fábrica da Esquadria', w: 260, h: 40 },
};

export default function Logo({
  variant = 'horizontal',
  href = '/',
  className = '',
}: {
  variant?: Variant;
  href?: string | null;
  className?: string;
}) {
  const v = variants[variant];
  const img = (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={v.src} alt={v.alt} width={v.w} height={v.h} className={className} />
  );
  if (href === null) return img;
  return <Link href={href} aria-label="Fábrica da Esquadria — ir pra página inicial">{img}</Link>;
}
