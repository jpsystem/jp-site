import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Cabecalho from "./_componentes/cabecalho/cabecalho";
import Rodape from "./_componentes/rodape/rodape";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JPSystem Ltda",
  description: "Site oficial da JPSystem Ltda",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        {/* CABEÇALHO */}
        <header className="w-full">
          <Cabecalho />
        </header>
        {/* CORPO - Conteúdo da página */}
        <main className="flex-grow">{children}</main>
        {/* RODAPE */}
        <footer className="w-full">
          <Rodape />
        </footer>
      </body>
    </html>
  );
}
