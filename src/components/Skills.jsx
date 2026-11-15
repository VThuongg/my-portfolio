import { SKILLS_COMPETENCIES, SKILLS_PILLS } from "../constants/portfolioData";

export function Skills() {
  return (
    <section id="skills" className="magazine-section section-skills">
      <div className="magazine-edge-tab" />
      <div className="magazine-page-num">PAGE 05 / 09</div>

      <div className="container">
        {/* Meta Header */}
        <div className="magazine-meta-header reveal-item">
          <span>05. SKILLS MATRIX</span>
          <span>TESTING COMPETENCIES & PROFICIENCY</span>
          <span>VT® 004-SKL</span>
        </div>

        <h2 className="skills-section-title reveal-item">TECHNICAL SKILLS</h2>

        {/* 6 Core QA Competencies with Qualitative Levels */}
        <div className="skills-competency-grid">
          {SKILLS_COMPETENCIES.map((item, idx) => (
            <div key={item.label} className="skill-competency-card reveal-item">
              <div className="skill-competency-header">
                <span className="skill-competency-num">0{idx + 1}</span>
                <span className={`pill ${item.level === "ADVANCED" ? "olive" : "cream-pill"}`}>
                  {item.level}
                </span>
              </div>
              <h3 className="skill-competency-title">{item.label}</h3>
              <p className="skill-competency-desc">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Tools & Technologies Pills Shelf */}
        <div style={{ marginTop: "24px" }}>
          <div style={{ fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "14px", color: "var(--olive)" }}>
            CORE TOOLS, DATABASES & PROGRAMMING LANGUAGES
          </div>

          <div className="skills-pills-shelf reveal-item">
            {SKILLS_PILLS.map((pill) => (
              <span key={pill} className="pill">
                {pill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
