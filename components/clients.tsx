"use client";

import { FiLinkedin } from "react-icons/fi";
import { SiUpwork } from "react-icons/si";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { testimonials } from "@/data";

export const Clients = () => {
  return (
    <section id="testimonials" className="md:py-20 py-8">
      <h1 className="heading mb-8">
        Kind words from <span className="text-purple">satisfied partners</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="relative w-full mx-auto">
          <InfiniteMovingCards
            items={testimonials}
            className="testimonials-swiper"
          />
        </div>

        {/* Divider with OR */}
        <div className="flex items-center w-full max-w-md my-8">
          <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
          <span className="px-4 text-gray-500 font-medium">or</span>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
        </div>

        {/* Social Buttons */}
        <div className="flex gap-4 relative z-10">
          <a
            href="https://www.upwork.com/freelancers/~01358c1e41cf810152"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 md:px-6 px-3 py-3 rounded-lg bg-[#14A800] hover:bg-[#108000] transition-colors text-white font-medium"
          >
            <SiUpwork className="w-5 h-5 mt-1" />
            See on Upwork
          </a>
          <a
            href="https://www.linkedin.com/in/rodcdev/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 md:px-6 px-3 py-3 rounded-lg bg-[#0A66C2] hover:bg-[#004182] transition-colors text-white font-medium"
          >
            <FiLinkedin className="w-5 h-5" />
            See on LinkedIn
          </a>
        </div>

        {/* <div className="flex flex-wrap items-center justify-center gap-4 mt-16 md:gap-16">
          {companies.map(({ id, img, name, nameImg }) => (
            <div key={id} className="flex max-w-32 gap-2 md:max-w-60">
              <Image
                height={29}
                width={43}
                src={img}
                alt={`${name}'s logo`}
                className="w-5 md:w-10"
              />

              <Image
                height={28}
                width={131}
                src={nameImg}
                alt={name}
                className="w-20 md:w-24"
              />
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};
