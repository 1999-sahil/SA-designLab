import HeroSection from "@/components/banner/HeroSection";
import ProfileTagMarquee from "@/components/banner/ProfileTagMarquee";
import Footer from "@/components/footer/Footer";
import Work from "@/components/projects/Work";
import Expertise from "@/components/skills/Expertise";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center overflow-hidden mx-auto">
      <div className="w-full max-w-7xl mt-10 mb-5">
        <HeroSection />
      </div>
      <ProfileTagMarquee />
      <div className="w-full md:max-w-5xl max-lg:p-8 my-[5rem]">
        <Expertise />
      </div>
    </main>
  );
}

//top-[3.6rem] min-h-screen relative 