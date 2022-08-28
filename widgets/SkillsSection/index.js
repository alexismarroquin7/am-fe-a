// data
import { skills } from "../../data";
// components
import Image from "next/image";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from "react";
const initialTab = () => {
  let tabObj = {}
  Object.keys(skills.more).forEach(key => tabObj[key] = false);
  return tabObj;
}

export const SkillsSection = () => {

  const [tab, setTab] = useState(initialTab());

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
          key={skill.id}      
          className="skill-hero-card"
          id={i}
        >
          <div
            className="skill-hero-card-glass"
          >
            <div
              className="skill-hero-card-icon-container"
            >
              {skill.icon()}
            </div>

            <div
              className="skill-hero-card-text-wrapper"
            >
              <h6>{skill.name}</h6>
              <p>{skill.description}</p>
            </div>

          </div>
        </div>
      ))}       
    </div>

    <div
      className="more-skills"
    >
      {Object.keys(skills.more).map((key, i, arr) => {
        return (
          <div
            key={key}
            className={`more-skill-item ${i === 0 && 'first'} ${i === arr.length - 1 && 'last'}`}
          >
            <button
              className="more-skill-button"
              onPointerDown={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setTab({
                  ...tab,
                  [key]: !tab[key]
                })
              }}
            
            >
              <p
              className="more-skill-button-text"
              >

                {key} 
              </p>
            <div className={`more-skill-button-icon ${tab[key] && 'active'}`}>
              <KeyboardArrowDownIcon fontSize="inherit"/>
            </div>
            </button>
            {tab[key] && <div
              className="selected-more-skills-list"

            >
              {skills.more[key].map(skill => {
                return (
                  <p key={skill.id}>- {skill.name}
                  </p>
                )
              })}
            </div>}
          </div>
        )
      })}
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
      
      .skill-hero-card {
        width: 100%;
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        gap: 4rem;
        padding: 2rem 0;
        border-radius: 1rem;
      }

      .skill-hero-card p {
        color: var(--black);
      }
      
      .skill-hero-card-glass {
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

      .skill-hero-card-icon-container {
        font-size: 4rem;
      }
            
      .skill-item-text-wrapper {
        display: flex;
        flex-flow: column wrap;
        gap: 2rem;
      }

      .more-skills {
        width: 100%;
        display: flex;
        flex-flow: column wrap;
        align-items: center;
      }
      
      .more-skill-item {
        background-color: rgba(255, 255, 255, .75);  
        backdrop-filter: blur(5px);
        width: 90%;
        display: flex;
        flex-flow: column wrap;
        align-items: center;
      }

      .more-skill-item.first {
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
      }

      .more-skill-item.last {
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
      }

      .more-skill-button {
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        align-items: flex-start;
        justify-content: space-between;
        padding: 2rem;
        color: var(--blue);
        font-weight: bold;
        background-color: transparent;
        border: 0;
      }

      .more-skill-button-text {
        width: 75%;
        text-align: left;
      }

      .more-skill-button-icon {
        font-size: 2rem;
        color: var(--blue);
        display: flex;
        transform-origin: center;
        transition: all .2s;
      }

      .more-skill-button-icon.active {
        transform: rotate(-180deg);
      }


      .selected-more-skills-list {
        width: 100%;
        display: flex;
        flex-flow: column wrap;
        align-items: flex-start;
        gap: 1rem;
        padding-bottom: 2rem;
        padding-left: 2rem;
        padding-right: 2rem;

        color: var(--black);
      } 

      /* @media (min-width: 600px) {
        
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
      } */

    `}</style> 
  </section>
  )
}