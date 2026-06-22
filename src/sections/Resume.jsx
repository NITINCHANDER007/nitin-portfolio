import { Download, FileText, Sparkles } from "lucide-react";
import Section from "../components/Section";
import { profile } from "../data/portfolio";

export default function Resume() {
  return (
    <Section id="resume" eyebrow="Resume download" title="A concise PDF recruiters can save, share, and screen fast.">
      <div className="mt-10 glass overflow-hidden rounded-3xl p-6 sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="flex gap-5">
            <span className="grid h-16 w-16 shrink-0 place-items-center rounded-3xl bg-electric/10 text-electric shadow-glow"><FileText size={30} /></span>
            <div>
              <h3 className="text-2xl font-black text-white">Nitin-Chander-Resume.pdf</h3>
              <p className="mt-2 max-w-2xl leading-7 text-slate-400">
                Resume includes education, technical skills, backend internships, Python projects, Power BI dashboard work, and contact details.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="tag"><Sparkles size={14} />Placement-ready</span>
                <span className="tag">Single PDF asset</span>
              </div>
            </div>
          </div>
          <a className="btn-primary" href={profile.resume} download><Download size={18} />Download Resume</a>
        </div>
      </div>
    </Section>
  );
}
