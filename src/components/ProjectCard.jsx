import { useInView } from "../hooks/useInView";
import { LinkBtn } from "./LinkBtn";

export function ProjectCard({ project, index, t }) {
  const [ref, inView] = useInView(0.05);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  const period = project.periodKey ? t(project.periodKey) : project.period;
  const desc = project.descKey ? t(project.descKey) : project.desc;
  const highlight = project.highlightKey ? t(project.highlightKey) : project.highlight;

  return (
    <div
      ref={ref}
      className={`project-card spotlight-card ${inView ? "in-view" : ""}`}
      onMouseMove={handleMouseMove}
      style={{ transitionDelay: `${index * 0.12}s` }}
    >
      {/* Project Mockup Image Wrapper */}
      <div className="project-card-image-wrapper">
        <img
          src={project.image}
          alt={project.title}
          className="project-card-image"
          onError={(e) => {
            // Fallback image in case the image fails to load or hasn't been generated yet
            e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80";
          }}
        />
        <div className="project-card-image-overlay">
          <div className="project-card-overlay-links">
            <a href={project.github} target="_blank" rel="noreferrer" className="overlay-btn-circle" title="View Source">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer" className="overlay-btn-circle" title="Live Demo">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 3h6v6" />
                  <path d="M10 14 21 3" />
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="project-card-content">
        <div className="project-card-accent" />
        
        <div className="project-card-header-row">
          <h3 className="project-card-title">{project.title}</h3>
          <span className="project-card-badge">{t(project.category === "ai" ? "projFilterAI" : "projFilterWeb")}</span>
        </div>
        
        <p className="project-card-subtitle">{project.subtitle}</p>
        <p className="project-card-period">{period}</p>
        <p className="project-card-desc">{desc}</p>

        {highlight && (
          <div className="project-card-highlight">
            <span className="project-card-highlight-text">✦ {highlight}</span>
          </div>
        )}

        <div className="project-card-tags">
          {project.tags.map(tag => (
            <span key={tag} className="project-card-tag">
              {tag}
            </span>
          ))}
        </div>

        {/* GitHub + Demo links */}
        <div className="project-card-links">
          <LinkBtn
            href={project.github}
            label="GitHub"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            }
          />
          {project.demo && (
            <LinkBtn
              href={project.demo}
              label="Live Demo"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
                  <path d="M15 3h6v6" />
                  <path d="M10 14 21 3" />
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                </svg>
              }
            />
          )}
        </div>
      </div>
    </div>
  );
}

