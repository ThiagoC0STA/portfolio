"use client";

import Image from "next/image";
import { Calendar, Building2 } from "lucide-react";

import { Button } from "@/components/ui/moving-borders";
import { workExperience } from "@/data";

export const Experience = () => {
  return (
    <section id="experience" className="md:py-20 py-8">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="mt-12 grid w-full grid-cols-1 gap-10 lg:grid-cols-4">
        {workExperience.map((experience) => (
          <Button
            key={experience.id}
            borderRadius="1.75rem"
            className="flex-1 border-neutral-200 text-white dark:border-slate-800"
            duration={Math.floor(Math.random() * 10000 + 10000)}
          >
            <div className="flex flex-col gap-4 p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Image
                    width={95}
                    height={87}
                    src={experience.thumbnail}
                    alt={experience.company}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-xl"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h2 className="text-xl font-bold md:text-2xl text-white mb-2 text-start">
                    {experience.title}
                  </h2>
                  
                  <div className="flex flex-col gap-2 mb-3">
                    <div className="flex items-center gap-2 text-purple-300">
                      <Building2 className="w-4 h-4" />
                      <span className="text-sm font-medium">{experience.company}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{experience.period}</span>
                    </div>
                  </div>

                  <p className="text-sm md:text-base text-gray-300 leading-relaxed text-start">
                    {experience.desc}
                  </p>
                </div>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </section>
  );
};
