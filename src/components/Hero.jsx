import { OWNER_INFO } from "../constants/portfolioData";

export function Hero({ scrollTo }) {
  return (
    <section id="hero" className="magazine-section section-hero">
      <div className="magazine-edge-tab" />
      <div className="magazine-page-num">PAGE 01 / 09</div>

      <div className="container">
        {/* Meta Header */}
        <div className="magazine-meta-header">
          <span>ISSUE 2026 // VOL. 01</span>
          <span>PORTFOLIO // QA-QC TESTER</span>
          <span>VT® 000-2026</span>
        </div>

        <div className="hero-columns-grid">
          {/* Left Column: Name, Pills, Subhead, Bio, Actions */}
          <div className="hero-text-block">
            <h1 className="hero-main-title">
              <span className="hero-title-line-mask">
                <span className="hero-title-line hero-line-1">VO THI</span>
              </span>
              <span className="hero-title-line-mask">
                <span className="hero-title-line hero-line-2">THUONG</span>
              </span>
            </h1>

            <div style={{ marginBottom: "14px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <span className="pill olive">
                {OWNER_INFO.role}
              </span>
              <span className="pill" style={{ border: "1px solid var(--cream)" }}>
                {OWNER_INFO.degree}
              </span>
            </div>

            <div className="hero-subhead">
              {OWNER_INFO.title}
            </div>

            <p className="hero-summary-text">
              {OWNER_INFO.bio}
            </p>

            <div style={{ display: "flex", gap: "12px", marginTop: "22px" }}>
              <button
                onClick={() => scrollTo("projects")}
                className="pill olive"
                style={{ cursor: "pointer", padding: "10px 22px" }}
              >
                VIEW PROJECTS →
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="pill"
                style={{ cursor: "pointer", border: "1px solid var(--cream)", padding: "10px 22px" }}
              >
                GET IN TOUCH
              </button>
            </div>
          </div>

          {/* Right Column: Rectangular Portrait Frame (Ratio 3:4, solid olive fallback, no emoji/placeholder text) + Overlapping Specification Card (~20% overlap) */}
          <div className="hero-visual-wrapper">
            <div className="hero-portrait-frame">
              <img
                src="/portrait.jpg"
                alt={OWNER_INFO.name}
                className="hero-portrait-img"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>

            {/* Specification Card shifted to lower right, only overlapping ~20% of frame */}
            <div className="hero-meta-stamp-card">
              <svg className="hero-barcode-svg" viewBox="0 0 100 24" fill="currentColor">
                <rect x="0" y="0" width="3" height="24" />
                <rect x="5" y="0" width="1" height="24" />
                <rect x="8" y="0" width="4" height="24" />
                <rect x="14" y="0" width="2" height="24" />
                <rect x="18" y="0" width="3" height="24" />
                <rect x="23" y="0" width="1" height="24" />
                <rect x="26" y="0" width="4" height="24" />
                <rect x="32" y="0" width="2" height="24" />
                <rect x="36" y="0" width="5" height="24" />
                <rect x="43" y="0" width="2" height="24" />
                <rect x="47" y="0" width="1" height="24" />
                <rect x="50" y="0" width="3" height="24" />
                <rect x="55" y="0" width="4" height="24" />
                <rect x="61" y="0" width="2" height="24" />
                <rect x="65" y="0" width="1" height="24" />
                <rect x="68" y="0" width="4" height="24" />
                <rect x="74" y="0" width="3" height="24" />
                <rect x="79" y="0" width="2" height="24" />
                <rect x="83" y="0" width="4" height="24" />
                <rect x="89" y="0" width="1" height="24" />
                <rect x="92" y="0" width="3" height="24" />
                <rect x="97" y="0" width="2" height="24" />
              </svg>

              <div style={{ fontSize: "10px", letterSpacing: "1px", textTransform: "uppercase", opacity: 0.8 }}>
                SPECIFICATION // QA-QC TEST PROTOCOL
              </div>

              <hr />

              <div style={{ fontSize: "11px", lineHeight: "1.6" }}>
                <div><strong>NAME:</strong> {OWNER_INFO.name}</div>
                <div><strong>POSITION:</strong> {OWNER_INFO.role}</div>
                <div><strong>LOCATION:</strong> {OWNER_INFO.location}</div>
                <div><strong>EDUCATION:</strong> SGU (GPA 3.60 / 4.0)</div>
                <div><strong>STATUS:</strong> {OWNER_INFO.status}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
