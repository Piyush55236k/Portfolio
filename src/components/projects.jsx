import { projects } from "../data/projects";
import { lazy, Suspense } from "react";
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function Projects() {
  useGSAP(() => {
    gsap.to(".project-card", {
      rotateX: 5,
      rotateY: 5,
      duration: 0.3
    });
    gsap.to(".portfolio", {
      backgroundPosition: "50% 100%",
      ease: "none",
      scrollTrigger: {
        trigger: ".portfolio",
        scrub: true
      }
    });
    gsap.from(".project-card img", {
      clipPath: "inset(100% 0% 0% 0%)",
      scrollTrigger: {
        trigger: ".project-card",
        start: "top 85%"
      }
    });
  })
  return (
    <section className="projects">
      <div className="portfolio">
        <h1>PROJECTS</h1>
      </div>

      <div className="demo">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="image-wrapper">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
              />

              <div className="overlay">
                <h3>{project.title}</h3>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

