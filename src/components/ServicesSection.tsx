import { motion } from "framer-motion";
import { Smartphone, Server, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Building beautiful, performant cross-platform mobile applications.",
    points: [
      "Cross-platform apps using Flutter",
      "Clean architecture & scalable state management",
      "Modern UI/UX implementation",
    ],
    gradient: "from-primary to-secondary",
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Designing robust backend systems and APIs for scalable applications.",
    points: [
      "Backend APIs using Spring Boot",
      "Database integration & design",
      "REST API development",
    ],
    gradient: "from-secondary to-accent",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-28 relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute inset-0 bg-muted/30" />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[120px]"
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
          What I Offer
        </span>
        <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4">
          My <span className="gradient-text">Services</span>
        </h2>
        <div className="w-16 h-1 rounded-full gradient-bg mx-auto mt-4" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -5 }}
            className="glass-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all group relative overflow-hidden"
          >
            {/* Background glow */}
            <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${s.gradient} opacity-[0.06] group-hover:opacity-[0.12] transition-opacity blur-3xl`} />

            <div className="relative z-10">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.gradient} flex items-center justify-center text-primary-foreground mb-6 shadow-lg`}
              >
                <s.icon size={26} />
              </motion.div>
              <h3 className="font-display text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground mb-5">{s.description}</p>
              <ul className="space-y-3">
                {s.points.map((p) => (
                  <li key={p} className="text-muted-foreground text-sm flex items-center gap-3">
                    <ArrowRight size={12} className="text-primary shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
