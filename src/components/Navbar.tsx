import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const navLinks = [
  { name: 'SERVICES', href: '#services' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'ABOUT', href: '#about' },
  { name: 'CONTACT', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed left-0 right-0 top-0 z-[100] min-h-16 px-[5vw] transition-all duration-300 ${scrolled || menuOpen ? 'glass' : 'bg-transparent'}`}>
      <div className="flex h-16 items-center justify-between">
        <a href="#hero" onClick={() => setMenuOpen(false)} className="group flex items-center gap-3 no-underline">
          <img src={logo} alt="Ishara Lakshan" className="h-12 w-12 object-contain transition-transform group-hover:scale-110" />
        </a>

        <div className="hidden items-center gap-2 sm:flex">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="rounded-md px-3.5 py-2 text-xs font-medium tracking-wider text-[var(--text-secondary)] transition-all hover:bg-white/5 hover:text-[var(--text-primary)]">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="ml-4 rounded-full bg-accent px-5 py-2.5 text-xs font-semibold tracking-wider text-black transition-colors hover:bg-accent-hover">
            LET'S TALK
          </a>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-lg border border-[var(--border)] text-[var(--text-primary)] sm:hidden"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div className="flex flex-col gap-1 pb-4 sm:hidden">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setMenuOpen(false)} className="rounded-lg px-3 py-3 text-sm font-medium tracking-wide text-[var(--text-secondary)] hover:bg-white/5 hover:text-[var(--text-primary)]">
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
