import React from 'react';
import AboutSection from '../components/about-section/AboutSection';
import { BackgroundBeamsWithCollision } from '../components/ui/background-beams-with-collision';

const About = () => {
  return (
    <main className="bg-[#121212]">
      <BackgroundBeamsWithCollision>
      <div className="">
        <AboutSection />
    </div>
      </BackgroundBeamsWithCollision>
    </main>
  )
}

export default About;
