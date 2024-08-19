import HeroSection from "@/components/banner/HeroSection";
import ProfileTagMarquee from "@/components/banner/ProfileTagMarquee";
import Footer from "@/components/footer/Footer";
import Work from "@/components/projects/Work";
import Expertise from "@/components/skills/Expertise";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center overflow-hidden mx-auto">
      <div className="w-full max-w-7xl my-10">
        <HeroSection />
      </div>
      <ProfileTagMarquee />
    </main>
  );
}

//top-[3.6rem] min-h-screen relative 