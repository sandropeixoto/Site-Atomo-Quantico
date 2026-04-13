import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Átomo Quântico | Espiritualidade e Astrologia Premium",
  description: "Desvende os mistérios da espiritualidade, astrologia e autoconhecimento com sabedoria ancestral e ciência moderna.",
  keywords: ["astrologia", "espiritualidade", "signos", "autoconhecimento", "quantico"],
  openGraph: {
    title: "Átomo Quântico",
    description: "Sua jornada de elevação cósmica começa aqui.",
    url: "https://atomoquantico.com.br",
    siteName: "Átomo Quântico",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-quantum-violet selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
