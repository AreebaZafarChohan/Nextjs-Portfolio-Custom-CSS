import ContactSection from "../components/contact-section/ContactSection";
import { BackgroundBeamsWithCollision } from "../components/ui/background-beams-with-collision";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <BackgroundBeamsWithCollision>
      <div className="container mt-24 mx-auto px-4 py-4 mb-28">
        < ContactSection />
    </div>
      </BackgroundBeamsWithCollision>
    </main>
  );
}
