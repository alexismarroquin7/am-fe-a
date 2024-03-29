// components
import Image from "next/image";

// data
import { about } from "../../data";

// styles
import styles from "./index.module.css";

export const AboutSection = () => {
  
  return (
  <section
    className={styles.about_section}
    id={about.id}
  >
    <div
      className={styles.about_section_wrapper}
    >
      <h3
        className={styles.about_title}
      >{about.title}</h3>

      <div
        className={`glass_background ${styles.about_section_card}`}
      >
            
        <div
          className={styles.image_wrapper}
        >
          <div
            className={styles.image_container}
          >
            <Image 
              src={about.image.src} 
              alt={about.image.alt}
              width={about.image.width}
              height={about.image.width}
            />
          </div>
        </div>

        <div
          className={styles.about_description}
        >
          {about.description.map((p) => (
            <p
              key={p.id}
            >{p.text}</p>
          ))}
        </div>
      </div>
    </div>

  </section>
  )
};