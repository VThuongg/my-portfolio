import { useInView } from "../hooks/useInView";
import { PROJECTS } from "../constants/portfolioData";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const [headerRef, headerInView] = useInView(0.15);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div ref={headerRef} className={`projects-header ${headerInView ? "in-view" : ""}`}>
          <span className="projects-label">FEATURED WORK</span>
          <h2 className="projects-title">My Projects</h2>
          <p className="projects-desc">A showcase of my recent work</p>
        </div>
        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
