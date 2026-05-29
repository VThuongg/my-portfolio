export function About({ aboutRef, aboutInView }) {
  return (
    <section id="about" className="about-section">
      <div ref={aboutRef} className="about-container">
        <div className={`about-content ${aboutInView ? "in-view" : ""}`}>
          <span className="about-label">ABOUT ME</span>
          <h2 className="about-title">
            Code with purpose,<br />
            <span className="about-title-highlight">ship with care.</span>
          </h2>
          <p className="about-desc">
            I'm a Full-Stack Engineer based in Ho Chi Minh City, specializing in Spring Boot, PHP, Python, and React. I care about clean architecture and AI-driven solutions.
          </p>
          <p className="about-desc">
            From building management systems to deep learning for bioinformatics — I thrive at the intersection of software engineering and data science.
          </p>
          <div className="about-tags">
            {[
              ["Spring Boot", "#dcfce7", "#16a34a"],
              ["Python", "#fef9c3", "#ca8a04"],
              ["PyTorch", "#fee2e2", "#dc2626"],
              ["JUnit", "#eff6ff", "#2563eb"],
            ].map(([t, bg, c]) => (
              <span
                key={t}
                className="about-tag"
                style={{
                  background: bg,
                  color: c,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className={`about-terminal-col ${aboutInView ? "in-view" : ""}`}>
          <div className="about-terminal">
            <div className="about-terminal-dots">
              {["#ef4444", "#f59e0b", "#22c55e"].map(c => (
                <span
                  key={c}
                  className="about-terminal-dot"
                  style={{
                    background: c,
                  }}
                />
              ))}
            </div>
            <pre className="about-terminal-code">
              <span style={{ color: "#60a5fa" }}>class</span> <span style={{ color: "#fbbf24" }}>Developer</span>:{"\n"}
              {"  "}<span style={{ color: "#94a3b8" }}>name</span>     = <span style={{ color: "#86efac" }}>"Võ Thị Thương"</span>{"\n"}
              {"  "}<span style={{ color: "#94a3b8" }}>role</span>     = <span style={{ color: "#86efac" }}>"Full-Stack + AI/ML"</span>{"\n"}
              {"  "}<span style={{ color: "#94a3b8" }}>location</span> = <span style={{ color: "#86efac" }}>"Ho Chi Minh City 🇻🇳"</span>{"\n"}
              {"  "}<span style={{ color: "#94a3b8" }}>stack</span>    = [<span style={{ color: "#86efac" }}>"Spring Boot"</span>, <span style={{ color: "#86efac" }}>"PHP"</span>,{"\n"}
              {"             "}<span style={{ color: "#86efac" }}>"Python"</span>, <span style={{ color: "#86efac" }}>"React"</span>]{"\n"}
              {"  "}<span style={{ color: "#94a3b8" }}>testing</span>  = [<span style={{ color: "#86efac" }}>"JUnit"</span>, <span style={{ color: "#86efac" }}>"Manual Testing"</span>]{"\n"}
              {"  "}<span style={{ color: "#94a3b8" }}>goal</span>     = <span style={{ color: "#86efac" }}>"Clean code. Real impact."</span>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
