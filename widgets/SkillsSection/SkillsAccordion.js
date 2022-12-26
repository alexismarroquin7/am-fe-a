import { useState } from "react";

import { skills } from "../../data";

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import styles from "./SkillsAccordion.module.css";

const initialTab = () => {
  let tabObj = {}
  Object.keys(skills.more).forEach(key => tabObj[key] = false);
  return tabObj;
}

export const SkillsAccordion = () => {
  const [tab, setTab] = useState(initialTab());

  return (
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
            <div
              className={styles.more_skill_button_text_container}
            >
              {skills.more[key].icon()}
              <p
                className={styles.more_skill_button_text}
              >
                {key} 
              </p>
            </div>

            <div className={`${styles.more_skill_button_icon} ${tab[key] && styles.active}`}>
              <KeyboardArrowDownIcon fontSize="inherit"/>
            </div>
            
          </button>
          
          <div
            className={`${styles.more_skills_tab_description} ${tab[key] ? styles.more_skills_tab_selected : ''}`}
          >
            {skills.more[key].list.map(skill => {
              return (
                <p key={skill.id}>- {skill.name}
                </p>
              )
            })}
          </div>

        </div>
      )
    })}
  </div>
  )
}