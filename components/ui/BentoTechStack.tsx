"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FiExternalLink } from "react-icons/fi";
import { frontendTechsRow1, frontendTechsRow2 } from "@/data";
import "swiper/css";

export const BentoTechStack = () => {
  return (
    <div className="w-full h-full flex flex-col items-start justify-center gap-4 md:gap-6">
      {/* Title and link */}
      <div className="w-full flex items-start sm:items-center justify-between mb-2 gap-2 px-4 md:px-6 pt-2">
        <h2 className="text-xl sm:text-2xl font-extrabold text-white">Tech Stack</h2>
        <a
          href="/techs"
          className="inline-flex items-center gap-1 text-sm sm:text-base font-semibold text-purple-300 hover:text-white bg-gradient-to-r from-purple-700/80 to-pink-600/80 px-3 py-1.5 rounded-lg shadow hover:shadow-lg transition-all duration-200 border border-purple-400/30 hover:border-pink-400/60"
        >
          <FiExternalLink className="mb-[1px]" />
          All of my techs
        </a>
      </div>
      <div className="w-full h-full flex flex-col justify-center gap-4">
        <style jsx global>{`
          .swiper-slide {
            opacity: 1 !important;
            transform: scale(1) !important;
            transition: all 0.3s ease;
          }
          .swiper-slide-active {
            opacity: 1 !important;
            transform: scale(1) !important;
          }
          .swiper-wrapper {
            transition-timing-function: linear !important;
          }
         
          @media (max-width: 768px) {
            .swiper {
              overflow: hidden !important;
            }
          }
        `}</style>
        <div className="w-full overflow-hidden">
          <Swiper
            modules={[Autoplay]}
            slidesPerView="auto"
            spaceBetween={12}
            loop={true}
            speed={8000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: false
            }}
            allowTouchMove={false}
            className="w-full"
            watchSlidesProgress={true}
            observer={true}
            observeParents={true}
          >
            {frontendTechsRow1.map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <SwiperSlide key={"row1-"+idx} className="!flex justify-center" style={{width: 'auto'}}>
                   <a
                  key={tech.name + idx}
                  href={tech.doc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-2 h-[110px] w-[100px] sm:h-[120px] sm:w-[120px] md:h-[130px] md:w-[140px] border border-white/20 rounded-xl text-white text-base font-semibold transition-all duration-300 cursor-pointer group hover:border-purple-400 hover:bg-white/5 relative shadow"
                  title={`Open ${tech.name} documentation`}
                >
                  <Icon className="text-4xl" style={{ color: tech.color }} />
                  <span className="group-hover:text-purple-400 transition-colors text-xs md:text-base font-bold tracking-wide text-center -mb-3 md:-mb-2 mt-1">{tech.name}</span>
                  <span className="text-[10px] md:text-xs text-gray-400 group-hover:text-purple-300 transition-colors text-center">{tech.subtitle}</span>
                </a>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        {/* Row 2: Swiper right */}
        <div className="w-full overflow-hidden">
          <Swiper
            modules={[Autoplay]}
            slidesPerView="auto"
            spaceBetween={12}
            loop={true}
            speed={8000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: true
            }}
            allowTouchMove={false}
            className="w-full"
            watchSlidesProgress={true}
            observer={true}
            observeParents={true}
          >
            {frontendTechsRow2.map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <SwiperSlide key={"row2-"+idx} className="!flex justify-center" style={{width: 'auto'}}>
                 <a
                  key={tech.name + idx}
                  href={tech.doc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-2 h-[110px] w-[100px] sm:h-[120px] sm:w-[120px] md:h-[130px] md:w-[140px] border border-white/20 rounded-xl text-white text-base font-semibold transition-all duration-300 cursor-pointer group hover:border-purple-400 hover:bg-white/5 relative shadow"
                  title={`Open ${tech.name} documentation`}
                >
                  <Icon className="text-4xl" style={{ color: tech.color }} />
                  <span className="group-hover:text-purple-400 transition-colors text-xs md:text-base font-bold tracking-wide text-center -mb-3 md:-mb-2 mt-1">{tech.name}</span>
                  <span className="text-[10px] md:text-xs text-gray-400 group-hover:text-purple-300 transition-colors text-center">{tech.subtitle}</span>
                </a>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}; 