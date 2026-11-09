'use client'

// --- Externs ---
import Image from 'next/image';
import { anton, baiJamjuree } from '@/fonts';

// --- Components ---
import SectionHeader from '@/components/SectionHeader';
import BarCode from '@/components/BarCode';
import Timeline from '@/components/Timeline';
import ProjectCarousel from '@/components/ProjectCarousel';


import { useEffect, useState } from 'react';


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
        className={`${anton.className} relative flex h-dvh w-full items-center overflow-clip`}
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

        <div className={`relative z-10 p-6 flex-3 leading-[0.9] text-[clamp(4rem,15vw,10rem)] text-[#DE424A]`} style={{ opacity }}>
          <h1> DYLAN&apos;S </h1>
          <h1> PORTFOLIO </h1>
          <BarCode content="WELCOME IN A NEW WORLD"></BarCode>
          <h2 className={`${baiJamjuree.className} text-[#A6D4DD] text-[clamp(2rem,3vw,5rem)]`}> Software Developer student </h2>
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
            src="/svg/scrolldown.svg"
            alt=""
            width={32}
            height={32}
            className="h-full w-full object-contain"
          />
        </a>


      </section>
      <section id="about" className="pb-10 pt-10">
        <SectionHeader
          title="ABOUT ME"
          subtitle="SOME INFOS"
        />
        <div className="flex flex-col md:flex-row space-b">
          <p className={`${baiJamjuree.className} text-[#A6D4DD] text-2xl flex-1 ml-10`}>

            Hello, I am <span className="font-extrabold">Dylan Monteneri</span>.
            <br /><br />
            I'm a software engineering student, currently pursuing my second year of a Master's degree in Computer Science, specializing in Systems and Software Engineering in Besançon, France.
            I particularly enjoy tackling technical challenges, solving problems and putting my skills to work for a team. I want to continue to learn new technologies and improve my skills through new projects. <br />
            I'm currently looking for an internship opportunity where I can contribute to real-world projects,
            gain professional experience and continue growing as a developer.
          </p>
          <p className="flex-1"></p>
        </div>

      </section>

      <section id="about" className="pb-10 pt-10">
        <SectionHeader
          title="MY JOURNEY"
          subtitle="STEPS OF MY LIFE"
        />
        <Timeline />
      </section>

      <section id="projects" className="pb-10 pt-10">
        <SectionHeader
          title="MY PROJECTS"
          subtitle="SOME EXAMPLES OF WORK"
        />
        <ProjectCarousel />
      </section>


    </>

  );
}
