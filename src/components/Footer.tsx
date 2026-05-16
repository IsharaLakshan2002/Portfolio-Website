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
            { icon: <Github size={20} />, href: 'https://github.com/IsharaLakshan2002', label: 'GitHub', target: "_blank", rel: "noopener noreferrer" },
            { icon: <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.908 5.166 4.664h-6.649c.015 1.508 1.434 2.014 2.618 2.014 1.544 0 2.4-1.125 2.871-1.761l2.091 1.099zm-4.641-4.755c-.054-1.045-1.067-1.314-1.874-1.314-1.282 0-2.023.774-2.186 1.314h4.06zM9.42 16H2V3h7.106c3.151 0 5.485 1.83 5.485 5.255 0 2.274-1.309 3.824-2.923 4.417 1.956.402 3.42 2.222 3.42 4.887C15.088 20.312 12.634 22 9.42 22H2v-6h7.42c1.782 0 2.894-1.312 2.894-2.909 0-1.579-1.042-2.836-2.67-2.836H2v-5.25H9.42c1.656 0 2.768 1.258 2.768 2.836 0 1.597-1.144 2.909-2.768 2.909z"/></svg>, href: 'https://www.behance.net/isharalakshan7', label: 'Behance', target: "_blank", rel: "noopener noreferrer" },
            { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/ishara-lakshan-621733301/', label: 'LinkedIn', target: "_blank", rel: "noopener noreferrer" },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.target}
              rel={social.rel}
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
