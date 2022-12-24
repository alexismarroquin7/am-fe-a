// data
import { contact } from "../../data";
import styles from "./index.module.css";

export const ContactSection = () => {

  return (
  <section
    className={styles.contact_section}
    id={contact.id}
  >
    <h4 className={styles.contact_section_title}>{contact.title}</h4>      

    <div
      className={styles.contact_list}
    >
      {contact.lines.map(line => (
        
          <a 
            className={styles.contact_item}
            key={line.line_id}
            title={line.name}
            href={line.href}
            target={line.target}
          >
            <div
              className={styles.contact_icon}
            >
              {line.icon()}
            </div>
          </a>
      ))}
    </div>
  </section>
  )
}