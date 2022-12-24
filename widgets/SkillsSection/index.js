
import { skills } from "../../data";

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { useState } from "react";

import styles from "./index.module.css";

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
    className={styles.skills_section}
  >
        
    <h3
      className={styles.skills_title}
    >{skills.title}</h3>

    <div
      className={styles.skills_list}
    >
      {skills.list.map((skill, i) => (
        <div
          key={skill.id}      
          className={styles.skill_card}
          id={i}
        >
          <div
            className={`glass_background ${styles.skill_card_wrapper}`}
          >
            <div
              className={styles.skill_card_icon}
            >
              {skill.icon()}
            </div>

            <div
              className={styles.skill_card_text_wrapper}
            >
              <h4
                className={styles.skill_card_title}
              
              >{skill.name}</h4>
              <p>{skill.description}</p>
            </div>

          </div>
        </div>
      ))}       
    </div>

    <div
      className={`glass_background ${styles.more_skills}`}
    >
      {Object.keys(skills.more).map((key, i, arr) => {
        return (
          <div
            key={key}
            className={` ${styles.more_skill_item} ${i === 0 && styles.first} ${i === arr.length - 1 && styles.last}`}
          >
            <button
              className={styles.more_skill_button}
              onPointerDown={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setTab({
                  ...tab,
                  [key]: !tab[key]
                })
              }}
            
            >
              {skills.more[key].icon()}
              <p
                className={styles.more_skill_button_text}
              >
                {key} 
              </p>
            <div className={`${styles.more_skill_button_icon} ${tab[key] && styles.active}`}>
              <KeyboardArrowDownIcon fontSize="inherit"/>
            </div>
            </button>
            {tab[key] && <div
              className={styles.selected_more_skills_list}

            >
              {skills.more[key].list.map(skill => {
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

  </section>
  )
}