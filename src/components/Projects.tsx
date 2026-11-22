import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import type React from 'react';
import { ArrowUpRight, Database, Laptop, LayoutDashboard, Shirt, Leaf, Plane, ListChecks, ShoppingBag, Users, X, Code2, Cpu, LayoutTemplate, Smartphone, Sprout } from 'lucide-react';

import spCover from '../assets/projects/sp-cover.webp';
import spScreens from '../assets/projects/sp-screens.webp';
import spMobile from '../assets/projects/sp-mobile.webp';
import bloomCover from '../assets/projects/bloom-cover.webp';
import bloomDashboard from '../assets/projects/bloom-dashboard.webp';
import bloomReminders from '../assets/projects/bloom-reminders.webp';
import agriCover from '../assets/projects/agri-cover.webp';
import agriScan from '../assets/projects/agri-scan.webp';
import agriMarket from '../assets/projects/agri-market.webp';
import agriCheckout from '../assets/projects/agri-checkout.webp';
import vogueCover from '../assets/projects/vogue-cover.webp';
import vogueHome from '../assets/projects/vogue-home.webp';
import vogueProduct from '../assets/projects/vogue-product.webp';
import vogueCheckout from '../assets/projects/vogue-checkout.webp';
import DnsCover from '../assets/projects/dns-cover.webp';
import DnsSystem from '../assets/projects/dns-system.webp';
import DnsAuth from '../assets/projects/dns-auth.webp';
import DnsDash from '../assets/projects/dns-dash.webp';
import NexaCover from '../assets/projects/nexa-cover.webp';
import NexaHome from '../assets/projects/nexa-home.webp';
import NexaListing from '../assets/projects/nexa-listing.webp';
import NexaWhy from '../assets/projects/nexa-why.webp';
import aeroCover from '../assets/projects/aeroxis-cover.webp';
import aeroProduct from '../assets/projects/aeroxis-product.webp';
import aeroAbout from '../assets/projects/aeroxis-about.webp';

const linkLabel = (url: string, long = false) =>
  url.includes('github.com') ? (long ? 'View on GitHub' : 'GitHub') : url.includes('behance.net') ? (long ? 'View on Behance' : 'Behance') : 'View project';

type Project = { id: number; title: string; type: string; description: string; focus: string; stack: string[]; category: string; link?: string; icon: React.ReactNode; images?: string[]; details?: { label: string; items: string[] }[] };

const projects: Project[] = [
  {
    id: 1,
    title: 'DNS Garment Management System',
    type: 'WEB APPLICATION',
    description: 'A garment business management project focused on organizing customer orders and day-to-day operational information through a web interface.',
    focus: 'Full-stack development',
    stack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    category: 'development',
    link: '', // add GitHub / demo URL
    icon: <Code2 size={21} />,
  },
  {
    id: 2,
    title: 'IoT Landslide Monitoring & Early Warning System',
    type: 'INTERNET OF THINGS',
    description: 'A real-time IoT system that detects early warning signs of landslides and raises timely alerts. It uses multi-sensor decision logic to reduce false alarms, with cloud monitoring through Firebase and a live web dashboard.',
    focus: 'IoT, embedded systems & cloud',
    stack: ['ESP8266', 'Firebase', 'Arduino IDE', 'JavaScript', 'Sensors'],
    category: 'development',
    link: 'https://github.com/IsharaLakshan2002/LandSlideAlertingIoTSystem',
    icon: <Sprout size={21} />,
    details: [
      { label: 'Project highlights', items: ['Real-time environmental data acquisition', 'Cloud monitoring with Firebase Realtime Database', 'Multi-level alert system to reduce false alarms', 'Live web dashboard with historical data tracking', 'Local and remote alerts for immediate response'] },
      { label: 'How it works', items: ['Sensors capture soil moisture, rainfall, vibration and tilt', 'ESP8266 (NodeMCU) processes the values with logical risk detection', 'Firebase stores live and historical data', 'A web dashboard shows sensor data and alert states', 'Alerts trigger locally (LED and buzzer) and remotely (cloud)'] },
      { label: 'Alert logic', items: ['Safe: normal environmental conditions', 'Level 1, evacuation readiness: rain detected and soil saturated', 'High alert, immediate danger: rain, wet soil, ground vibration and land tilt detected together'] },
      { label: 'Hardware', items: ['ESP8266 (NodeMCU)', 'Soil moisture sensor', 'Rain sensor (YL-83 / FC-37)', 'Vibration sensor (SW-420)', 'Tilt sensor (SW-520D)', 'Active buzzer and LED', 'Li-ion battery with power regulation'] },
      { label: 'Software & technologies', items: ['Arduino IDE for embedded firmware', 'Firebase Realtime Database and Firebase Web SDK', 'HTML, CSS and JavaScript dashboard', 'NTP time sync for accurate timestamps'] },
      { label: 'Data management', items: ['Timestamped sensor readings in local time', 'Separate historical datasets per sensor', 'Live readings node for dashboards', 'Diagnostic data: WiFi RSSI and uptime', 'Alert history for post-event analysis'] },
      { label: 'Testing & validation', items: ['Real-world sensor threshold calibration', 'Vibration impulse memory handling', 'WiFi stability and reconnection testing', 'Firebase latency and data integrity validation'] },
      { label: 'Future plans', items: ['Camera-based visual confirmation', 'Rainfall intensity measurement', 'IMU-based tilt detection', 'GSM / SMS alert integration', 'Migration to Firebase Firestore for analytics'] },
    ],
  },
  {
    id: 3,
    title: 'Energy Harvesting Shoe Module',
    type: 'EMBEDDED SYSTEM',
    description: 'A wearable that turns walking into electrical energy using piezoelectric discs in the shoe sole. It stores the energy in a Li-ion battery and shows step count, battery level and voltage on an LCD in real time.',
    focus: 'Embedded systems & renewable energy',
    stack: ['Arduino Nano', 'C++', 'Piezoelectric discs', 'I2C LCD'],
    category: 'development',
    link: 'https://github.com/IsharaLakshan2002/Energy-harvesting-shoe-module',
    icon: <Cpu size={21} />,
    details: [
      { label: 'Key features', items: ['Piezoelectric harvesting: converts footstep pressure into AC voltage', 'Power management with a bridge rectifier and MT3608 boost converter', 'Storage in an 18650 Li-ion battery managed by a TP4056 module', 'Live step counter, battery percentage and voltage output', '16x2 I2C LCD with push buttons for mode switching and reset'] },
      { label: 'How it works', items: ['Walking applies pressure to piezoelectric discs in the shoe sole', 'A full bridge rectifier converts the AC signal to DC', 'A capacitor smooths the signal and the boost converter steps up the voltage', 'The energy is stored in the Li-ion battery through the TP4056 module', 'The Arduino Nano reads the voltage sensor and piezo input, then shows step count and battery level on the LCD'] },
      { label: 'Hardware', items: ['Arduino Nano microcontroller', 'Piezoelectric discs connected in parallel', '18650 Li-ion battery with TP4056 charging module', 'MT3608 boost converter and a buck converter', '16x2 LCD with I2C interface', 'Voltage sensor module, push buttons, diodes, capacitors and resistors'] },
      { label: 'Code', items: ['Written in C++ with the Arduino IDE', 'Uses the Wire and LiquidCrystal_I2C libraries'] },
      { label: 'Future improvements', items: ['Flexible PZT materials for comfort and efficiency', 'Hybrid harvesting with thermoelectric generators', 'Mobile app for tracking power generation over Bluetooth or Wi-Fi', 'Custom PCB to fit the module inside the shoe sole'] },
    ],
  },
  {
    id: 4,
    title: 'Budgetly Expense Tracker',
    type: 'ANDROID APP + DATABASE',
    description: 'An offline-first Android expense tracker that syncs local SQLite data with an Oracle database through ORDS REST APIs, so data stays consistent across devices and the app works without a connection.',
    focus: 'Mobile app & distributed databases',
    stack: ['Android', 'SQLite', 'Oracle DB', 'ORDS REST', 'PL/SQL'],
    category: 'development',
    link: 'https://github.com/IsharaLakshan2002/Budgetly_expense_tracker',
    icon: <Database size={21} />,
    details: [
      { label: 'System architecture', items: ['Client (Android + SQLite): stores user data locally', 'Server (Oracle DB): central data source and reporting engine', 'API layer (ORDS): REST endpoints for secure sync operations'] },
      { label: 'Synchronization strategy', items: ['Push: upload unsynced local changes to Oracle', 'Pull: download the latest server data to the client', 'Conflict resolution: last-write-wins using timestamps', 'Soft deletes: an is_deleted flag keeps record removal safe'] },
      { label: 'Database design', items: ['User-centric relational model', 'One-to-many relationships: Users to Expenses, Budgets and Savings', 'Identical schemas for SQLite and Oracle, adjusted for data types'] },
      { label: 'Reports (Oracle PL/SQL)', items: ['Monthly expenditure report', 'Budget adherence tracking', 'Savings goal progress', 'Category-wise expense distribution'] },
      { label: 'Security & data handling', items: ['Authentication via local DB and ORDS APIs', 'Sync status flags for consistency', 'Backup and recovery via Oracle RMAN', 'Offline data recovery through full sync'] },
      { label: 'Key learnings', items: ['Distributed databases', 'Data synchronization', 'PL/SQL', 'REST APIs', 'Offline-first design', 'Enterprise database concepts'] },
    ],
  },
  {
    id: 5,
    title: 'Pizza Mania Android Ordering App',
    type: 'ANDROID APP',
    description: 'An Android food-ordering app for a restaurant chain in Sri Lanka. Customers can register, browse the menu, save delivery addresses, manage a cart and view order history. Built as a group project at NIBM.',
    focus: 'Mobile app development & UI',
    stack: ['Java', 'Android Studio', 'SQLite', 'Material Design'],
    category: 'development',
    link: 'https://github.com/IsharaLakshan2002/Pizza-Mania-Application',
    details: [
      { label: 'Key features', items: ['Secure registration and login with session handling', 'Profile and saved delivery addresses', 'Dynamic menu with images, descriptions and prices', 'Cart editing, order confirmation and order history'] },
      { label: 'Current limitations', items: ['No online payment (pay on delivery)', 'No real-time delivery tracking', 'No push notifications'] },
      { label: 'Future plans', items: ['Payment gateway', 'Delivery tracking', 'Push notifications', 'Admin analytics dashboard'] },
    ],
    icon: <Smartphone size={21} />,
  },
  {
    id: 6,
    title: 'DO Leads',
    type: 'LEAD MANAGEMENT SYSTEM',
    description: 'A web-based lead management system. I designed the lead tracking and workflow management interfaces during my UI/UX internship at DoMedia.',
    focus: 'UI/UX design',
    stack: ['Figma', 'User flows', 'Wireframes', 'Design system'],
    category: 'design',
    link: '',
    icon: <Users size={21} />,
    details: [
      { label: 'Problem', items: ['Organizing and tracking leads throughout a lead management workflow.'] },
      { label: 'Design decision', items: ['Created structured user flows, wireframes, high-fidelity interfaces and reusable components in Figma to make lead information easier to navigate.'] },
      { label: 'Result', items: ['A consistent interface design intended to support clearer lead tracking and more efficient workflow management.'] },
    ],
  },
  {
    id: 7,
    title: "Bloom: Task Management Web App",
    type: 'WEB APP DESIGN',
    description: "A task and schedule planner that keeps the week in one clear view, with a weekly board, quick AI notes and timely reminders.",
    focus: 'UI/UX design',
    stack: ['Figma', 'Web app design', 'Dashboard', 'Design system'],
    category: 'design',
    link: 'https://www.behance.net/gallery/249464139/BLOOM-Task-Management-Web',
    icon: <ListChecks size={21} />,
    images: [bloomCover, bloomDashboard, bloomReminders],
    details: [
      { label: "Overview", items: ["Designer: Ishara Lakshan", "Platform: web app", "Scope: authentication, dashboard and reminders", "Tools: Figma"] },
      { label: "Problem: too many tools, too little focus", items: ["People juggle tasks, calendars and reminders across separate apps", "Planning a week takes more effort than doing the work"] },
      { label: "Solution: one calm workspace", items: ["A weekly board, quick AI notes and timely reminders in one minimal interface", "Progress shown at a glance"] },
      { label: "Key screens", items: ["Authentication: a split screen with clean forms on the left and the brand message on the right, plus one-tap social sign-in", "Onboarding: a six-box code input and a single Continue button keep email verification short", "Dashboard: seven day columns, a task pool and completion rings for each day, with an AI Note box that turns a sentence into a scheduled task", "Reminders: alerts sorted by urgency, colour-coded, with quick view, snooze and dismiss actions and smart tabs", "Add a task: every task can carry its own alert with a notification toggle, time duration and priority colour"] },
      { label: "Design system", items: ["One blue accent on a clean white base keeps attention on the work", "Inter for headings and interface text", "Primary and secondary buttons and a search field"] },
    ],
  },
  {
    id: 8,
    title: 'SP Holdings: Custom Apparel & Printing',
    type: 'E-COMMERCE WEBSITE DESIGN',
    description: 'A responsive website concept that simplifies custom T-shirt printing, order tracking and fabric selection for customers in Sri Lanka.',
    focus: 'UI/UX design',
    stack: ['Figma', 'User flows', 'Wireframes', 'Responsive design'],
    category: 'design',
    link: 'https://www.behance.net/gallery/249554279/Corporate-business-website',
    icon: <ShoppingBag size={21} />,
    images: [spCover, spScreens, spMobile],
    details: [
      { label: 'Overview', items: ['Industry: apparel and printing', 'Platform: responsive website', 'Duration: 4 weeks', 'Role: UI/UX designer'] },
      { label: 'Goal', items: ['A user-friendly website where customers can order custom apparel, choose fabrics, track orders and explore printing services.'] },
      { label: 'Problem: a fragmented printing process', items: ['Customers struggle to understand the custom printing process', 'Order progress is hard to track', 'Traditional apparel websites feel outdated', 'Communication between clients and printing companies is difficult'] },
      { label: 'Solution: a streamlined experience', items: ['Easy order placement flow', 'Real-time order tracking', 'Fabric selection system', 'Mobile-friendly responsive experience'] },
      { label: 'Key screens', items: ['Our Services: a clean, modern layout that makes the services easy to understand', 'Our Story: presents the brand journey with clear sections', 'Fabric Selection: compares client-provided fabric with company-provided fabric using quality indicators', 'Mobile experience: an app-like, responsive UI with fast navigation'] },
      { label: 'Visual identity', items: ['Red, deep black (#111111) and light gray (#F5F5F5) palette', 'Poppins and Inter typefaces'] },
      { label: 'Design process', items: ['Research', 'Wireframes', 'UI exploration', 'Final design', 'Responsive design'] },
    ],
  },
  {
    id: 9,
    title: "AEROXIS: Autonomous Drone Website",
    type: 'WEBSITE DESIGN',
    description: "A responsive website concept for an autonomous drone company. It shows the product first and explains it with clear numbers.",
    focus: 'UI/UX design',
    stack: ['Figma', 'Website design', 'Responsive design', 'Visual design'],
    category: 'design',
    link: 'https://www.behance.net/gallery/258851551/AEROXIS',
    icon: <Plane size={21} />,
    images: [aeroCover, aeroProduct, aeroAbout],
    details: [
      { label: "Overview", items: ["Designer: Ishara Lakshan", "Platform: responsive website", "Scope: Home, Features, About and Contact pages", "Tools: Figma"] },
      { label: "Problem", items: ["Drone websites bury the product under jargon", "Complex specs make it hard for buyers to see why one drone is better than another"] },
      { label: "Solution: product first, proof next", items: ["A dark, focused layout puts the drone centre stage", "Numbers, callouts and real voices back it up"] },
      { label: "Approach: show, explain, convince", items: ["Show: a full-width product hero with one clear action", "Explain: callouts tie each spec to a part of the drone", "Convince: stats, quotes and a team page build trust"] },
      { label: "Visual identity", items: ["Near-black surfaces with one cyan accent and a purple gradient for depth", "Roboto keeps technical text clear"] },
      { label: "Key pages", items: ["Home: four headline numbers under the hero, then a callout map pointing at the drone", "Features: tags for quick scanning, with each card pairing a part photo with one big number", "About: mission and vision cards, a three-step timeline, key numbers and the team", "Contact: a simple underline form and a friendly 3D figure that keep a technical team approachable"] },
    ],
  },
  {
    id: 10,
    title: "Agri Shield: Crop Care & Marketplace App",
    type: 'MOBILE APP DESIGN',
    description: "A mobile app that helps farmers scan crop problems with AI, follow a clear treatment plan and sell their harvest directly to buyers.",
    focus: 'UI/UX design',
    stack: ['Figma', 'Mobile app design', 'User flows', 'Design system'],
    category: 'design',
    link: 'https://www.behance.net/gallery/249552117/AgriShield',
    icon: <Leaf size={21} />,
    images: [agriCover, agriScan, agriMarket, agriCheckout],
    details: [
      { label: "Overview", items: ["Designer: Ishara Lakshan", "Platform: mobile app", "Scope: scan, treat, sell and checkout", "Tools: Figma"] },
      { label: "Problem: late detection, unfair prices", items: ["Farmers often spot crop disease too late", "They sell through middlemen, losing both harvest and income"] },
      { label: "Solution: one app for the whole cycle", items: ["Scan: AI finds pests and disease in seconds", "Treat: step-by-step action plans with photos", "Sell: a direct marketplace with fair prices"] },
      { label: "Key screens", items: ["Onboarding: three screens with large photos, a progress bar and one Next button", "Scan and treat: a short scan guide, then a numbered action plan with photos and safety warnings", "Marketplace: Buy and Sell tabs, verified sellers, and cards showing price, origin and badges at a glance", "Checkout: order summary, wallet balance and one Confirm and Pay action"] },
      { label: "Design system", items: ["Deep greens and soft neutrals that feel close to the field and stay readable outdoors", "Plus Jakarta Sans for headings and interface text", "Primary and secondary buttons"] },
    ],
  },
  {
    id: 11,
    title: "Vogue & Thread: E-commerce Web App",
    type: 'E-COMMERCE WEB APP DESIGN',
    description: "A responsive fashion e-commerce experience that moves shoppers from discovery to checkout without friction.",
    focus: 'UI/UX design',
    stack: ['Figma', 'E-commerce', 'Responsive design', 'Checkout flow'],
    category: 'design',
    link: 'https://www.behance.net/gallery/249466253/E-Commerce-Web-Application',
    icon: <Shirt size={21} />,
    images: [vogueCover, vogueHome, vogueProduct, vogueCheckout],
    details: [
      { label: "Overview", items: ["Designer: Ishara Lakshan", "Platform: responsive web", "Scope: home, product and checkout", "Tools: Figma"] },
      { label: "The challenge", items: ["Online fashion stores often bury products under heavy banners and long forms", "Shoppers lose the thread between discovering a piece and paying for it"] },
      { label: "The approach", items: ["Quiet editorial layouts that let photography lead", "One accent colour to point at actions", "A short, clear path from category to checkout"] },
      { label: "Key screens", items: ["Homepage: four category cards as clear entry points, with trending products below showing a badge, rating and a single Add to bag action", "Product page: a large image, colour swatches that update the shade name, and a clear pair of actions (Add to Cart and Buy Now) with trust points beneath", "Checkout: shipping then payment on one page, with the order summary always visible and delivery and discount shown before the total", "Payments: card, cash on delivery and KOKO Pay cover local payment habits"] },
      { label: "Brand identity", items: ["Warm neutrals and deep navy keep the clothing the focus", "Gold is reserved for moments that need attention", "Poppins for headings and prices, Inter for body copy and form fields"] },
    ],
  },
  {
    id: 12,
    title: "DNS Garment Management: SaaS Dashboard",
    type: "DASHBOARD DESIGN",
    description: "A premium SaaS dashboard design for enterprise garment management, streamlining orders, inventory and analytics with a clean orange-themed interface.",
    focus: 'UI/UX design',
    stack: ['Dashboard design', 'SaaS', 'Role-based access', 'Design system'],
    category: 'design',
    link: "https://www.behance.net/gallery/249463185/Garment-Management-System",
    icon: <LayoutDashboard size={21} />,
    images: [DnsCover, DnsSystem, DnsAuth, DnsDash],
    details: [
      { label: "Overview", items: ["Platform: SaaS dashboard for enterprise garment management", "Goal: streamline orders, inventory and analytics with an elegant, futuristic interface"] },
      { label: "Key screens", items: ["Onboarding and registration: a frictionless sign-up tailored to different enterprise roles, with a clean, accessible form that builds brand trust", "Role selection login: a split layout with fashion-themed illustrations where users identify as Admin, Wholesaler or Supplier before continuing", "Command center: a bird's-eye dashboard where every metric, from active orders to total revenue, is visualized for rapid decision making", "Order management: streamlined order creation with intuitive data entry, real-time totals and quick access to customer details"] },
      { label: "Design system", items: ["Vibrant orange accent on dark and white surfaces", "Inter for headings, subtitles and clean, legible data tables"] },
    ],
  },
  {
    id: 13,
    title: "NexaTech: E-commerce Web App",
    type: "E-COMMERCE WEB APP DESIGN",
    description: "A conceptual electronics e-commerce platform with a modern, minimal UI that puts products front and center and builds trust for high-value purchases.",
    focus: 'UI/UX design',
    stack: ['E-commerce', 'Responsive web', 'UI design', 'Product listing'],
    category: 'design',
    link: "https://www.behance.net/gallery/249552277/E-commers-Web-site",
    icon: <Laptop size={21} />,
    images: [NexaCover, NexaHome, NexaListing, NexaWhy],
    details: [
      { label: "Overview", items: ["Role: UI/UX designer", "Timeline: 2 weeks", "Platform: responsive web", "Goal: make browsing and buying electronics seamless, intuitive and trustworthy"] },
      { label: "Key screens", items: ["Home page: a high-impact hero with featured categories and clear navigation that sends users straight to what they need", "Product listing: a clean grid with category filters and clear product pricing", "Why buy from us: a trust-building section covering genuine products, best prices, fast and secure delivery, and reliable customer support"] },
    ],
  },
  {
    id: 14,
    title: 'Document Request & Approval App',
    type: 'PRODUCT DESIGN',
    description: 'A workflow-focused product design concept covering document uploads, review, confirmation requests and status tracking.',
    focus: 'Product design',
    stack: ['User Flows', 'Wireframes', 'UI Design', 'Prototyping'],
    category: 'design',
    link: '',
    icon: <LayoutTemplate size={21} />,
  },
];

const filters = [
  { id: 'all', label: 'All work' },
  { id: 'design', label: 'UI/UX design' },
  { id: 'development', label: 'Development' },
];

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setSelected(null);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [selected]);

  const visibleProjects = projects.filter((project) => filter === 'all' || project.category === filter);

  return (
    <section id="projects" className="bg-[var(--bg-secondary)] px-[5vw] py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-accent">Selected work</p>
            <h2 className="font-display text-5xl tracking-tight text-[var(--text-primary)] md:text-6xl">PROJECTS & CASE STUDIES</h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--text-secondary)] md:text-base">
              A selection of design and development work across web, mobile and connected systems.
            </p>
          </div>
          <div className="flex flex-wrap gap-2" aria-label="Filter projects">
            {filters.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setFilter(item.id)}
                aria-pressed={filter === item.id}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${filter === item.id
                  ? 'border-accent bg-accent text-black'
                  : 'border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:border-accent hover:text-[var(--text-primary)]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              onClick={() => setSelected(project)} onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), setSelected(project))} tabIndex={0} role="button" aria-label={`View details: ${project.title}`} className="group flex min-h-[290px] cursor-pointer flex-col rounded-2xl border border-[var(--border)] bg-[var(--bg-primary)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60"
            >
              <div className="mb-7 flex items-center justify-between">
                <div className="grid h-11 w-11 place-items-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
                  {project.icon}
                </div>
                <span className="font-mono text-[10px] tracking-[0.16em] text-[var(--text-muted)]">0{project.id}</span>
              </div>
              <p className="mb-2 font-mono text-[10px] tracking-[0.18em] text-accent">{project.type}</p>
              <h3 className="mb-3 text-xl font-semibold text-[var(--text-primary)]">{project.title}</h3>
              <p className="mb-5 text-sm leading-relaxed text-[var(--text-secondary)]">{project.description}</p>
              <div className="mt-auto">
                <p className="mb-3 text-xs font-medium text-[var(--text-primary)]">{project.focus}</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tag) => (
                    <span key={tag} className="rounded-md border border-[var(--border)] px-2.5 py-1 font-mono text-[10px] text-[var(--text-secondary)]">{tag}</span>
                  ))}
                </div>
                <div className="mt-5 flex min-h-[3rem] items-end justify-between border-t border-[var(--border)] pt-4 text-xs font-medium">
                  <span className="text-accent">View details +</span>
                  {project.link && (
                    <a href={project.link} onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[var(--text-secondary)] hover:text-accent">
                      {linkLabel(project.link)} <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {selected && (
          <div className="fixed inset-0 z-[200] grid place-items-center bg-black/70 p-4 backdrop-blur-sm" onClick={() => setSelected(null)} role="dialog" aria-modal="true" aria-label={selected.title}>
            <div onClick={(e) => e.stopPropagation()} className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-6 md:p-8">
              <button type="button" onClick={() => setSelected(null)} aria-label="Close details" className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-lg border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"><X size={18} /></button>
              <p className="mb-2 font-mono text-[10px] tracking-[0.18em] text-accent">{selected.type}</p>
              <h3 className="mb-4 pr-10 text-2xl font-semibold text-[var(--text-primary)]">{selected.title}</h3>
              <p className="mb-6 text-sm leading-relaxed text-[var(--text-secondary)] md:text-base">{selected.description}</p>
              {selected.images?.map((src, i) => <img key={i} src={src} alt={`${selected.title} preview ${i + 1}`} loading="lazy" className="mb-4 w-full rounded-xl border border-[var(--border)]" />)}
              {selected.details?.map(({ label, items }) => (
                <div key={label} className="mb-5">
                  <h4 className="mb-2 text-sm font-semibold text-[var(--text-primary)]">{label}</h4>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-[var(--text-secondary)]">{items.map((i) => <li key={i}>{i}</li>)}</ul>
                </div>
              ))}
              <div className="mb-6 flex flex-wrap gap-2">
                {selected.stack.map((tag) => <span key={tag} className="rounded-md border border-[var(--border)] px-2.5 py-1 font-mono text-[10px] text-[var(--text-secondary)]">{tag}</span>)}
              </div>
              {selected.link && (
                <a href={selected.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-bold text-black hover:bg-accent-hover">
                  {linkLabel(selected.link, true)} <ArrowUpRight size={16} />
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
