import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Globe, Smartphone, Coffee, Layers, ThumbsUp, Eye, X } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Garment Factory System',
    type: 'WEB · FULL STACK',
    desc: 'Web-based business management system for a garment factory — featuring online sales, attendance, and role-based access.',
    tags: ['PHP', 'SQL', 'JavaScript', 'Tailwind'],
    category: ['projects'],
    icon: <Globe size={20} />
  },
  {
    id: 2,
    title: 'E-Channelling System',
    type: 'WEB · FULL STACK',
    desc: 'Doctor appointment booking platform with real-time slot tracking and automated notifications.',
    tags: ['React', 'Java', 'SQL', 'Spring Boot'],
    category: ['projects'],
    icon: <Layers size={20} />
  },
  {
    id: 3,
    title: 'Budget Finance App',
    type: 'ANDROID · MOBILE',
    desc: 'Expense tracking Android app with sync capabilities and intuitive budget management charts.',
    tags: ['Java', 'SQLite', 'Oracle', 'ORDS'],
    category: ['projects'],
    icon: <Smartphone size={20} />
  },
  {
    id: 4,
    title: 'Pizza Delivery App',
    type: 'ANDROID · MOBILE',
    desc: 'Restaurant management mobile app with order flow, catalogue, and admin panels.',
    tags: ['Java', 'XML', 'SQLite', 'JSON'],
    category: ['projects'],
    icon: <Coffee size={20} />
  },
  {
    id: 5,
    title: 'Vogue & Thread E-Commerce',
    author: 'Ishara lakshan',
    category: ['web', 'ui'],
    isImageCard: true,
    image: 'https://www.dropbox.com/scl/fi/lvqof0p3bdi7kep5l0iul/vogue.png?rlkey=a9ddtcf6rdclbs1l0ktk7tbhn&st=rnqftwko&raw=1',
    longImage: 'https://www.dropbox.com/scl/fi/0ncmm5aytexx836o3hbkk/Vogue-and-thread.png?rlkey=r54i1llts8yusgepp9cj8k6jh&st=nih7sqrc&raw=1',
    likes: 124,
    views: 1205
  },
  {
    id: 6,
    title: 'Nexa Dashboard Interface',
    author: 'Ishara lakshan',
    category: ['web', 'ui'],
    isImageCard: true,
    image: 'https://www.dropbox.com/scl/fi/aiymdd1fghqdzqnka39nn/nexa.png?rlkey=wv9mcir4jfbide8rcnj5fsxib&st=666e8pqt&raw=1',
    longImage: 'https://www.dropbox.com/scl/fi/bsd8h9de1yjtiq7f6u2yq/nexxx.png?rlkey=8om12flrsltd28h631vk6zlu2&st=n1p6919d&raw=1',
    likes: 89,
    views: 432
  },
  {
    id: 7,
    title: 'Green Nature App',
    author: 'Ishara lakshan',
    category: ['app', 'ui'],
    isImageCard: true,
    image: 'https://www.dropbox.com/scl/fi/nj2ai6tfuvqdvqx72lp40/green.png?rlkey=an9b6td5jdfe0lq6ymqlyr2aq&st=ljldbw8k&raw=1',
    longImage: 'https://www.dropbox.com/scl/fi/98es853lshesxj8dxp1oa/Greeenscan.png?rlkey=weafwuezzqp9duokn4v8h9d2j&st=ymmhm1rc&raw=1',
    likes: 256,
    views: 3102
  },
  {
    id: 8,
    title: 'DNS Garment Website',
    author: 'Ishara lakshan',
    category: ['web', 'ui'],
    isImageCard: true,
    image: 'https://www.dropbox.com/scl/fi/uzz1giu3xw01e7gghdwju/ChatGPT-Image-May-16-2026-12_53_01-PM.png?rlkey=z59capw4d4yd166j5uxvhvdxk&st=pullhmsx&raw=1',
    longImage: 'https://www.dropbox.com/scl/fi/ugth3eqq2yyz3xgfed2zi/Frame-2085669056.png?rlkey=dy10cxmt20a9ekdi6rcswkzex&st=i3h6521d&raw=1',
    likes: 340,
    views: 4012
  },
  {
    id: 9,
    title: 'Bloom',
    author: 'Ishara lakshan',
    category: ['web', 'ui'],
    isImageCard: true,
    image: 'https://www.dropbox.com/scl/fi/tmbjc3mvkuaatudapzrni/Section.png?rlkey=mcvjsutq08vvztktg30mbw9fa&st=1ms9s0q9&raw=1',
    longImage: 'https://www.dropbox.com/scl/fi/0sjcvqs9omnh0hewg8z1l/Bloom.png?rlkey=zr56838o5o0k6rp7dldyrjpro&st=1c808z34&raw=1',
    likes: 112,
    views: 890
  }
];

const categories = [
  { id: 'all', label: 'All' },
  { id: 'ui', label: 'UI UX' },
  { id: 'web', label: 'Website Design' },
  { id: 'app', label: 'App Design' },
  { id: 'projects', label: 'Projects' },
];

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const filteredProjects = projects.filter(p =>
    filter === 'all' || (Array.isArray(p.category) ? p.category.includes(filter) : p.category === filter)
  );

  return (
    <section id="projects" className="py-24 px-[5vw] bg-[var(--bg-primary)]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="font-mono text-xs tracking-[0.3em] text-accent uppercase mb-3">WHAT I'VE BUILT</div>
          <h2 className="font-display text-5xl md:text-6xl text-[var(--text-primary)] tracking-tight">FEATURED PROJECTS</h2>
        </div>

        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`font-sans text-[15px] font-medium px-5 py-2.5 rounded-lg transition-all cursor-pointer ${filter === cat.id
                ? 'bg-[#ff7b00] text-white shadow-lg shadow-[#ff7b00]/30'
                : 'bg-[#f4f4f4] dark:bg-[#1f1f22] text-black dark:text-white hover:bg-[#e8e8e8] dark:hover:bg-[#2a2a2d]'
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              project.isImageCard ? (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => project.longImage && setSelectedProject(project)}
                  className="group relative rounded-xl overflow-hidden cursor-pointer aspect-[4/3] bg-[var(--bg-card)] border border-[var(--border)] shadow-xl"
                >
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 transition-opacity duration-300"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between text-white">
                    <div className="flex flex-col gap-1 w-full">
                      <h3 className="font-sans font-bold text-xl md:text-2xl leading-tight line-clamp-2">{project.title}</h3>
                      <p className="font-sans font-medium text-[13px] text-white/80 mt-1">{project.author}</p>
                    </div>
                  </div>
                </motion.div>
              ) : (
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
              )
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Full Screen Image Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-2 md:p-10 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 50, opacity: 0, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl h-[90vh] md:h-[85vh] bg-[#f8f9fa] dark:bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
              onClick={e => e.stopPropagation()}
            >
              <div className="absolute top-4 right-4 z-10">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="w-10 h-10 bg-black/60 hover:bg-accent hover:text-black text-white rounded-full flex items-center justify-center backdrop-blur-md transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="overflow-y-auto w-full h-full custom-scrollbar">
                <img src={selectedProject.longImage} alt={selectedProject.title} className="w-full h-auto" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
