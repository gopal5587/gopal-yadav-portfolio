import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Send } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const roles = ["Flutter Developer", "Backend Developer", "CSE Student"];

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
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-mono text-primary">Available for opportunities</span>
          </div>

          <h1 className="font-display text-5xl lg:text-7xl font-bold leading-tight mb-4">
            Hey, I'm{" "}
            <span className="gradient-text">Gopal Yadav</span>
          </h1>

          <div className="h-10 mb-6">
            <span className="font-mono text-xl text-primary">
              {text}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          <p className="text-muted-foreground max-w-lg mb-8 leading-relaxed">
            Third-year Computer Science student at IIIT Sonepat specializing in Flutter development
            and backend systems with Spring Boot. Passionate about building scalable applications
            and solving complex problems using data structures.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 gradient-bg text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              View Projects <ArrowDown size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-border bg-card px-6 py-3 rounded-lg font-medium hover:bg-muted transition-colors"
            >
              Contact Me <Send size={16} />
            </a>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-2 rounded-full gradient-accent-bg opacity-30 blur-xl animate-pulse-glow" />
            <img
              src={profileImg}
              alt="Gopal Yadav"
              className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-card shadow-card-hover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
