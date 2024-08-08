"use client";

import React, { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { AiFillAlert } from "react-icons/ai";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  BsChevronLeft,
  BsChevronRight,
  BsTelephoneInbound,
} from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import Image1 from "@/app/_componentes/Imagemdenuvem.jpg";
import Image2 from "@/app/_componentes/Saas.png";

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 8000 })] // Autoplay a cada 8 segundos
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

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
        {/* <!-- Card 1 --> */}
        <Card className="relative group border border-slate-300 rounded-lg shadow-lg overflow-hidden">
          {/* Imagem do Card */}
          <CardHeader className="p-0">
            <Image
              src={Image1}
              alt="Imagem descritiva"
              className="object-cover w-full h-full"
            />
          </CardHeader>
          {/* Conteúdo sobreposto ao passar o mouse */}
          <div className="absolute inset-0 bg-sky-600 bg-opacity-60 flex flex-col items-center justify-center text-white transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 z-10">
            <BsChevronLeft className="text-4xl mb-4" />
            <h2 className="text-2xl font-bold mb-4">Consultoria de TI</h2>
            <p className="text-center mb-4">
              Auxiliamos a sua empresa a tomar a melhor decisão referente a
              tecnologia, propondo soluções inovadoras e aderentes ao seu
              negócio.
            </p>
            <button className="px-4 py-2 bg-sky-500 rounded-lg hover:bg-sky-600 text-white">
              Conheça
            </button>
          </div>
          {/* Conteúdo do Card */}
          <CardContent className="p-4">
            <CardTitle className="text-2xl font-bold mb-4 text-center">
              Consultoria de TI
            </CardTitle>
            <p className="text-center mb-4">texto vai ficar aqui</p>
          </CardContent>
          <CardFooter className="bg-gradient-to-r from-sky-800 to-sky-500 text-sky-50 p-4 flex items-center">
            <div className="flex items-center space-x-4 w-full">
              <div className="flex items-center space-x-2">
                <AiFillAlert className="text-4xl" />
                <div className="h-8 w-px bg-sky-200 mx-2" />
                {/* Divisor vertical */}
                <span className="text-2xl font-semibold pl-24">
                  Título do Alerta
                </span>
              </div>
            </div>
          </CardFooter>
        </Card>

        {/* <!-- Card 2 --> */}
        <Card className="relative group border border-slate-300 rounded-lg shadow-lg overflow-hidden flex flex-col">
          {/* Conteúdo sobreposto ao passar o mouse */}
          <div className="absolute inset-0 bg-sky-600 bg-opacity-60 flex flex-col items-center justify-center text-white transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 z-10">
            <BsChevronLeft className="text-4xl mb-4" />
            <h2 className="text-2xl font-bold mb-4">Consultoria de TI</h2>
            <p className="text-center mb-4">
              Auxiliamos a sua empresa a tomar a melhor decisão referente a
              tecnologia, propondo soluções inovadoras e aderentes ao seu
              negócio.
            </p>
            <button className="px-4 py-2 bg-sky-500 rounded-lg hover:bg-sky-600 text-white">
              Conheça
            </button>
          </div>
          {/* Conteúdo do Card */}
          <CardContent className="p-4 flex-grow">
            <Image
              src={Image1}
              alt="Imagem descritiva"
              className="object-cover w-full h-60" /* Ajuste a altura da imagem */
            />
          </CardContent>
          <CardFooter className="bg-gradient-to-r from-sky-800 to-sky-500 text-sky-50 p-4 flex items-center">
            <div className="flex items-center space-x-4 w-full">
              <div className="flex items-center space-x-2">
                <AiFillAlert className="text-4xl" />
                <div className="h-8 w-px bg-sky-200 mx-2" />
                <span className="text-2xl font-semibold pl-24">
                  Título do Alerta
                </span>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
      {/* Fim Cartões de Conteúdo */}
      {/* Banner de Contato */}
      <div className="flex flex-col sm:flex-row items-center justify-between p-4 shadow-lg rounded-lg mt-6 mb-8 mx-auto w-full sm:w-[60%] bg-sky-50 border border-sky-900">
        <div className="flex items-center w-full sm:w-1/2 ml-12">
          <div className="flex items-center justify-center w-12 h-12 bg-sky-700 rounded-full mr-3">
            <BsTelephoneInbound className="text-white w-6 h-6" />
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
        {/* Divisor vertical */}
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
