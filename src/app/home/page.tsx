"use client";

import React, { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { BsTelephoneInbound } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import Image1 from "@/app/_componentes/Imagemdenuvem.jpg";
import Image2 from "@/app/_componentes/Saas.png";
import BannerImage from "@/app/_componentes/Imagemdenuvem.jpg";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 8000 })] // Autoplay a cada 8 segundos
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

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

  const slides = [Image1, Image2]; // Use as imagens importadas

  return (
    <main className="flex min-h-screen flex-col mt-2">
      {/* Começo do carousel */}
      <div
        className="relative w-[calc(80%-40px)] px-4 mx-auto border-2 border-slate-900"
        style={{ marginBottom: "calc(50px + 10vh)" }}
      >
        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex">
            {slides.map((src, index) => (
              <div
                key={index}
                className="flex flex-shrink-0 w-full h-[300px] relative"
              >
                <Image
                  src={src}
                  alt={`Slide ${index}`}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="100vw"
                />
              </div>
            ))}
          </div>
          <button
            className="absolute top-1/2 left-8 transform -translate-y-1/2 z-10 p-2 text-2xl text-black rounded-full"
            onClick={() => emblaApi && emblaApi.scrollPrev()}
            aria-label="Previous slide"
          >
            &lt;
          </button>
          <button
            className="absolute top-1/2 right-8 transform -translate-y-1/2 z-10 p-2 text-2xl text-black rounded-full"
            onClick={() => emblaApi && emblaApi.scrollNext()}
            aria-label="Next slide"
          >
            &gt;
          </button>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`h-3 w-3 rounded-full ${
                index === selectedIndex ? "bg-orange-500" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => emblaApi && emblaApi.scrollTo(index)}
            />
          ))}
        </div>
      </div>
      {/* Fim do carousel */}
      {/* Começo Seção conteúdo */}
      <div className="border-2 border-slate-800 m-6 bg-orange-50">
        <div className="flex flex-row items-center justify-between ml-12 mr-6 mt-11 mb-6">
          <div className="flex flex-col w-1/2">
            <h1 className="text-orange-900 text-5xl text-left">
              What is Lorem Ipsum?
            </h1>
            <span className="mt-6 text-left mr-6 text-orange-800">
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
            </span>
          </div>
          <div className="relative border-2 border-slate-800 shadow-lg rounded-lg overflow-hidden w-1/3 h-[300px] mr-6">
            <Image
              src={Image1}
              alt="Imagem"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="flex items-center mt-6 mb-6">
          <span className="text-2xl text-orange-900 mr-4 relative ml-6">
            Divisor
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 mt-0.5 ml-4 h-1 w-10 bg-orange-800" />
          </span>
        </div>
        <div className="mb-4">
          <div className="flex flex-row flex-wrap gap-6 justify-center mr-6">
            <Card className="w-[350px]">
              <CardHeader>
                <div className="flex flex-col space-y-1.5"></div>
                <Image
                  src={Image1}
                  alt="Imagem"
                  className="object-cover w-full h-full"
                />
              </CardHeader>
              <CardContent>
                <CardTitle>Titulo Card</CardTitle>
                <CardDescription>Conteúdo Card</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between"></CardFooter>
            </Card>
            <Card className="w-[350px]">
              <CardHeader>
                <div className="flex flex-col space-y-1.5"></div>
                <Image
                  src={Image1}
                  alt="Imagem"
                  className="object-cover w-full h-full"
                />
              </CardHeader>
              <CardContent>
                <CardTitle>Titulo Card</CardTitle>
                <CardDescription>Conteúdo Card</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between"></CardFooter>
            </Card>
            <Card className="w-[350px]">
              <CardHeader>
                <div className="flex flex-col space-y-1.5"></div>
                <Image
                  src={Image1}
                  alt="Imagem"
                  className="object-cover w-full h-full"
                />
              </CardHeader>
              <CardContent>
                <CardTitle>Titulo Card</CardTitle>
                <CardDescription>Conteúdo Card</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between"></CardFooter>
            </Card>
          </div>
        </div>
      </div>
      {/* Banner Contato */}
      <div className="flex items-center p-4 shadow-lg rounded-lg mt-6 mx-6 w-[50%] bg-orange-50 border-2 border-slate-900 justify-center mb-4">
        <div className="flex items-center justify-center w-12 h-12 bg-red-500 rounded-full mr-4">
          <BsTelephoneInbound className="text-white w-6 h-6" />
        </div>
        <div className="flex flex-col">
          <span className="text-gray-700 text-sm">
            Entre em contato conosco
          </span>
          <span className="text-blue-900 text-2xl font-bold mr-6">
            (11)95481-2706
          </span>
        </div>
        <div className="flex items-center justify-center w-12 h-12 bg-red-500 rounded-full mr-4">
          <MdEmail className="text-white w-6 h-6" />
        </div>
        <div className="flex flex-col">
          <span className="text-gray-700 text-sm">
            Entre em contato conosco
          </span>
          <span className="text-blue-900 text-2xl font-bold">
            jpsystem@gmail.com
          </span>
        </div>
      </div>
    </main>
  );
}
