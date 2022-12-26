import styles from "./SkillCard.module.css";

export const SkillCard = ({skill}) => {
  return (
  <div
    className={styles.skill_card}
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

        <p
          className={styles.skill_card_description}
        >{skill.description}</p>
      </div>

    </div>
  </div>
  )
}