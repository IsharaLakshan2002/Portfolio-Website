import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Code2, Globe, Smartphone, Coffee, Database, Layers } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Garment Factory System',
    type: 'WEB · FULL STACK',
    desc: 'Web-based business management system for a garment factory — featuring online sales, attendance, and role-based access.',
    tags: ['PHP', 'SQL', 'JavaScript', 'Tailwind'],
    category: 'fullstack',
    icon: <Globe size={20} />
  },
  {
    id: 2,
    title: 'E-Channelling System',
    type: 'WEB · FULL STACK',
    desc: 'Doctor appointment booking platform with real-time slot tracking and automated notifications.',
    tags: ['React', 'Java', 'SQL', 'Spring Boot'],
    category: 'fullstack',
    icon: <Layers size={20} />
  },
  {
    id: 3,
    title: 'Budget Finance App',
    type: 'ANDROID · MOBILE',
    desc: 'Expense tracking Android app with sync capabilities and intuitive budget management charts.',
    tags: ['Java', 'SQLite', 'Oracle', 'ORDS'],
    category: 'android',
    icon: <Smartphone size={20} />
  },
  {
    id: 4,
    title: 'Pizza Delivery App',
    type: 'ANDROID · MOBILE',
    desc: 'Restaurant management mobile app with order flow, catalogue, and admin panels.',
    tags: ['Java', 'XML', 'SQLite', 'JSON'],
    category: 'android',
    icon: <Coffee size={20} />
  }
];

const categories = [
  { id: 'all', label: 'ALL' },
  { id: 'web', label: 'WEB' },
  { id: 'android', label: 'ANDROID' },
  { id: 'fullstack', label: 'FULL STACK' },
];

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = projects.filter(p => 
    filter === 'all' || p.category === filter || (filter === 'web' && p.type.includes('WEB'))
  );

  return (
    <section id="projects" className="py-24 px-[5vw] bg-[var(--bg-primary)]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="font-mono text-xs tracking-[0.3em] text-accent uppercase mb-3">WHAT I'VE BUILT</div>
          <h2 className="font-display text-5xl md:text-6xl text-[var(--text-primary)] tracking-tight">FEATURED PROJECTS</h2>
        </div>

        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`font-mono text-xs tracking-wider px-6 py-2.5 rounded-md border transition-all cursor-pointer ${
                filter === cat.id 
                  ? 'bg-accent text-black border-accent font-bold' 
                  : 'bg-transparent text-[var(--text-secondary)] border-[var(--border)] hover:border-accent hover:text-[var(--text-primary)]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-[var(--bg-card)] border border-[var(--border)] p-7 rounded-2xl transition-all hover:border-accent hover:shadow-[0_20px_50px_rgba(249,115,22,0.1)] flex flex-col gap-4"
              >
                <div className="flex items-center justify-between">
                  <div className="font-mono text-[10px] text-[var(--text-muted)] tracking-widest uppercase">
                    {project.type}
                  </div>
                  <div className="text-[var(--text-muted)] group-hover:text-accent transition-colors">
                    {project.icon}
                  </div>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-accent text-lg font-bold text-[var(--text-primary)]">
                    {project.title}
                  </h3>
                  <a href="#" className="p-1.5 rounded-full hover:bg-accent/10 text-[var(--text-muted)] hover:text-accent transition-all">
                    <ExternalLink size={18} />
                  </a>
                </div>

                <p className="text-[var(--text-secondary)] text-[13px] leading-relaxed line-clamp-3">
                  {project.desc}
                </p>

                <div className="mt-auto pt-4 flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="font-mono text-[9px] bg-accent/10 text-accent px-2.5 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
