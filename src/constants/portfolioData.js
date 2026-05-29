export const NAV_LINKS = ["Home", "About", "Skills", "Projects", "Contact"];

export const SKILLS = [
  { name: "Spring Boot", icon: "🌱", level: 88 },
  { name: "Java / Kotlin", icon: "☕", level: 85 },
  { name: "PHP", icon: "🐘", level: 80 },
  { name: "Python", icon: "🐍", level: 82 },
  { name: "React", icon: "⚛️", level: 78 },
  { name: "JPA / Hibernate", icon: "🗂️", level: 80 },
  { name: "MySQL", icon: "🐬", level: 85 },
  { name: "PostgreSQL", icon: "🐘", level: 75 },
  { name: "PyTorch", icon: "🔥", level: 78 },
  { name: "XGBoost", icon: "📊", level: 80 },
  { name: "JUnit", icon: "🧪", level: 76 },
  { name: "Manual Testing", icon: "🔍", level: 82 },
];

export const PROJECTS = [
  {
    title: "ProtGO",
    subtitle: "Deep Learning · Protein Function Prediction",
    period: "Jan 2026 – May 2026",
    desc: "Multi-expert deep learning system for automated protein function labeling using Gene Ontology terms. Achieved Fmax 0.747 surpassing NetGO2 by +7% using only ~4% of their parameters.",
    tags: ["Python", "PyTorch", "HuggingFace", "XGBoost", "Scikit-learn"],
    highlight: "Fmax 0.747 · AuPRC 0.785",
    github: "https://github.com/VThuongg/protgo",
    demo: "https://VThuongg.github.io/protgo",
  },
  {
    title: "Mobile Phone Store",
    subtitle: "Full-Stack · Management System",
    period: "Jan 2025 – May 2025 · Team of 4",
    desc: "Full-stack web app for managing products, customers, employees & orders with role-based access control and comprehensive QA testing.",
    tags: ["PHP", "MySQL", "JavaScript", "JUnit", "Manual Testing"],
    highlight: "Role-Based Access Control",
    github: "https://github.com/VThuongg/mobile-store",
    demo: null,
  },
  {
    title: "MovieLens Analysis",
    subtitle: "Data Science · Audience Satisfaction",
    period: "2025 · Team of 3",
    desc: "Data-driven analysis of audience ratings using MovieLens & TMDB. Director Power identified as dominant feature — 2.5× more influential than actor.",
    tags: ["Python", "Pandas", "XGBoost", "Matplotlib", "Seaborn"],
    highlight: "Director Power 2.5× > Actor",
    github: "https://github.com/VThuongg/movielens-analysis",
    demo: null,
  },
];
