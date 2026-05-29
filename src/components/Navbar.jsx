import { NAV_LINKS } from "../constants/portfolioData";

export function Navbar({ active, scrolled, scrollTo, theme, toggleTheme }) {
  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <span className="navbar-logo">
          Portfolio<span className="navbar-logo-dot">.</span>
        </span>
        <div className="navbar-links">
          {NAV_LINKS.map(link => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`navbar-link-btn ${active === link ? "active" : ""}`}
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => scrollTo("Contact")}
            className="navbar-btn-hire"
          >
            Hire Me
          </button>
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
}
