import { redirect } from 'next/navigation';

// Página /sobre removida do site em 04/06/2026 — decisão do Thiago.
// O que a empresa faz é comunicado pelos blocos da home (Pilares, CaseBMW, Cidades)
// e pela página /consultoria. Redirect pra home pra não quebrar links externos antigos.
export default function Page() {
  redirect('/');
}
