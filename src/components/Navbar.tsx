import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpg";

const navLinks = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "PROJECTS", href: "#projects" },
  
  { label: "CONTACT", href: "#contact" },
];

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("#home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.3 }
    );

    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Mobile top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 md:hidden glass-card shadow-card px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-display text-lg font-bold gradient-text">
          Gopal.
        </a>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full bg-muted"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-lg bg-muted text-sm font-medium"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-14 left-0 right-0 z-40 md:hidden glass-card shadow-card border-t border-border p-4 flex flex-col gap-3"
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className={`text-sm font-medium tracking-wider transition-colors ${
                activeSection === l.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </a>
          ))}
        </motion.div>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden md:flex fixed left-0 top-0 bottom-0 w-[280px] z-50 flex-col items-center bg-card border-r border-border overflow-y-auto">
        {/* Profile section */}
        <div className="flex flex-col items-center pt-10 pb-6 px-6 w-full">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative mb-5"
          >
            <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-primary/30 shadow-card-hover">
              <img
                src={profileImg}
                alt="Gopal Yadav"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-accent border-4 border-card"
            />
          </motion.div>

          <h2 className="font-display text-xl font-bold text-foreground">
            Gopal Yadav
          </h2>
          <p className="text-sm font-medium text-primary mt-1 tracking-wider uppercase">
            Flutter Developer
          </p>
        </div>

        {/* Divider */}
        <div className="w-3/4 h-px bg-border" />

        {/* Nav links */}
        <nav className="flex flex-col items-center gap-1 py-6 w-full px-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`w-full text-center py-2.5 text-sm font-medium tracking-[0.15em] transition-all rounded-lg ${
                activeSection === l.href
                  ? "text-primary bg-primary/10 border-l-2 border-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Divider */}
        <div className="w-3/4 h-px bg-border" />

        {/* Theme toggle */}
        <div className="py-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2.5 rounded-full bg-muted hover:bg-primary/10 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Social links at bottom */}
        <div className="mt-auto pb-8 flex items-center gap-3">
          {[
            { icon: Github, href: "https://github.com/gopal5587", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/gopal-yadav-b93747332/", label: "LinkedIn" },
            { icon: Mail, href: "mailto:5587gopalyadav@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </aside>
    </>
  );
};

export default Navbar;
