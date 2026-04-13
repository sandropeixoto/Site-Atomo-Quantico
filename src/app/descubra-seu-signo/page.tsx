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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {signsData.map((sign, index) => (
              <div key={index} className="glass p-8 rounded-3xl border-white/5 hover:border-quantum-violet/30 transition-all group">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-quantum-cyan group-hover:scale-110 transition-transform">
                    <Star size={20} />
                  </div>
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase bg-white/5 border border-white/10 px-3 py-1 rounded-full opacity-60">
                    Elemento {sign.element}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{sign.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {sign.desc}
                </p>
                <div className="pt-4 border-t border-white/5">
                  <button className="text-xs font-bold tracking-widest uppercase hover:text-quantum-cyan transition-colors">
                    Ler Análise Completa →
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
