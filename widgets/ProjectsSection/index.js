import { project } from "../../data";
import Link from "next/link";
import styles from "./index.module.css";

export const ProjectsSection = () => {
  return <div id={project.id}
    className={styles.projects_section}
  >
    <div
      className={styles.projects_section_wrapper}
    >
      
      <h3 className={styles.projects_title}>Projects</h3>
      

      {project.list.map(p => {
        return (
          <div key={p.id} className={`glass_background ${styles.project_card}`}>
            
            <div
              className={styles.project_card_svg_wrapper}
            >
              {p.svg.html()}
            </div>
            <Link
              href={p.url}
              target="_blank"
              passHref
            >
              <a className={styles.project_card_name}>{p.name}</a>
            </Link>
            
            <p>{p.description}</p>
          
          </div>
        )
      })}
      
    </div>
  </div>
}