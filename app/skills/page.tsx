import React from "react";
import SkillsSection from "../components/skills-section/SkillsSection";
import { BackgroundBeamsWithCollision } from "../components/ui/background-beams-with-collision";

const Skills = () => {
  return (
    <main className="bg-[#121212]">
     <BackgroundBeamsWithCollision>
     <div className="">
        <SkillsSection />
      </div>
     </BackgroundBeamsWithCollision>
    </main>
  );
};

export default Skills;
