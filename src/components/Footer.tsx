import { Github, Linkedin, Mail } from 'lucide-react';
import customLogo from '../assets/logo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-[5vw] bg-[var(--bg-secondary)] border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-10">
        <img src={customLogo} alt="Ishara Logo" className="h-12 w-auto object-contain" />
        
        <nav className="flex flex-wrap justify-center gap-x-10 gap-y-4">
          {['HOME', 'ABOUT', 'PROJECTS', 'CONTACT'].map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              className="text-[var(--text-secondary)] hover:text-accent font-mono text-xs tracking-widest transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {[
            { icon: <Github size={20} />, href: '#', label: 'GitHub' },
            { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
            { icon: <Mail size={20} />, href: 'mailto:ishara.mail.ediriweera@gmail.com', label: 'Email' },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="w-10 h-10 rounded-xl bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-secondary)] hover:text-accent hover:border-accent grid place-items-center transition-all"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>

        <div className="text-[var(--text-muted)] font-mono text-[10px] tracking-wider uppercase text-center">
          © {currentYear} N.A.D.I.L. Ediriweera — Designed with Logic & Passion
        </div>
      </div>
    </footer>
  );
}
