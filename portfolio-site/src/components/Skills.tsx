import React from "react";
import SectionHeader from "./text/SectionHeader";
import SkillIcon from "./icons/SkillIcon";
import SkillIconContent from "./models/SkillIconContent";
const Skills = () => {
  const baseUrl = "../../public/";
  const skills: SkillIconContent[] = [
    new SkillIconContent(baseUrl + "spring-boot.png", "Spring Boot"),
    new SkillIconContent(baseUrl + "react-icon.svg", "React"),
    new SkillIconContent(baseUrl + "java-logo.png", "Java"),
    new SkillIconContent(baseUrl + "typescript-logo.svg", "TypeScript"),
    new SkillIconContent(baseUrl + "mysql-logo.png", "MySQL"),
  ];
  return (
    <div className="w-full">
      <SectionHeader text="Skills" />
      <div className="grid grid-cols-2">
        {skills.map((skill, index) => (
          <SkillIcon key={index} imgUrl={skill.imgUrl} text={skill.text} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
