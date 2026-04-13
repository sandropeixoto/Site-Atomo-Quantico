"use client";

import React from "react";
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
    <section id="descobrir" className="py-24 px-6 bg-cosmic-deep relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-quantum-violet/10 blur-[120px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-4xl md:text-5xl font-black">{section?.title || "Descubra Seu Destino Zodíaco"}</h2>
            <div className="text-gray-400 prose prose-invert max-w-none">
              <ReactMarkdown>{section?.content.split('\n').slice(1, 3).join('\n') || "Escolha seu signo abaixo para explorar as características profundas e as energias que moldam sua personalidade única."}</ReactMarkdown>
            </div>
          </div>
          <a href="/descubra-seu-signo" className="text-quantum-cyan font-bold hover:underline mb-2">Ver Guia Completo →</a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {signs.map((sign, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(139, 92, 246, 0.1)"
              }}
              className="glass p-6 rounded-2xl cursor-pointer text-center group border-white/5"
            >
              <div className="text-3xl mb-3 filter grayscale group-hover:grayscale-0 transition-all">✨</div>
              <h3 className="font-bold text-sm tracking-widest uppercase">{sign}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ZodiacSection;
