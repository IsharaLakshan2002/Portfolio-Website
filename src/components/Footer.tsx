import { Github, Linkedin } from 'lucide-react';
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
            { icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
	<path d="M0 0h24v24H0z" fill="none" />
	<g fill="none" fill-rule="evenodd">
		<path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
		<path fill="currentColor" d="M8 5a4 4 0 0 1 2.646 7A4 4 0 0 1 8 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm9.5 4c2.607 0 4.5 2.368 4.5 5a1 1 0 0 1-.883.993L21 15h-5.86c.358 1.224 1.353 2 2.36 2c1.08 0 1.692-.511 2.24-1.15a1 1 0 1 1 1.52 1.3l-.107.122l-.229.246C20.202 18.26 19.146 19 17.5 19c-2.607 0-4.5-2.368-4.5-5s1.893-5 4.5-5M8 13H4v4h4a2 2 0 0 0 .15-3.995zm9.5-2c-1.007 0-2.002.776-2.36 2h4.72c-.358-1.224-1.353-2-2.36-2M8 7H4v4h4a2 2 0 1 0 0-4m11-1a1 1 0 1 1 0 2h-3a1 1 0 1 1 0-2z" />
	</g>
</svg>
, href: 'https://www.behance.net/isharalakshan7', label: 'Behance', target: "_blank", rel: "noopener noreferrer" },
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
