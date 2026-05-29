import { useInView } from "../hooks/useInView";
import { LinkBtn } from "./LinkBtn";

export function ProjectCard({ project, index }) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={`project-card ${inView ? "in-view" : ""}`}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      <div className="project-card-accent" />

      <h3 className="project-card-title">{project.title}</h3>
      <p className="project-card-subtitle">{project.subtitle}</p>
      <p className="project-card-period">{project.period}</p>
      <p className="project-card-desc">{project.desc}</p>

      <div className="project-card-highlight">
        <span className="project-card-highlight-text">✦ {project.highlight}</span>
      </div>

      <div className="project-card-tags">
        {project.tags.map(tag => (
          <span key={tag} className="project-card-tag">
            {tag}
          </span>
        ))}
      </div>

      {/* GitHub + Demo links */}
      <div className="project-card-links">
        <LinkBtn href={project.github} label="GitHub" icon="💻" />
        {project.demo && <LinkBtn href={project.demo} label="Live Demo" icon="🚀" />}
      </div>
    </div>
  );
}
