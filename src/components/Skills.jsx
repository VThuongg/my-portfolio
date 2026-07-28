import { useState } from "react";
import { SKILLS } from "../constants/portfolioData";
import { SkillCard } from "./SkillCard";

export function Skills({ skillsRef, skillsInView, t }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", labelKey: "filterAll" },
    { id: "qa", labelKey: "filterQA" },
    { id: "frontend", labelKey: "filterFrontend" },
    { id: "backend", labelKey: "filterBackend" },
    { id: "tools", labelKey: "filterTools" },
  ];

  const filteredSkills = activeFilter === "all"
    ? SKILLS
    : SKILLS.filter(skill =>
        Array.isArray(skill.category)
          ? skill.category.includes(activeFilter)
          : skill.category === activeFilter
      );

  return (
    <section id="skills" className="skills-section">
      <div ref={skillsRef} className="skills-container">
        <div className={`skills-header ${skillsInView ? "in-view" : ""}`}>
          <span className="skills-label">{t("skillsLabel")}</span>
          <h2 className="skills-title">{t("skillsTitle")}</h2>
          <p className="skills-desc">{t("skillsDesc")}</p>
        </div>

        {/* Filter Navigation */}
        <div className="skills-filter-nav">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`skills-filter-btn ${activeFilter === cat.id ? "active" : ""}`}
            >
              {t(cat.labelKey)}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              inView={skillsInView}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

