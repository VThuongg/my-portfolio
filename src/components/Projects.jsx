import { useState, useRef, useEffect, useCallback } from "react";
import { useInView } from "../hooks/useInView";
import { PROJECTS } from "../constants/portfolioData";
import { ProjectCard } from "./ProjectCard";

export function Projects({ t }) {
  const [headerRef, headerInView] = useInView(0.1);
  const [activeFilter, setActiveFilter] = useState("all");
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Drag-to-scroll state
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragScrollLeft = useRef(0);

  const categories = [
    { id: "all", labelKey: "projFilterAll" },
    { id: "ai", labelKey: "projFilterAI" },
    { id: "web", labelKey: "projFilterWeb" },
  ];

  const filteredProjects = activeFilter === "all"
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter);

  // Check scroll boundaries
  const checkScroll = useCallback(() => {
    const el = scrollContainerRef.current;
    if (el) {
      setCanScrollLeft(el.scrollLeft > 5);
      setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 5);
    }
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll);
      checkScroll();
      window.addEventListener("resize", checkScroll);
      const timer = setTimeout(checkScroll, 150);
      return () => {
        el.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
        clearTimeout(timer);
      };
    }
  }, [filteredProjects, checkScroll]);

  // Arrow scroll – one card at a time
  const scroll = (direction) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const card = el.querySelector(".project-card");
    const gap = 28;
    const cardWidth = card ? card.offsetWidth + gap : 420;
    el.scrollBy({ left: direction === "left" ? -cardWidth : cardWidth, behavior: "smooth" });
  };

  // ── Drag-to-scroll handlers ──────────────────────────
  const onMouseDown = (e) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    isDragging.current = true;
    dragStartX.current = e.pageX - el.offsetLeft;
    dragScrollLeft.current = el.scrollLeft;
    el.style.cursor = "grabbing";
    el.style.userSelect = "none";
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    const el = scrollContainerRef.current;
    if (!el) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - dragStartX.current) * 1.2;
    el.scrollLeft = dragScrollLeft.current - walk;
  };

  const stopDrag = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    isDragging.current = false;
    el.style.cursor = "grab";
    el.style.removeProperty("user-select");
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div ref={headerRef} className={`projects-header ${headerInView ? "in-view" : ""}`}>
          <span className="projects-label">{t("projectsLabel")}</span>
          <h2 className="projects-title">{t("projectsTitle")}</h2>
          <p className="projects-desc">{t("projectsDesc")}</p>
        </div>

        {/* Filter tabs */}
        <div className="projects-filter-nav">
          <div className="projects-filter-tabs">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`projects-filter-btn ${activeFilter === cat.id ? "active" : ""}`}
              >
                {t(cat.labelKey)}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel: ← track → */}
        <div className="projects-carousel-wrapper">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="carousel-arrow-btn arrow-left"
            aria-label="Scroll Left"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>

          {/* Scrollable track */}
          <div
            className="projects-grid carousel-grid"
            ref={scrollContainerRef}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={stopDrag}
            onMouseLeave={stopDrag}
          >
            {filteredProjects.map((p, i) => (
              <ProjectCard key={p.title} project={p} index={i} t={t} />
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="carousel-arrow-btn arrow-right"
            aria-label="Scroll Right"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
