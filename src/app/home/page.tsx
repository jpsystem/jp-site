"use client";

import React, { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import CustomCard from "@/app/_componentes/conteudo/Card";
import { AiFillBank } from "react-icons/ai";
import { BsTelephoneInbound } from "react-icons/bs";
import { AiOutlineRocket } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { AiFillCar } from "react-icons/ai";
import Image1 from "/public/imagens/Imagemdenuvem.jpg";
import Image2 from "/public/imagens/Saas.png";


export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 8000 })] // Autoplay a cada 8 segundos
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  // const scrollPrev = useCallback(() => {
  //   if (emblaApi) emblaApi.scrollPrev();
  // }, [emblaApi]);

  // const scrollNext = useCallback(() => {
  //   if (emblaApi) emblaApi.scrollNext();
  // }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (emblaApi) {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    }
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", onSelect);
      onSelect(); // Inicializa o índice selecionado
    }
    return () => {
      if (emblaApi) {
        emblaApi.off("select", onSelect);
      }
    };
  }, [emblaApi, onSelect]);

  const slides = [
    { src: Image1, text: "Texto para a imagem 1", buttonLabel: "Saiba mais" },
    { src: Image2, text: "Texto para a imagem 2", buttonLabel: "Saiba mais" },
  ]; // Use as imagens importadas

  return (
    <main className="flex min-h-screen flex-col">
      {/* Começo do carousel */}
      <div
        className="relative w-full px-4 mx-auto overflow-hidden"
        style={{ marginBottom: "50px" }}
      >
        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="relative flex flex-shrink-0 w-full h-[500px]"
              >
                <Image
                  src={slide.src}
                  alt={`Slide ${index + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="100vw"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-end p-6">
                  <div className="p-4">
                    <h2 className="text-2xl font-bold mb-4 text-black">
                      {slide.text}
                    </h2>
                    <div className="flex items-center mt-6 mb-6">
                      <span className="text-2xl text-sky-900 mr-4 relative ml-6">
                        <div className="absolute left-full top-1/2 transform -translate-y-1/2 mt-0.5 ml-4 h-1 w-10 bg-sky-800" />
                      </span>
                    </div>
                    <button className="px-4 py-2 bg-sky-500 rounded-lg hover:bg-sky-600 text-white">
                      {slide.buttonLabel}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* botões de nav do carrousel */}
        {/* <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2"
          onClick={scrollPrev}
          aria-label="Slide anterior"
        >
          <BsChevronLeft className="h-5 w-5 text-sky-600" />
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2"
          onClick={scrollNext}
          aria-label="Próximo slide"
        >
          <BsChevronRight className="h-5 w-5 text-sky-600" />
        </button> */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`h-3 w-3 rounded-full ${
                index === selectedIndex ? "bg-sky-500" : "bg-gray-300"
              }`}
              aria-label={`Ir para o slide ${index + 1}`}
              onClick={() => emblaApi && emblaApi.scrollTo(index)}
            />
          ))}
        </div>
      </div>
      {/* Fim do carousel */}
      {/* Começo Seção conteúdo */}
      <div className="border border-slate-300 rounded-lg m-6 p-6 bg-sky-50 shadow-lg">
        <div className="flex flex-row items-center justify-between space-x-6">
          <div className="flex flex-col w-1/2">
            <h1 className="text-sky-900 text-4xl font-bold mb-4">
              What is Lorem Ipsum?
            </h1>
            <p className="text-sky-800 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className="relative w-1/3 h-[300px] rounded-lg overflow-hidden shadow-md">
            <Image
              src={Image1}
              alt="Imagem descritiva"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
      {/* Fim Seção conteúdo */}
      {/* Seção com os Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-6">
        <CustomCard
          imageSrc="/imagens/Pessoas3.jpg" //Imagem do Card
          imageAlt="Serviços de Cloud" //ALT da imagem
          title="Serviços de Cloud" //Titulo do card
          description="Migramos e gerenciamos sua infraestrutura na nuvem para aumentar a eficiência e reduzir custos." //Descrição do Card
          buttonText="Saiba Mais" //Texto do botão
          buttonUrl="#"//URL do botão
          icon={<AiFillBank className="text-4xl mb-4"/>}//Icone do Card
        />
        <CustomCard
          imageSrc="/imagens/Pessoas.jpg" //Imagem do Card
          imageAlt="Serviços de Cloud"//ALT da imagem
          title="Serviços de Carros"//Titulo do card
          description="Migramos e gerenciamos seu Carro apenas de brincadeira hahahaha."//Descrição do Card
          buttonText="Eita lele"//Texto do botão
          buttonUrl="#"//URL do botão
          icon={<AiFillCar className="text-4xl mb-4"/>}//Icone do Card
        />
        <CustomCard
          imageSrc="/imagens/Pessoas2.jpg" //Imagem do Card
          imageAlt="Serviços de Cloud"//ALT da imagem
          title="Serviços de Foguetes"//Titulo do card
          description="Migramos e gerenciamos seu CFoguete apenas de brincadeira hahahaha."//Descrição do Card
          buttonText="Clica Aqui"//Texto do botão
          buttonUrl="#"//URL do botão
          icon={<AiOutlineRocket className="text-4xl mb-4"/>}//Icone do Card
        />
      </div>
      {/* Fim Seção dos Cards*/}
      {/* Banner de Contato */}
      <div className="flex flex-col sm:flex-row items-center justify-between p-4 shadow-lg rounded-lg mt-6 mb-8 mx-auto w-full sm:w-[60%] bg-sky-50 border border-sky-900">
        <div className="flex items-center w-full sm:w-1/2 ml-12">
          <div className="flex items-center justify-center w-12 h-12 bg-sky-700 rounded-full mr-3">
            <BsTelephoneInbound className="text-white w-6 h-6"/>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-600 text-sm">
              Entre em contato conosco
            </span>
            <span className="text-sky-900 text-xl font-bold">
              (11) 95481-2706
            </span>
          </div>
        </div>
        <div className="w-px h-12 bg-gray-300 mx-4 sm:mx-6" />
        {/* Divisor vertical ^ */}
        <div className="flex items-center w-full sm:w-1/2 ml-12">
          <div className="flex items-center justify-center w-12 h-12 bg-sky-700 rounded-full mr-3">
            <MdEmail className="text-white w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-gray-600 text-sm">
              Envie um e-mail para nós
            </span>
            <span className="text-sky-900 text-xl font-bold">
              comercial@jpsystemltda.com.br
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
