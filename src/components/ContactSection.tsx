import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send, MapPin, Sparkles } from "lucide-react";

const contactLinks = [
  { icon: Mail, label: "5587gopalyadav@gmail.com", href: "mailto:5587gopalyadav@gmail.com", color: "from-primary to-secondary" },
  { icon: Phone, label: "9455028137", href: "tel:9455028137", color: "from-secondary to-accent" },
  { icon: Linkedin, label: "LinkedIn Profile", href: "https://www.linkedin.com/in/gopal-yadav-b93747332/", color: "from-primary to-accent" },
  { icon: Github, label: "GitHub Profile", href: "https://github.com/gopal5587", color: "from-accent to-primary" },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:5587gopalyadav@gmail.com?subject=Portfolio Contact from ${form.name}&body=${form.message}`;
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -bottom-40 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[150px]"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block font-mono text-xs text-primary uppercase tracking-[0.3em] mb-4">
            Let's Connect
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Let's build something amazing together. Feel free to reach out!
          </p>
          <div className="w-16 h-1 rounded-full gradient-bg mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="glass-card rounded-2xl p-6 shadow-card mb-6">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles size={18} className="text-primary" />
                <h3 className="font-display font-semibold">Let's work together</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I'm open to freelance opportunities, internships, and collaborative projects. 
                Drop me a message and I'll get back to you as soon as possible!
              </p>
            </div>

            {contactLinks.map(({ icon: Icon, label, href, color }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 glass-card rounded-xl p-4 shadow-card hover:shadow-card-hover transition-all group"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform`}>
                  <Icon size={18} />
                </div>
                <span className="text-sm font-medium truncate">{label}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass-card rounded-2xl p-8 shadow-card space-y-5"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-8 rounded-full gradient-bg" />
              <h3 className="font-display text-lg font-semibold">Send a Message</h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-mono text-muted-foreground mb-1.5 block">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
              <div>
                <label className="text-xs font-mono text-muted-foreground mb-1.5 block">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-mono text-muted-foreground mb-1.5 block">Message</label>
              <textarea
                placeholder="Tell me about your project..."
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none transition-all"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full gradient-bg text-primary-foreground py-3.5 rounded-xl font-medium flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
            >
              Send Message <Send size={16} />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
