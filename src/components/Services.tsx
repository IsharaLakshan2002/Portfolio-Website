import { motion } from 'motion/react';
import { MonitorSmartphone, Code2, Database, LayoutTemplate, Smartphone, ServerCog } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'App Design',
    description: 'Crafting intuitive and engaging mobile experiences with user-centric design principles, ensuring a seamless journey from wireframes to the final polished interface.',
    icon: <Smartphone size={28} strokeWidth={1.5} />
  },
  {
    id: 2,
    title: 'Web Development',
    description: 'Building responsive, scalable, and lightning-fast web applications using modern frameworks like React and custom backend integrations.',
    icon: <MonitorSmartphone size={28} strokeWidth={1.5} />
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description: 'Designing pixel-perfect, aesthetically premium interfaces that not only look stunning but drive conversions and elevate your brand identity.',
    icon: <LayoutTemplate size={28} strokeWidth={1.5} />
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-[5vw] bg-[var(--bg-secondary)] relative">
      <div className="max-w-6xl mx-auto">
        
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl text-[var(--text-primary)] tracking-wide mb-4"
          >
            Services
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[var(--text-muted)] text-sm md:text-base max-w-2xl"
          >
            Elevating digital experiences through robust engineering, pixel-perfect design, and scalable architectures tailored for your specific needs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-[var(--bg-primary)] border border-[var(--border)] rounded-2xl p-8 hover:border-accent transition-all duration-500 overflow-hidden shadow-sm hover:shadow-[0_10px_40px_-10px_rgba(200,241,53,0.15)] flex flex-col items-center text-center h-full"
            >
              {/* Subtle gradient flash on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col items-center flex-1">
                <div className="mb-6 w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-black transition-all duration-500 ease-out">
                  {service.icon}
                </div>
                
                <h3 className="font-display text-xl text-[var(--text-primary)] tracking-wider mb-4 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-[var(--text-secondary)] text-[13px] md:text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
