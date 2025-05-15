"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SiUdemy } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { LuBrain } from "react-icons/lu";

export const highlights = [
  {
    title: "The MERN Fullstack Guide",
    icon: <SiUdemy className="text-[#A635F2]" />,
    year: 2023,
    url: "https://www.udemy.com/certificate/UC-54e83a03-3105-4589-abfa-7f96d8f6e38f/",
    category: "Development",
    hours: 19,
  },
  {
    title: "JS and TS from basics to advanced",
    icon: <BiLogoTypescript className="text-[#3179C7]" />,
    year: 2022,
    url: "https://www.udemy.com/certificate/UC-4333ef56-64ba-4f79-a8c8-88944f17c095/",
    category: "Development",
    hours: 146,
  },
  {
    title: "Wordpress and woocommerce for create a virtual store",
    icon: <BiLogoTypescript className="text-[#A635F2]" />,
    year: 2022,
    url: "https://www.udemy.com/certificate/UC-943e8690-c7f3-41c7-92c5-864bc956393d/",
    category: "Development",
    hours: 3,
  },
  { title: "Complete React Developer", icon: <FaReact className="text-[#0A7EA6]" />, year: 2022, url: "https://origamid.com/certificate/e7170382", category: "Development", hours: 36 },
  { title: "UI/UX Design Certification", icon: <FaFigma className="text-[#A25BFF]" />, year: 2022, url: "https://mooc.timtec.com.br/certificate/a29vDev9", category: "Development", hours: 48 },
  { title: "Complete Full-Stack Development Bootcamp", icon: <SiUdemy className="text-[#A635F2]" />, year: 2023, url: "https://www.udemy.com/certificate/UC-8ff107f8-33e7-4e2b-9b7e-30072511a2fd/", category: "Development", hours: 66 },
  { title: "Complete guide to high productivity", icon: <LuBrain className="text-[#4fe397]" />, year: 2023, url: "https://www.udemy.com/certificate/UC-424bb897-1d0a-429e-a318-6dad46cd3c34/", category: "Personal Development", hours: 12   },
  { title: "react native full course", icon: <FaReact className="text-[#0A7EA6]" />, year: 2023, url: "https://www.udemy.com/certificate/UC-2499b620-e35b-417d-b323-e667ac98cf32/", category: "Development", hours: 45   },
];

export const BentoHighlight = () => {
  const swiperRef = useRef<any>(null);
  const totalHours = highlights.reduce((acc: number, curr: { hours: number }) => acc + curr.hours, 0);

  return (
    <div className="flex flex-col w-full gap-6 items-center">
      <div className="relative w-full flex items-center justify-between">
        <h2 className="text-2xl font-extrabold text-white mb-0 text-left">Certifications</h2>
        <div className=" bg-[#10132e] border border-white/10 rounded-xl px-4 py-2 shadow-lg">
          <span className="text-sm text-purple-300 font-semibold">{totalHours}+ hours</span>
        </div>
      </div>
      <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
        {/* Custom Arrows */}
        <button
          className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-20 bg-white/30 border border-white/30 rounded-full shadow-md p-1.5 hover:bg-purple-100 hover:text-purple-600 transition-colors"
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Previous"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-20 bg-white/30 border border-white/30 rounded-full shadow-md p-1.5 hover:bg-purple-100 hover:text-purple-600 transition-colors"
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Next"
        >
          <ChevronRight size={16} />
        </button>
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true, el: '.custom-swiper-pagination' }}
          loop={true}
          spaceBetween={24}
          slidesPerView={1}
          onSwiper={swiper => (swiperRef.current = swiper)}
          className="w-full"
        >
          {highlights.map((item, idx) => (
            <SwiperSlide key={idx}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <div className="flex relative flex-col items-center justify-center gap-3 bg-[#10132e] border border-white/10 rounded-2xl px-6 py-8 shadow-lg h-[270px] min-h-[270px] max-h-[270px] text-center group transition-all duration-200 hover:border-purple-400 hover:shadow-purple-200">
                  <span className="text-4xl mb-1 drop-shadow-lg">
                    {item.icon}
                  </span>
                  <span className="font-bold text-white text-lg group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </span>
                  <span className="text-xs text-gray-400 font-medium">{item.year}</span>
                  <span className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold bg-gray-900 text-gray-200 border border-white/10">
                    {item.category}
                  </span>
                  <span className="text-xs text-purple-300 absolute top-3 left-4">{item.hours} hours</span>
                  <span className="mt-2 text-xs text-purple-300 underline">View Certificate</span>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* <div className="custom-swiper-pagination flex justify-center mt-4 gap-2"></div>
        <style>{`
          .custom-swiper-pagination .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
            background: #10122E;
            opacity: 1;
            border-radius: 9999px;
            margin: 0 4px;
            transition: background 0.2s;
          }
          .custom-swiper-pagination .swiper-pagination-bullet-active {
            background: #CBACF9;
          }
        `}</style> */}
      </div>
    </div>
  );
}; 