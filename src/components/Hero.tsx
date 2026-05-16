import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Monitor, Smartphone, Code2, Database, Coffee, Terminal, MonitorPlay, Layers } from 'lucide-react';
import profilePic from '../assets/Ishara_boss.png';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".hero-name", {
      y: 80,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      stagger: 0.1
    })
      .from(".hero-image", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      }, "-=0.8")
      .from(".hero-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.6")
      .from(".hero-pill", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out"
      }, "-=0.4")
      .from(".side-element", {
        x: (i, el) => el.classList.contains('left') ? -30 : 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
      }, "-=0.8");
  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="hero" className="relative min-h-screen flex flex-col items-center pt-24 pb-20 px-4 overflow-hidden bg-[var(--bg-primary)]">

      {/* Background Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
        style={{ backgroundImage: 'linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)', backgroundSize: '10vw 100%' }}>
      </div>

      {/* Vertical Ghost Text Left */}
      <div className="absolute left-2 md:left-6 top-0 bottom-0 flex flex-col justify-center items-center pointer-events-none select-none opacity-5 overflow-hidden font-display text-[8vh] md:text-[15vh] leading-[0.8] text-[var(--text-primary)]">
        {"SOFTWARE".split('').map((char, i) => (
          <span key={i}>{char}</span>
        ))}
      </div>

      {/* Vertical Ghost Text Right */}
      <div className="absolute right-2 md:right-6 top-0 bottom-0 flex flex-col justify-center items-center pointer-events-none select-none opacity-5 overflow-hidden font-display text-[8vh] md:text-[15vh] leading-[0.8] text-[var(--text-primary)]">
        {"ENGINEER".split('').map((char, i) => (
          <span key={i}>{char}</span>
        ))}
      </div>

      {/* Side Scroll Text */}
      <div className="side-element left hidden lg:flex absolute left-16 top-1/2 -translate-y-1/2 flex-col items-center gap-2 text-[var(--text-secondary)] font-mono text-xs tracking-[0.2em] z-20">
        {"SCROLL".split('').map((char, i) => (
          <span key={i}>{char}</span>
        ))}
      </div>

      {/* Side Roles */}
      <div className="side-element right hidden lg:flex absolute right-12 top-1/2 -translate-y-1/2 flex-col gap-10 z-20">
        {[
          { icon: <Monitor size={20} strokeWidth={2} />, title: 'WEB', sub: 'DEVELOPER' },
          { icon: <Smartphone size={20} strokeWidth={2} />, title: 'ANDROID', sub: 'ENGINEER' },
          { icon: <Database size={20} strokeWidth={2} />, title: 'SOFTWARE', sub: 'ARCHITECT' }
        ].map((role, i) => (
          <div key={i} className="flex items-center gap-4 group cursor-default">
            <div className="text-[var(--text-muted)] group-hover:text-accent transition-colors bg-[var(--bg-card)] p-3 rounded-lg border border-[var(--border)]">
              {role.icon}
            </div>
            <div>
              <div className="font-display tracking-wider text-base text-[var(--text-primary)] leading-none mb-1">{role.title}</div>
              <div className="font-mono text-[10px] tracking-[0.2em] text-[var(--text-muted)] leading-none">{role.sub}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Center */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-4xl mt-10">

        {/* Huge Name behind image */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120vw] text-center z-0 pt-10 pointer-events-none">
          <h1 className="hero-name font-display text-[15vw] md:text-[9vw] leading-[0.85] text-[var(--text-primary)] tracking-tighter uppercase m-0">
            Ishara <br /> Lakshan
          </h1>
        </div>

        {/* Decorative Arcs Behind Image */}
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] z-0 pointer-events-none opacity-80 hidden md:block">
          <svg width="100%" height="100%" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 100 400 C 100 200, 150 100, 250 80" stroke="var(--accent)" strokeWidth="4" strokeLinecap="round" />
            <path d="M 60 400 C 60 160, 120 70, 220 50" stroke="var(--text-muted)" strokeWidth="2" strokeLinecap="round" />

            <path d="M 400 400 C 400 200, 350 100, 250 80" stroke="var(--accent)" strokeWidth="4" strokeLinecap="round" />
            <path d="M 440 400 C 440 160, 380 70, 280 50" stroke="var(--text-muted)" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>

        {/* Profile Image */}
        <div className="hero-image relative z-10 mt-32 md:mt-48 flex justify-center w-full max-w-[400px]">
          <img
            src={profilePic}
            alt="N.A.D.I.L. Ediriweera"
            className="w-full h-auto object-contain drop-shadow-2xl"
          />
        </div>

        {/* About Card */}
        <div className="hero-card relative z-20 -mt-20 md:-mt-24 w-full bg-accent p-8 md:p-12 rounded-[24px] shadow-2xl flex flex-col md:flex-row gap-8 items-center border border-white/20 dark:border-black/10">
          <div className="md:w-[35%] shrink-0 text-center md:text-left">
            <h2 className="font-display text-5xl md:text-6xl leading-[0.9] text-black uppercase tracking-tighter m-0">
              ABOUT <br className="hidden md:block" /> MYSELF
            </h2>
          </div>
          <div className="md:w-[65%] border-t md:border-t-0 md:border-l border-black/10 pt-6 md:pt-0 pl-0 md:pl-10">
            <p className="text-black/90 text-[15px] md:text-base font-medium leading-relaxed m-0 text-justify md:text-left">
              I am <strong className="font-bold text-black">N.A.D.I.L. Ediriweera</strong>, a creative professional, skilled at transforming ideas into aesthetically pleasing, creative <strong className="font-bold text-black">functional software</strong> and <strong className="font-bold text-black">digital experiences</strong>. I am passionate about merging logic and technology to exceed technical boundaries and achieve both <strong className="font-bold text-black">visual excellence</strong> and <strong className="font-bold text-black">user satisfaction</strong>.
            </p>
          </div>
        </div>

        {/* Tech Stack Pill */}
        <div className="hero-pill relative z-10 pt-12 pb-6 px-10 bg-[#151515] dark:bg-[#1a1a1c] border border-white/5 dark:border-[var(--border)] rounded-b-[24px] shadow-xl flex gap-6 md:gap-10 justify-center flex-wrap max-w-[90%] w-[800px] -mt-6">
          {[
            <Code2 size={24} strokeWidth={1.5} />,
            <Database size={24} strokeWidth={1.5} />,
            <Coffee size={24} strokeWidth={1.5} />,
            <Terminal size={24} strokeWidth={1.5} />,
            <MonitorPlay size={24} strokeWidth={1.5} />,
            <Layers size={24} strokeWidth={1.5} />,
            <Smartphone size={24} strokeWidth={1.5} />
          ].map((icon, idx) => (
            <div key={idx} className="text-[#888] hover:text-white dark:text-[var(--text-muted)] dark:hover:text-[var(--text-primary)] transition-colors duration-300">
              {icon}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
