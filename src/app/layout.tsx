import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Carregar fontes locais com variáveis CSS
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Configuração de metadados para o site
export const metadata: Metadata = {
  title: "ObsedyTracer",
  description: "Monitoramento avançado de indicadores de saúde",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Qualquer conteúdo extra que deseja colocar dentro do head */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground min-h-screen antialiased`}
      >
        <main className="flex flex-col items-center justify-center min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
