import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FileText, ChevronDown } from "lucide-react";

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
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 50% 60%, #F5E2A0 0%, #F9EFC0 25%, #FDF6E3 55%, #FFFFFF 80%)",
      }}
    >
      {/* Content */}
      <div className="relative z-10 px-8 md:px-16 lg:px-20 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-foreground/60 text-lg md:text-xl font-light mb-4"
          >
            Hi!
          </motion.p>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[1.05] mb-6">
            I'm <span className="text-foreground">Gopal</span>
          </h1>

          <div className="h-10 mb-8 flex items-center">
            <span className="text-foreground/70 text-lg md:text-xl font-light">
              {text}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                className="inline-block w-0.5 h-5 bg-foreground ml-1 align-middle"
              />
            </span>
          </div>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-sm font-medium tracking-wider uppercase hover:bg-black/85 transition-colors"
          >
            View Resume
            <FileText size={16} />
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-foreground/40"
      >
        <div className="w-2 h-2 rounded-full border border-foreground bg-foreground/40" />
        <ChevronDown size={16} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
