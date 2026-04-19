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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="inline-block p-[1px] bg-gradient-to-r from-quantum-violet to-quantum-cyan mb-6"
        >
          <div className="bg-cosmic-dark px-8 py-2 text-[10px] font-black tracking-[0.4em] uppercase">
            {title}
          </div>
        </motion.div>

        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-6xl md:text-9xl font-black text-gradient leading-[0.85] tracking-tighter"
        >
          Sua Jornada de <br /> Elevação Cósmica
        </motion.h1>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-medium"
        >
          {subtitle}
        </motion.p>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10"
        >
          <a 
            href="#descobrir" 
            aria-label="Começar jornada de descoberta"
            className="w-full sm:w-auto bg-white text-black font-black px-12 py-5 rounded-none text-xl hover:bg-quantum-cyan hover:text-white transition-all shadow-2xl flex items-center justify-center min-h-[44px]"
          >
            Começar Agora
          </a>
          <a 
            href="https://wa.me/5591999827779" 
            target="_blank"
            aria-label="Falar com um guia via WhatsApp"
            className="w-full sm:w-auto glass text-white font-bold px-12 py-5 rounded-none text-xl hover:bg-white/10 transition-all flex items-center justify-center min-h-[44px]"
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
