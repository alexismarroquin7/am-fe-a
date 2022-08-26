// data
import { home } from "../../data";

import Typical from "react-typical";

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
    className="landing-section"
    id={home.id}
  >
    <div
      className="landing-section-glass"
    >

      <p>{home.titleIntro}</p>
      
      <div
        className="landing-section-main-text"
      >
        <h4 className="landing-section-title">{home.title}</h4>
        <h4
          className="landing-section-sub-title"
        >{"I'm a"}
        </h4>
        <Typical
          loop={Infinity}
          wrapper="h4"
          steps={home.steps}
        />
      </div>
    
      <p>{home.description}</p>
      
      <div
        className="landing-section-button-container"
      >
        {home.buttons.map(button => (
          <button
            key={button.button_id}
            onPointerDown={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handlePointerDown(button);
            }}
            className={button.variant}
            onPointerEnter={handlePointerHover}
            onPointerLeave={handlePointerHover}
          >{button.text}</button>
        ))}
      </div>
    </div>
    
    <style jsx>{`
      .landing-section {
        width: 100%;
        padding: 8rem 0;
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        background-color: var(--sky-blue);
      }
      
      .landing-section-glass {
        width: 90%;
        padding: 2rem;
        display: flex;
        flex-flow: column wrap;
        gap: 2rem;
        background-color: rgba(255, 255, 255, .75);  
        backdrop-filter: blur(5px);
        border-radius: 1rem;
      }

      .landing-section-main-text {
        display: flex;
        flex-flow: column wrap;
        color: var(--blue);
        padding: 2rem 0;
      }
      
      .landing-section-title,
      .landing-section-sub-title {
        color: var(--black);
      }
      
      .landing-section-button-container {
        display: flex;
        flex-flow: column wrap;
        gap: 1rem;
      }

      button {
        padding: 1rem;
        border: .2rem solid var(--blue);
        color: var(--blue);
        border-radius: 1rem;
        font-weight: bold;
        transition: all .2s;
      }

      .outlined {
        background-color: transparent;
      }
      
      .contained {
        background-color: var(--blue);
        color: white;
      }

    `}</style>
  </section>
  
  )
}