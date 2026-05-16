import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import customLogo from '../assets/logo.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  const navLinks = [
    { name: 'PROJECTS', href: '#projects' },
    { name: 'ABOUT', href: '#about' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] h-16 flex items-center justify-between px-[5vw] transition-all duration-300 ${scrolled ? 'glass' : 'bg-transparent'}`}>
      <a href="#" className="flex items-center gap-3 no-underline group">
        <img 
          src={customLogo} 
          alt="Ishara Logo" 
          className="w-10 h-10 object-contain transition-transform group-hover:scale-110" 
        />
        <span className="font-accent text-base font-bold text-[var(--text-primary)]">Ishara</span>
      </a>

      <div className="flex items-center gap-2">
        <div className="hidden sm:flex items-center gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-xs font-medium px-3.5 py-1.5 rounded-md hover:bg-black/5 dark:hover:bg-white/5 transition-all tracking-wider"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a href="#contact" className="hidden sm:flex items-center gap-2 bg-accent hover:bg-accent-hover text-black px-4 py-1.5 rounded-md text-xs font-semibold transition-all">
          CONTACT
        </a>

        <button
          onClick={toggleTheme}
          className="w-9 h-9 grid place-items-center rounded-lg border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-accent hover:border-accent transition-all cursor-pointer ml-1"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
        </button>
      </div>
    </nav>
  );
}
