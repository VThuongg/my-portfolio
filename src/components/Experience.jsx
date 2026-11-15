import { EXPERIENCES_DATA } from "../constants/portfolioData";

export function Experience() {
  return (
    <section id="experience" className="magazine-section section-experience">
      <div className="magazine-edge-tab" />
      <div className="magazine-page-num">PAGE 03 / 09</div>

      <div className="container">
        {/* Meta Header */}
        <div className="magazine-meta-header reveal-item">
          <span>03. CAREER TIMELINE</span>
          <span>SOFTWARE TESTING & INTERNSHIPS</span>
          <span>VT® 002-EXP</span>
        </div>

        <h2 className="experience-section-title reveal-item">EXPERIENCE</h2>

        <div className="experience-grid-deck">
          {EXPERIENCES_DATA.map((exp) => (
            <div key={exp.id} className="experience-card-item reveal-item">
              {/* Black Timebar Header with Cream Text */}
              <div className="bar" style={{ alignSelf: "flex-start", marginBottom: "16px" }}>
                {exp.timebar}
              </div>

              <h3 className="experience-company-title">{exp.company}</h3>
              <div className="experience-role-sub">{exp.role}</div>

              <hr />

              <ul className="experience-ul">
                {exp.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "auto", paddingTop: "18px" }}>
                {exp.tags.map((tag) => (
                  <span key={tag} className="pill" style={{ fontSize: "10px", padding: "4px 10px" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
