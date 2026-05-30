import { useState, useEffect } from "react";
import { useInView } from "./hooks/useInView";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { TRANSLATIONS } from "./constants/portfolioData";

export default function Portfolio() {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [loading, setLoading] = useState(true);
  
  const [skillsRef, skillsInView] = useInView(0.1);
  const [heroRef, heroInView] = useInView(0.05);
  const [aboutRef, aboutInView] = useInView(0.1);
  const [contactRef, contactInView] = useInView(0.1);

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark"; // Default to dark mode for premium look
  });

  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "vi";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("language", language);
    document.title = language === "vi"
      ? "Võ Thị Thương | Kỹ sư Full-Stack & AI/ML"
      : "Vo Thi Thuong | Full-Stack Engineer & AI/ML";
  }, [language]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "vi" ? "en" : "vi"));
  };

  const t = (key) => {
    return TRANSLATIONS[language][key] || key;
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner">
          <div className="spinner-circle"></div>
          <div className="spinner-circle"></div>
          <div className="spinner-circle"></div>
        </div>
        <p className="loading-text">
          {language === "vi" ? "Đang tải dữ liệu..." : "Loading portfolio..."}
        </p>
      </div>
    );
  }

  return (
    <div className="portfolio-wrapper">
      {/* Background Ambient Glows */}
      <div className="ambient-glow glow-1"></div>
      <div className="ambient-glow glow-2"></div>
      <div className="ambient-glow glow-3"></div>

      {/* Navbar */}
      <Navbar
        active={active}
        scrolled={scrolled}
        scrollTo={scrollTo}
        theme={theme}
        toggleTheme={toggleTheme}
        language={language}
        toggleLanguage={toggleLanguage}
        t={t}
      />

      {/* Hero */}
      <Hero heroRef={heroRef} heroInView={heroInView} scrollTo={scrollTo} t={t} />

      {/* About */}
      <About aboutRef={aboutRef} aboutInView={aboutInView} language={language} t={t} />

      {/* Skills */}
      <Skills skillsRef={skillsRef} skillsInView={skillsInView} t={t} />

      {/* Projects */}
      <Projects t={t} />

      {/* Contact */}
      <Contact contactRef={contactRef} contactInView={contactInView} t={t} />

      {/* Footer */}
      <Footer t={t} />
    </div>
  );
}