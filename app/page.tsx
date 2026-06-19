import HeroHome from '@/components/HeroHome';
import SocialProofBar from '@/components/SocialProofBar';
import Categorias from '@/components/Categorias';
import Galeria from '@/components/Galeria';
import Diferenciais from '@/components/Diferenciais';
import CaseBMW from '@/components/CaseBMW';
import Cidades from '@/components/Cidades';
import FormOrcamento from '@/components/FormOrcamento';

export default function Home() {
  return (
    <>
      <HeroHome />
      <SocialProofBar />
      <Categorias />
      <Diferenciais />
      <CaseBMW />
      <Galeria />
      <Cidades />
      <FormOrcamento />
    </>
  );
}
