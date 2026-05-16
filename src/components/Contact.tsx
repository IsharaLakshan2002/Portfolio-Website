import { motion } from 'motion/react';
import { Mail, Phone, MapPin, GraduationCap, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-[5vw] bg-[var(--bg-primary)]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="font-mono text-xs tracking-[0.3em] text-accent uppercase mb-3">LET'S TALK</div>
          <h2 className="font-display text-5xl md:text-6xl text-[var(--text-primary)] tracking-tight">GET IN TOUCH</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.4fr] gap-16">
          <div className="flex flex-col gap-10">
            {[
              { icon: <Mail />, label: 'EMAIL', value: 'ishara.mail.ediriweera@gmail.com' },
              { icon: <Phone />, label: 'PHONE', value: '+94 76 090 8497' },
              { icon: <MapPin />, label: 'LOCATION', value: 'Boralesgamuwa, Sri Lanka' },
              { icon: <GraduationCap />, label: 'EDUCATION', value: 'HND Software Engineering, NIBM' },
            ].map((item, idx) => (
              <motion.div 
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-5"
              >
                <div className="w-12 h-12 shrink-0 rounded-xl bg-accent/10 border border-accent/20 grid place-items-center text-accent">
                  {item.icon}
                </div>
                <div>
                  <div className="font-mono text-[10px] text-[var(--text-muted)] tracking-widest mb-1.5">{item.label}</div>
                  <div className="text-[var(--text-primary)] text-sm md:text-base">{item.value}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.form 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-mono text-xs text-[var(--text-secondary)]">NAME</label>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="bg-[var(--bg-card)] border border-[var(--border)] p-3 px-4 rounded-xl text-sm focus:outline-none focus:border-accent transition-all text-[var(--text-primary)]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-xs text-[var(--text-secondary)]">EMAIL</label>
                <input 
                  type="email" 
                  placeholder="your@email.com" 
                  className="bg-[var(--bg-card)] border border-[var(--border)] p-3 px-4 rounded-xl text-sm focus:outline-none focus:border-accent transition-all text-[var(--text-primary)]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-mono text-xs text-[var(--text-secondary)]">PHONE</label>
                <input 
                  type="tel" 
                  placeholder="+94 ..." 
                  className="bg-[var(--bg-card)] border border-[var(--border)] p-3 px-4 rounded-xl text-sm focus:outline-none focus:border-accent transition-all text-[var(--text-primary)]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-xs text-[var(--text-secondary)]">SERVICE</label>
                <select className="bg-[var(--bg-card)] border border-[var(--border)] p-3 px-4 rounded-xl text-sm focus:outline-none focus:border-accent transition-all text-[var(--text-primary)] appearance-none">
                  <option>Web Development</option>
                  <option>Android App</option>
                  <option>Full Stack Project</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-mono text-xs text-[var(--text-secondary)]">MESSAGE</label>
              <textarea 
                rows={5} 
                placeholder="Tell me about your project..." 
                className="bg-[var(--bg-card)] border border-[var(--border)] p-3 px-4 rounded-xl text-sm focus:outline-none focus:border-accent transition-all text-[var(--text-primary)] resize-none"
              />
            </div>

            <button className="bg-accent hover:bg-accent-hover text-black font-bold py-4 px-10 rounded-xl self-end flex items-center gap-2 group transition-all hover:-translate-y-1 shadow-lg shadow-accent/20">
              SEND MESSAGE
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
