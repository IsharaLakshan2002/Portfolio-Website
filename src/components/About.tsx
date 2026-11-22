import { motion } from 'motion/react';
import { Download, MapPin } from 'lucide-react';
import profilePic from '../assets/Ishara_boss.webp';

const skillGroups = [
  { title: 'UI/UX DESIGN', skills: ['Figma', 'Wireframing', 'Prototyping', 'User flows'] },
  { title: 'FRONTEND', skills: ['HTML', 'CSS', 'JavaScript', 'React'] },
  { title: 'PROGRAMMING', skills: ['Java', 'C', 'C++', 'PHP'] },
  { title: 'DATABASES & TOOLS', skills: ['SQL', 'MySQL', 'Git', 'GitHub'] },
];

export default function About() {
  return (
    <section id="about" className="overflow-hidden bg-[var(--bg-primary)] px-[5vw] py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-accent">A little about me</p>
          <h2 className="font-display text-5xl tracking-tight text-[var(--text-primary)] md:text-6xl">ABOUT ME</h2>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
            className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-card)]"
          >
            <img src={profilePic} alt="Portrait of Ishara Lakshan" className="absolute inset-0 h-full w-full object-cover" />
          </motion.div>

          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <p className="mb-5 text-base leading-relaxed text-[var(--text-secondary)] md:text-lg">
                I'm <strong className="text-[var(--text-primary)]">Ishara Lakshan</strong>, a Software Engineering HND student at the National Institute of Business Management (NIBM), Sri Lanka. I'm interested in both designing useful digital experiences and building the software behind them.
              </p>
              <p className="mb-7 text-sm leading-relaxed text-[var(--text-secondary)] md:text-base">
                My work and learning span UI/UX design, frontend development, programming and database fundamentals. I enjoy turning an idea into a clear user flow, a thoughtful interface and a working application.
              </p>
              <div className="mb-8 flex items-center gap-3 text-sm text-[var(--text-secondary)]">
                <MapPin size={18} className="text-accent" />
                <span>Sri Lanka</span>
              </div>
              <a
                href={`${import.meta.env.BASE_URL}Ishara_Lakshan_Cv.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-lg bg-accent px-7 py-3.5 text-sm font-bold text-black transition-all hover:-translate-y-1 hover:bg-accent-hover"
              >
                <Download size={18} /> VIEW MY CV
              </a>
            </motion.div>

            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {skillGroups.map((group, index) => (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                  viewport={{ once: true }}
                  className="rounded-xl border border-[var(--border)] bg-[var(--bg-card)] p-5"
                >
                  <h3 className="mb-3 font-mono text-[10px] tracking-[0.16em] text-accent">{group.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span key={skill} className="rounded-md bg-[var(--bg-secondary)] px-2.5 py-1.5 text-xs text-[var(--text-secondary)]">{skill}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
