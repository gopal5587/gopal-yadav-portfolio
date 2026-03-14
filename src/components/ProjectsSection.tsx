import { motion } from "framer-motion";
import { Github, ExternalLink, Sparkles, MessageSquare, UtensilsCrossed, Brain } from "lucide-react";

const projects = [
  {
    title: "Flutter Chat App",
    icon: MessageSquare,
    description:
      "A real-time messaging application built using Flutter and Firebase with scalable mobile architecture.",
    features: ["Real-time messaging", "Firebase backend integration", "Scalable architecture"],
    tech: ["Flutter", "Firebase"],
    github: "https://github.com/gopal5587",
    gradient: "from-primary to-secondary",
  },
  {
    title: "MedGen.ai",
    icon: Brain,
    description:
      "An AI-powered medical knowledge system using retrieval-augmented generation for diagnosis assistance.",
    features: [
      "RAG architecture with FAISS",
      "Multi-factor confidence scoring",
      "Severity classification",
      "Traceable diagnosis",
    ],
    tech: ["Next.js", "FastAPI", "FAISS", "Flutter"],
    github: "https://github.com/gopal5587",
    gradient: "from-secondary to-accent",
  },
  {
    title: "Mini Zomato App",
    icon: UtensilsCrossed,
    description:
      "A full food delivery ecosystem with triple-app architecture supporting multiple user roles.",
    features: [
      "Triple-app architecture",
      "Clean architecture + BLoC",
      "Mock-first development",
      "Cart & order management",
      "Delivery tracking",
    ],
    tech: ["Flutter", "BLoC"],
    github: "https://github.com/gopal5587",
    gradient: "from-accent to-primary",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-28 relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none">
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.05, 0.12, 0.05] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[150px]"
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
          My Work
        </span>
        <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4">
          Recent <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Real-world applications showcasing mobile and backend expertise.
        </p>
        <div className="w-16 h-1 rounded-full gradient-bg mx-auto mt-4" />
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -8 }}
            className="glass-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all group relative"
          >
            {/* Top gradient bar */}
            <div className={`h-1.5 bg-gradient-to-r ${p.gradient}`} />

            {/* Icon header */}
            <div className="p-7 pb-0">
              <div className="flex items-start justify-between mb-4">
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.gradient} flex items-center justify-center text-primary-foreground shadow-lg`}
                >
                  <p.icon size={22} />
                </motion.div>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl glass-card text-muted-foreground hover:text-primary transition-colors hover:scale-110"
                >
                  <Github size={18} />
                </a>
              </div>

              <h3 className="font-display text-xl font-bold mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {p.description}
              </p>
            </div>

            {/* Features */}
            <div className="px-7 pb-4">
              <ul className="space-y-2 mb-5">
                {p.features.slice(0, 4).map((f) => (
                  <li
                    key={f}
                    className="text-xs text-muted-foreground flex items-center gap-2.5"
                  >
                    <Sparkles size={10} className="text-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech tags */}
            <div className="px-7 pb-7">
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11px] px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Hover glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity rounded-2xl pointer-events-none`} />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
