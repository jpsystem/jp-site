import React from "react";
import Image from "next/image";
import Logo from "../logo.png";

const Rodape = () => {
  return (
    <div className="bg-orange-900 text-orange-50 px-4 py-2 flex flex-col sm:flex-row justify-between items-start sm:items-center border-t border-slate-700">
      <div className="flex items-center space-x-4">
        {/* Placeholder para a logo */}
        <Image src={Logo} alt="Logo" />
        <div className="text-xs">
          <p>Texto texto texto texto texto texto.</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row sm:space-x-4 mt-2 sm:mt-0">
        <div>
          <h3 className="font-bold">Endereço</h3>
          <address className="text-xs not-italic">
            Avenida Juaquina Ramalho, 1350
            <br />
            CEP 02117-020 São Paulo - SP
            <br />
            Email: jpsystem@gmail.com
            <br />
            Fone: 11 95481-2706
          </address>
        </div>
        <div className="mt-2 sm:mt-0">
          <h3 className="font-bold">Últimos posts</h3>
          <div className="text-xs space-y-2">
            <p>Texto texto texto texto texto texto.</p>
            <p>Texto texto texto texto texto texto.</p>
          </div>
        </div>
      </div>
      <div className="text-xs mt-2 sm:mt-0">
        <p>
          2024 JP System Ltda. Todos os direitos reservados. Desenvolvido
          internamente.
        </p>
      </div>
    </div>
  );
};

export default Rodape;
