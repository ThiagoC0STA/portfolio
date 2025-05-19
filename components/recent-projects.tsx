"use client";

import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";
import { useState } from "react";

import { projects } from "@/data";

import { PinContainer } from "./ui/3d-pin";

type FilterType = "all" | "web" | "mobile";

export const RecentProjects = () => {
  const [filter, setFilter] = useState<FilterType>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Filtrar projetos
  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    if (filter === "mobile")
      return project.type === "mobile" || project.type === "both";
    if (filter === "web")
      return project.type === "web" || project.type === "both";
    return true;
  });

  // Calcular páginas
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, endIndex);

  return (
    <section id="projects" className="md:py-20 py-8">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>

      {/* Filtros */}
      <div className="mt-8 flex justify-center relative z-10">
        <div className="inline-flex rounded-full bg-white/10 p-1">
          <button
            onClick={() => {
              setFilter("all");
              setCurrentPage(1);
            }}
            className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
              filter === "all"
                ? "bg-[#4933a4] text-white shadow-lg"
                : "text-white/60 hover:text-white"
            }`}
          >
            All
          </button>
          <button
            onClick={() => {
              setFilter("web");
              setCurrentPage(1);
            }}
            className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
              filter === "web"
                ? "bg-[#4933a4] text-white shadow-lg"
                : "text-white/60 hover:text-white"
            }`}
          >
            Web
          </button>
          <button
            onClick={() => {
              setFilter("mobile");
              setCurrentPage(1);
            }}
            className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
              filter === "mobile"
                ? "bg-[#4933a4] text-white shadow-lg"
                : "text-white/60 hover:text-white"
            }`}
          >
            Mobile
          </button>
        </div>
      </div>

      <div className="md:mt-10 flex flex-wrap items-center justify-center gap-x-24 gap-y-8 p-4">
        {currentProjects.map(
          ({ id, des, iconLists, img, link, sourceCode, title }) => (
            <div
              key={id}
              className="flex h-[30rem] w-[90vw] items-center justify-center sm:h-[41rem] sm:w-[570px] lg:min-h-[32.5rem]"
            >
              <PinContainer title="Visit" href={link}>
                <div className="relative mb-10 flex h-[18rem] w-[80vw] items-center justify-center overflow-hidden sm:h-[27rem] sm:w-[570px]">
                  <div className="relative h-full w-full overflow-hidden bg-[#13162d] lg:rounded-3xl">
                    <Image
                      height={330}
                      width={552}
                      src="/bg.png"
                      alt="bg-img"
                      quality={100}
                    />
                  </div>

                  <Image
                    height={0}
                    width={1000}
                    src={img}
                    alt={title}
                    quality={100}
                    className="absolute -bottom-24 z-10 -rotate-2 rounded-tr-3xl rounded-tl-3xl w-[500px] h-full object-cover object-top"
                  />
                </div>

                <h1 className="line-clamp-1 text-base font-bold md:text-xl lg:text-2xl">
                  {title}
                </h1>

                <p className="line-clamp-2 text-sm font-light lg:text-xl lg:font-normal">
                  {des}
                </p>

                <div className="mb-3 mt-7 flex items-center justify-between">
                  <div className="flex items-center">
                    {iconLists.map(({ Icon, color }, i) => (
                      <span
                        key={i}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.2] bg-black lg:h-10 lg:w-10"
                        style={{
                          transform: `translateX(-${5 * i * 2}px)`,
                        }}
                      >
                        <Icon className="text-2xl" style={{ color }} />
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-center">
                    {sourceCode ? (
                      <>
                        <Link
                          href={sourceCode}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="flex text-sm text-purple md:text-xs lg:text-[18px]"
                        >
                          Source Code
                        </Link>
                        <FaLocationArrow className="ms-2" color="#cbacf9" />
                      </>
                    ) : (
                      <span className="flex items-center text-sm text-gray-400 md:text-xs lg:text-[18px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                          />
                        </svg>
                        Private Code
                      </span>
                    )}
                  </div>
                </div>
              </PinContainer>
            </div>
          )
        )}
      </div>

      {/* Paginação */}
      {totalPages > 1 && (
        <div className="mt-8 flex justify-center gap-2 relative z-10">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                currentPage === page
                  ? "bg-[#4933a4] text-white"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </section>
  );
};
