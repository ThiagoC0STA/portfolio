import { Approach } from "@/components/approach";
import { Clients } from "@/components/clients";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Grid } from "@/components/grid";
import { Hero } from "@/components/hero";
import { RecentProjects } from "@/components/recent-projects";
import { ShowcaseSections } from "@/components/ShowcaseSections";
import { SectionAnimation } from "@/components/ui/section-animation";
import { Analytics } from "@vercel/analytics/next"

const MainPage = () => {
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-clip bg-black-100 px-5 sm:px-8">
      <div className="w-full max-w-7xl">
        <SectionAnimation>
          <Hero />
        </SectionAnimation>

        <SectionAnimation>
          <Grid />
        </SectionAnimation>

        <SectionAnimation>
          <ShowcaseSections />
        </SectionAnimation>

        <SectionAnimation>
          <RecentProjects />
        </SectionAnimation>

        <SectionAnimation>
          <Clients />
        </SectionAnimation>

        <SectionAnimation>
          <Experience />
        </SectionAnimation>

        <SectionAnimation>
          <Approach />
        </SectionAnimation>

        <Footer />
      </div>

      <Analytics />
    </main>
  );
};

export default MainPage;
