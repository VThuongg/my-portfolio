export function SkillCard({ skill, inView, index }) {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      className={`skill-card spotlight-card ${inView ? "in-view" : ""}`}
      onMouseMove={handleMouseMove}
      style={{
        transitionDelay: inView ? `${index * 0.04}s` : "0s",
        "--skill-color": skill.color,
      }}
    >
      <div className="skill-card-header">
        <div className="skill-card-icon-info">
          <div className="skill-card-icon-wrapper" style={{ background: `${skill.color}15` }}>
            {skill.icon.startsWith("http") ? (
              <img
                src={skill.icon}
                alt={skill.name}
                className={`skill-card-icon ${
                  skill.icon.includes("simple-icons") ||
                  skill.icon.includes("simpleicons") ||
                  skill.icon.includes("github")
                    ? "brand-invert"
                    : ""
                }`}
                style={{ width: "22px", height: "22px", objectFit: "contain", display: "block" }}
              />
            ) : (
              <span className="skill-card-icon">{skill.icon}</span>
            )}
          </div>
          <span className="skill-card-name">{skill.name}</span>
        </div>
      </div>
    </div>
  );
}

