"use client";

import React from "react";
import Image from "next/image";
import Logo from "../logo.png";
import { SocialIcon } from "react-social-icons";
import { Button } from "@/components/ui/button";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephoneFill } from "react-icons/bs";
import { Separator } from "@/components/ui/separator";
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
    <div className="flex justify-center">
      {/* Seção da logo */}
      <div className="bg-orange-900">
        <Image src={Logo} alt="Logo JPSystem" />
      </div>
      {/* Parte laranja */}
      <div className="bg-orange-900 text-orange-50 px-4 py-2 flex-1 flex items-center justify-center">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <BsTelephoneFill className="text-orange-50" />
            <span>(11)95481-2706</span>
          </div>
          <div className="flex items-center gap-2">
            <HiOutlineMail className="text-orange-50" />
            <span>jpsystem@gmail.com</span>
          </div>
        </div>
      </div>
      {/* Divisor
      <div className="bg-black w-1"></div> */}
      {/* Parte cinza escuro */}
      <div className="bg-orange-900 text-orange-50 px-4 py-2 flex-1 flex items-center justify-end">
        <div className="flex space-x-2">
          <SocialIcon
            bgColor="#00431407"
            style={{ height: 25, width: 25 }}
            url="https://www.linkedin.com/company/jpsystem/"
          />
        </div>
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
      <div className="bg-orange-900 text-slate-50 px-4 py-2 border-b border-slate-700">
        <div className="flex items-center justify-center">
          {/* Seção de navegação */}
          <nav className="flex space-x-4 items-center">
            <Link href="/home" passHref>
              <Button className="text-lg hover:bg-transparent" variant="ghost">
                Home
              </Button>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="text-lg hover:bg-transparent" variant="ghost">
                  Serviços
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-orange-900 border-none text-slate-50">
                <DropdownMenuGroup>
                  <Link href="/servicos/consultoria-de-ti" passHref>
                    <DropdownMenuItem asChild>
                      <span>Consultoria de TI</span>
                    </DropdownMenuItem>
                  </Link>
                  <Separator className="my-2" />
                  <Link href="/servicos/desenvolvimento" passHref>
                    <DropdownMenuItem asChild>
                      <span>Desenvolvimento</span>
                    </DropdownMenuItem>
                  </Link>
                  <Separator className="my-2" />
                  <Link href="/servicos/software-com-servico" passHref>
                    <DropdownMenuItem asChild>
                      <span>Software com serviço</span>
                    </DropdownMenuItem>
                  </Link>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="text-lg hover:bg-transparent" variant="ghost">
                  Blog
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-orange-900 border-none text-slate-50">
                <DropdownMenuGroup>
                  <Link href="/blog/news" passHref>
                    <DropdownMenuItem asChild>
                      <span>News</span>
                    </DropdownMenuItem>
                  </Link>
                  <Separator className="my-2" />
                  <Link href="/blog/domine-ti" passHref>
                    <DropdownMenuItem asChild>
                      <span>Domine TI</span>
                    </DropdownMenuItem>
                  </Link>
                  <Separator className="my-2" />
                  <Link href="/blog/reflexoes" passHref>
                    <DropdownMenuItem asChild>
                      <span>Reflexões</span>
                    </DropdownMenuItem>
                  </Link>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="text-lg hover:bg-transparent" variant="ghost">
                  Quem Somos
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-orange-900 border-none text-slate-50">
                <DropdownMenuGroup>
                  <Link href="/quem-somos/sobre" passHref>
                    <DropdownMenuItem asChild>
                      <span>Sobre a JPSystem</span>
                    </DropdownMenuItem>
                  </Link>
                  <Separator className="my-2" />
                  <Link href="/quem-somos/pilares" passHref>
                    <DropdownMenuItem asChild>
                      <span>Nossos pilares</span>
                    </DropdownMenuItem>
                  </Link>
                  <Separator className="my-2" />
                  <Link href="/quem-somos/tecnologia" passHref>
                    <DropdownMenuItem asChild>
                      <span>Tecnologia</span>
                    </DropdownMenuItem>
                  </Link>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/contato" passHref>
              <Button className="text-lg hover:bg-transparent" variant="ghost">
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
