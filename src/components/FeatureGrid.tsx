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
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black">Nossos <span className="text-gradient">Serviços Quânticos</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Combinamos técnicas ancestrais com tecnologia moderna para fornecer clareza no seu caminho evolutivo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-3xl space-y-4 hover:border-quantum-violet/50 transition-all group"
            >
              <div className={`w-12 h-12 glass rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <div className="text-gray-400 text-sm leading-relaxed line-clamp-4 prose prose-invert">
                <ReactMarkdown>{feature.description}</ReactMarkdown>
              </div>
              <div className="pt-4">
                <a href={feature.link} className="text-quantum-cyan text-sm font-bold hover:underline">Ver Detalhes →</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
