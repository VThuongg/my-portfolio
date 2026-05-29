import { SKILLS } from "../constants/portfolioData";
import { SkillCard } from "./SkillCard";

export function Skills({ skillsRef, skillsInView }) {
  return (
    <section id="skills" className="skills-section">
      <div ref={skillsRef} className="skills-container">
        <div className={`skills-header ${skillsInView ? "in-view" : ""}`}>
          <span className="skills-label">MY SKILLS</span>
          <h2 className="skills-title">Tech I work with</h2>
          <p className="skills-desc">Technologies and tools I use to build amazing products</p>
        </div>
        <div className="skills-grid">
          {SKILLS.map((skill, index) => (
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
