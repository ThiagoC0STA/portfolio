"use client";

import { BentoHighlight } from "@/components/ui/BentoHighlight";
import { BentoTechStack } from "@/components/ui/BentoTechStack";
import { BentoGithubContributions } from "@/components/ui/BentoGithubContributions";

const showcaseSections = [
  {
    key: "highlights",
    component: <BentoHighlight />,
    className: "col-span-1",
  },
  {
    key: "techstack",
    component: <BentoTechStack />,
    className: "col-span-1 md:col-span-2",
  },
  {
    key: "github",
    component: <BentoGithubContributions />,
    className: "col-span-1 md:col-span-3",
  },
];

const cardClass =
  "flex-1 rounded-3xl border border-white/10 shadow-xl p-6 flex items-center z-10 justify-center bg-[rgb(4,7,29)] max-w-full overflow-visible";

export const ShowcaseSections = () => (
  <section className="w-full max-w-7xl mx-auto my-8 md:pt-20 pt-6 px-2 md:px-0">
     <h1 className="heading mb-10">
        Code {" "}
        <span className="text-purple">Statistics</span>
      </h1>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {showcaseSections.map((section) => (
        <div className={`${section.className} flex`} key={section.key}>
          <div
            className={
              section.key === "techstack"
                ? cardClass.replace("p-6", "py-4")
                : cardClass
            }
          >
            {section.component}
          </div>
        </div>
      ))}
    </div>
  </section>
); 