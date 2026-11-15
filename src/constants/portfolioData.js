export const NAV_LINKS = [
  { id: "hero", label: "01. PORTFOLIO" },
  { id: "about", label: "02. ABOUT" },
  { id: "experience", label: "03. EXPERIENCE" },
  { id: "education", label: "04. EDUCATION" },
  { id: "skills", label: "05. SKILLS" },
  { id: "projects", label: "06. PROJECTS" },
  { id: "volunteer", label: "07. VOLUNTEER" },
  { id: "info", label: "08. LANGUAGES" },
  { id: "contact", label: "09. CONTACT" }
];

export const OWNER_INFO = {
  name: "VO THI THUONG",
  firstName: "VO THI",
  lastName: "THUONG",
  role: "QA/QC TESTER",
  title: "SOFTWARE QUALITY ASSURANCE & TESTING",
  email: "thuong16052004@gmail.com",
  phone: "0782 84 59 00",
  location: "HO CHI MINH CITY, VIETNAM",
  degree: "BACHELOR OF ENGINEERING IN IT // SAIGON UNIVERSITY",
  gpa: "GPA 3.60 / 4.0",
  github: "https://github.com/VThuongg",
  linkedin: "https://linkedin.com/in/vthuongg",
  bio: "QA/QC Tester with hands-on experience in manual software testing, now building test automation skills with Playwright and TypeScript. Specializing in test case design, Postman API verification, and defect lifecycle management across SDLC/STLC.",
  status: "OPEN TO OPPORTUNITIES",
  issue: "ISSUE 2026 // VOL. 01"
};

export const EXPERIENCES_DATA = [
  {
    id: "fukuda-ai",
    company: "Fukuda.AI",
    role: "SOFTWARE TESTER",
    period: "OCT 2026 – PRESENT",
    timebar: "OCT 2026 - PRESENT",
    points: [
      "Test quotation and ERP systems for mechanical engineering operations.",
      "Test 3D models and 2D drawing extraction features.",
      "Test AI-powered features, and design test cases for functional, UI, and performance scenarios.",
      "Log and track defects through the Bug Life Cycle with engineers and developers."
    ],
    tags: ["ERP TESTING", "3D / 2D", "AI TESTING", "MANUAL TESTING", "API TESTING"]
  },
  {
    id: "asol",
    company: "ALPACA SOLUTIONS",
    role: "QA INTERN",
    period: "MAR 2026 – JUN 2026",
    timebar: "MAR 2026 - JUN 2026",
    points: [
      "Tested Android apps manually: features, UI, user flows, and new changes against requirements.",
      "Wrote and executed functional, exploratory, and regression test cases.",
      "Reported defects with clear steps, severity, and screenshots; verified fixes with developers."
    ],
    tags: ["MANUAL TESTING", "ANDROID APPS", "REGRESSION", "POSTMAN", "BUG REPORTING"]
  },
  {
    id: "mindx",
    company: "MINDX TECHNOLOGY SCHOOL",
    role: "PROGRAMMING TEACHING ASSISTANT",
    period: "AUG 2025 – PRESENT",
    timebar: "AUG 2025 - PRESENT",
    points: [
      "Supported programming courses (Scratch, GameMaker, Python, HTML/CSS/JS).",
      "Guided students in programming logic and debugging.",
      "Mentored students on their final software and web projects."
    ],
    tags: ["PYTHON", "ALGORITHMS", "DEBUGGING", "SCRATCH", "HTML/CSS/JS"]
  }
];

export const EDUCATION_BLOCKS = [
  {
    badgeText: "ONE",
    year: "2022 – 2026",
    institution: "SAIGON UNIVERSITY (SGU)",
    major: "BACHELOR OF ENGINEERING IN INFORMATION TECHNOLOGY",
    detail: "GPA: 3.60 / 4.0. Strong foundation in software testing fundamentals, systems analysis, database design, and defect lifecycle management."
  },
  {
    badgeText: "TWO",
    year: null,
    tag: "ACADEMIC FOCUS",
    institution: "RELEVANT COURSEWORK",
    major: "SOFTWARE TESTING, DATABASES & SYSTEMS",
    detail: "Key coursework and technical foundations: Software Testing Methodologies (Manual & Automated), Defect Tracking & Bug Lifecycle, Systems Analysis & Design, Relational Database Design (MySQL, PostgreSQL), RESTful API Architecture & Verification, and Data Structures & Algorithms."
  }
];

export const SKILLS_COMPETENCIES = [
  { label: "MANUAL TESTING", level: "ADVANCED", desc: "Test scenario design, boundary value analysis, exploratory & regression testing" },
  { label: "TEST CASE DESIGN", level: "ADVANCED", desc: "Equivalence partitioning, test matrix formulation, checklist & coverage optimization" },
  { label: "API TESTING", level: "PROFICIENT", desc: "Postman collections, HTTP status verification, header/payload validation & automated tests" },
  { label: "SQL / DATABASES", level: "PROFICIENT", desc: "Complex queries, joins, relational schema validation & database integrity checks" },
  { label: "AUTOMATION TEST", level: "INTERMEDIATE", desc: "Playwright + TypeScript framework, Page Object Model, CI pipeline" },
  { label: "BUG LIFECYCLE", level: "ADVANCED", desc: "Defect reproduction, severity/priority triage, root cause analysis & regression verification" }
];

export const SKILLS_PERCENTAGES = SKILLS_COMPETENCIES;

export const SKILLS_PILLS = [
  "PLAYWRIGHT", "TYPESCRIPT", "PAGE OBJECT MODEL", "ALLURE",
  "POSTMAN", "SQL", "PYTHON", "JAVA", "JAVASCRIPT", 
  "MYSQL", "POSTGRESQL", "REST APIS", "JSON", "GIT", "GITHUB ACTIONS", 
  "FIGMA", "CHATGPT", "CLAUDE", "EXCEL / SHEETS", "SDLC / STLC", "AGILE / SCRUM"
];

export const PROJECTS_DATA = [
  {
    title: "E-COMMERCE TEST AUTOMATION FRAMEWORK",
    role: "PERSONAL PROJECT",
    period: "JUL 2026 – PRESENT",
    tech: "PLAYWRIGHT, TYPESCRIPT, GITHUB ACTIONS, ALLURE",
    desc: "Built an end-to-end automation framework for e-commerce flows (authentication, search, cart, checkout) using the Page Object Model and custom fixtures, running on Chromium, Firefox, and WebKit. Added API testing, network mocking, and visual regression. A GitHub Actions pipeline runs the suite on every push and publishes Playwright HTML and Allure reports.",
    github: "https://github.com/VThuongg/playwright-learning",
    demo: null
  },
  {
    title: "E-COMMERCE MANAGEMENT SYSTEM",
    role: "QA TESTER & ANALYST",
    period: "JAN 2025 – MAY 2025 | TEAM OF 4",
    tech: "PHP, MYSQL, JAVASCRIPT, POSTMAN",
    desc: "Reviewed requirements and designed manual test cases for authentication, product management, order processing, and role-based access control (RBAC). Performed functional and API testing across key workflows and validated bug fixes via regression testing.",
    github: "https://github.com/VThuongg/Mobile-Phone-Store",
    demo: null
  },
  {
    title: "SECURE EMAIL ENCRYPTION",
    role: "SECURITY & SYSTEM TESTING",
    period: "SEP 2024 – DEC 2024",
    tech: "FLASK, PYTHON, PYCRYPTODOME, RSA-2048, AES-256",
    desc: "Architected a secure email web application with hybrid cryptography. Conducted rigorous boundary testing on cryptographic operations, key generation routines, and encrypted file attachment handling.",
    github: "https://github.com/VThuongg/Secure-Email-Encryption",
    demo: "https://secure-email-encryption.onrender.com/"
  },
  {
    title: "PROTGO // PROTEIN CLASSIFICATION",
    role: "GRADUATION THESIS",
    period: "JAN 2026 – MAY 2026",
    tech: "PYTHON, PYTORCH, HUGGINGFACE, XGBOOST",
    desc: "Multi-expert data processing pipeline and model evaluation system for automated protein function classification. Evaluated test datasets and metrics (Fmax 0.747, AuPRC 0.785).",
    github: null,
    demo: null
  }
];

export const VOLUNTEER_DATA = [
  {
    num: "01",
    org: "Faculty of IT Youth Union, Saigon University",
    role: "Executive Committee (2023–2024) → Standing Committee (2024–2026)",
    desc: "Served on the Faculty Youth Union's Executive Committee, then promoted to the Standing Committee. Helped plan and coordinate Youth Union activities for IT Faculty students, including community programs for children with disabilities.",
    image: "images/volunteer-1.jpg"
  },
  {
    num: "02",
    org: "Mid-Autumn Festival Program",
    role: "Organizer // 2024, 2025 · Nguyen Dinh Chieu Special School",
    desc: "Organized Mid-Autumn Festival activities for students at Nguyen Dinh Chieu Special School.",
    image: "images/volunteer-2.jpg"
  },
  {
    num: "03",
    org: "Lunar New Year (Tet) Program",
    role: "Organizer // 2025, 2026 · Nguyen Dinh Chieu Special School",
    desc: "Organized Tet celebration activities for students at Nguyen Dinh Chieu Special School.",
    image: "images/volunteer-3.jpg"
  }
];

export const LANGUAGES_DATA = [
  { language: "VIETNAMESE", level: "NATIVE / FIRST LANGUAGE", proficiency: "NATIVE" }
];

export const SOFT_SKILLS_DATA = [
  { num: "01", title: "ANALYTICAL & EDGE-CASE MINDSET", desc: "Anticipating failure scenarios, boundary conditions, and user misbehaviors" },
  { num: "02", title: "DEFECT INVESTIGATION & TRIAGE", desc: "Isolating root causes, capturing logs, and writing unambiguous bug tickets" },
  { num: "03", title: "CROSS-FUNCTIONAL COLLABORATION", desc: "Communicating transparently with Developers, Product Owners, and stakeholders" },
  { num: "04", title: "ATTENTION TO DETAIL & QUALITY ADVOCACY", desc: "Rigorous requirement traceability, verification discipline, and test coverage" }
];

export const HOBBIES_DATA = [
  { num: "01", title: "LOGIC PUZZLES", desc: "Edge-case analysis & deductive reasoning" },
  { num: "02", title: "TECH EXPLORATION", desc: "Evaluating emerging automation & AI tools" },
  { num: "03", title: "ENGINEERING BOOKS", desc: "Software testing, architecture & system design" },
  { num: "04", title: "CHESS & STRATEGY", desc: "Analytical mindset & tactical planning" }
];
