import { useState } from "react";
import { NAV_LINKS } from "../constants/portfolioData";

export function Navbar({ active, scrollTo }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (id) => {
    scrollTo(id);
    setMobileOpen(false);
  };

  return (
    <header className="magazine-nav">
      <div className="nav-wrapper">
        {/* Brand: VT® on one line */}
        <div
          className="nav-brand-title"
          onClick={() => handleNavClick("hero")}
        >
          VT®
        </div>

        {/* Navigation Links with generous gap */}
        <nav className="nav-links-deck">
          {NAV_LINKS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`nav-btn ${active === item.id ? "active" : ""}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          className="mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {mobileOpen && (
        <>
          <div
            className="mobile-nav-backdrop"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <nav className="mobile-nav-drawer" aria-label="Mobile navigation">
            {NAV_LINKS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`mobile-nav-item ${active === item.id ? "active" : ""}`}
              >
                <span>{item.label}</span>
                <span className="mobile-nav-arrow">→</span>
              </button>
            ))}
          </nav>
        </>
      )}
    </header>
  );
}
