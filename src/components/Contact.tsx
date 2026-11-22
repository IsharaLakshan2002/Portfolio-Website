import { useEffect, useRef, useState, type FormEvent } from 'react';
import { Check, ChevronDown, GraduationCap, Mail, MapPin, Phone, Send } from 'lucide-react';
import { motion } from 'motion/react';

const serviceOptions = ['UI/UX Design', 'App Design', 'Web Development', 'Android App Development', 'Database & Backend', 'IoT & Embedded Systems', 'Other'];

export default function Contact() {
  const [service, setService] = useState(serviceOptions[0]);
  const [serviceOpen, setServiceOpen] = useState(false);
  const serviceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!serviceOpen) return;
    const onDown = (e: MouseEvent) => {
      if (!serviceRef.current?.contains(e.target as Node)) setServiceOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setServiceOpen(false);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [serviceOpen]);

  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('sending');
    try {
      const res = await fetch('https://formsubmit.co/ajax/ishara.mail.ediriweera@gmail.com', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error('Request failed');
      form.reset();
      setService(serviceOptions[0]);
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="py-24 px-[5vw] bg-[var(--bg-primary)]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="font-mono text-xs tracking-[0.3em] text-accent uppercase mb-3">LET'S TALK</div>
          <h2 className="font-display text-5xl md:text-6xl text-[var(--text-primary)] tracking-tight">GET IN TOUCH</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16">
          <div className="flex flex-col gap-10">
            {[
              { icon: <Mail />, label: 'EMAIL', value: 'ishara.mail.ediriweera@gmail.com' },
              { icon: <Phone />, label: 'PHONE', value: '+94 76 090 8497' },
              { icon: <MapPin />, label: 'LOCATION', value: 'Colombo, Sri Lanka' },
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
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_subject" value="Portfolio inquiry" />
            <input type="hidden" name="_autoresponse" value="Thanks for reaching out. I will get back to you soon." />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-name" className="font-mono text-xs text-[var(--text-secondary)]">NAME</label>
                <input 
                  id="contact-name"
                  name="name"
                  type="text" 
                  placeholder="Your Name"
                  required
                  className="bg-[var(--bg-card)] border border-[var(--border)] p-3 px-4 rounded-xl text-sm focus:outline-none focus:border-accent transition-all text-[var(--text-primary)]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-email" className="font-mono text-xs text-[var(--text-secondary)]">EMAIL</label>
                <input 
                  id="contact-email"
                  name="email"
                  type="email" 
                  placeholder="your@email.com"
                  required
                  className="bg-[var(--bg-card)] border border-[var(--border)] p-3 px-4 rounded-xl text-sm focus:outline-none focus:border-accent transition-all text-[var(--text-primary)]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-phone" className="font-mono text-xs text-[var(--text-secondary)]">PHONE</label>
                <input 
                  id="contact-phone"
                  name="phone"
                  type="tel" 
                  placeholder="+94 ..." 
                  className="bg-[var(--bg-card)] border border-[var(--border)] p-3 px-4 rounded-xl text-sm focus:outline-none focus:border-accent transition-all text-[var(--text-primary)]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <span id="service-label" className="font-mono text-xs text-[var(--text-secondary)]">SERVICE</span>
                <div ref={serviceRef} className="relative">
                  <input type="hidden" name="service" value={service} />
                  <button
                    type="button"
                    aria-haspopup="listbox"
                    aria-expanded={serviceOpen}
                    aria-labelledby="service-label"
                    onClick={() => setServiceOpen((open) => !open)}
                    className={`flex w-full items-center justify-between rounded-xl border bg-[var(--bg-card)] p-3 px-4 text-left text-sm text-[var(--text-primary)] transition-all focus:outline-none ${serviceOpen ? 'border-accent' : 'border-[var(--border)] hover:border-white/20'}`}
                  >
                    <span>{service}</span>
                    <ChevronDown size={16} className={`text-[var(--text-secondary)] transition-transform duration-200 ${serviceOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {serviceOpen && (
                    <motion.ul
                      role="listbox"
                      aria-labelledby="service-label"
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 right-0 top-[calc(100%+8px)] z-30 m-0 list-none rounded-xl border border-[var(--border)] bg-[#161616] p-1.5 shadow-2xl"
                    >
                      {serviceOptions.map((option) => (
                        <li key={option} role="option" aria-selected={option === service}>
                          <button
                            type="button"
                            onClick={() => { setService(option); setServiceOpen(false); }}
                            className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition-colors hover:bg-white/5 ${option === service ? 'text-accent' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
                          >
                            {option}
                            {option === service && <Check size={15} />}
                          </button>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="contact-message" className="font-mono text-xs text-[var(--text-secondary)]">MESSAGE</label>
              <textarea 
                id="contact-message"
                name="message"
                rows={5} 
                placeholder="Tell me about your project..."
                required
                className="bg-[var(--bg-card)] border border-[var(--border)] p-3 px-4 rounded-xl text-sm focus:outline-none focus:border-accent transition-all text-[var(--text-primary)] resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="bg-accent hover:bg-accent-hover disabled:opacity-70 disabled:cursor-not-allowed text-black font-bold py-4 px-10 rounded-xl self-end flex items-center gap-2 group transition-all hover:-translate-y-1 shadow-lg shadow-accent/20"
            >
              {status === 'sending' ? 'SENDING…' : 'SEND MESSAGE'}
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>

            <p role="status" className={`text-sm ${status === 'error' ? 'text-red-400' : 'text-[var(--text-secondary)]'}`}>
              {status === 'sent' && 'Message sent. I will reply as soon as I can.'}
              {status === 'error' && 'Could not send. Please email me directly at ishara.mail.ediriweera@gmail.com.'}
            </p>
          </motion.form>

        </div>
      </div>
    </section>
  );
}
