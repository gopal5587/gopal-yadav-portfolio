import { motion } from "framer-motion";
import { Lightbulb, Smartphone, Database } from "lucide-react";

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
          <span className="font-semibold text-foreground">Hi I'm Gopal Yadav</span>{" "}
          a passionate and motivated Computer Science student with a keen interest in software development and
          technology innovation. Currently pursuing my Bachelor's degree in Computer Science at IIIT Sonepat, Haryana. I have been immersing
          myself in various programming languages like Java, Dart, and C++. My coursework has provided me with a strong foundation in
          algorithms, data structures, and object-oriented design, and I'm eager to apply these skills to real-world challenges.
        </p>
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
