import Project from "../components/project-component/Project";
import { BackgroundBeamsWithCollision } from "../components/ui/background-beams-with-collision";


export default function Home() {
  return (
    <main className="bg-[#121212]">
     <BackgroundBeamsWithCollision>
     <div className="">
      <Project />
    </div>
     </BackgroundBeamsWithCollision>
    </main>
  );
}
