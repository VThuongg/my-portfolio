import { AnimatedBar } from "./AnimatedBar";

export function SkillCard({ skill, inView, index }) {
  return (
    <div
      className={`skill-card ${inView ? "in-view" : ""}`}
      style={{
        transitionDelay: inView ? `${index * 0.05}s` : "0s",
      }}
    >
      <div className="skill-card-header">
        <div className="skill-card-icon-info">
          <span className="skill-card-icon">{skill.icon}</span>
          <span className="skill-card-name">{skill.name}</span>
        </div>
        <span className="skill-card-level">{skill.level}%</span>
      </div>
      <AnimatedBar level={skill.level} inView={inView} />
    </div>
  );
}
