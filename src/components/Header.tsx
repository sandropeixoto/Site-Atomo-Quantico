"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto glass rounded-2xl px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/assets/images/logo.png" 
            alt="Átomo Quântico" 
            width={40} 
            height={40}
            className="w-10 h-10 object-contain"
          />
          <span className="font-bold text-xl tracking-tight hidden sm:block">
            Átomo <span className="text-quantum-cyan">Quântico</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-4">
          <Link href="/" aria-label="Ir para a página inicial" className="px-3 py-2 text-sm font-medium hover:text-quantum-violet transition-colors min-h-[44px] flex items-center">Home</Link>
          <Link href="/descubra-seu-signo" aria-label="Conheça os signos do zodíaco" className="px-3 py-2 text-sm font-medium hover:text-quantum-violet transition-colors min-h-[44px] flex items-center">Signos</Link>
          <Link href="#servicos" aria-label="Nossos serviços" className="px-3 py-2 text-sm font-medium hover:text-quantum-violet transition-colors min-h-[44px] flex items-center">Serviços</Link>
          <Link href="#contato" aria-label="Entre em contato" className="px-3 py-2 text-sm font-medium hover:text-quantum-violet transition-colors min-h-[44px] flex items-center">Contato</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link 
            href="https://atomoquantico.com/listavip"
            target="_blank"
            aria-label="Participar da Lista VIP"
            className="bg-quantum-violet hover:bg-opacity-90 text-white px-6 py-2.5 rounded-none text-sm font-bold transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center min-h-[44px]"
          >
            Lista VIP
          </Link>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
