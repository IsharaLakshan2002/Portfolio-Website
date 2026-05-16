import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Monitor, Smartphone, Code2, Database, Coffee, Terminal, MonitorPlay, Layers, Figma, Atom, MessageCircle } from 'lucide-react';
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
          { icon: <Monitor size={20} strokeWidth={2} />, title: 'UI/UX', sub: 'DESIGNER' },
          { icon: <Layers size={20} strokeWidth={2} />, title: 'WEB', sub: 'DESIGNER' },
          { icon: <Code2 size={20} strokeWidth={2} />, title: 'WEB', sub: 'DEVELOPMENT' },
          { icon: <MessageCircle size={20} strokeWidth={2} />, title: 'WHATSAPP', sub: '+94 76 090 8497', href: 'https://wa.me/94760908497' }
        ].map((role, i) => {
          const content = (
            <>
              <div className="text-[var(--text-muted)] group-hover:text-accent transition-colors bg-[var(--bg-card)] p-3 rounded-lg border border-[var(--border)]">
                {role.icon}
              </div>
              <div>
                <div className="font-display tracking-wider text-base text-[var(--text-primary)] leading-none mb-1">{role.title}</div>
                <div className="font-mono text-[10px] tracking-[0.2em] text-[var(--text-muted)] leading-none">{role.sub}</div>
              </div>
            </>
          );

          return role.href ? (
            <a key={i} href={role.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group cursor-pointer hover:-translate-y-1 transition-transform">
              {content}
            </a>
          ) : (
            <div key={i} className="flex items-center gap-4 group cursor-default">
              {content}
            </div>
          );
        })}
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
        <div className="absolute top-[280px] md:top-[340px] left-1/2 -translate-x-1/2 ml-3 md:ml-6 w-[450px] md:w-[560px] z-0 pointer-events-none hidden md:block origin-top transition-all duration-500">
          <svg width="100%" height="100%" viewBox="0 0 1010 906" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            <svg viewBox="0 0 38 57" width="24" height="36" fill="none" className="scale-[0.85] origin-center -mt-1.5"><path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE"/><path d="M0 47.5a9.5 9.5 0 0 1 9.5-9.5H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83"/><path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262"/><path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E"/><path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF"/></svg>,
            <div className="bg-[#31A8FF] text-[#001E36] w-[26px] h-[26px] rounded-[5px] flex items-center justify-center font-bold text-[14px] font-sans shadow-md">Ps</div>,
            <div className="bg-[#9999FF] text-[#00005C] w-[26px] h-[26px] rounded-[5px] flex items-center justify-center font-bold text-[14px] font-sans shadow-md">Pr</div>,
            <div className="bg-[#FF61F6] text-[#470137] w-[26px] h-[26px] rounded-[5px] flex items-center justify-center font-bold text-[14px] font-sans shadow-md">Xd</div>,
            <div className="bg-[#FF9A00] text-[#330000] w-[26px] h-[26px] rounded-[5px] flex items-center justify-center font-bold text-[14px] font-sans shadow-md">Ai</div>,
            <svg viewBox="0 0 24 24" width="30" height="30">
              <path fill="#5382A1" d="M15.655 15.5c4.486 0 7.644-.908 9.076-2.152.17-.138.261-.282.261-.434 0-1.14-3.5-1.83-5.829-1.83H12.014c-2.33 0-5.83.69-5.83 1.83 0 .152.091.296.262.434 1.432 1.244 4.59 2.152 9.077 2.152zM13.061 24c3.286 0 6.328-.435 8.496-1.083 2.326-.693 3.618-1.74 3.618-3.013 0-.792-.628-1.576-1.921-2.247-1.401-.728-3.239-1.147-5.463-1.147-4.57 0-7.857.942-9.28 2.24-.162.146-.248.29-.248.435 0 .155.093.308.264.452 1.396 1.183 4.417 2.052 8.654 2.052 4.238 0 7.259-.87 8.654-2.052.171-.144.264-.297.264-.452 0-.145-.086-.289-.248-.435-1.423-1.298-4.71-2.24-9.28-2.24-2.022 0-3.834.336-5.18.916a8.882 8.882 0 0 0 1.936.568c2.812.564 6.848.564 9.66 0a8.882 8.882 0 0 0 1.935-.568C22.613 18.067 20.801 17.73 18.78 17.73c-2.022 0-3.835.337-5.181.917-1.346-.58-3.159-.917-5.18-.917a15.42 15.42 0 0 0-5.18.917c-1.346-.58-3.158-.917-5.18-.917z"/>
              <path fill="#F8981D" d="M11.666 0c-.394 0-.796.064-1.203.194-2.613.829-3.292 2.72-3.138 3.538.163.856.974 1.258 1.488.75.127-.127.242-.3.33-.538.384-1.042 1.433-1.637 2.457-1.637 1.253 0 2.277.616 2.651 1.634.135.367.436.56.772.56.331 0 .633-.187.769-.548.882-2.348-.823-3.953-4.126-3.953zm-2.83 5.467c-.246 0-.5.028-.758.084-2.613.578-3.328 2.378-3.136 3.2.164.7.994.945 1.438.411.109-.131.21-.307.29-.533.385-1.096 1.498-1.558 2.52-1.558 1.253 0 2.343.46 2.717 1.55.136.398.441.606.777.606.331 0 .638-.201.774-.593.882-2.563-.888-3.167-4.622-3.167z"/>
            </svg>,
            <svg viewBox="-11.5 -10.23174 23 20.46348" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
              <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
              <g stroke="#61dafb" strokeWidth="1" fill="none">
                <ellipse rx="11" ry="4.2"/>
                <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
              </g>
            </svg>
          ].map((icon, idx) => (
            <div key={idx} className="hover:scale-125 transition-transform duration-300 flex items-center justify-center h-6 cursor-default">
              {icon}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
