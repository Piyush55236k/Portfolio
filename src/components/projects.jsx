import { projects } from "../data/projects";

function Projects() {
  return (
    <section className="projects">
      <div className="portfolio">
        <h1>PORTFOLIO</h1>
      </div>
      <div className="demo">
        {projects.map((project) => (
          <a key={project.id} href={project.link} target="_blank" rel="noopener noreferrer">
            <img src={project.image} alt="social link" />
          </a>
        ))}
      </div>
    </section>

  );
}

export default Projects;
