// router
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// data
import { home } from "../../data";

import Typical from "react-typical";

export const LandingSection = () => {
  
  const router = useRouter();

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
            onClick={(e) => {
              e.preventDefault();
              router.push(button.href);
            }}
            className={button.variant}
          >{button.text}</button>
        ))}
      </div>
    </div>
    
    <style jsx>{`
      .landing-section {
        width: 100%;
        height: 75vh;
        padding: 2rem 1rem;
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        background-color: var(--sky-blue);
      }
      
      .landing-section-glass {
        width: 100%;
        height: 100%;
        padding: 2rem;
        display: flex;
        flex-flow: column wrap;
        justify-content: space-between;
        gap: 2rem;
        background-color: rgba(255, 255, 255, .75);  
        backdrop-filter: blur(5px);
        border-radius: 1rem;
      }

      .landing-section-main-text {
        display: flex;
        flex-flow: column wrap;
        color: var(--black);
      }
      
      .landing-section-main-text:last-child {
        background-color: var(--light-blue);
        border-radius: 1rem;
        border: .2rem solid var(--light-blue);
      }
      
      .landing-section-button-container {
        display: flex;
        flex-flow: column wrap;
        gap: 1rem;
      }

      button {
        padding: 1rem;
        border: .2rem solid var(--light-blue);
        color: var(--light-blue);
        border-radius: 1rem;
        font-weight: bold;
      }

      .outlined {
        background-color: transparent;
      }
      
      .contained {
        background-color: var(--light-blue);
        color: white;
      }

    `}</style>
  </section>
  
  )
}