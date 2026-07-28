export function Hero({ heroRef, heroInView, scrollTo, t }) {
  return (
    <section id="home" ref={heroRef} className="hero-section">
      <div className="hero-bg-circle" />
      <div className="hero-bg-grid" />

      <div className="hero-container">
        {/* Left Column - Text Details */}
        <div className={`hero-content ${heroInView ? "in-view" : ""}`}>
          <div className="hero-tagline">
            <span className="hero-tagline-line" />
            <span className="hero-tagline-text">{t("heroSubtitle")}</span>
          </div>

          <h1 className="hero-title">
            {t("heroTitlePrefix")}<br />
            <span className="hero-title-name gradient-text">{t("ownerName")}</span>
          </h1>

          <p className="hero-desc">{t("heroDesc")}</p>

          <div className="hero-btns">
            <button
              onClick={() => scrollTo("Projects")}
              className="hero-btn-primary"
            >
              {t("viewProjects")}
            </button>
          </div>

          <div className="hero-stats">
            {[
              [t("statProjectsVal"), t("statProjectsLabel")],
              [t("statExpVal"), t("statExpLabel")],
              [t("statLocVal"), t("statLocLabel")],
            ].map(([num, label]) => (
              <div key={label} className="hero-stat-item">
                <p className="hero-stat-number">{num}</p>
                <p className="hero-stat-label">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Avatar Visual */}
        <div className={`hero-avatar-col ${heroInView ? "in-view" : ""}`}>
          <div className="hero-avatar-wrapper">
            <div className="hero-avatar-glow" />
            <div className="hero-avatar-content">
              <div className="hero-avatar-emoji">👩‍💻</div>
              <p className="hero-avatar-name">{t("ownerName")}</p>
              <p className="hero-avatar-title">Software Dev · Game & QA</p>
              <div className="hero-avatar-status">
                <span className="status-dot animate-pulse"></span>
                <span className="status-text">Open for work</span>
              </div>
            </div>

            {/* Floating Tech Icons */}
            <div className="floating-tech tech-react" style={{ "--float-delay": "0s" }}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" />
            </div>
            <div className="floating-tech tech-spring" style={{ "--float-delay": "1.5s" }}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" alt="Spring Boot" />
            </div>
            <div className="floating-tech tech-python" style={{ "--float-delay": "3s" }}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" />
            </div>
            <div className="floating-tech tech-js" style={{ "--float-delay": "4.5s" }}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

