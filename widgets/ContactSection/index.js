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
    <p className="contact-section-title">{contact.title}</p>      

    <div
      className="contact-list"
    >
      {contact.lines.map(line => (
        <div
          key={line.line_id}
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
            {line.handle}
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
        gap: 2rem;
      }

      .contact-section-title {
        font-weight: bold;
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

      a {
        font-size: 1rem;
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        color: black;
      }
    `}</style>
  </section>
  )
}