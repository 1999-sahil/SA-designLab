import HeroSection from "@/components/banner/HeroSection";
import Footer from "@/components/footer/Footer";
import Work from "@/components/projects/Work";
import Expertise from "@/components/skills/Expertise";

export default function Home() {
  return (
    <main className="top-[3.6rem] relative flex flex-col items-center justify-center overflow-hidden mx-auto">
      <div className="w-full max-w-7xl">
        <HeroSection />
      </div>
    </main>
  );
}
