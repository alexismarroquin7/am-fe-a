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
          <div
            className="skill-item-glass"
          >
            <div
              className="skill-item-image-container"
            >
              <Image
                src={skill.icon.src}
                width="50px"
                height="50px"
                alt={skill.icon.alt}
              />
            </div>

            <div
              className="skill-item-text-wrapper"
            >
              <h6>{skill.name}</h6>
              <p>{skill.description}</p>
            </div>

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
        background-color: var(--sky-blue);
        color: var(--blue);
        gap: 1rem;
        padding: 4rem 0;
      }

      .skills-title {
        width: 90%;
      }

      .skill-list {
        width: 100%;
        display: flex;
        flex-flow: column wrap;
        align-items: center;
      }
      
      .skill-item {
        width: 100%;
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        gap: 4rem;
        padding: 2rem 0;
        border-radius: 1rem;
      }

      .skill-item p {
        color: var(--black);
      }
      
      .skill-item-glass {
        width: 90%;
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        gap: 4rem;
        padding: 4rem 2rem;
        background-color: rgba(255, 255, 255, .75);  
        backdrop-filter: blur(5px);
        border-radius: 1rem;
      }
            
      .skill-item-text-wrapper {
        display: flex;
        flex-flow: column wrap;
        gap: 2rem;
      }


      @media (min-width: 600px) {
        
        .skills-title {
          width: 70%;
        }

        .skill-item-glass {
          width: 70%;
          flex-flow: row wrap;
          justify-content: space-between;
          gap: 0;
        }

        .skill-item:nth-child(even) .skill-item-glass {
          flex-flow: row-reverse wrap;
        }

        .skill-item-text-wrapper {
          width: 50%;
        }

        .skill-item-image-container {
          width: 50%;
          display: flex;
          justify-content: center;
        }
      }
      }

    `}</style> 
  </section>
  )
}