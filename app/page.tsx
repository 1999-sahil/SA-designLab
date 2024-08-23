import HeroSection from "@/components/banner/HeroSection";
import ProfileTagMarquee from "@/components/banner/ProfileTagMarquee";
import Skills from "@/components/skills/Skills";
import Expertise from "@/components/skills/Expertise";
import Work from "@/components/projects/Work";
import Experience from "@/components/experience/Experience";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 items-center justify-center overflow-hidden mx-auto">
      <div className="w-full mt-5">
        <HeroSection />
      </div>

      <ProfileTagMarquee />

      <div className="w-full h-full px-2 md:px-20">
        <Skills />
        <Expertise />
        {/**
         * 
        <Work />
        <Experience />
         */}
      </div>
      
      <Footer />
    </main>
  );
}

//top-[3.6rem] min-h-screen relative 

{/**
  
  <div className="w-full flex flex-col items-center justify-center max-w-7xl md:px-8 my-10">
        <Skills />
        <div className="w-full md:max-w-5xl max-lg:p-8 my-[5rem]">
          <Expertise />
        </div>
      </div>
      <div className="w-full px-8 mb-[5rem]">
        <Work />
      </div>
  
  */}