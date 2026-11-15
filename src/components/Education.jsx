import { EDUCATION_BLOCKS } from "../constants/portfolioData";

export function Education() {
  return (
    <section id="education" className="magazine-section section-education">
      <div className="magazine-edge-tab" />
      <div className="magazine-page-num">PAGE 04 / 09</div>

      <div className="container">
        {/* Meta Header */}
        <div className="magazine-meta-header reveal-item">
          <span>04. ACADEMIC CREDENTIALS</span>
          <span>SAIGON UNIVERSITY // 2022 – 2026</span>
          <span>VT® 003-EDU</span>
        </div>

        <h2 className="education-section-title reveal-item">EDUCATION</h2>

        <div className="education-badges-row">
          {EDUCATION_BLOCKS.map((item, idx) => (
            <div key={idx} className="education-badge-card reveal-item">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                {/* Circular Badge alternating ink and olive */}
                <div className={`badge ${idx % 2 === 1 ? "olive" : ""}`}>
                  {item.badgeText}
                </div>
                {(item.year || item.tag) && (
                  <span className="pill" style={{ background: "transparent", border: "1px solid var(--ink)", color: "var(--ink)" }}>
                    {item.year || item.tag}
                  </span>
                )}
              </div>

              <div>
                <h3 className="education-inst-title">{item.institution}</h3>
                <div style={{ fontSize: "12px", fontWeight: "700", color: "var(--muted)", textTransform: "uppercase", marginTop: "4px" }}>
                  {item.major}
                </div>
              </div>

              <hr />

              <p className="education-desc-text">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
