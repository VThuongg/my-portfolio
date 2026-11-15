import { LANGUAGES_DATA, SOFT_SKILLS_DATA, HOBBIES_DATA } from "../constants/portfolioData";

export function InfoSection() {
  return (
    <section id="info" className="magazine-section section-info">
      <div className="magazine-edge-tab" />
      <div className="magazine-page-num">PAGE 08 / 09</div>

      <div className="container">
        {/* Meta Header */}
        <div className="magazine-meta-header reveal-item">
          <span>08. CAPABILITIES & INTERESTS</span>
          <span>LINGUISTIC & QA MINDSET PROFILE</span>
          <span>VT® 007-INT</span>
        </div>

        <div className="info-dual-grid">
          {/* Left: Language & Soft Skills */}
          <div className="info-left-column">
            {/* Language Block */}
            <div style={{ marginBottom: "26px" }}>
              <div className="bar">LANGUAGE PROFICIENCY</div>

              <div className="language-table-block reveal-item">
                {LANGUAGES_DATA.map((lang) => (
                  <div key={lang.language} className="language-table-row">
                    <div>
                      <div style={{ fontFamily: "var(--font-display)", fontSize: "17px" }}>
                        {lang.language}
                      </div>
                      <div style={{ fontSize: "12px", color: "var(--muted)", marginTop: "2px" }}>
                        {lang.level}
                      </div>
                    </div>
                    <span className="pill olive" style={{ fontSize: "12px", padding: "5px 14px" }}>
                      {lang.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* QA Soft Skills Block */}
            <div>
              <div className="bar">QA MINDSET & SOFT SKILLS</div>

              <div className="softskills-editorial-list">
                {SOFT_SKILLS_DATA.map((skill) => (
                  <div key={skill.title} className="softskill-card-item reveal-item">
                    <div>
                      <div style={{ fontFamily: "var(--font-display)", fontSize: "16px" }}>
                        {skill.title}
                      </div>
                      <div style={{ fontSize: "13.5px", color: "#333", marginTop: "3px", lineHeight: "1.5" }}>
                        {skill.desc}
                      </div>
                    </div>
                    <span className="info-item-num">
                      {skill.num}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Hobbies & Interests */}
          <div>
            <div className="bar bar-olive">HOBBIES & INTERESTS</div>

            <div className="hobbies-editorial-list">
              {HOBBIES_DATA.map((item, idx) => (
                <div key={item.title} className="hobby-card-item reveal-item">
                  <div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "16px" }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: "13.5px", color: "#333", marginTop: "3px", lineHeight: "1.5" }}>
                      {item.desc}
                    </div>
                  </div>
                  <span className="info-item-num">
                    {item.num || String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
