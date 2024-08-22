import HeroSection from "@/components/banner/HeroSection";
import ProfileTagMarquee from "@/components/banner/ProfileTagMarquee";
import Footer from "@/components/footer/Footer";
import Work from "@/components/projects/Work";
import Expertise from "@/components/skills/Expertise";
import Skills from "@/components/skills/Skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center overflow-hidden mx-auto">
      <div className="w-full mt-5">
        <HeroSection />
      </div>
      <ProfileTagMarquee />
      <div className="w-full flex flex-col items-center justify-center max-w-7xl md:px-8 my-10">
        <Skills />
        <div className="w-full md:max-w-5xl max-lg:p-8 my-[5rem]">
          <Expertise />
        </div>
      </div>
      <div className="w-full px-8 mb-[5rem]">
        <Work />
      </div>
      <Footer />
    </main>
  );
}

//top-[3.6rem] min-h-screen relative 