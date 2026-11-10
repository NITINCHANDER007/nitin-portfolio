import { Github, Globe2 } from "lucide-react";
import { useMemo, useState } from "react";
import Section from "../components/Section";
import { projects } from "../data/portfolio";

const filters = [
  "All",
  "Machine Learning",
  "AI & GenAI",
  "Data Engineering",
  "Full Stack",
  "Backend",
  "Python"
];

export default function Projects() {
  const [active, setActive] = useState("All");
  const visibleProjects = useMemo(
    () => (active === "All" ? projects : projects.filter((project) => project.category.includes(active))),
    [active]
  );

  return (
    <Section
      id="projects"
      eyebrow="Featured projects"
      title="Production-grade systems across ML, AI agents, data pipelines, and full-stack platforms."
    >
      <div className="mt-8 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActive(filter)}
            className={`rounded-full border px-4 py-2 text-sm font-bold transition ${
              active === filter
                ? "border-electric bg-electric text-slate-950 shadow-glow"
                : "border-white/10 bg-white/[0.04] text-slate-300 hover:border-electric/40"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project) => {
          const Icon = project.icon;
          return (
            <article
              key={project.title}
              className="glass flex min-h-full flex-col overflow-hidden rounded-3xl transition hover:-translate-y-1 hover:border-electric/35"
            >
              <div className="relative h-44 overflow-hidden bg-slate-950">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_35%,rgba(56,189,248,.34),transparent_38%),linear-gradient(135deg,rgba(37,99,235,.28),rgba(2,6,23,.92))]" />
                <div className="absolute inset-0 grid place-items-center">
                  <span className="grid h-20 w-20 place-items-center rounded-3xl border border-electric/30 bg-electric/10 text-electric shadow-glow">
                    <Icon size={36} />
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {project.category.map((cat) => (
                    <span key={cat} className="text-[11px] font-semibold text-electric/90 uppercase tracking-wider">
                      #{cat}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-black text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span className="tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="mt-5 space-y-2 text-sm text-slate-400">
                  {project.highlights.map((item) => (
                    <li key={item} className="leading-6">
                      - {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex gap-3 pt-6">
                  <ProjectButton href={project.github} icon={Github} label="GitHub" />
                  <ProjectButton
                    href={project.live}
                    icon={Globe2}
                    label="Live Demo"
                    emptyLabel={project.liveLabel || "Coming Soon"}
                  />
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}

function ProjectButton({ href, icon: Icon, label, emptyLabel = "Coming Soon" }) {
  if (!href) {
    return (
      <span
        className="inline-flex flex-1 cursor-default items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-bold text-slate-500"
        title="Live demo not hosted or local service"
      >
        <Icon size={15} />
        {emptyLabel}
      </span>
    );
  }

  return (
    <a
      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-electric/25 bg-electric/10 px-3 py-2 text-xs font-bold text-electric transition hover:bg-electric/20 hover:border-electric/50"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <Icon size={15} />
      {label}
    </a>
  );
}
