# 🌟 Võ Thị Thương - Personal Portfolio

A sleek, responsive, and modern developer portfolio showcasing my work as a **Full-Stack Engineer & AI/ML Developer**. Built using **React + Vite** with modular components and optimized CSS styling.

---

## 🚀 About Me

I am a Full-Stack Engineer based in Ho Chi Minh City, Vietnam 🇻🇳. I focus on building scalable systems from backend to browser, combining robust software engineering principles with data-driven AI/ML solutions.

* **Goal:** Clean code. Real impact.
* **Focus Areas:** Web Applications (Spring Boot, React, PHP) and Machine Learning (Deep Learning, Bioinformatics, Data Analysis).

---

## 🛠️ Technology Stack

| Domain | Technologies & Tools |
| :--- | :--- |
| **Backend** | Spring Boot, Java / Kotlin, PHP, JPA / Hibernate, Python |
| **Frontend** | React, Modern JavaScript, CSS3 (Flexbox/Grid), Responsive Design |
| **Databases** | MySQL, PostgreSQL |
| **AI / ML / Data Science** | PyTorch, HuggingFace, XGBoost, Scikit-learn, Pandas, Matplotlib, Seaborn |
| **Testing & QA** | JUnit, Manual Testing |

---

## 📁 Project Architecture & Modular Structure

This repository is refactored into a highly clean, modular structure following React best practices:

```
src/
├── constants/
│   └── portfolioData.js      # Centralized project details, skills & navigation links
├── hooks/
│   └── useInView.js          # Intersection Observer hook for scroll animations
├── components/
│   ├── AnimatedBar.jsx       # Custom progress bar component
│   ├── LinkBtn.jsx           # Button helper for GitHub and Live Demo URLs
│   ├── SkillCard.jsx         # Card component for technical skills
│   ├── ProjectCard.jsx       # Card component for projects with entry animation
│   ├── Navbar.jsx            # Sticky blurred navigation header
│   ├── Hero.jsx              # Hero introduction section
│   ├── About.jsx             # About Me with simulated terminal mockup
│   ├── Skills.jsx            # Skills grid section
│   ├── Projects.jsx          # Projects grid section
│   ├── Contact.jsx           # Get in touch forms and socials
│   └── Footer.jsx            # Page footer
├── index.css                 # External CSS with pure classes (No inline styles)
├── App.jsx                   # Main entry point (composes layout sections)
└── main.jsx                  # React DOM mount point
```

---

## 🌟 Featured Projects

### 1. ProtGO (Deep Learning · Protein Function Prediction)
* **Description:** A multi-expert deep learning system for automated protein function labeling using Gene Ontology terms. Achieved an Fmax of 0.747, surpassing NetGO2 by +7% using only ~4% of their parameters.
* **Stack:** Python, PyTorch, HuggingFace, XGBoost, Scikit-learn.
* **Highlight:** Fmax 0.747 · AuPRC 0.785

### 2. Mobile Phone Store (Full-Stack Management System)
* **Description:** Full-stack web application for managing products, customers, employees, and orders. Features role-based access control and comprehensive QA testing.
* **Stack:** PHP, MySQL, JavaScript, JUnit, Manual Testing.
* **Highlight:** Role-Based Access Control

### 3. MovieLens Analysis (Data Science)
* **Description:** Data-driven analysis of audience ratings using MovieLens & TMDB. Identified "Director Power" as the dominant feature—being 2.5× more influential than the lead actor.
* **Stack:** Python, Pandas, XGBoost, Matplotlib, Seaborn.
* **Highlight:** Director Power 2.5× > Actor

---

## 💻 Local Development

Follow these steps to run the portfolio on your local machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/VThuongg/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## ✉️ Contact

Feel free to connect or reach out for opportunities:
* **LinkedIn:** [VThuongg](https://linkedin.com/in/VThuongg)
* **GitHub:** [VThuongg](https://github.com/VThuongg)
* **Live Portfolio:** [VThuongg.github.io](https://VThuongg.github.io)
