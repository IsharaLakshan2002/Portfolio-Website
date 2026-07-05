import { GraduationCap, Mail, MapPin, Phone, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const nextUrl = `${globalThis.location.origin}${globalThis.location.pathname}#contact`;

  const handleSubmit = () => {
    setStatus('sending');
  };

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
            action="https://formsubmit.co/sasudulpubg@gmail.com"
            method="POST"
            target="contact-submit-frame"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_subject" value="Portfolio inquiry" />
            <input type="hidden" name="_autoresponse" value="Thanks for reaching out. I will get back to you soon." />
            <input type="hidden" name="_next" value={nextUrl} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-name" className="font-mono text-xs text-[var(--text-secondary)]">NAME</label>
                <input 
                  id="contact-name"
                  name="name"
                  type="text" 
                  placeholder="Your Name" 
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
                <label htmlFor="contact-service" className="font-mono text-xs text-[var(--text-secondary)]">SERVICE</label>
                <select id="contact-service" name="service" className="bg-[var(--bg-card)] border border-[var(--border)] p-3 px-4 rounded-xl text-sm focus:outline-none focus:border-accent transition-all text-[var(--text-primary)] appearance-none">
                  <option>Web Development</option>
                  <option>Android App</option>
                  <option>Full Stack Project</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="contact-message" className="font-mono text-xs text-[var(--text-secondary)]">MESSAGE</label>
              <textarea 
                id="contact-message"
                name="message"
                rows={5} 
                placeholder="Tell me about your project..." 
                className="bg-[var(--bg-card)] border border-[var(--border)] p-3 px-4 rounded-xl text-sm focus:outline-none focus:border-accent transition-all text-[var(--text-primary)] resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="bg-accent hover:bg-accent-hover disabled:opacity-70 disabled:cursor-not-allowed text-black font-bold py-4 px-10 rounded-xl self-end flex items-center gap-2 group transition-all hover:-translate-y-1 shadow-lg shadow-accent/20"
            >
              {status === 'sending' ? 'SENDING...' : 'SEND MESSAGE'}
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>

            {status === 'success' && (
              <p className="text-sm text-green-400 text-right">Message sent successfully.</p>
            )}

            {status === 'error' && (
              <p className="text-sm text-red-400 text-right">Message could not be sent. Try again.</p>
            )}
          </motion.form>

          <iframe name="contact-submit-frame" title="contact-submit-frame" className="hidden" onLoad={() => {
            if (status === 'sending') {
              setStatus('success');
            }
          }} />
        </div>
      </div>
    </section>
  );
}
