import Image from "next/image";
import Image1 from "../app/_componentes/1589821611604.png"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="">
      <Image src={Image1} alt="Logo JPSystem" />
      </div>
    </main>
  );
}
