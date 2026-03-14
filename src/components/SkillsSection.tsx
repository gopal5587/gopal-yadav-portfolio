import { motion } from "framer-motion";
import { Code2, Layers, Wrench, Brain } from "lucide-react";

const categories = [
  {
    title: "Languages",
    icon: Code2,
    skills: [
      { name: "Java", level: 90 },
      { name: "C++", level: 75 },
      { name: "Python", level: 70 },
      { name: "Dart", level: 85 },
    ],
  },
  {
    title: "Frameworks",
    icon: Layers,
    skills: [
      { name: "Flutter", level: 90 },
      { name: "Spring Boot", level: 65 },
      { name: "Firebase", level: 80 },
      { name: "Next.js", level: 60 },
      { name: "FastAPI", level: 55 },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 90 },
      { name: "Docker", level: 55 },
      { name: "FAISS", level: 50 },
    ],
  },
  {
    title: "Core",
    icon: Brain,
    skills: [
      { name: "Data Structures", level: 88 },
      { name: "Backend Dev", level: 70 },
      { name: "Mobile Arch", level: 85 },
      { name: "BLoC Pattern", level: 80 },
    ],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-28 relative overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute inset-0 bg-muted/30" />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-secondary/10 blur-[120px]"
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
          What I Know
        </span>
        <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Technologies and tools I work with to build modern applications.
        </p>
        <div className="w-16 h-1 rounded-full gradient-bg mx-auto mt-4" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-all group"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform">
                <cat.icon size={20} />
              </div>
              <h3 className="font-display text-lg font-semibold">{cat.title}</h3>
            </div>

            <div className="space-y-4">
              {cat.skills.map((skill, j) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="font-mono text-sm text-foreground">{skill.name}</span>
                    <span className="font-mono text-xs text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1 + j * 0.05, ease: "easeOut" }}
                      className="h-full rounded-full gradient-bg"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
