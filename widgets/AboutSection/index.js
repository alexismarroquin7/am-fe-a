// components
import Image from "next/image";

// data
import { about } from "../../data";

export const AboutSection = () => {
  
  return (
  <section
    className="about-section"
    id={about.id}
  >
    <h6
      className="about-title"
    >{about.title}</h6>

    <div
      className="about-section-glass"
    >
          
      <div
        className="image-wrapper"
      >
        <div
          className="image-container"
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
        className="about-description"
      >
        {about.description.map((paragraph, i, arr) => (
          <p
            key={paragraph.id}
          >{paragraph.text}</p>
        ))}
      </div>
    </div>

    <style jsx>{`
      .about-section {
        width: 100%;
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        gap: 1rem;
        background-color: var(--sky-blue);
        color: var(--blue);
      }
      
      .about-section-glass {
        width: 90%;
        padding: 4rem 2rem;
        display: flex;
        flex-flow: column wrap;
        gap: 2rem;
        background-color: rgba(255, 255, 255, .75);  
        backdrop-filter: blur(5px);
        border-radius: 1rem;
      }

      .about-title {
        width: 90%;
      }

      .image-wrapper {
        width: 100%;
        display: flex;
        flex-flow: column wrap;
        align-items: center;
      }

      .image-container {
        border-radius: 100%;
        overflow: hidden;
      }

      .about-description {
        display: flex;
        flex-flow: column wrap;
        gap: 2rem;
        color: var(--black);
      }

      @media (min-width: 600px) {
        .about-section-glass {
          width: 70%;
          flex-flow: row wrap;
          justify-content: space-between;
          align-items: center;
          gap: 0;
        }
        
        .image-wrapper {
          width: 50%;
          display: flex;
          flex-flow: column wrap;
          align-items: center;          
        }

        .about-title {
          width: 70%;
        }

        .about-description {
          width: 50%;
        }

      }
    `}</style>

  </section>
  )
};