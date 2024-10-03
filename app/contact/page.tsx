import ContactSection from "../components/contact-section/ContactSection";
import { BackgroundBeamsWithCollision } from "../components/ui/background-beams-with-collision";

export default function Home() {
  return (
    <main className="bg-[#121212]">
      <BackgroundBeamsWithCollision>
      <div className="">
        < ContactSection />
    </div>
      </BackgroundBeamsWithCollision>
    </main>
  );
}
