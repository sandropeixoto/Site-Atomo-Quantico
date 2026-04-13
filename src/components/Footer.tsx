import React from "react";
import Link from "next/link";
import { Mail, MessageCircle, Instagram, Youtube, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-cosmic-dark border-t border-white/10 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="space-y-4">
          <h3 className="font-bold text-xl">Átomo <span className="text-quantum-cyan">Quântico</span></h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Desvendando os mistérios da espiritualidade e do autoconhecimento para guiar sua jornada de elevação cósmica.
          </p>
          <div className="flex items-center gap-4 pt-2">
            <Link href="#" className="p-2 glass rounded-full hover:text-quantum-cyan transition-colors"><Instagram size={18} /></Link>
            <Link href="#" className="p-2 glass rounded-full hover:text-quantum-cyan transition-colors"><Youtube size={18} /></Link>
            <Link href="#" className="p-2 glass rounded-full hover:text-quantum-cyan transition-colors"><Facebook size={18} /></Link>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6">Links Úteis</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/descubra-seu-signo" className="hover:text-white transition-colors">Signos</Link></li>
            <li><Link href="#servicos" className="hover:text-white transition-colors">Serviços</Link></li>
            <li><Link href="https://atomoquantico.com/listavip" className="hover:text-white transition-colors">Lista VIP</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Comunidade</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link href="https://wa.me/5591999827779" className="flex items-center gap-2 hover:text-quantum-cyan transition-colors"><MessageCircle size={16} /> WhatsApp</Link></li>
            <li><Link href="#" className="flex items-center gap-2 hover:text-quantum-cyan transition-colors"><Mail size={16} /> Newsletter</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Assine Nossa Newsletter</h4>
          <p className="text-sm text-gray-400 mb-4">Receba insights astrológicos e previsões semanais no seu e-mail.</p>
          <form className="flex gap-2">
            <input 
              type="email" 
              placeholder="Seu melhor e-mail" 
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm flex-1 focus:outline-none focus:border-quantum-cyan transition-colors"
            />
            <button className="bg-quantum-cyan text-cosmic-dark font-bold px-4 py-2 rounded-lg text-sm hover:bg-opacity-80 transition-all">OK</button>
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
