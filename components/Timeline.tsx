
"use client";

import { useState } from 'react';

import { baiJamjuree } from '@/fonts';


type TimelineStep = {
  period: string;
  title: string;
  description: string;
};

const steps: TimelineStep[] = [
  {
    period: "2015 - 2019",
    title: "Collège du Rhin - Drusenheim",
    description:
      "Interest in computer science, first steps in programming with Scratch (designing programs and simple games).",
  },
  {
    period: "2019 - 2020",
    title: "Lycée André Maurois - Bischwiller",
    description:
      "Getting Started with Python and switching school to specialize in Computer Science.",
  },
  {
    period: "2020 - 2022",
    title: "Lycée Heinrich Nessel - Haguenau",
    description:
      "Chose the NSI specialization, with a focus on Python development and some theorical aspects. Obtained the Baccalauréat with \"good\" mention.",
  },
  {
    period: "2022 - 2025",
    title: "Licence Informatique - Université de Strasbourg",
    description:
      "An introduction to computer science theory, how computers work, and processes. An introduction to various programming languages (C, Java, HTML, JS, Haskell, Shell, etc.).",
  },
  {
    period: "2025 - Now",
    title: "Master Ingénieurie systèmes et logiciels - Besançon",
    description:
      "Applying my skills in project settings and learning about team management methods.",
  },
  {
    period: "Future",
    title: "Next steps",
    description:
      "Keep learning and make my first steps in the work life",
  },
];

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStep = steps[activeIndex];

  return (
    <section className="w-full space-y-6 p-4 sm:p-10">
      {/* Navigation de la chronologie */}
      <div className="flex w-full items-center">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="flex min-w-0 flex-1 items-center last:flex-none"
          >
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`${step.title}, ${step.period}`}
              aria-current={index === activeIndex ? "step" : undefined}
              className="relative flex h-6 w-6 shrink-0 items-center
                justify-center rounded-full border-2 border-[#DE424A]
                transition-transform duration-200 hover:scale-110
                focus-visible:outline-2 focus-visible:outline-offset-4
                focus-visible:outline-[#DE424A] sm:h-9 sm:w-9"
            >
              {index === activeIndex && (
                <span className="h-2.5 w-2.5 rounded-full bg-[#DE424A] sm:h-4 sm:w-4" />
              )}
            </button>

            {index < steps.length - 1 && (
              <div className="h-0.5 min-w-0 flex-1 bg-[#DE424A]" />
            )}
          </div>
        ))}
      </div>

      {/* Contenu de l'étape active */}
      <div aria-live="polite" key={activeIndex}>
        <p className={`${baiJamjuree.className} mb-1 text-sm text-[#9abfc4]`}>
          {activeStep.period}
        </p>

        <h2
          className={`${baiJamjuree.className} text-2xl font-normal text-[#DE424A] sm:text-4xl`}
        >
          {activeStep.title}
        </h2>

        <p
          className={`${baiJamjuree.className} mt-3 text-base leading-relaxed text-[#b3d0d4]`}
        >
          {activeStep.description}
        </p>
      </div>
    </section>
  );
}
