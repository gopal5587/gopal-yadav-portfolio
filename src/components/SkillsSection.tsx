import { motion } from "framer-motion";

const categories = [
  {
    title: "Languages",
    skills: ["Java", "C++", "Python", "Dart"],
    color: "bg-primary/15 text-primary",
  },
  {
    title: "Frameworks",
    skills: ["Flutter", "Spring Boot", "Firebase", "Next.js", "FastAPI"],
    color: "bg-secondary/15 text-secondary",
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Docker", "FAISS"],
    color: "bg-accent/15 text-accent-foreground",
  },
  {
    title: "Core",
    skills: ["Data Structures", "Backend Dev", "Mobile Architecture", "BLoC State Mgmt"],
    color: "bg-primary/15 text-primary",
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 bg-muted/30">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-4xl font-bold mb-4">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Technologies and tools I work with to build modern applications.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1"
          >
            <h3 className="font-mono text-sm font-semibold text-primary mb-4 uppercase tracking-wider">
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((s) => (
                <span
                  key={s}
                  className={`font-mono text-xs px-3 py-1.5 rounded-full ${cat.color} font-medium`}
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
