// data
import { contact } from "../../data";

// components
import Image from 'next/image';

export const ContactSection = () => {

  return (
  <section
    className="contact-section"
    id={contact.id}
  >
    <h6 className="contact-section-title">{contact.title}</h6>      

    <div
      className="contact-list"
    >
      {contact.lines.map(line => (
        <div
          key={line.line_id}
          className="contact-item"
        >
          <a 
            title={line.name}
            href={line.href}
            target={line.target}
          >
            <Image
              src={line.icon.src}
              width="50px"
              height="50px"
              alt={line.icon.alt}
            />
          </a>
        </div>
      ))}
    </div>

    <style jsx>{`
      .contact-section {
        width: 100%;
        padding: 4rem 2rem;
        display: flex;
        flex-flow: column wrap;
        gap: 4rem;
        background-color: var(--sky-blue);
        color: var(--blue);
      }

      .contact-section-title {
        width: 100%;
        text-align: center;
      }
      
      .contact-list {
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        gap: 25%;
      }

      .contact-item {
        background-color: rgba(255, 255, 255, .75);  
        backdrop-filter: blur(5px);
        border-radius: 1rem;
        padding: 1rem;
      }

      a {
        font-size: 1rem;
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        color: var(--blue);
      }
    `}</style>
  </section>
  )
}