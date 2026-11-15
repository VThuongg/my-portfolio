import { OWNER_INFO } from "../constants/portfolioData";

export function About() {
  return (
    <section id="about" className="magazine-section section-about">
      <div className="magazine-edge-tab" />
      <div className="magazine-page-num">PAGE 02 / 09</div>

      <div className="container">
        {/* Meta Header */}
        <div className="magazine-meta-header reveal-item">
          <span>02. BIOGRAPHY & OVERVIEW</span>
          <span>SAIGON UNIVERSITY // BE IT</span>
          <span>VT® 001-ABOUT</span>
        </div>

        <div className="about-editorial-grid">
          {/* Left Column: Portrait Box & Metadata */}
          <div className="about-portrait-box reveal-item">
            <div className="about-portrait-art">
              <img
                src={`${import.meta.env.BASE_URL}portrait.jpg`}
                alt={OWNER_INFO.name}
                className="about-portrait-img"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <div className="about-fallback-box">
                <span role="img" aria-label="Portrait">■</span>
                <span style={{ fontSize: "14px", marginTop: "8px", letterSpacing: "1px" }}>QA // 2026</span>
              </div>
            </div>

            <div style={{ width: "100%", fontSize: "12px", lineHeight: "1.6" }}>
              <div style={{ fontWeight: "700", textTransform: "uppercase" }}>{OWNER_INFO.name}</div>
              <div style={{ color: "var(--muted)" }}>{OWNER_INFO.role}</div>
              <hr />
              <div><strong>EDU:</strong> SAIGON UNIVERSITY</div>
              <div><strong>GPA:</strong> 3.60 / 4.0</div>
              <div><strong>LOC:</strong> HO CHI MINH CITY</div>
            </div>
          </div>

          {/* Right Column: Title & Text Body */}
          <div>
            <h2 className="about-big-title reveal-item">ABOUT ME</h2>

            <div className="about-content-body reveal-item">
              <p>
                I am a dedicated <strong>QA/QC Tester</strong> with hands-on expertise in manual testing methodologies, test scenario architecture, and a growing foundation in test automation. Graduated with a Bachelor of Engineering in Information Technology from <strong>Saigon University (SGU)</strong> with a cumulative <strong>GPA of 3.60 / 4.0</strong>.
              </p>

              <p>
                Currently working at <strong>Fukuda.AI</strong> as a Software Tester, testing quotation and ERP systems, 3D models, 2D drawing extraction, and AI features. Previously, I completed a 4-month QA Internship at <strong>Alpaca Solutions</strong> validating Android mobile applications, designing comprehensive functional & regression test suites, and performing API verification. Currently building test automation skills with Playwright and TypeScript through a personal end-to-end framework project.
              </p>

              <p>
                My approach to software quality assurance is analytical and detail-oriented: identifying defects early in the SDLC/STLC cycle, validating boundary and edge-case conditions, ensuring accurate requirement coverage, and communicating seamlessly with developers to build dependable, high-quality digital products.
              </p>

              <div style={{ display: "flex", gap: "12px", marginTop: "24px" }}>
                <a
                  href={OWNER_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="pill"
                >
                  LINKEDIN PROFILE →
                </a>
                <a
                  href={OWNER_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="pill"
                  style={{ background: "transparent", color: "var(--ink)", border: "1px solid var(--ink)" }}
                >
                  GITHUB REPOSITORY ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
