import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Send, Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const roles = ["Flutter Developer", "Backend Developer", "CSE Student"];

const floatingIcons = [
  { icon: "⚡", x: "10%", y: "20%", delay: 0, size: "text-2xl" },
  { icon: "🚀", x: "85%", y: "15%", delay: 0.5, size: "text-3xl" },
  { icon: "</>", x: "75%", y: "75%", delay: 1, size: "text-xl font-mono text-primary/40" },
  { icon: "{ }", x: "15%", y: "70%", delay: 1.5, size: "text-lg font-mono text-secondary/40" },
  { icon: "📱", x: "90%", y: "50%", delay: 0.8, size: "text-2xl" },
];

const HeroSection = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 80);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(text.slice(0, -1)), 40);
    } else {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIdx]);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-secondary/20 blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent/15 blur-[120px]"
        />
      </div>

      {/* Floating icons */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          className={`absolute pointer-events-none select-none ${item.size} opacity-60`}
          style={{ left: item.x, top: item.y }}
          animate={{ y: [-10, 10, -10], rotate: [-5, 5, -5] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: item.delay }}
        >
          {item.icon}
        </motion.div>
      ))}

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full glass-card px-4 py-1.5 mb-6"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
            </span>
            <span className="text-sm font-mono text-primary">Available for opportunities</span>
          </motion.div>

          <h1 className="font-display text-5xl lg:text-7xl font-bold leading-[1.1] mb-4 tracking-tight">
            Hey, I'm{" "}
            <span className="gradient-text relative">
              Gopal Yadav
              <motion.span
                className="absolute -bottom-2 left-0 h-1 rounded-full gradient-bg"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
              />
            </span>
          </h1>

          <div className="h-10 mb-6 flex items-center">
            <span className="inline-block w-3 h-3 rounded-sm gradient-bg mr-3" />
            <span className="font-mono text-xl text-primary">
              {text}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                className="inline-block w-0.5 h-5 bg-primary ml-0.5 align-middle"
              />
            </span>
          </div>

          <p className="text-muted-foreground max-w-lg mb-8 leading-relaxed text-base">
            Third-year Computer Science student at IIIT Sonepat specializing in Flutter development
            and backend systems with Spring Boot. Passionate about building scalable applications
            and solving complex problems using data structures.
          </p>

          <div className="flex gap-4 flex-wrap mb-8">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#projects"
              className="group inline-flex items-center gap-2 gradient-bg text-primary-foreground px-7 py-3.5 rounded-xl font-medium shadow-lg hover:shadow-xl transition-shadow"
            >
              View Projects
              <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              className="group inline-flex items-center gap-2 glass-card px-7 py-3.5 rounded-xl font-medium hover:bg-muted/80 transition-colors"
            >
              Contact Me
              <Send size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </motion.a>
          </div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-3"
          >
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Find me</span>
            <span className="w-8 h-px bg-border" />
            {[
              { icon: Github, href: "https://github.com/gopal5587", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/gopal-yadav-b93747332/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:5587gopalyadav@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                whileHover={{ scale: 1.15, y: -2 }}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2.5 rounded-xl glass-card text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Decorative ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 rounded-full"
              style={{
                border: "2px dashed hsl(var(--primary) / 0.2)",
              }}
            />
            {/* Glowing backdrop */}
            <div className="absolute -inset-6 rounded-full gradient-accent-bg opacity-20 blur-2xl animate-pulse-glow" />
            {/* Status dots */}
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-2 -right-2 z-20 w-5 h-5 rounded-full bg-accent border-4 border-background"
            />
            {/* Image */}
            <div className="relative w-72 h-72 lg:w-[22rem] lg:h-[22rem] rounded-full overflow-hidden border-2 border-border/50 shadow-card-hover">
              <img
                src={profileImg}
                alt="Gopal Yadav"
                className="w-full h-full object-cover"
              />
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-background/20 to-transparent" />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="absolute -right-4 bottom-12 glass-card rounded-xl px-4 py-2.5 shadow-card z-10"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">🎯</span>
                <div>
                  <p className="text-xs font-medium text-foreground">3+ Projects</p>
                  <p className="text-[10px] text-muted-foreground">Built & Shipped</p>
                </div>
              </div>
            </motion.div>
            {/* Tech stack badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute -left-4 top-12 glass-card rounded-xl px-4 py-2.5 shadow-card z-10"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">💻</span>
                <div>
                  <p className="text-xs font-medium text-foreground">Flutter & Spring</p>
                  <p className="text-[10px] text-muted-foreground">Full Stack Dev</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground"
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <ChevronDown size={16} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
