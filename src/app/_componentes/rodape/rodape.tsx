import React from "react";
import Image from "next/image";
import Logo from "../logo.png";
import { SocialIcon } from "react-social-icons";

const Rodape = () => {
  return (
    <footer className="bg-sky-900 text-sky-50 px-8 py-6 border-t border-slate-700">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
        {/* Seção da logo e texto */}
        <div className="flex flex-col items-center md:items-start">
          <Image
            src={Logo}
            alt="Logo JPSystem"
            width={100}
            height={100}
            className="mb-4"
          />
          <p className="text-center md:text-left mb-4 text-sm leading-relaxed">
            Texto texto texto texto texto texto texto texto texto texto texto.
          </p>
          <div className="flex space-x-4">
          <SocialIcon
          bgColor="#1A1A1A"
          style={{ height: 30, width: 30 }}
          url="https://www.linkedin.com/company/jpsystem/"
        />
        <SocialIcon
          url="https://react-social-icons.com"
          bgColor="#1A1A1A"
          style={{ height: 30, width: 30 }}
          network="instagram"
        />
        <SocialIcon
          url="https://react-social-icons.com"
          bgColor="#1A1A1A"
          style={{ height: 30, width: 30 }}
          network="twitter"
        />
        <SocialIcon
          url="https://react-social-icons.com"
          bgColor="#1A1A1A"
          style={{ height: 30, width: 30 }}
          network="youtube"
        />
          </div>
        </div>
        {/* Seção de endereço */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-semibold mb-2 text-lg">Endereço</h3>
          <address className="not-italic mb-4 text-center md:text-left text-sm leading-relaxed">
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
          <h3 className="font-semibold mb-2 text-lg">Últimos posts</h3>
          <div className="flex flex-col space-y-3">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-white text-black mr-3 rounded-md flex items-center justify-center">
                <span className="text-black">📄</span>
              </div>
              <p className="text-sm leading-relaxed">
                Texto texto texto texto texto texto texto texto texto.
              </p>
            </div>
            <div className="flex items-start">
              <div className="w-12 h-12 bg-white text-black mr-3 rounded-md flex items-center justify-center">
                <span className="text-black">📄</span>
              </div>
              <p className="text-sm leading-relaxed">
                Texto texto texto texto texto texto texto texto texto.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 text-sm">
        <p>
          © 2024 JP System Ltda. Todos os direitos reservados. Desenvolvido
          internamente.
        </p>
      </div>
    </footer>
  );
};

export default Rodape;
