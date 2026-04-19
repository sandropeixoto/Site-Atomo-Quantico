import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Star } from "lucide-react";

const signsData = [
  { name: "Áries", element: "Fogo", desc: "Pioneirismo e Energia. Iniciativa corajosa, liderança natural." },
  { name: "Touro", element: "Terra", desc: "Estabilidade e Determinação. Persistência, apreço pelo conforto." },
  { name: "Gêmeos", element: "Ar", desc: "Curiosidade e Comunicação. Adaptabilidade, mente ágil e sociável." },
  { name: "Câncer", element: "Água", desc: "Emoção e Proteção. Sensibilidade, intuição forte." },
  { name: "Leão", element: "Fogo", desc: "Brilho e Generosidade. Auto-confiança, criatividade e carisma." },
  { name: "Virgem", element: "Terra", desc: "Análise e Precisão. Organização, foco em detalhes." },
  { name: "Libra", element: "Ar", desc: "Harmonia e Justiça. Diplomacia, equilíbrio e senso estético." },
  { name: "Escorpião", element: "Água", desc: "Intensidade e Mistério. Determinação, intuição profunda." },
  { name: "Sagitário", element: "Fogo", desc: "Liberdade e Sabedoria. Otimismo, amor pela aventura." },
  { name: "Capricórnio", element: "Terra", desc: "Ambição e Estrutura. Disciplina, responsabilidade." },
  { name: "Aquário", element: "Ar", desc: "Inovação e Humanitarismo. Originalidade, independência." },
  { name: "Peixes", element: "Água", desc: "Espiritualidade e Compaixão. Empatia, imaginação fértil." }
];

export default function ZodiacPage() {
  return (
    <main className="min-h-screen bg-cosmic-dark text-white">
      <Header />
      
      <div className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-5xl md:text-7xl font-black text-gradient uppercase">Descubra Seu Signo</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore as energias que regem sua jornada e entenda como os astros influenciam seu caminho evolutivo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {signsData.map((sign, index) => (
              <div key={index} className="glass p-10 rounded-none border-white/5 hover:border-quantum-violet/40 transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-quantum-violet/5 -rotate-45 translate-x-12 -translate-y-12"></div>
                
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 glass rounded-none flex items-center justify-center text-quantum-cyan group-hover:bg-quantum-cyan/10 group-hover:scale-110 transition-all duration-500">
                    <Star size={24} />
                  </div>
                  <span className="text-[10px] font-black tracking-[0.3em] uppercase bg-white/5 border border-white/10 px-4 py-1.5 rounded-none opacity-50">
                    {sign.element}
                  </span>
                </div>
                <h3 className="text-3xl font-black mb-4 tracking-tight">{sign.name}</h3>
                <p className="text-gray-300 text-base leading-relaxed mb-8">
                  {sign.desc}
                </p>
                <div className="pt-6 border-t border-white/5">
                  <button 
                    aria-label={`Ler análise completa do signo ${sign.name}`}
                    className="text-xs font-black tracking-[0.3em] uppercase hover:text-quantum-cyan transition-colors flex items-center gap-2 group/btn min-h-[44px]"
                  >
                    Análise Completa <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
