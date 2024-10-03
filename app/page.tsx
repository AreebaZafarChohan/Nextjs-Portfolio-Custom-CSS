import HeroSection from "./components/hero-section/HeroSection";
import { BackgroundBeamsWithCollision } from "./components/ui/background-beams-with-collision";

export default function Home() {
  return (
    <main className="bg-[#121212]">
      <BackgroundBeamsWithCollision>
      <div className="">
    <HeroSection />
    </div>
      </BackgroundBeamsWithCollision>
    </main>
  );
}
