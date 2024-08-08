"use client";

import React from "react";
import Image from "next/image";
import Logo from "../logo.png";
import { SocialIcon } from "react-social-icons";
import { Button } from "@/components/ui/button";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephoneFill } from "react-icons/bs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const HeaderContact = () => {
  return (
    <div className="bg-sky-900 text-slate-50 px-4 py-2 flex justify-between items-center">
      {/* Seção da logo */}
      <div className="flex items-center">
        <Image src={Logo} alt="Logo JPSystem" width={100} height={100} />
      </div>
      {/* Seção Contato */}
      <div className="flex-1 flex justify-center space-x-8 text-sm">
        <div className="flex items-center gap-2">
          <BsTelephoneFill className="text-orange-400" />
          <span>(11) 95481-2706</span>
        </div>
        <div className="flex items-center gap-2">
          <HiOutlineMail className="text-orange-400" />
          <span>jpsystem@gmail.com</span>
        </div>
      </div>
      {/* Seção redes sociais */}
      <div className="flex space-x-2">
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
  );
};

const Cabecalho = () => {
  return (
    <>
      {/* Header de Contato */}
      <HeaderContact />
      {/* Header Principal */}
      <div className="bg-sky-900 text-slate-50 px-6 py-3 border-b border-slate-700">
        <div className="flex items-center justify-center">
          {/* Seção de navegação */}
          <nav className="flex space-x-6 text-base">
            <Link href="/home" passHref>
              <Button
                className="hover:text-orange-400 transition-all duration-200"
                variant="ghost"
              >
                Home
              </Button>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="hover:text-orange-400 transition-all duration-200"
                  variant="ghost"
                >
                  Serviços
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-sky-900 border-none text-slate-50">
                <DropdownMenuGroup>
                  <Link href="/servicos/consultoria-de-ti" passHref>
                    <DropdownMenuItem asChild>
                      <span className="hover:text-orange-400 transition-all duration-200">
                        Consultoria de TI
                      </span>
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/servicos/desenvolvimento" passHref>
                    <DropdownMenuItem asChild>
                      <span className="hover:text-orange-400 transition-all duration-200">
                        Desenvolvimento
                      </span>
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/servicos/software-com-servico" passHref>
                    <DropdownMenuItem asChild>
                      <span className="hover:text-orange-400 transition-all duration-200">
                        Software com serviço
                      </span>
                    </DropdownMenuItem>
                  </Link>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="hover:text-orange-400 transition-all duration-200"
                  variant="ghost"
                >
                  Blog
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-sky-900 border-none text-slate-50">
                <DropdownMenuGroup>
                  <Link href="/blog/news" passHref>
                    <DropdownMenuItem asChild>
                      <span className="hover:text-orange-400 transition-all duration-200">
                        News
                      </span>
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/blog/domine-ti" passHref>
                    <DropdownMenuItem asChild>
                      <span className="hover:text-orange-400 transition-all duration-200">
                        Domine TI
                      </span>
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/blog/reflexoes" passHref>
                    <DropdownMenuItem asChild>
                      <span className="hover:text-orange-400 transition-all duration-200">
                        Reflexões
                      </span>
                    </DropdownMenuItem>
                  </Link>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="hover:text-orange-400 transition-all duration-200"
                  variant="ghost"
                >
                  Quem Somos
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-sky-900 border-none text-slate-50">
                <DropdownMenuGroup>
                  <Link href="/quem-somos/sobre" passHref>
                    <DropdownMenuItem asChild>
                      <span className="hover:text-orange-400 transition-all duration-200">
                        Sobre a JPSystem
                      </span>
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/quem-somos/pilares" passHref>
                    <DropdownMenuItem asChild>
                      <span className="hover:text-orange-400 transition-all duration-200">
                        Nossos pilares
                      </span>
                    </DropdownMenuItem>
                  </Link>
                  <Link href="/quem-somos/tecnologia" passHref>
                    <DropdownMenuItem asChild>
                      <span className="hover:text-orange-400 transition-all duration-200">
                        Tecnologia
                      </span>
                    </DropdownMenuItem>
                  </Link>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/contato" passHref>
              <Button
                className="hover:text-orange-400 transition-all duration-200"
                variant="ghost"
              >
                Contato
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Cabecalho;
