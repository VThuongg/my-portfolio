import { useState, useEffect } from "react";
import { useInView } from "./hooks/useInView";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
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

  const language = "en";

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    document.title = "Vo Thi Thuong | Portfolio";
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const t = (key) => {
    return TRANSLATIONS[language][key] || key;
  };

  useEffect(() => {
    const handleScroll = () => {
      // 1. Set scrolled class for navbar styling
      setScrolled(window.scrollY > 40);

      // 2. Scroll Spy: automatically update active section on scroll
      const sections = ["home", "about", "experience", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            const mapping = {
              home: "Home",
              about: "About",
              experience: "Experience",
              skills: "Skills",
              projects: "Projects",
              contact: "Contact"
            };
            setActive(mapping[sectionId]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
        t={t}
      />

      {/* Hero */}
      <Hero heroRef={heroRef} heroInView={heroInView} scrollTo={scrollTo} t={t} />

      {/* About */}
      <About aboutRef={aboutRef} aboutInView={aboutInView} t={t} />

      {/* Experience */}
      <Experience t={t} />

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