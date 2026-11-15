import { useState } from "react";
import { OWNER_INFO } from "../constants/portfolioData";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(OWNER_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <footer id="contact" className="magazine-section section-contact">
      <div className="magazine-edge-tab" />
      <div className="magazine-page-num">PAGE 09 / 09</div>

      <div className="container">
        {/* Meta Header */}
        <div className="magazine-meta-header reveal-item">
          <span>09. CORRESPONDENCE</span>
          <span>DIRECT CONTACT & NETWORKING</span>
          <span>VT® 008-FIN</span>
        </div>

        <h2 className="contact-section-title reveal-item">GET IN TOUCH</h2>

        <div className="contact-layout-grid">
          <div>
            <p className="contact-desc-text reveal-item">
              Available for full-time <strong>QA/QC Tester</strong> roles, test automation initiatives, and software quality assurance collaborations. Feel free to reach out via email or connect on LinkedIn and GitHub.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center" }}>
              <button
                onClick={copyEmail}
                className="pill"
                style={{ cursor: "pointer", padding: "10px 22px" }}
              >
                {copied ? "✓ EMAIL COPIED" : `COPY: ${OWNER_INFO.email}`}
              </button>

              <a
                href={OWNER_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="pill"
                style={{ background: "transparent", color: "var(--cream)", border: "1px solid var(--cream)", padding: "10px 20px" }}
              >
                LINKEDIN ↗
              </a>

              <a
                href={OWNER_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="pill"
                style={{ background: "transparent", color: "var(--cream)", border: "1px solid var(--cream)", padding: "10px 20px" }}
              >
                GITHUB ↗
              </a>
            </div>
          </div>

          <div className="contact-meta-box reveal-item">
            <div style={{ fontFamily: "var(--font-display)", fontSize: "18px", color: "var(--olive)" }}>
              SPECIFICATION ARCHIVE
            </div>
            <div style={{ fontSize: "12px", lineHeight: "1.6" }}>
              <div><strong>LOCATION:</strong> {OWNER_INFO.location}</div>
              <div><strong>EMAIL:</strong> {OWNER_INFO.email}</div>
              <div><strong>STATUS:</strong> {OWNER_INFO.status}</div>
              <div><strong>CODE:</strong> VT-2026-QAQC</div>
            </div>
            <hr />
            <svg viewBox="0 0 100 20" fill="currentColor" style={{ width: "100%", height: "26px", color: "var(--cream)" }}>
              <rect x="0" y="0" width="3" height="20" />
              <rect x="5" y="0" width="1" height="20" />
              <rect x="8" y="0" width="4" height="20" />
              <rect x="14" y="0" width="2" height="20" />
              <rect x="18" y="0" width="3" height="20" />
              <rect x="23" y="0" width="1" height="20" />
              <rect x="26" y="0" width="4" height="20" />
              <rect x="32" y="0" width="2" height="20" />
              <rect x="36" y="0" width="5" height="20" />
              <rect x="43" y="0" width="2" height="20" />
              <rect x="47" y="0" width="1" height="20" />
              <rect x="50" y="0" width="3" height="20" />
              <rect x="55" y="0" width="4" height="20" />
              <rect x="61" y="0" width="2" height="20" />
              <rect x="65" y="0" width="1" height="20" />
              <rect x="68" y="0" width="4" height="20" />
              <rect x="74" y="0" width="3" height="20" />
              <rect x="79" y="0" width="2" height="20" />
              <rect x="83" y="0" width="4" height="20" />
              <rect x="89" y="0" width="1" height="20" />
              <rect x="92" y="0" width="3" height="20" />
              <rect x="97" y="0" width="2" height="20" />
            </svg>
          </div>
        </div>

        <div className="contact-footer-line">
          <div>
            VT® RESUME PRESENTATION // {OWNER_INFO.name}
          </div>
          <div>
            ALL RIGHTS RESERVED © 2026
          </div>
        </div>
      </div>
    </footer>
  );
}
