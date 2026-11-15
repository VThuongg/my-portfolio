import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Volunteer } from "./components/Volunteer";
import { InfoSection } from "./components/InfoSection";
import { Contact } from "./components/Contact";

export default function Portfolio() {
  const [active, setActive] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    document.title = "VT® // VO THI THUONG — QA/QC TESTER";
  }, []);

  // 1. Scroll Progress Bar Calculation
  useEffect(() => {
    const handleProgress = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleProgress, { passive: true });
    handleProgress();
    return () => window.removeEventListener("scroll", handleProgress);
  }, []);

  // 2. Active Section Spy
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = [
        "hero",
        "about",
        "experience",
        "education",
        "skills",
        "projects",
        "volunteer",
        "info",
        "contact"
      ];

      // Activate contact when scrolled near the end of the document
      const scrollBottom = window.innerHeight + window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      if (docHeight - scrollBottom < 60) {
        setActive("contact");
        return;
      }

      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActive(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    handleScrollSpy();
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  // 3. Scroll Reveal via IntersectionObserver (run once, slide up 24px, fade in)
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const items = document.querySelectorAll(".reveal-item");

    if (prefersReducedMotion) {
      items.forEach((item) => item.classList.add("revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            obs.unobserve(entry.target); // Runs only once
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -30px 0px"
      }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const targetId = id.toLowerCase();
    if (targetId === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActive("hero");
      return;
    }
    const el = document.getElementById(targetId);
    if (el) {
      const navOffset = 72;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActive(targetId);
    }
  };

  return (
    <div className="vt-presentation-app">
      {/* 4. Top Scroll Progress Indicator (3px olive line above nav) */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* Navbar (Fixed/Sticky Top) */}
      <Navbar active={active} scrollTo={scrollTo} />

      {/* 1. Hero: Nền Đen than #1E1E1E */}
      <Hero scrollTo={scrollTo} />

      {/* 2. About Me: Nền Kem #EEE9DC */}
      <About />

      {/* 3. Experience: Nền Olive #B5B07A */}
      <Experience />

      {/* 4. Education: Nền Kem #EEE9DC */}
      <Education />

      {/* 5. Technical Skills: Nền Đen than #1E1E1E */}
      <Skills />

      {/* 6. Projects: Nền Kem #EEE9DC */}
      <Projects />

      {/* 7. Volunteer Work: Nền Olive #B5B07A */}
      <Volunteer />

      {/* 8. Language & Hobbies: Nền Kem #EEE9DC */}
      <InfoSection />

      {/* 9. Get In Touch: Nền Đen than #1E1E1E */}
      <Contact />
    </div>
  );
}
