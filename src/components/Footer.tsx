import React from "react";
import Link from "next/link";
import { Mail, MessageCircle, Instagram, Youtube, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-cosmic-dark border-t border-white/10 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="space-y-6">
          <h3 className="font-black text-2xl tracking-tighter">Átomo <span className="text-quantum-cyan">Quântico</span></h3>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Desvendando os mistérios da espiritualidade e do autoconhecimento para guiar sua jornada de elevação cósmica.
          </p>
          <div className="flex items-center gap-4 pt-2">
            <Link href="#" aria-label="Seguir no Instagram" className="p-3 glass rounded-none hover:text-quantum-cyan transition-all min-h-[44px] flex items-center justify-center"><Instagram size={20} /></Link>
            <Link href="#" aria-label="Inscrever-se no Youtube" className="p-3 glass rounded-none hover:text-quantum-cyan transition-all min-h-[44px] flex items-center justify-center"><Youtube size={20} /></Link>
            <Link href="#" aria-label="Curtir no Facebook" className="p-3 glass rounded-none hover:text-quantum-cyan transition-all min-h-[44px] flex items-center justify-center"><Facebook size={20} /></Link>
          </div>
        </div>

        <div>
          <h4 className="font-black mb-8 uppercase text-xs tracking-[0.3em]">Links Úteis</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link href="/" className="hover:text-white transition-colors min-h-[44px] flex items-center">Home</Link></li>
            <li><Link href="/descubra-seu-signo" className="hover:text-white transition-colors min-h-[44px] flex items-center">Signos</Link></li>
            <li><Link href="#servicos" className="hover:text-white transition-colors min-h-[44px] flex items-center">Serviços</Link></li>
            <li><Link href="https://atomoquantico.com/listavip" className="hover:text-white transition-colors min-h-[44px] flex items-center">Lista VIP</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-black mb-8 uppercase text-xs tracking-[0.3em]">Comunidade</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link href="https://wa.me/5591999827779" aria-label="Falar conosco no WhatsApp" className="flex items-center gap-3 hover:text-quantum-cyan transition-colors min-h-[44px]"><MessageCircle size={18} /> WhatsApp</Link></li>
            <li><Link href="#" aria-label="Assinar Newsletter" className="flex items-center gap-3 hover:text-quantum-cyan transition-colors min-h-[44px]"><Mail size={18} /> Newsletter</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-black mb-8 uppercase text-xs tracking-[0.3em]">Insights Quânticos</h4>
          <p className="text-sm text-gray-400 mb-6">Receba insights astrológicos e previsões semanais no seu e-mail.</p>
          <form className="flex flex-col gap-3">
            <label htmlFor="footer-email" className="sr-only">Seu e-mail</label>
            <input 
              id="footer-email"
              type="email" 
              placeholder="Seu melhor e-mail" 
              className="bg-white/5 border border-white/10 rounded-none px-4 py-3 text-sm flex-1 focus:outline-none focus:border-quantum-cyan transition-colors min-h-[44px]"
            />
            <button aria-label="Confirmar inscrição na newsletter" className="bg-quantum-cyan text-white font-black px-6 py-3 rounded-none text-xs tracking-widest uppercase hover:bg-opacity-80 transition-all min-h-[44px]">Assinar Agora</button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 text-center text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Átomo Quântico. Todos os direitos reservados. Design e Tecnologia por Antigravity.</p>
      </div>
    </footer>
  );
};

export default Footer;
