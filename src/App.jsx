import { useState, useEffect } from "react";
import { useInView } from "./hooks/useInView";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function Portfolio() {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [skillsRef, skillsInView] = useInView();
  const [heroRef, heroInView] = useInView(0.05);
  const [aboutRef, aboutInView] = useInView();
  const [contactRef, contactInView] = useInView();

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
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

  return (
    <div className="portfolio-wrapper">
      {/* Navbar */}
      <Navbar
        active={active}
        scrolled={scrolled}
        scrollTo={scrollTo}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Hero */}
      <Hero heroRef={heroRef} heroInView={heroInView} scrollTo={scrollTo} />

      {/* About */}
      <About aboutRef={aboutRef} aboutInView={aboutInView} />

      {/* Skills */}
      <Skills skillsRef={skillsRef} skillsInView={skillsInView} />

      {/* Projects */}
      <Projects />

      {/* Contact */}
      <Contact contactRef={contactRef} contactInView={contactInView} />

      {/* Footer */}
      <Footer />
    </div>
  );
}