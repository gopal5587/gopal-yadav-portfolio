import { motion } from "framer-motion";
import { Lightbulb, Smartphone, Database, GraduationCap, Trophy, Github } from "lucide-react";

const FlutterLogo = ({ size = 32, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 256 317" className={className}>
    <defs>
      <linearGradient id="flutter-grad" x1="4.86%" x2="90.14%" y1="93.07%" y2="6.93%">
        <stop offset="0%" stopColor="#1A237E" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#1A237E" stopOpacity="0" />
      </linearGradient>
    </defs>
    <polygon fill="#47C5FB" points="157.665 0.001 0 157.666 48.8 206.466 255.265 0.001" />
    <polygon fill="#47C5FB" points="156.567 145.396 72.2 229.762 120.999 278.563 169.8 229.762 255.166 145.396" />
    <polygon fill="#00569E" points="120.999 278.563 169.8 229.762 255.166 316.129 206.366 316.129" />
    <polygon fill="url(#flutter-grad)" points="120.999 278.563 161.232 264.948 169.8 229.762" />
  </svg>
);

const specialties = [
  { icon: FlutterLogo, label: "Flutter", color: "hsl(var(--primary))" },
  { icon: Lightbulb, label: "Java", color: "hsl(0, 75%, 55%)" },
  { icon: Database, label: "AI/ML", color: "hsl(40, 90%, 55%)" },
  { icon: Smartphone, label: "Application", color: "hsl(var(--secondary))" },
];

const AboutSection = () => (
  <section id="about" className="py-28 relative">
    <div className="container mx-auto px-6 md:px-12 relative z-10">
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <p className="text-muted-foreground text-xs font-mono tracking-[0.35em] uppercase mb-3">
          About Us
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-wide uppercase text-foreground">
          Who Am I?
        </h2>
      </motion.div>

      {/* Bio paragraph */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="max-w-4xl mb-16"
      >
        <p className="text-muted-foreground leading-[1.9] text-base">
          <span className="font-semibold text-foreground">Hi, I'm Gopal Yadav,</span>{" "}
          a 3rd-year Computer Science student at IIIT Sonepat. I specialize in competitive problem-solving and
          building scalable, cross-platform applications. Leveraging a strong foundation in algorithms and full-stack
          development, I focus on turning complex technical challenges into high-quality, intuitive digital solutions
          that deliver real-world impact.
        </p>
      </motion.div>

      {/* Stats cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.225 }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6"
      >
        {[
          { icon: GraduationCap, value: "8.68", label: "GPA", color: "hsl(var(--primary))" },
          { icon: Trophy, value: "6+", label: "Hackathons", color: "hsl(40, 90%, 55%)" },
          { icon: Github, value: "8+", label: "GitHub Projects", color: "hsl(var(--secondary))" },
        ].map(({ icon: Icon, value, label, color }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.225 + i * 0.1 }}
            whileHover={{ y: -4 }}
            className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all relative overflow-hidden group"
          >
            <Icon size={28} style={{ color }} strokeWidth={1.5} className="mb-3" />
            <p className="font-display text-3xl font-bold text-foreground leading-none mb-1" style={{ color }}>
              {value}
            </p>
            <p className="text-muted-foreground text-xs font-mono tracking-[0.2em] uppercase">{label}</p>
            <div
              className="absolute bottom-0 left-0 right-0 h-1 transition-all group-hover:h-1.5"
              style={{ backgroundColor: color }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Specialty cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {specialties.map(({ icon: Icon, label, color }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.1 }}
            whileHover={{ y: -4 }}
            className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all relative overflow-hidden group"
          >
            {/* Icon */}
            <div className="mb-4">
              <Icon size={32} style={{ color }} strokeWidth={1.5} />
            </div>

            {/* Label */}
            <p className="font-display font-semibold text-foreground text-sm">{label}</p>

            {/* Bottom colored bar */}
            <div
              className="absolute bottom-0 left-0 right-0 h-1 transition-all group-hover:h-1.5"
              style={{ backgroundColor: color }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
