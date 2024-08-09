import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CustomCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string; 
  icon?: React.ReactNode; 
}

const CustomCard: React.FC<CustomCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  buttonText,
  buttonUrl,
  icon
}) => {
  return (
    <div className="relative group border border-slate-300 rounded-lg shadow-lg overflow-hidden">
      <div className="relative w-full h-64 transition-all duration-300 ease-in-out group-hover:h-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-sky-600 bg-opacity-60 flex flex-col items-center justify-center text-white transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 z-10">
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <p className="text-center mb-4 mx-4">{description}</p>
          <Link href={buttonUrl}>
            <button className="px-4 py-2 bg-sky-700 rounded-lg hover:bg-sky-700 text-white">
              {buttonText}
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-gradient-to-r from-sky-800 to-sky-500 text-sky-50 p-4 flex items-center transition-all duration-300 ease-in-out group-hover:h-0 group-hover:opacity-0">
        <div className="flex items-center w-full">
          {icon && (
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-semibold mt-2">{icon}</span>
              <div className="h-8 w-px bg-sky-200 mx-2" />
            </div>
          )}
          <span className="text-2xl font-semibold pl-24">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
