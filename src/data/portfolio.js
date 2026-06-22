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
  role: "Aspiring Data Analyst | Python Developer | Backend Enthusiast",
  location: "Delhi, India",
  email: "nitinchandra834@gmail.com",
  phone: "+91-8130489303",
  linkedin: "https://www.linkedin.com/in/nitin-chander-b6928120b/",
  github: "https://github.com/NITINCHANDER007",
  resume: "/Nitin-Chander-Resume.pdf",
  summary:
    "B.Tech CSE student with a strong foundation in Python, SQL, backend development, and machine learning. I build practical data-driven systems, from recommendation engines to analytical dashboards, with a focus on reliability and recruiter-ready execution.",
  intro:
    "I turn data and backend logic into clear, usable products - recommendation systems, dashboards, APIs, and analysis tools built with Python, Flask, SQL, Power BI, and React."
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
  { label: "Featured Projects", value: "3" },
  { label: "Core Stack", value: "Python" }
];

export const focusAreas = [
  { label: "Python Development", value: "Flask, automation, ML", icon: FaPython },
  { label: "Data Analytics", value: "SQL, Power BI, Tableau", icon: BarChart3 },
  { label: "Backend Engineering", value: "REST APIs, databases", icon: ServerCog },
  { label: "Problem Solving", value: "DSA, OOP, systems", icon: BrainCircuit }
];

export const skills = [
  { category: "Languages", icon: Code2, level: 86, items: ["Python", "C++"] },
  { category: "Data Analytics & Visualization", icon: LineChart, level: 88, items: ["SQL", "Pandas", "NumPy", "Power BI", "Tableau"] },
  { category: "Backend Development", icon: SiFlask, level: 82, items: ["Flask", "REST APIs", "Semantic Search", "Sentence Transformers"] },
  { category: "Frontend", icon: FaReact, level: 74, items: ["HTML", "CSS", "React.js"] },
  { category: "Tools", icon: Sparkles, level: 84, items: ["Git", "GitHub", "Postman", "BeautifulSoup", "VS Code"] },
  { category: "Core Computer Science", icon: Database, level: 80, items: ["OOP", "DSA", "DBMS", "Operating Systems"] }
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
    title: "AI Based Career Recommendation System",
    category: ["Python", "Backend", "Machine Learning"],
    description:
      "Hybrid recommendation system for career matching using XGBoost classification and semantic search over standardized occupational benchmarks.",
    stack: ["Python", "XGBoost", "Cosine Similarity", "Flask", "Sentence Transformers"],
    icon: BrainCircuit,
    github: "",
    live: "",
    highlights: [
      "Used the O*NET Content Model to reduce dataset bias.",
      "Separated quantitative eligibility from qualitative affinity.",
      "Mapped user skills against standardized occupational requirements.",
      "Designed a scalable backend for high-dimensional career data."
    ]
  },
  {
    title: "Product Price Tracker & Analysis Web App",
    category: ["Python", "Data Analytics", "Backend"],
    description:
      "Flask app that scrapes e-commerce data, cleans product price records, and visualizes volatility and average comparisons.",
    stack: ["Python", "Flask", "Pandas", "BeautifulSoup", "HTML", "CSS"],
    icon: SiPandas,
    github: "",
    live: "",
    highlights: [
      "Monitored real-time product data from e-commerce sites.",
      "Implemented data cleaning and comparative analysis with Pandas.",
      "Presented trends through a responsive web interface."
    ]
  },
  {
    title: "Data Analysis Dashboard",
    category: ["Data Analytics"],
    description:
      "Interactive dashboard for business performance metrics, SQL transformations, and structured reporting datasets.",
    stack: ["Power BI", "SQL"],
    icon: BarChart3,
    github: "",
    live: "",
    highlights: [
      "Visualized key business metrics in Power BI.",
      "Performed SQL joins and transformations for reporting data.",
      "Built insight-focused views for faster decision making."
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
  { label: "GitHub", href: profile.github, icon: FaGithub, status: "Active" },
  { label: "LinkedIn", href: profile.linkedin, icon: FaLinkedin, status: "Professional" },
  { label: "LeetCode", href: "", icon: Code2, status: "Coming soon" },
  { label: "Kaggle", href: "", icon: BarChart3, status: "Coming soon" },
  { label: "Tableau", href: "", icon: LineChart, status: "Coming soon" },
  { label: "Power BI", href: "", icon: BarChart3, status: "Coming soon" }
];

export const contactLinks = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone}`, icon: Phone },
  { label: "LinkedIn", value: "nitin-chander-b6928120b", href: profile.linkedin, icon: FaLinkedin },
  { label: "GitHub", value: "NITINCHANDER007", href: profile.github, icon: Github },
  { label: "Delhi, India", value: "Open to internships and placements", href: "#", icon: MapPin }
];
