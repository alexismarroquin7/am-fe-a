// data
import { contact } from "../../data";

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
        
          <a 
            className="contact-item"
            key={line.line_id}
            title={line.name}
            href={line.href}
            target={line.target}
          >
            <div
              className="contact-icon"
            >
              {line.icon()}
            </div>
          </a>
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
        text-align: flex-start;
      }
      
      .contact-list {
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;
      }

      .contact-item {
        background-color: rgba(255, 255, 255, .75);  
        backdrop-filter: blur(5px);
        border-radius: 1rem;
        padding: 1rem;
      }

      .contact-icon {
        font-size: 4rem;
        /* color: var(--black); */
        color: var(--blue);

      }

      /* a {
        font-size: 1rem;
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        color: var(--blue);
      } */
    `}</style>
  </section>
  )
}