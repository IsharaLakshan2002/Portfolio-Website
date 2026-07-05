import { useEffect, useState } from 'react';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'PROJECTS', href: '#projects' },
    { name: 'ABOUT', href: '#about' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] h-16 flex items-center justify-between px-[5vw] transition-all duration-300 ${scrolled ? 'glass' : 'bg-transparent'}`}>
      <a href="#" className="flex items-center gap-3 no-underline group">
        <img src={logo} alt="Logo" className="h-10 w-auto transition-transform group-hover:scale-110" />
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
      </div>
    </nav>
  );
}
