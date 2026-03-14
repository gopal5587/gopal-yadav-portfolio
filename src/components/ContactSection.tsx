import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:5587gopalyadav@gmail.com?subject=Portfolio Contact from ${form.name}&body=${form.message}`;
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl font-bold mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Let's build something together. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              { icon: Mail, label: "5587gopalyadav@gmail.com", href: "mailto:5587gopalyadav@gmail.com" },
              { icon: Phone, label: "9455028137", href: "tel:9455028137" },
              { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/gopal-yadav-b93747332/" },
              { icon: Github, label: "GitHub", href: "https://github.com/gopal5587" },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 glass-card rounded-lg p-4 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-0.5"
              >
                <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center text-primary-foreground">
                  <Icon size={18} />
                </div>
                <span className="text-sm font-medium">{label}</span>
              </a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-xl p-8 shadow-card space-y-5"
          >
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
            />
            <button
              type="submit"
              className="w-full gradient-bg text-primary-foreground py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              Send Message <Send size={16} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
