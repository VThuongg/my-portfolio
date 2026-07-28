import { useState } from "react";
import { NAV_LINKS } from "../constants/portfolioData";

export function Navbar({ active, scrolled, scrollTo, theme, toggleTheme, t }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""} ${mobileMenuOpen ? "mobile-open" : ""}`}>
      <div className="navbar-container">
        <span className="navbar-logo" onClick={() => scrollTo("Home")}>
          {t("logoText")}<span className="navbar-logo-dot">.</span>
        </span>
        
        {/* Desktop Links */}
        <div className="navbar-links desktop-only">
          {NAV_LINKS.map(link => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`navbar-link-btn ${active === link.id ? "active" : ""}`}
            >
              {t(link.labelKey)}
            </button>
          ))}
        </div>

        {/* Right side actions */}
        <div className="navbar-actions">

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.93 4.93 1.41 1.41" />
                <path d="m17.66 17.66 1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m6.34 17.66-1.41 1.41" />
                <path d="m19.07 4.93-1.41 1.41" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
            )}
          </button>

          {/* Hire Me Button */}
          <button
            onClick={() => scrollTo("Contact")}
            className="navbar-btn-hire desktop-only"
          >
            {t("hireMe")}
          </button>

          {/* Mobile menu toggle */}
          <button
            className="navbar-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${mobileMenuOpen ? "open" : ""}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`navbar-mobile-menu ${mobileMenuOpen ? "active" : ""}`}>
        {NAV_LINKS.map(link => (
          <button
            key={link.id}
            onClick={() => {
              scrollTo(link.id);
              setMobileMenuOpen(false);
            }}
            className={`navbar-mobile-link ${active === link.id ? "active" : ""}`}
          >
            {t(link.labelKey)}
          </button>
        ))}
        <button
          onClick={() => {
            scrollTo("Contact");
            setMobileMenuOpen(false);
          }}
          className="navbar-mobile-hire"
        >
          {t("hireMe")}
        </button>
      </div>
    </nav>
  );
}

