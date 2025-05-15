import React from "react";
import { frontendTechsRow1, frontendTechsRow2 } from "@/data";
import { FiArrowLeft } from "react-icons/fi";
import { Spotlight } from "@/components/ui/spotlight";
import Link from "next/link";

const allTechs = [...frontendTechsRow1, ...frontendTechsRow2];

export default function TechsPage() {
  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-start bg-black-100 px-5 sm:px-10 py-12">
      <div>
        <Spotlight
          className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
          fill="white"
        />
        <Spotlight
          className="left-full top-10 h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="absolute inset-0 bg-grid-white/[0.02]" />

      <div className="w-full max-w-6xl mx-auto flex flex-col gap-8">
        <div className="w-full flex justify-start px-1 -mt-2 md:mt-4 relative z-50">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-purple-300 hover:text-white bg-gradient-to-r from-purple-700/80 to-pink-600/80 px-3 py-1.5 rounded-lg shadow hover:shadow-lg transition-all duration-200 border border-purple-400/30 hover:border-pink-400/60"
          >
            <FiArrowLeft className="text-lg" />
            Back to Home
          </Link>
        </div>
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white text-center">
            All Technologies
          </h1>
          <p className="text-gray-400 text-center max-w-2xl">
            A complete list of all frontend and fullstack technologies used in
            my projects. Click any card to see the official documentation.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-5 mt-4 sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 sm:items-center sm:justify-center">
          {allTechs.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <a
                key={tech.name + idx}
                href={tech.doc}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col bg-[#04071D] items-center justify-center gap-2 h-[110px] w-[100px] sm:h-[120px] sm:w-[120px] md:h-[130px] md:w-[140px] border border-white/20 rounded-xl text-white text-base font-semibold transition-all duration-300 cursor-pointer group hover:border-purple-400 hover:scale-105 relative shadow"
                title={`Open ${tech.name} documentation`}
              >
                <Icon className="text-4xl" style={{ color: tech.color }} />
                <span className="group-hover:text-purple-400 transition-colors text-xs md:text-base font-bold tracking-wide text-center -mb-3 md:-mb-2 mt-1">
                  {tech.name}
                </span>
                <span className="text-[10px] md:text-xs text-gray-400 group-hover:text-purple-300 transition-colors text-center">
                  {tech.subtitle}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </main>
  );
}
