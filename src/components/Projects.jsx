import { PROJECTS_DATA } from "../constants/portfolioData";

export function Projects() {
  return (
    <section id="projects" className="magazine-section section-projects">
      <div className="magazine-edge-tab" />
      <div className="magazine-page-num">PAGE 06 / 09</div>

      <div className="container">
        {/* Meta Header */}
        <div className="magazine-meta-header reveal-item">
          <span>06. FEATURED WORK</span>
          <span>SYSTEM TESTING & IMPLEMENTATION</span>
          <span>VT® 005-PRJ</span>
        </div>

        <h2 className="projects-section-title reveal-item">PROJECTS</h2>

        <div className="projects-thin-grid">
          {PROJECTS_DATA.map((proj) => (
            <div key={proj.title} className="project-thin-card reveal-item">
              <div>
                <h3 className="project-thin-title">{proj.title}</h3>
                <div className="project-thin-role">{proj.role} // {proj.period}</div>
                <div style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", marginBottom: "12px", color: "var(--ink)" }}>
                  TECH: {proj.tech}
                </div>
                <hr />
                <p className="project-thin-desc">{proj.desc}</p>
              </div>

              <div style={{ display: "flex", gap: "10px", marginTop: "16px" }}>
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noreferrer"
                    className="pill"
                    style={{ fontSize: "11px" }}
                  >
                    GITHUB REPOSITORY →
                  </a>
                )}
                {proj.demo && (
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="pill olive"
                    style={{ fontSize: "11px" }}
                  >
                    LIVE DEMO ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
