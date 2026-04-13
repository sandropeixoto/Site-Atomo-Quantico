"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface HeroProps {
  title: string;
  subtitle: string;
}

const Hero = ({ title, subtitle }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Background Image with Parallax effect */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/assets/images/hero-bg.png" 
          alt="Cosmic Background" 
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cosmic-dark/80 via-transparent to-cosmic-dark"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center space-y-8">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="inline-block p-1 rounded-full bg-gradient-to-r from-quantum-violet to-quantum-cyan mb-4"
        >
          <div className="bg-cosmic-dark rounded-full px-6 py-2 text-xs font-bold tracking-widest uppercase">
            {title}
          </div>
        </motion.div>

        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl md:text-8xl font-black text-gradient leading-tight"
        >
          Sua Jornada de <br /> Elevação Cósmica
        </motion.h1>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
        >
          <a 
            href="#descobrir" 
            className="w-full sm:w-auto bg-white text-cosmic-dark font-black px-10 py-4 rounded-xl text-lg hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            Começar Agora
          </a>
          <a 
            href="https://wa.me/5591999827779" 
            target="_blank"
            className="w-full sm:w-auto glass text-white font-bold px-10 py-4 rounded-xl text-lg hover:bg-white/10 transition-all"
          >
            Falar com Guia
          </a>
        </motion.div>
      </div>

      {/* Floating Elements (Background) */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 w-24 h-24 bg-quantum-violet/20 blur-3xl rounded-full"
      />
      <motion.div 
        animate={{ 
          y: [0, 30, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-10 w-32 h-32 bg-quantum-cyan/20 blur-3xl rounded-full"
      />
    </section>
  );
};

export default Hero;
