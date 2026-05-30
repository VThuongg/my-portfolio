import { useState } from "react";
import { TIMELINE } from "../constants/portfolioData";

export function About({ aboutRef, aboutInView, language, t }) {
  const [activeFile, setActiveFile] = useState("Bio.json");
  const [runStatus, setRunStatus] = useState("idle"); // idle, running, success
  const [consoleLogs, setConsoleLogs] = useState([]);

  const fileContents = {
    "Bio.json": `{
  "name": "${t("ownerName")}",
  "role": "Full-Stack & AI/ML",
  "location": "Ho Chi Minh City 🇻🇳",
  "passion": "Building scalable software",
  "status": "Open for work 🚀"
}`,
    "Stack.js": `const developer = {
  languages: ["Python", "JavaScript", "SQL", "HTML/CSS"],
  frameworks: ["React", "Next.js", "FastAPI"],
  databases: ["Supabase", "PostgreSQL", "MySQL"],
  tools: ["GitHub", "Postman", "Git"]
};`,
    "Philosophy.txt": `"Code is read more than written.
I strive for clean architecture,
readability, and building tech
that creates a real-world impact."`
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleRunCode = () => {
    if (runStatus === "running") return;
    setRunStatus("running");
    setConsoleLogs([]);
    
    // Simulate terminal compiling & execution
    const steps = [
      { text: "$ node Stack.js", delay: 100 },
      { text: "⏳ Compiling code modules...", delay: 400 },
      { text: "✓ Stack verified and active.", delay: 800 },
      { text: `🚀 Output: ${t("ownerName")} is ready to scale your next product! ✨`, delay: 1300 }
    ];

    steps.forEach((step) => {
      setTimeout(() => {
        setConsoleLogs((prev) => [...prev, step.text]);
        if (step.text.startsWith("🚀")) {
          setRunStatus("success");
        }
      }, step.delay);
    });
  };

  return (
    <section id="about" className="about-section">
      <div ref={aboutRef} className="about-container">
        <span className="about-label">{t("aboutLabel")}</span>
        <h2 className="about-title">
          {t("aboutTitle1")}<br />
          <span className="about-title-highlight">{t("aboutTitle2")}</span>
        </h2>

        {/* Bento Grid */}
        <div className={`about-bento-grid ${aboutInView ? "in-view" : ""}`}>
          {/* Tile 1: The Bio Narrative */}
          <div 
            className="bento-tile bio-tile glass-card spotlight-card" 
            onMouseMove={handleMouseMove}
          >
            <h3 className="bento-tile-title">{t("tabStory")}</h3>
            <p className="about-desc">{t("aboutDesc1")}</p>
            <p className="about-desc">{t("aboutDesc2")}</p>
            
            <div className="about-tags">
              {[
                ["Python", "#ca8a04"],
                ["Spring Boot", "#16a34a"],
                ["React", "#06b6d4"],
                ["JavaScript", "#f7df1e"],
                ["PHP", "#4f46e5"],
                ["SQL Server", "#CC292B"]
              ].map(([tag, color]) => (
                <span
                  key={tag}
                  className="about-tag"
                  style={{
                    borderColor: `${color}30`,
                    backgroundColor: `${color}12`,
                    color: color,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Tile 2: Interactive IDE Editor */}
          <div 
            className="bento-tile ide-tile glass-card spotlight-card"
            onMouseMove={handleMouseMove}
          >
            <div className="ide-header">
              <div className="ide-dots">
                {["#ef4444", "#f59e0b", "#22c55e"].map(c => (
                  <span key={c} className="ide-dot" style={{ background: c }} />
                ))}
              </div>
              <div className="ide-tabs">
                {Object.keys(fileContents).map(fileName => (
                  <button
                    key={fileName}
                    className={`ide-tab ${activeFile === fileName ? "active" : ""}`}
                    onClick={() => {
                      setActiveFile(fileName);
                      setRunStatus("idle");
                      setConsoleLogs([]);
                    }}
                  >
                    {fileName}
                  </button>
                ))}
              </div>
              <button 
                className={`ide-run-btn ${runStatus === "running" ? "running" : ""}`} 
                onClick={handleRunCode}
                disabled={runStatus === "running"}
              >
                {runStatus === "running" ? "Running..." : "▶ Run"}
              </button>
            </div>

            <div className="ide-editor-container">
              <div className="ide-line-numbers">
                {fileContents[activeFile].split("\n").map((_, i) => (
                  <span key={i}>{i + 1}</span>
                ))}
              </div>
              <pre className="ide-code">
                <code>{fileContents[activeFile]}</code>
              </pre>
            </div>

            {/* Console output */}
            {(runStatus !== "idle" || consoleLogs.length > 0) && (
              <div className="ide-console">
                <div className="ide-console-header">Console Output</div>
                <div className="ide-console-logs">
                  {consoleLogs.map((log, i) => (
                    <div 
                      key={i} 
                      className={`ide-log-line ${
                        log.startsWith("🚀") ? "success" : log.startsWith("⏳") ? "pending" : log.startsWith("✓") ? "verified" : ""
                      }`}
                    >
                      {log}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Tile 3: Core Values */}
          <div 
            className="bento-tile values-tile glass-card spotlight-card"
            onMouseMove={handleMouseMove}
          >
            <h3 className="bento-tile-title">{t("valuesTitle")}</h3>
            <div className="values-list">
              {[1, 2, 3].map((num) => (
                <div key={num} className="value-item">
                  <h4 className="value-item-title">
                    <span className="value-dot">✦</span> {t(`value${num}Title`)}
                  </h4>
                  <p className="value-item-desc">{t(`value${num}Desc`)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tile 4: Timeline Journey */}
          <div 
            className="bento-tile journey-tile glass-card spotlight-card"
            onMouseMove={handleMouseMove}
          >
            <h3 className="bento-tile-title">{t("journeyTitle")}</h3>
            <div className="about-timeline-list">
              {TIMELINE.map((item, index) => (
                <div key={item.year} className="about-timeline-item">
                  <div className="about-timeline-dot-wrapper">
                    <div className="about-timeline-dot"></div>
                    {index !== TIMELINE.length - 1 && <div className="about-timeline-line"></div>}
                  </div>
                  <div className="about-timeline-content">
                    <div className="about-timeline-year">{item.year}</div>
                    <h4 className="about-timeline-heading">{t(item.titleKey)}</h4>
                    <p className="about-timeline-text">{t(item.descKey)}</p>
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

