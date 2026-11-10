import {
  Award,
  BarChart3,
  BrainCircuit,
  Code2,
  Database,
  Github,
  GraduationCap,
  LineChart,
  Mail,
  MapPin,
  Phone,
  ServerCog,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import { FaGithub, FaLinkedin, FaPython, FaReact } from "react-icons/fa";
import { SiFlask, SiPandas } from "react-icons/si";

export const profile = {
  name: "Nitin Chander",
  initials: "NC",
  role: "Machine Learning Engineer | AI Systems Builder | Full-Stack Developer",
  location: "Delhi, India",
  email: "nitinchandra834@gmail.com",
  phone: "+91-8130489303",
  linkedin: "https://www.linkedin.com/in/nitin-chander-b6928120b/",
  github: "https://github.com/NITINCHANDER007",
  resume: "/Nitin-Chander-Resume.pdf",
  summary:
    "B.Tech CSE student specializing in Machine Learning, real-time inference systems, MLOps, and modern full-stack engineering. Experienced in building high-throughput APIs, tackling extreme class imbalance, architecting automated AI agents, and engineering end-to-end data pipelines from ingestion to production serving.",
  intro:
    "I build production-grade machine learning systems, autonomous AI agents, and responsive full-stack applications — from sub-3ms fraud detection APIs and Airflow/dbt pipelines to conversational voice interviewers and coding platforms."
};

export const navItems = [
  ["hero", "Home"],
  ["about", "About"],
  ["skills", "Skills"],
  ["experience", "Experience"],
  ["projects", "Projects"],
  ["education", "Education"],
  ["certifications", "Certifications"],
  ["profiles", "Profiles"],
  ["resume", "Resume"],
  ["contact", "Contact"]
];

export const stats = [
  { label: "Current CGPA", value: "8.0" },
  { label: "Internships", value: "2+" },
  { label: "Featured Projects", value: "8+" },
  { label: "Core Stack", value: "ML & Python" }
];

export const focusAreas = [
  { label: "MLOps & Inference", value: "FastAPI, XGBoost, MLflow", icon: ShieldCheck },
  { label: "Generative AI & Agents", value: "Gemini, Voice AI, Playwright", icon: BrainCircuit },
  { label: "Data Engineering", value: "Airflow, dbt, Databricks, SQL", icon: Database },
  { label: "Full-Stack Development", value: "Next.js, TypeScript, React", icon: Code2 }
];

export const skills = [
  { category: "Languages", icon: Code2, level: 90, items: ["Python", "TypeScript", "JavaScript", "C++", "SQL"] },
  { category: "Machine Learning & MLOps", icon: ShieldCheck, level: 88, items: ["XGBoost", "Scikit-Learn", "FastAPI", "MLflow", "Imbalanced Classification", "Docker", "Pytest"] },
  { category: "Applied AI & GenAI", icon: BrainCircuit, level: 86, items: ["Google Gemini", "Web Speech API", "Playwright Automation", "Prompt Engineering", "Sentence Transformers"] },
  { category: "Data Engineering & Analytics", icon: Database, level: 85, items: ["Apache Airflow", "dbt", "Databricks", "Delta Lake", "Pandas", "NumPy", "Power BI"] },
  { category: "Frontend & Web Tech", icon: FaReact, level: 82, items: ["Next.js", "React.js", "Tailwind CSS", "Flask", "Monaco Editor", "REST APIs"] },
  { category: "Core Computer Science", icon: Sparkles, level: 84, items: ["DSA", "OOP", "DBMS", "System Design", "Operating Systems", "Git/GitHub"] }
];

export const experience = [
  {
    role: "Backend Developer Intern",
    company: "Paytm",
    duration: "Jul 2025 - Aug 2025",
    tech: ["REST APIs", "Postman", "SQL", "Backend Optimization"],
    points: [
      "Built and optimized REST APIs to improve request handling performance and latency.",
      "Debugged backend workflows and resolved production-level API issues using Postman.",
      "Validated database queries for efficient retrieval and system reliability."
    ]
  },
  {
    role: "Backend & Database Intern",
    company: "NTPC",
    duration: "Jul 2024 - Aug 2024",
    tech: ["SQL", "Database Workflows", "Reports", "Automation"],
    points: [
      "Developed SQL queries for efficient data retrieval and automated backend processing.",
      "Maintained data consistency across large-scale operational reports."
    ]
  }
];

export const projects = [
  {
    title: "Real-Time Transaction Risk Scoring Engine",
    category: ["Machine Learning", "Backend", "Python"],
    description:
      "Production-grade payment card fraud detection system serving real-time risk decisions with sub-3ms latency, cost-sensitive gradient boosting, and robust MLOps tracking.",
    stack: ["Python 3.11", "FastAPI", "XGBoost", "MLflow", "Scikit-Learn", "Pytest"],
    icon: ShieldCheck,
    github: "https://github.com/NITINCHANDER007/fraud_detect",
    live: "",
    liveLabel: "REST API",
    highlights: [
      "Tackled extreme 577:1 class imbalance (0.173% positive class) via cost-sensitive learning (scale_pos_weight=5.0).",
      "Outperformed baseline Logistic Regression with 0.8424 PR-AUC (+5.22%), 93.44% precision, blocking only 4 false positives out of 42k+ charges.",
      "Engineered strict leak-free train/val/test splits with RobustScaler and log1p transforms.",
      "Delivered sub-3ms scoring endpoints with tiered decision matrices (APPROVE / REVIEW / DECLINE) and batch inference."
    ]
  },
  {
    title: "InterviewAI - Autonomous AI Mock Interviewer",
    category: ["AI & GenAI", "Full Stack", "TypeScript"],
    description:
      "Real-time voice mock interviewer web application powered by Google Gemini, Web Speech API, and speech synthesis with dynamic turn-taking, barge-in interruption handling, and scorecards.",
    stack: ["Next.js", "TypeScript", "Google Gemini", "Web Speech API", "Tailwind CSS"],
    icon: BrainCircuit,
    github: "https://github.com/NITINCHANDER007/ai_mock",
    live: "https://aimock-teal.vercel.app",
    liveLabel: "Live Demo",
    highlights: [
      "Natural turn-taking with live conversational speech recognition and dynamic audio barge-in interruption handling.",
      "Integrated Google Gemini for adaptive technical and behavioral role-based interview questions.",
      "Generates comprehensive post-interview feedback scorecards with granular rubrics.",
      "Deployed production web app on Vercel with responsive, modern audio waveforms and UI."
    ]
  },
  {
    title: "CodeArena - Modern Competitive Coding Platform",
    category: ["Full Stack", "TypeScript", "Backend"],
    description:
      "Production-grade LeetCode clone and algorithmic practice platform featuring interactive in-browser code editing, automated test case runner, submission grading, and problem filtering.",
    stack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Monaco Editor", "Lucide React"],
    icon: Code2,
    github: "https://github.com/NITINCHANDER007/CodeArena",
    live: "https://code-arena-three-iota.vercel.app",
    liveLabel: "Live Demo",
    highlights: [
      "Full problem-solving workspace with in-browser code editor and automated test case runner.",
      "Curated problem sets categorized by difficulty (Easy, Medium, Hard) and data structures.",
      "Submissions scoring, test execution feedback, and responsive dark-mode engineering.",
      "Built using Next.js App Router and type-safe TypeScript architectures."
    ]
  },
  {
    title: "AutoApply AI - Autonomous Job Search & Application Platform",
    category: ["AI & GenAI", "Python", "Backend"],
    description:
      "Intelligent job application automation platform using Google Gemini and Playwright to research job postings, tailor resumes, and submit applications with dashboard monitoring.",
    stack: ["Python", "Google Gemini", "Playwright", "FastAPI", "BeautifulSoup"],
    icon: Sparkles,
    github: "https://github.com/NITINCHANDER007/JOB_HUNT_CODER",
    live: "",
    liveLabel: "Local Agent",
    highlights: [
      "Automated end-to-end job application workflow with browser automation (Playwright).",
      "Leveraged Google Gemini to parse job descriptions and tailor resumes dynamically.",
      "Centralized submission tracking dashboard with Gmail confirmation monitoring.",
      "Built robust error recovery, anti-detection measures, and interactive co-pilot assistance."
    ]
  },
  {
    title: "Walmart Data Engineering End-to-End Pipeline",
    category: ["Data Engineering", "Data Analytics", "Python"],
    description:
      "Enterprise-grade retail data engineering pipeline featuring CDC ingestion, Medallion Architecture (Bronze -> Silver -> Gold), dbt transformations, and Airflow orchestration on Databricks.",
    stack: ["Apache Airflow", "dbt", "Databricks", "Delta Lake", "AWS S3", "SQL"],
    icon: Database,
    github: "https://github.com/NITINCHANDER007/Walmart_Airflow_DBT_Project",
    live: "",
    liveLabel: "Pipeline DAG",
    highlights: [
      "Orchestrated multi-hop Medallion Architecture (Bronze, Silver, Gold layers) on Databricks Delta Lake.",
      "Implemented Change Data Capture (CDC) and batch S3 ingestion pipelines.",
      "Created modular dbt models for complex business transformations, tests, and data lineage.",
      "Automated DAG scheduling and workflow dependencies with Apache Airflow."
    ]
  },
  {
    title: "Best Price Finder - AI Smart Shopping & Price Tracker",
    category: ["Python", "Data Analytics", "Full Stack"],
    description:
      "Smart shopping web application that analyzes historical price trends, detects fake discounts, and compares product prices across multiple platforms with automated price alerts.",
    stack: ["Python", "Flask", "Pandas", "BeautifulSoup", "JavaScript", "Chart.js"],
    icon: BarChart3,
    github: "https://github.com/NITINCHANDER007/Best-Price-Finder",
    live: "",
    liveLabel: "Flask App",
    highlights: [
      "Automated scraping and continuous ingestion across major e-commerce platforms.",
      "Statistical price volatility tracking to flag artificial discount markups.",
      "Interactive data visualization of price history graphs with alert triggers.",
      "Clean responsive frontend for real-time search and multi-store comparison."
    ]
  },
  {
    title: "NextWatch - Movie & Streaming Discovery Platform",
    category: ["Full Stack", "TypeScript"],
    description:
      "Responsive media discovery web application featuring trending entertainment listings, genre filtering, search, and trailer playback integrated with TMDB APIs.",
    stack: ["React", "JavaScript", "Tailwind CSS", "TMDB API", "Vercel"],
    icon: LineChart,
    github: "https://github.com/NITINCHANDER007/next_watch",
    live: "https://nextwatch-eta.vercel.app",
    liveLabel: "Live Demo",
    highlights: [
      "Integrated TMDB REST APIs for real-time movie ratings, cast, and trailers.",
      "Dynamic genre categorization, fuzzy search, and bookmarking.",
      "Fluid responsive UI built with Tailwind CSS and deployed on Vercel."
    ]
  },
  {
    title: "LearnForge - Interactive Developer Learning Platform",
    category: ["Python", "Backend", "Full Stack"],
    description:
      "A modern developer learning platform built with Flask featuring Markdown-based interactive course lessons, dynamic navigation, sidebar, and responsive UI.",
    stack: ["Python", "Flask", "Markdown", "JavaScript", "HTML/CSS"],
    icon: ServerCog,
    github: "https://github.com/NITINCHANDER007/learnforge-learning-platform",
    live: "",
    liveLabel: "Flask Platform",
    highlights: [
      "Markdown-driven curriculum with syntax highlighting and dynamic routing.",
      "Hierarchical lesson navigation with progress tracking and persistent sidebar.",
      "Lightweight, high-performance architecture built on Python/Flask."
    ]
  }
];

export const education = [
  {
    school: "Maharaja Agrasen Institute of Technology (GGSIPU)",
    degree: "B.Tech in Computer Science & Engineering",
    duration: "2023 - Present",
    meta: "Current CGPA: 8.0",
    icon: GraduationCap
  },
  {
    school: "Mukherji Memorial Sr. Sec. School",
    degree: "Class 12 (PCM)",
    duration: "Completed",
    meta: "Score: 80%",
    icon: GraduationCap
  }
];

export const certifications = [
  { title: "Automation AI Accelerator: From Co-pilot to Autonomous Agent Job Simulation", issuer: "Forage", date: "May 6, 2026", icon: ShieldCheck },
  { title: "Ethics of AI", issuer: "University of Helsinki", date: "Apr 3, 2026", icon: Award },
  { title: "Design Apocalypse, CBS Codefest 2.0", issuer: "ACM Chapter, SSCBS, University of Delhi", date: "Apr 10, 2026", icon: Sparkles },
  { title: "Samvedna UX Workshop", issuer: "DezHub India Community at Microsoft Office, Noida", date: "Sep 27, 2025", icon: Award },
  { title: "Dynamic Programming Camp", issuer: "AlgoUniversity", date: "Completed", icon: Code2 },
  { title: "C++ & DSA Programming", issuer: "Click@Career Computer Education Center", date: "Sep 2024 - Dec 2024", icon: Code2 },
  { title: "Java and MySQL Internship Program", issuer: "Cogent E-Services Limited", date: "May 2024 - Jul 2024", icon: Database }
];

export const profiles = [
  { label: "GitHub", href: profile.github, icon: FaGithub, status: "Active (20+ Repos)" },
  { label: "LinkedIn", href: profile.linkedin, icon: FaLinkedin, status: "Professional" },
  { label: "LeetCode", href: "", icon: Code2, status: "Problem Solving" },
  { label: "Kaggle", href: "", icon: BarChart3, status: "ML Competitions" },
  { label: "Tableau", href: "", icon: LineChart, status: "Visual Analytics" },
  { label: "Power BI", href: "", icon: BarChart3, status: "BI Dashboards" }
];

export const contactLinks = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone}`, icon: Phone },
  { label: "LinkedIn", value: "nitin-chander-b6928120b", href: profile.linkedin, icon: FaLinkedin },
  { label: "GitHub", value: "NITINCHANDER007", href: profile.github, icon: Github },
  { label: "Delhi, India", value: "Open to internships and placements", href: "#", icon: MapPin }
];
