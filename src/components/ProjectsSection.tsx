import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Flutter Chat App",
    description:
      "A real-time messaging application built using Flutter and Firebase with scalable mobile architecture.",
    features: ["Real-time messaging", "Firebase backend integration", "Scalable architecture"],
    tech: ["Flutter", "Firebase"],
    github: "https://github.com/gopal5587",
  },
  {
    title: "MedGen.ai",
    description:
      "An AI-powered medical knowledge system using retrieval-augmented generation for diagnosis assistance.",
    features: [
      "RAG architecture with FAISS",
      "Multi-factor confidence scoring (0–100%)",
      "Severity classification",
      "Traceable diagnosis",
    ],
    tech: ["Next.js", "FastAPI", "FAISS", "Flutter (planned)"],
    github: "https://github.com/gopal5587",
  },
  {
    title: "Mini Zomato App",
    description:
      "A full food delivery ecosystem with triple-app architecture supporting Customers, Restaurant Owners, and Delivery Partners.",
    features: [
      "Triple-app architecture",
      "Clean architecture + BLoC",
      "Mock-first development",
      "Restaurant discovery & cart management",
      "Order dashboard & delivery tracking",
    ],
    tech: ["Flutter", "BLoC"],
    github: "https://github.com/gopal5587",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-4xl font-bold mb-4">
          Recent <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Real-world applications showcasing mobile and backend expertise.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="glass-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all hover:-translate-y-2 group"
          >
            {/* Gradient strip */}
            <div className="h-1.5 gradient-bg" />

            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={20} />
                </a>
              </div>

              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {p.description}
              </p>

              <ul className="space-y-1.5 mb-5">
                {p.features.slice(0, 3).map((f) => (
                  <li
                    key={f}
                    className="text-xs text-muted-foreground flex items-start gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
