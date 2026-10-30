'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { projects, type Project } from '@/data/projects';

function getLinkLabel(url: string) {
  if (url.includes('github.com')) return 'See on GitHub';
  if (url.includes('figma.com')) return 'See on Figma';
  return 'See the project';
}

export default function ProjectCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    slidesToScroll: 1,
    duration: 30,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  function handleProjectClick(index: number) {
    if (!emblaApi) return;

    if (index !== selectedIndex) {
      emblaApi.scrollTo(index);
      return;
    }

    setSelectedProject(projects[index]);
  }

  const closeModal = () => setSelectedProject(null);

  return (
    <section className="w-full overflow-hidden py-12">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="min-w-0 flex-[0_0_82%] pl-3 sm:flex-[0_0_72%] md:flex-[0_0_68%] lg:flex-[0_0_62%]"
            >
              <button
                type="button"
                onClick={() => handleProjectClick(index)}
                aria-label={
                  index === selectedIndex
                    ? `Open ${project.title}`
                    : `Center ${project.title}`
                }
                className="group relative block w-full overflow-hidden rounded-2xl text-left"
              >
                <div className="relative h-75 overflow-hidden rounded-2xl sm:h-95 md:h-120">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-5 text-[#A6D4DD] sm:p-7 md:p-9">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#A6D4DD]/75">
                      {project.category}
                    </p>

                    <h2 className="mt-2 text-2xl font-medium md:text-5xl">
                      {project.title}
                    </h2>

                    {index === selectedIndex && (
                      <p className="mt-3 text-sm text-[#A6D4DD]/80">
                        Cick to discover
                      </p>
                    )}
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-5">
        <button
          type="button"
          onClick={() => emblaApi?.scrollPrev()}
          aria-label="Projet précédent"
          className="flex h-10 w-10 items-center justify-center rounded-full text-2xl text-current/60 transition hover:bg-current/5 hover:text-current"
        >
          ‹
        </button>

        <button
          type="button"
          onClick={() => emblaApi?.scrollNext()}
          aria-label="Projet suivant"
          className="flex h-10 w-10 items-center justify-center rounded-full text-2xl text-current/60 transition hover:bg-current/5 hover:text-current"
        >
          ›
        </button>
      </div>

      <Popup
        open={selectedProject !== null}
        onClose={closeModal}
        modal
        lockScroll
        closeOnDocumentClick
        overlayStyle={{
          background: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(4px)',
        }}
        contentStyle={{
          background: 'transparent',
          border: 'none',
          padding: 0,
          width: 'auto',
          maxWidth: '90vw',
        }}
      >
        {selectedProject && (
          <div
            role="dialog"
            aria-label={selectedProject.title}
            className="relative flex max-h-[90vh] w-[min(90vw,900px)] flex-col overflow-hidden rounded-2xl bg-[#101719] text-[#A6D4DD] shadow-2xl"
          >
            <button
              type="button"
              onClick={closeModal}
              aria-label="Fermer le modal"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-2xl text-white transition hover:bg-black/80"
            >
              ×
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="h-48 w-full shrink-0 object-cover sm:h-72"
            />

            <div className="overflow-y-auto p-6 sm:p-10">
              <p className="text-xs uppercase tracking-[0.2em] text-[#A6D4DD]/70">
                {selectedProject.category}
              </p>

              <h2 className="mt-3 text-3xl font-medium sm:text-5xl">
                {selectedProject.title}
              </h2>

              {/* whitespace-pre-line interprète les \n de la description */}
              <p className="mt-5 whitespace-pre-line leading-relaxed text-[#A6D4DD]/80">
                {selectedProject.description}
              </p>

              {selectedProject.techno && selectedProject.techno.length > 0 && (
                <div className="mt-6">
                  <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#A6D4DD]/70">
                    Technologies
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {selectedProject.techno.map((tech) => (
                      <li key={tech.name}>
                        <a
                          href={tech.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block rounded-full border border-[#A6D4DD]/30 px-3 py-1 text-sm transition hover:bg-[#A6D4DD]/10"
                        >
                          {tech.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="flex flex-row flex-wrap gap-3">
                {selectedProject.links.map((link) => (
                  <a
                    key={link}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#DE424A] px-6 py-3 text-sm font-medium text-white transition hover:brightness-110"
                  >
                    {getLinkLabel(link)} ↗
                  </a>
                ))}
              </div>


            </div>
          </div>
        )}
      </Popup>
    </section>
  );
}