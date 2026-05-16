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
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[800px] h-[750px] z-0 pointer-events-none hidden md:block scale-75 md:scale-100 origin-top">
          <svg width="100%" height="100%" viewBox="0 0 1010 906" fill="none" xmlns="http://www.w3.org/2000/svg">
            <foreignObject x="49" y="0" width="911.075" height="905.231">
              <div xmlns="http://www.w3.org/1999/xhtml" style={{ backdropFilter: 'blur(17.5px)', clipPath: 'url(#bgblur_0_2011_180_clip_path)', height: '100%', width: '100%' }}></div>
            </foreignObject>
            <g filter="url(#filter0_d_2011_180)" data-figma-bg-blur-radius="35">
              <mask id="path-1-inside-1_2011_180" fill="white">
                <path d="M504.538 100C700.896 100 860.075 258.94 860.075 455.001C860.075 457.456 860.05 459.905 860 462.349V805.231H149V448.231H149.063C152.677 255.294 310.445 100 504.538 100Z"/>
              </mask>
              <path d="M504.538 100C700.896 100 860.075 258.94 860.075 455.001C860.075 457.456 860.05 459.905 860 462.349V805.231H149V448.231H149.063C152.677 255.294 310.445 100 504.538 100Z" fill="#E9E3DC" fillOpacity="0.05" shapeRendering="crispEdges"/>
              <path d="M504.538 100V97.505V97.505V100ZM860.075 455.001H862.57V455.001H860.075ZM860 462.349L857.506 462.298L857.505 462.323V462.349H860ZM860 805.231V807.726H862.495V805.231H860ZM149 805.231H146.505V807.726H149V805.231ZM149 448.231V445.736H146.505V448.231H149ZM149.063 448.231V450.726H151.512L151.558 448.278L149.063 448.231ZM504.538 100V102.495C699.522 102.495 857.58 260.321 857.58 455.001H860.075H862.57C862.57 257.558 702.27 97.5053 504.538 97.505V100ZM860.075 455.001H857.58C857.58 457.439 857.555 459.871 857.506 462.298L860 462.349L862.494 462.399C862.544 459.94 862.57 457.473 862.57 455.001H860.075ZM860 462.349H857.505V805.231H860H862.495V462.349H860ZM860 805.231V802.737H149V805.231V807.726H860V805.231ZM149 805.231H151.495V448.231H149H146.505V805.231H149ZM149 448.231V450.726H149.063V448.231V445.736H149V448.231ZM149.063 448.231L151.558 448.278C155.146 256.701 311.804 102.495 504.538 102.495V100V97.505C309.086 97.505 150.208 253.887 146.569 448.185L149.063 448.231Z" fill="url(#paint0_linear_2011_180)" fillOpacity="0.5" mask="url(#path-1-inside-1_2011_180)"/>
              <path d="M504.538 100V97.505V97.505V100ZM860.075 455.001H862.57V455.001H860.075ZM860 462.349L857.506 462.298L857.505 462.323V462.349H860ZM860 805.231V807.726H862.495V805.231H860ZM149 805.231H146.505V807.726H149V805.231ZM149 448.231V445.736H146.505V448.231H149ZM149.063 448.231V450.726H151.512L151.558 448.278L149.063 448.231ZM504.538 100V102.495C699.522 102.495 857.58 260.321 857.58 455.001H860.075H862.57C862.57 257.558 702.27 97.5053 504.538 97.505V100ZM860.075 455.001H857.58C857.58 457.439 857.555 459.871 857.506 462.298L860 462.349L862.494 462.399C862.544 459.94 862.57 457.473 862.57 455.001H860.075ZM860 462.349H857.505V805.231H860H862.495V462.349H860ZM860 805.231V802.737H149V805.231V807.726H860V805.231ZM149 805.231H151.495V448.231H149H146.505V805.231H149ZM149 448.231V450.726H149.063V448.231V445.736H149V448.231ZM149.063 448.231L151.558 448.278C155.146 256.701 311.804 102.495 504.538 102.495V100V97.505C309.086 97.505 150.208 253.887 146.569 448.185L149.063 448.231Z" fill="url(#paint1_linear_2011_180)" fillOpacity="0.1" mask="url(#path-1-inside-1_2011_180)"/>
            </g>
            <path d="M254.999 74C250.138 76.1605 221.699 99.5343 216.999 103.5C209.867 109.518 198.999 121.5 198.999 121.5C182.617 138.238 162.415 166.396 151.499 187.5C141.739 206.369 134.949 224.637 128.571 245.136C123.601 261.111 119.241 276.55 115.999 293C110.435 369.048 109.499 457.663 109.499 537" stroke="#C76526" strokeWidth="6" strokeLinecap="round"/>
            <path d="M754.098 76C758.959 78.1605 787.398 101.534 792.098 105.5C799.23 111.518 810.098 123.5 810.098 123.5C826.48 140.238 846.682 168.396 857.598 189.5C867.358 208.369 874.148 226.637 880.525 247.136C885.495 263.111 889.856 278.55 893.098 295C898.661 371.048 899.598 459.663 899.598 539" stroke="#C76526" strokeWidth="6" strokeLinecap="round"/>
            <path d="M187.113 81.7741C139.074 133.593 112.99 188.012 109.952 193.359C105.342 201.473 99.2906 216.475 99.2906 216.475C89.7108 237.847 80.4977 271.255 77.5569 294.832C74.9275 315.913 74.8765 335.401 75.9846 356.841" stroke="#D1EF53" strokeWidth="6" strokeLinecap="round"/>
            <path d="M821.984 83.7741C870.023 135.593 896.107 190.012 899.145 195.359C903.755 203.473 909.806 218.475 909.806 218.475C919.386 239.847 928.599 273.255 931.54 296.832C934.169 317.913 934.22 337.401 933.112 358.841" stroke="#D1EF53" strokeWidth="6" strokeLinecap="round"/>
            <path d="M99.5283 138.612C87.5415 156.151 78.5758 173.455 69.7474 193.025" stroke="#E9E3DC" strokeWidth="6" strokeLinecap="round"/>
            <path d="M911.299 149.734C922.165 167.989 930.031 185.819 937.618 205.903" stroke="#E9E3DC" strokeWidth="6" strokeLinecap="round"/>
            <defs>
              <filter id="filter0_d_2011_180" x="49" y="0" width="911.075" height="905.231" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="50"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2011_180"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2011_180" result="shape"/>
              </filter>
              <clipPath id="bgblur_0_2011_180_clip_path" transform="translate(-49 0)">
                <path d="M504.538 100C700.896 100 860.075 258.94 860.075 455.001C860.075 457.456 860.05 459.905 860 462.349V805.231H149V448.231H149.063C152.677 255.294 310.445 100 504.538 100Z"/>
              </clipPath>
              <linearGradient id="paint0_linear_2011_180" x1="879.179" y1="53.5477" x2="24.9917" y2="173.747" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1E1E1E"/>
                <stop offset="1" stopColor="#848484"/>
              </linearGradient>
              <linearGradient id="paint1_linear_2011_180" x1="879.179" y1="53.5477" x2="24.9917" y2="173.747" gradientUnits="userSpaceOnUse">
                <stop stopColor="#848484"/>
                <stop offset="1" stopColor="#1E1E1E"/>
              </linearGradient>
            </defs>
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
