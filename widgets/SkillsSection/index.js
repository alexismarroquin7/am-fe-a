// data
import { skills } from "../../data";

// components
import Image from "next/image";

export const SkillsSection = () => {
  return (
  <section
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
        background-color: var(--blue);
      }

      .skills-title {
        width: 100%;
        padding: 2rem;
        color: white;
      }

      .skill-list {
        width: 100%;
        display: flex;
        flex-flow: column wrap;
      }
      
      .skill-item {
        width: 100%;
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        gap: 4rem;
        padding: 10rem 2rem;
      }
      
      .skill-item:nth-child(odd){
        color: white;
      }

      .skill-item:nth-child(even){
        background-color: white;
      }
            
      .skill-item-text-wrapper {
        display: flex;
        flex-flow: column wrap;
        gap: 2rem;
      }

    `}</style> 
  </section>
  )
}