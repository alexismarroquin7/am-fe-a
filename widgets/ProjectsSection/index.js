import { project } from "../../data"

export const ProjectsSection = () => {
  return <div id={project.id}
    className="projects-section"
  >
    <div id={project.id}
      className="projects-section-wrapper"
    >
      <h6>Projects</h6>
      <p>More info coming soon.</p>
      
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

    p {
      width: 100%;
      text-align: center;
    }
    `}</style>
  </div>
}