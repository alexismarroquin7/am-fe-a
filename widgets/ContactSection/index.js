// data
import { contact } from "../../data";

// components
import Image from 'next/image';

export const ContactSection = () => {

  return (
  <section
    // bgColor={theme.color.secondary.value}
    id={contact.id}
  >

    <div
      
    >
      
      <p style={{fontWeight: "bold"}}>{contact.title}</p>
      

      <div
      
        // gap={theme.gap.secondary}
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
            </a>
          </div>
        ))}
      </div>

    </div>  
  
  </section>
  )
}