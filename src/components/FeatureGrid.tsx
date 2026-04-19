"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Moon, Star, Compass } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { Section } from "@/lib/content";

interface FeatureGridProps {
  sections: Section[];
}

const FeatureGrid = ({ sections }: FeatureGridProps) => {
  // Map sections to features
  const features = sections.filter(s => 
    s.id.includes('Sonhos') || 
    s.id.includes('Mensagens') || 
    s.id.includes('Quem Somos')
  ).map((s, index) => ({
    title: s.title,
    description: s.content.split('\n').slice(1, 4).join('\n'), // Grab a preview
    icon: index % 4 === 0 ? <Moon className="text-quantum-violet" /> : index % 4 === 1 ? <Star className="text-quantum-cyan" /> : index % 4 === 2 ? <Sparkles className="text-yellow-400" /> : <Compass className="text-quantum-silver" />,
    link: "#",
    color: "text-white"
  }));

  return (
    <section id="servicos" className="py-24 px-6 bg-cosmic-dark relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 space-y-6">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter">Nossos <span className="text-gradient">Serviços Quânticos</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            Combinamos técnicas ancestrais com tecnologia moderna para fornecer clareza no seu caminho evolutivo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-10 rounded-none space-y-6 hover:border-quantum-violet/40 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-quantum-violet/5 -rotate-45 translate-x-12 -translate-y-12"></div>
              
              <div className={`w-14 h-14 glass rounded-none flex items-center justify-center mb-8 group-hover:bg-quantum-violet/10 group-hover:scale-110 transition-all duration-500`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-black tracking-tight">{feature.title}</h3>
              <div className="text-gray-400 text-base leading-relaxed line-clamp-4 prose prose-invert">
                <ReactMarkdown>{feature.description}</ReactMarkdown>
              </div>
              <div className="pt-6">
                <a 
                  href={feature.link} 
                  aria-label={`Saber mais sobre ${feature.title}`}
                  className="text-quantum-cyan text-sm font-black tracking-widest uppercase hover:text-white transition-colors flex items-center gap-2 group/link min-h-[44px]"
                >
                  Ver Detalhes <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
