// data
import { skills } from "../../data";

// components
import { Border, div, Section } from "../../components";
import Image from "next/image";

// styles
import { useTheme } from "styled-components";
import styled from "styled-components";

// utils
import { isEven, isOdd } from "../../utils";

export const SkillsSection = () => {
  return (
  <div
    id={skills.id}
    className="skills-section"
  >
        
    <h6
      className="skills-title"
    >{skills.title}</h6>

    <div
      className="skill-list"
    >
      {skills.list.map((skill, i) => (
        <div
          key={skill.skill_id}      
          className="skill-item"
        >
          <Image
            src={skill.icon.src}
            width="50px"
            height="50px"
            alt={skill.icon.alt}
          />
          
          <div
            className="skill-item-text-wrapper"
          >
            <h6>{skill.name}</h6>
            <p>{skill.description}</p>
          </div>

        </div>
      ))}       
    </div>

    <style jsx>{`
      .skills-section {
        width: 100%;
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        gap: 1rem;
      }

      .skills-title {
        width: 90%;
      }

      .skill-list {
        width: 100%;
        display: flex;
        flex-flow: column wrap;
      }
      
      .skill-item {
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        gap: 1rem;
        padding: 4rem 2rem;
      }
            
      .skill-item-text-wrapper {
        display: flex;
        flex-flow: column wrap;
        gap: 1rem;
      }

    `}</style> 
  </div>
  )
}