import { motion } from "framer-motion";
import { Lightbulb, Smartphone, Database, Code2 } from "lucide-react";

const specialties = [
  { icon: Code2, label: "Web design", color: "hsl(var(--primary))" },
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
