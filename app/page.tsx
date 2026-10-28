'use client'
import Image from "next/image";
import { Anton, Libre_Barcode_39, Bai_Jamjuree } from "next/font/google";
import SectionHeader from "@/app/components/SectionHeader";
import BarCode from "@/app/components/BarCode"


import { useEffect, useState } from 'react';

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

const barcodeFont = Libre_Barcode_39({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-barcode',
});

const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-baijamjuree",
})



export default function Home() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const progress = Math.min(window.scrollY / 700, 0.8);
      setOpacity(1 - progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>



    <section
      className={`${anton.className} relative flex h-screen w-full items-center overflow-clip`}
    >
      <Image
        src="/images/MainBG.png"
        fill
        priority
        sizes="100vw"
        alt=""
        className={`object-cover -z-10 blur-xs relative top-0`}
        style={{ opacity }}
      />

      <div className={`relative z-10 p-6 flex-3 leading-[0.9] text-[clamp(4rem,10vw,10rem)] text-[#DE424A]`} style={{ opacity }}>
        <h1> DYLAN&apos;S </h1>
        <h1> PORTFOLIO </h1>
        <BarCode content="WELCOME IN A NEW WORLD"></BarCode>
      </div>


      <a
        href="#about"
        aria-label="Go to the content"
        className="absolute bottom-6 left-1/2 z-20
          flex -translate-x-1/2 items-center justify-center
          w-12
          aspect-square
          rounded-full border-2 border-[#DE424A]
          p-3 text-white
          hover:bg-[#DE424A]/20"
        style={{ opacity }}
      >
        <Image
          src="/images/scrolldown.svg"
          alt=""
          width={32}
          height={32}
          className="h-full w-full object-contain"
        />
      </a>

      
    </section>
    <section id="about" className="p-10 mb-10 mt-10">
      <SectionHeader
          title="ABOUT ME"
          subtitle="SOME INFOS"
        />
      <p className={`${baiJamjuree.className} text-[#A6D4DD] text-2xl`}>
        Hello, I am <span className="font-extrabold">Dylan</span> and I am a software developer student. 
        Currently in my 2nd year in <span className="font-extrabold">Besançon</span> for the <span className="font-extrabold">Master Informatique Ingénieurie systèmes et logiciels</span>, 
        I am looking for an opportunity to complete an internship as part of my studies
      </p>
    </section>

    <section id="about" className="p-10 mb-10 mt-10">
      <SectionHeader
        title="MY JOURNEY"
        subtitle="STEPS OF MY LIFE"
      />
    </section>

    </>

  );
}
