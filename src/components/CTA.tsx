"use client";

import React from "react";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-quantum-violet/10 skew-y-3 origin-right"></div>
      
      <div className="max-w-5xl mx-auto glass p-12 md:p-20 rounded-[3rem] relative z-10 text-center border-white/20">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="space-y-8"
        >
          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            Pronto para <span className="text-gradient">Expandir</span> sua Consciência?
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Junte-se a milhares de buscadores na nossa Lista VIP e receba conteúdos exclusivos, previsões antecipadas e ofertas especiais em primeira mão.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a 
              href="https://atomoquantico.com/listavip"
              target="_blank"
              className="bg-white text-cosmic-dark font-black px-12 py-5 rounded-2xl text-xl hover:scale-105 transition-all shadow-xl"
            >
              Quero ser VIP Agora
            </a>
            <a 
              href="https://wa.me/5591999827779"
              target="_blank"
              className="text-white font-bold px-12 py-5 rounded-2xl text-xl hover:underline"
            >
              Dúvidas? Chame no Zap
            </a>
          </div>

          <div className="pt-8 flex items-center justify-center gap-8 grayscale opacity-50">
            <span className="text-xs font-bold tracking-widest uppercase italic">Segurança Quântica</span>
            <span className="text-xs font-bold tracking-widest uppercase italic">Privacidade Total</span>
            <span className="text-xs font-bold tracking-widest uppercase italic">Satisfação Stellar</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
