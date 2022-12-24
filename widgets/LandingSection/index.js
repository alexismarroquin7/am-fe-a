import Typical from "react-typical";

import { Button } from "../../components/Button";

import styles from "./index.module.css";

// data
import { home } from "../../data";

export const LandingSection = () => {
  const handlePointerDown = button => {
    const element = document.querySelector(button.href)
    element.scrollIntoView({
      behavior: "smooth"
    });
  };
  
  const handlePointerHover = e => {
    const containerVariant = Array.from(e.target.classList).includes('contained');
    const outlinedVariant = Array.from(e.target.classList).includes('outlined');
    
    if(containerVariant){
      e.target.classList.remove('contained');
      e.target.classList.add('outlined');

    } else if(outlinedVariant){
      e.target.classList.remove('outlined');
      e.target.classList.add('contained');
    }

  };

  return (
  <section
    className={styles.landing_section}
    id={home.id}
  >
    <div
      className={`glass_background ${styles.card}`}
    >

      <p>{home.titleIntro}</p>
      
      <h2>
        
        {home.title}<br/>
        
        {"I'm a"}<br/>
        
        <Typical
          loop={Infinity}
          wrapper="span"
          steps={home.steps}
        />
      
      </h2>
      
      <div
        className={styles.action_area}
      >
        {home.buttons.map(button => (
          <Button
            key={button.button_id}
            onPointerDown={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handlePointerDown(button);
            }}
            variant={button.variant}
            fullWidth
            onPointerEnter={handlePointerHover}
            onPointerLeave={handlePointerHover}
          >{button.text}</Button>
        ))}
      </div>
    </div>
    
  </section>
  
  )
}