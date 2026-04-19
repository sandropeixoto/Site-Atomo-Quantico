"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { Section } from "@/lib/content";

interface ZodiacSectionProps {
  section?: Section;
}

const signs = [
  "Áries", "Touro", "Gêmeos", "Câncer", 
  "Leão", "Virgem", "Libra", "Escorpião", 
  "Sagitário", "Capricórnio", "Aquário", "Peixes"
];

const ZodiacSection = ({ section }: ZodiacSectionProps) => {
  return (
    <section id="descobrir" className="py-24 px-6 bg-cosmic-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-quantum-violet/5 blur-[120px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter">{section?.title || "Descubra Seu Destino Zodíaco"}</h2>
            <div className="text-gray-300 prose prose-invert max-w-none">
              <ReactMarkdown>{section?.content.split('\n').slice(1, 3).join('\n') || "Escolha seu signo abaixo para explorar as características profundas e as energias que moldam sua personalidade única."}</ReactMarkdown>
            </div>
          </div>
          <Link href="/descubra-seu-signo" aria-label="Ver guia completo de signos" className="text-quantum-cyan font-bold hover:text-white transition-colors mb-2 flex items-center gap-2 group">
            Ver Guia Completo <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {signs.map((sign, index) => (
            <motion.div
              key={index}
              role="button"
              tabIndex={0}
              aria-label={`Ver detalhes sobre o signo de ${sign}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ 
                y: -5,
                borderColor: "rgba(168, 85, 247, 0.4)",
                backgroundColor: "rgba(168, 85, 247, 0.05)"
              }}
              className="glass p-8 rounded-none cursor-pointer text-center group border-white/5 transition-all outline-none focus:ring-2 focus:ring-quantum-violet"
            >
              <div className="text-3xl mb-4 filter grayscale group-hover:grayscale-0 transition-all group-hover:scale-110 duration-300">✨</div>
              <h3 className="font-bold text-xs tracking-[0.2em] uppercase text-gray-400 group-hover:text-white transition-colors">{sign}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ZodiacSection;
