import { useState } from "react";
import { useInView } from "../hooks/useInView";

export function Experience({ t }) {
  const [headerRef, headerInView] = useInView(0.1);
  const [contentRef, contentInView] = useInView(0.1);
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      id: "asol",
      company: "ASOL (Alpaca Solutions)",
      shortName: "ASOL Studio",
      roleKey: "expASOLRole",
      period: "Mar 2026 – Jun 2026",
      typeTextKey: "expTypeIntern",
      points: [
        "expASOLPoint1",
        "expASOLPoint2",
        "expASOLPoint3"
      ],
      tags: ["Game Dev", "Engine Architecture", "Casual Games"],
      color: "#06b6d4"
    },
    {
      id: "mindx",
      company: "MindX Technology School",
      shortName: "MindX School",
      roleKey: "expMindXRole",
      period: "Aug 2025 – May 2026",
      typeTextKey: "expTypeWork",
      points: [
        "expMindXPoint1",
        "expMindXPoint2",
        "expMindXPoint3"
      ],
      tags: ["Scratch", "GameMaker", "Python", "HTML/CSS/JS"],
      color: "#10b981"
    }
  ];

  const current = experiences[activeTab];

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        {/* Header */}
        <div ref={headerRef} className={`experience-header ${headerInView ? "in-view" : ""}`}>
          <span className="experience-label">{t("experienceLabel")}</span>
          <h2 className="experience-title">{t("experienceTitle")}</h2>
          <p className="experience-desc">{t("experienceDesc")}</p>
        </div>

        {/* Tabbed Interactive Panel */}
        <div 
          ref={contentRef} 
          className={`experience-tabs-container glass-card spotlight-card ${contentInView ? "in-view" : ""}`}
          style={{ "--active-tab": activeTab }}
          onMouseMove={handleMouseMove}
        >
          {/* Left/Top: Tab Navigation */}
          <div className="experience-tabs-list">
            {experiences.map((exp, idx) => (
              <button
                key={exp.id}
                onClick={() => setActiveTab(idx)}
                className={`experience-tab-btn ${activeTab === idx ? "active" : ""}`}
                style={{
                  "--active-color": exp.color
                }}
              >
                <span className="tab-text">{exp.shortName}</span>
              </button>
            ))}
            {/* Smoothly Sliding Accent Line */}
            <div 
              className="tab-sliding-indicator" 
              style={{
                backgroundColor: current.color,
                boxShadow: `0 0 12px ${current.color}`
              }}
            />
          </div>

          {/* Right: Carriage Sliding Details (Like a passing train) */}
          <div className="experience-details-wrapper">
            <div 
              className="experience-details-track"
              style={{
                transform: `translateX(calc(-100% * ${activeTab}))`
              }}
            >
              {experiences.map((exp) => (
                <div 
                  key={exp.id} 
                  className="experience-details-content"
                  style={{ "--accent-color": exp.color }}
                >
                  <div className="experience-details-header">
                    <h3 className="exp-role-title">
                      {t(exp.roleKey)}{" "}
                      <span className="exp-company-at" style={{ color: exp.color }}>
                        @ {exp.company}
                      </span>
                    </h3>
                    
                    <div className="exp-meta-row">
                      <span 
                        className="exp-badge"
                        style={{
                          backgroundColor: `${exp.color}12`,
                          color: exp.color,
                          borderColor: `${exp.color}25`
                        }}
                      >
                        {t(exp.typeTextKey)}
                      </span>
                      <span className="exp-period">{exp.period}</span>
                    </div>
                  </div>

                  <div className="experience-details-body">
                    <ul className="exp-points-list">
                      {exp.points.map((ptKey, ptIdx) => (
                        <li key={ptIdx} className="exp-point-item">
                          <span className="exp-point-bullet" style={{ color: exp.color }}>✦</span>
                          <p className="exp-point-text">{t(ptKey)}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="experience-details-header-divider" />

                  <div className="experience-details-footer">
                    <div className="exp-tags-list">
                      {exp.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="exp-tag-item"
                          style={{
                            borderColor: `${exp.color}25`,
                            color: exp.color,
                            backgroundColor: `${exp.color}05`
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
