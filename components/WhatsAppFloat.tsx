import { MessageCircle } from 'lucide-react';
import { linkWhatsApp, mensagemSimples } from '@/lib/whatsapp';

export default function WhatsAppFloat() {
  return (
    <a
      href={linkWhatsApp(mensagemSimples())}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1da851] shadow-lg transition-colors"
    >
      <MessageCircle size={28} color="#fff" strokeWidth={2} />
    </a>
  );
}
