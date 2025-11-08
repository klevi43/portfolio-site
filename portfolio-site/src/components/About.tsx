import React from "react";
import SectionHeader from "./text/SectionHeader";
const About = () => {
  return (
    <div className="w-[90%] justify-self-center">
      <SectionHeader text="About" />
      <div className="h-100 w-full bg-amber-500"></div>
      <div className="pt-2">
        <p className="text-start">
          I'm a Seoul-based freelance web developer with a passion for full
          stack development. Skilled in Java, TypeScript, and Python, I am sure
          I have the tools necessary to get your next website off the ground.
        </p>
      </div>
    </div>
  );
};

export default About;
