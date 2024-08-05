import React from "react";
import Image from "next/image";
import Logo from "../logo.png";
import { SocialIcon } from "react-social-icons";
import { Button } from "@/components/ui/button";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephoneFill } from "react-icons/bs";
import { Separator } from "@/components/ui/separator"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Cabecalho = () => {
  return (
    <div className="bg-orange-900 text-orange-50 px-4 py-2 border-b border-slate-700">
      <div className="flex flex-col sm:flex-row items-center justify-between">
        {/* Seção da logo */}
        <div className="flex items-center justify-center">
          <Image src={Logo} alt="Logo JPSystem" />
        </div>
        {/* Seção de contato */}
        <div className="flex flex-row-reverse items-center mt-0 sm:mt-0 sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 gap-8">
          <div className="flex items-center gap-2">
          <BsTelephoneFill className="fill-white" />
            <span>(11)95481-2706</span>
          </div>
          <div className="flex items-center gap-2">
            <HiOutlineMail />
            <span>jpsystem@gmail.com</span>
          </div>
        </div>
        {/* Seção de ícones de mídia social */}
        <div className="flex space-x-2 mr-2 sm:mt-0">
          <SocialIcon
            style={{ height: 25, width: 25 }}
            url="https://www.linkedin.com/company/jpsystem/"
          />
        </div>
      </div>
      {/* Seção de navegação */}
      <nav className="flex justify-center space-x-4 mt-2">
        <Button className="text-lg hover:bg-transparent" variant="ghost">
          Home
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="text-lg hover:bg-transparent text-slate-50" variant="ghost">
              Serviços
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 text-lg text-slate-800 border-none opacity-80">
            <DropdownMenuGroup>
              <DropdownMenuItem>Consultoria de TI</DropdownMenuItem>
              <Separator className="my-2" />
              <DropdownMenuItem>Desenvolvimento</DropdownMenuItem>
              <Separator className="my-2" />
              <DropdownMenuItem>Software com serviço</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="text-lg hover:bg-transparent" variant="ghost">
              Blog
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-orange-900 border-none text-orange-50">
            <DropdownMenuGroup>
              <DropdownMenuItem>News</DropdownMenuItem>
              <Separator className="my-2" />
              <DropdownMenuItem>Domine TI</DropdownMenuItem>
              <Separator className="my-2" />
              <DropdownMenuItem>Reflexões</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="text-lg hover:bg-transparent" variant="ghost">
              Quem Somos
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-orange-900 border-none text-orange-50">
            <DropdownMenuGroup>
              <DropdownMenuItem>Sobre a JPSystem</DropdownMenuItem>
              <Separator className="my-2" />
              <DropdownMenuItem>Nossos pilares</DropdownMenuItem>
              <Separator className="my-2" />
              <DropdownMenuItem>Tecnologia</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button className="text-lg hover:bg-transparent" variant="ghost">
          Contato
        </Button>
      </nav>
    </div>
  );
};

export default Cabecalho;
