export function Hero({ heroRef, heroInView, scrollTo }) {
  return (
    <section id="home" ref={heroRef} className="hero-section">
      <div className="hero-bg-circle" />

      <div className="hero-container">
        {/* Left Column - Text Details */}
        <div className={`hero-content ${heroInView ? "in-view" : ""}`}>
          <div className="hero-tagline">
            <span className="hero-tagline-line" />
            <span className="hero-tagline-text">FULL-STACK ENGINEER · AI/ML</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm<br />
            <span className="hero-title-name">Vo Thi Thuong</span>
          </h1>

          <p className="hero-desc">
            Building scalable systems from backend to browser. Turning data into insight, code into real-world impact.
          </p>

          <div className="hero-btns">
            <button
              onClick={() => scrollTo("Projects")}
              className="hero-btn-primary"
            >
              View Projects →
            </button>
            <a
              href="#"
              download
              className="hero-btn-secondary"
            >
              ↓ Download CV
            </a>
          </div>

          <div className="hero-stats">
            {[
              ["3+", "Projects"],
              ["AI + Web", "Expertise"],
              ["HCM City", "Vietnam 🇻🇳"],
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
            <div className="hero-avatar-content">
              <div className="hero-avatar-emoji">👩‍💻</div>
              <p className="hero-avatar-name">Võ Thị Thương</p>
              <p className="hero-avatar-title">Full-Stack · AI/ML</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
