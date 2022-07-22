// router
import { useRouter } from "next/router";

// data
import { home } from "../../data";

// components
import Image from 'next/image';

export const LandingSection = () => {
  
  const router = useRouter();

  return (
  <section
    className="landing-section"
    id={home.id}
  >
    <p>{home.titleIntro}</p>
    <h4 className="landing-section-title">{home.title}</h4>
    <h4>{home.subTitle}</h4>
  
    <div
      className="image-wrapper"
    >
      <div className="image-container">
        <Image
          src={home.headshot.src}
          width={home.headshot.width}
          height={home.headshot.height}
          alt={home.headshot.alt}
          title={home.headshot.title}
        />
      </div>
    </div>

    <p>{home.description}</p>

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

    <style jsx>{`
      .landing-section {
        width: 100%;
        padding: 2rem;
        display: flex;
        flex-flow: column wrap;
        gap: 1rem;
      }

      .landing-section-title {
        color: #5599f2;
      }
      
      .image-wrapper {
        width: 100%;
        display: flex;
        flex-flow: column wrap;
        align-items: center;
      }
      
      .image-container {
        display: inline-block;
        border-radius: 100%;
        overflow: hidden;
      }

      button {
        padding: 1rem;
        border: 1px solid var(--blue);
        color: var(--blue);
        border-radius: 2rem;
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