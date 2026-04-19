"use client";

import React from "react";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-cosmic-dark">
      <div className="absolute inset-0 bg-quantum-violet/5 -skew-y-3 origin-right"></div>
      
      <div className="max-w-6xl mx-auto glass p-12 md:p-24 rounded-none relative z-10 text-center border-white/10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="space-y-10"
        >
          <h2 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter">
            Pronto para <br/><span className="text-gradient">Expandir</span> sua Consciência?
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Junte-se a milhares de buscadores na nossa Lista VIP e receba conteúdos exclusivos, previsões antecipadas e ofertas especiais em primeira mão.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
            <a 
              href="https://atomoquantico.com/listavip"
              target="_blank"
              aria-label="Inscrever-se na Lista VIP agora"
              className="bg-white text-black font-black px-12 py-5 rounded-none text-xl hover:bg-quantum-cyan hover:text-white transition-all transform hover:-translate-y-1 active:scale-95 shadow-2xl flex items-center justify-center min-h-[44px]"
            >
              Quero ser VIP Agora
            </a>
            <a 
              href="https://wa.me/5591999827779"
              target="_blank"
              aria-label="Falar conosco via WhatsApp"
              className="text-white font-bold px-12 py-5 rounded-none text-xl hover:text-quantum-cyan transition-colors flex items-center justify-center min-h-[44px]"
            >
              Dúvidas? Chame no Zap
            </a>
          </div>

          <div className="pt-12 flex flex-wrap items-center justify-center gap-10 grayscale opacity-30">
            <span className="text-[10px] font-black tracking-[0.3em] uppercase italic">Segurança Quântica</span>
            <span className="text-[10px] font-black tracking-[0.3em] uppercase italic">Privacidade Total</span>
            <span className="text-[10px] font-black tracking-[0.3em] uppercase italic">Satisfação Stellar</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
