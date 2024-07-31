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
      <body className={`${inter.className} flex flex-col h-screen`}>
        {/* CABEÇALHO   */}
        <header className="fixed top-0 left-0 w-full h-14 px-4 bg-orange-900 border-b dark:border-slate-700 text-orange-50 z-1">
          <Cabecalho/>
        </header>
        {/* CORPO- Conteudo das página   */}
        <div className="flex flex-col flex-grow w-full pt-14 pb-14 overflow-y-auto">
              <div className="flex flex-col flex-grow w-full pr-8 pl-8 pt-2 pb-2 bg-orange-50">
                {children}
              </div>
        </div>
        {/* RODAPER   */}
        <footer className="fixed bottom-0 left-0 w-full h-14 px-4 bg-orange-900 border-t dark:border-slate-700 text-orange-50 flex items-center z-1">
          <Rodape/>
        </footer>
      </body>
    </html>
  );
}
