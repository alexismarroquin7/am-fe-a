import { skills } from "../../data";

import { SkillCard } from "./SkillCard";
import { SkillsAccordion } from "./SkillsAccordion";

import styles from "./index.module.css";

export const SkillsSection = () => {


  return (
  <section
    id={skills.id}
    className={styles.skills_section}
  >
    <div
      className={styles.skills_section_wrapper}

    >
      <h3
        className={styles.skills_title}
      >{skills.title}</h3>

      <div
        className={styles.skills_list}
      >
        {skills.list.map((skill) => (
          <SkillCard
            key={skill.id}
            skill={skill}
          />          
        ))}       
      </div>

      <SkillsAccordion/>
      
    </div>     

  </section>
  )
}