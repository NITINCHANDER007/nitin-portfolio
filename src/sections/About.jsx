import { motion } from "framer-motion";
import { focusAreas, profile } from "../data/portfolio";
import Section from "../components/Section";
import { fadeUp, stagger } from "../utils/motion";

export default function About() {
  return (
    <Section id="about" eyebrow="About me" title="Data-minded engineer building practical, scalable solutions.">
      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_.85fr]">
        <div className="glass rounded-3xl p-6 sm:p-8">
          <p className="text-lg leading-8 text-slate-300">{profile.summary}</p>
          <p className="mt-5 leading-8 text-slate-400">
            My work combines machine learning, real-time inference APIs, data engineering, and modern full-stack web applications. I focus on building resilient systems that handle complex data, high concurrency, and strict production SLAs.
          </p>
        </div>
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {focusAreas.map((area) => {
            const Icon = area.icon;
            return (
              <motion.div key={area.label} variants={fadeUp} className="glass rounded-2xl p-5 transition hover:-translate-y-1 hover:border-electric/35">
                <Icon className="text-electric" size={23} />
                <p className="mt-3 font-bold text-white">{area.label}</p>
                <p className="mt-1 text-sm text-slate-400">{area.value}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
}
