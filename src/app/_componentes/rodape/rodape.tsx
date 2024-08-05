import React from "react";
import Image from "next/image";
import Logo from "../logo.png";

const Rodape = () => {
  return (
    <div className="bg-orange-900 text-sky-50 px-8 py-4 border-t border-slate-700">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
        {/* Seção da logo e texto */}
        <div className="flex flex-col items-center md:items-start">
          <Image src={Logo} alt="Logo JPSystem" className="mb-4" />
          <p className="text-center md:text-left mb-4">
            Texto texto texto texto texto texto texto texto texto texto.
          </p>
          <div className="flex space-x-2">
            <span>😊</span>
            <span>😊</span>
            <span>😊</span>
          </div>
        </div>
        {/* Seção de endereço */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-bold mb-2">Endereço</h3>
          <address className="not-italic mb-4 text-center md:text-left">
            Avenida Juaquina Ramalho, 1350
            <br />
            CEP 02117-020 São Paulo - SP
            <br />
            Email: jpsystem@gmail.com
            <br />
            Fone: (11) 95481-2706
          </address>
        </div>
        {/* Seção de últimos posts */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-bold mb-2">Últimos posts</h3>
          <div className="flex flex-col space-y-2">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-white text-black mr-2"></div>
              <p>Texto texto texto texto texto texto texto texto texto.</p>
            </div>
            <div className="flex items-start">
              <div className="w-12 h-12 bg-white text-black mr-2"></div>
              <p>Texto texto texto texto texto texto texto texto texto.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>
          Copyright 2024 JP System Ltda. Todos os direitos reservados.
          Desenvolvido internamente.
        </p>
      </div>
    </div>
  );
};

export default Rodape;
