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
    
    <h6>{about.title}</h6>
        
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
          height={about.image.height}
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

    <style jsx>{`
      .about-section {
        width: 100%;
        padding: 4rem 2rem;
        display: flex;
        flex-flow: column wrap;
        gap: 2rem;
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
      }
    `}</style>

  </section>
  )
};