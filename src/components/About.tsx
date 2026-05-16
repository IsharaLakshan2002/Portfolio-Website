import { motion } from 'motion/react';
import { Download, MapPin, Phone } from 'lucide-react';
import profilePic from '../assets/Ishara_boss.png';

const skills = [
  { label: 'Java', pct: 90 },
  { label: 'React', pct: 85 },
  { label: 'Figma', pct: 80 },
  { label: 'Photoshop', pct: 75 },
  { label: 'Illustrator', pct: 75 },
  { label: 'Premiere', pct: 70 },
  { label: 'Adobe XD', pct: 80 },
];

function SkillRing({ label, pct, index }: { label: string, pct: number, index: number }) {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (pct / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-24 h-24 grid place-items-center">
        <svg className="absolute inset-0 w-full h-full -rotate-90">
          <circle
            cx="48"
            cy="48"
            r={radius}
            fill="transparent"
            stroke="var(--bg-secondary)"
            strokeWidth="7"
          />
          <motion.circle
            cx="48"
            cy="48"
            r={radius}
            fill="transparent"
            stroke="var(--accent)"
            strokeWidth="7"
            strokeLinecap="round"
            initial={{ strokeDasharray: circumference, strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: offset }}
            transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </svg>
        <div className="font-display text-xl text-[var(--text-primary)]">
          {pct}%
        </div>
      </div>
      <span className="font-mono text-[11px] text-[var(--text-secondary)] tracking-wider uppercase">
        {label}
      </span>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 px-[5vw] bg-[var(--bg-secondary)] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="font-mono text-xs tracking-[0.3em] text-accent uppercase mb-3">WHO I AM</div>
          <h2 className="font-display text-5xl md:text-6xl text-[var(--text-primary)] tracking-tight">ABOUT ME</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] rounded-2xl overflow-hidden border-l-4 border-accent shadow-2xl bg-[var(--bg-card)]"
          >
            <div className="absolute inset-0 grid place-items-center font-display text-[120px] text-[var(--text-muted)] opacity-10">
              IE
            </div>
            <img
              src={profilePic}
              alt="Ishara Ediriweera"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>

          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-[var(--text-secondary)] text-base md:text-lg leading-relaxed mb-6">
                I'm <strong className="text-[var(--text-primary)] uppercase">Ishara Lakshan Ediriweera</strong>, a second-year HND Software Engineering student at the <strong className="text-[var(--text-primary)]">National Institute of Business Management (NIBM)</strong>, Sri Lanka. I'm passionate about learning new technologies and building impact-driven software.
              </p>
              <p className="text-[var(--text-secondary)] text-base leading-relaxed mb-8">
                My journey involves mastering modern stacks from Java backends to React frontends. I believe in software that solves problems while being elegant in its code structure.
              </p>

              <div className="flex flex-col gap-4 mb-10">
                <div className="flex items-center gap-3 text-[var(--text-secondary)] text-sm">
                  <MapPin className="text-accent" size={18} />
                  <span>Boralesgamuwa, Sri Lanka</span>
                </div>
                <div className="flex items-center gap-3 text-[var(--text-secondary)] text-sm">
                  <Phone className="text-accent" size={18} />
                  <span>+94 76 090 8497</span>
                </div>
              </div>

              <a
                href="https://www.dropbox.com/scl/fi/elnw5kk7hgjbxtfs131yu/Lakshan-cv.pdf?rlkey=lc3yu6cflawk1zyi8feoxvvk5&st=zr2rtaru&dl=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-accent hover:bg-accent-hover text-black px-8 py-3.5 rounded-lg text-sm font-bold transition-all hover:-translate-y-1 shadow-lg shadow-accent/20"
              >
                <Download size={18} />
                DOWNLOAD CV
              </a>
            </motion.div>

            <div className="mt-12 flex flex-wrap justify-center sm:justify-start gap-8">
              {skills.map((skill, idx) => (
                <SkillRing key={skill.label} {...skill} index={idx} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
