import React from "react";
import Image from "next/image";
import Logo from "../logo.png";

const Cabecalho = () => {
  return (
    <div className="bg-orange-900 text-orange-50 px-4 py-2 border-b border-slate-700">
      <div className="flex flex-col sm:flex-row items-center justify-between">
        {/* Seção da logo */}
        <div className="flex items-center space-x-4">
          <Image src={Logo} alt="Logo" />
        </div>
        {/* Seção de contato */}
        <div className="flex items-center mt-2 sm:mt-0 sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 gap-10">
          <span>📞 +55(11)95481-2706</span>
          <span>📧 jpsystem@gmail.com</span>
        </div>
        {/* Seção de ícones de mídia social */}
        <div className="flex space-x-2 mt-2 sm:mt-0">
          <span>🙂</span>
          <span>🙂</span>
          <span>🙂</span>
        </div>
      </div>
      {/* Seção de navegação */}
      <nav className="flex justify-center space-x-4 mt-2">
        <a href="#" className="hover:underline">
          HOME
        </a>
        <a href="#" className="hover:underline">
          SERVIÇOS
        </a>
        <a href="#" className="hover:underline">
          BLOG
        </a>
        <a href="#" className="hover:underline">
          QUEM SOMOS
        </a>
        <a href="#" className="hover:underline">
          CONTATO
        </a>
      </nav>
    </div>
  );
};

export default Cabecalho;
