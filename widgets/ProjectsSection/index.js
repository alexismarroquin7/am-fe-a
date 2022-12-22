import { project } from "../../data";
import Link from "next/link";

export const ProjectsSection = () => {
  return <div id={project.id}
    className="projects-section"
  >
    <div
      className="projects-section-wrapper"
    >
      
      <h6>Projects</h6>
      

      {project.list.map(p => {
        return (
          <div key={p.id} className="project-card">
            
            <div
              className="project-card-svg-wrapper"
            >
              {p.svg.html()}
            </div>
            <Link
              href={p.url}
              target="_blank"
              passHref
            >
              <a className="project-card-name">{p.name}</a>
            </Link>
            
            <p>{p.description}</p>
          
          </div>
        )
      })}
      
    </div>
    <style jsx>{`
    .projects-section {
      background-color: var(--sky-blue);
      display: flex;
      flex-flow: column wrap;
      width: 100%;
      align-items: center;
      padding: 4rem 0;
    }

    .projects-section-wrapper {
      background-color: var(--sky-blue);
      display: flex;
      flex-flow: column wrap;
      width: 90%;
      align-items: flex-start;
      gap: 2rem;
    }

    h6 {
      color: var(--blue);
    }

    .project-card {
      background-color: rgba(255, 255, 255, .75);  
      backdrop-filter: blur(5px);
      border-radius: 1rem;
      padding: 2rem;
      width: 100%;
      display: flex;
      flex-flow: column wrap;
      gap: 1rem;
      align-items: flex-start;
      justify-content: flex-start;
    }

    .project-card-name {
      font-size: 2.4rem;
      font-weight: bold;
      color: var(--blue);
    }

    .project-card-svg-wrapper {
      width: 100%;
      display: flex;
      flex-flow: column wrap;
      gap: 1rem;
      align-items: center;
    }
    `}</style>
  </div>
}