import { motion } from "framer-motion";
import { Smartphone, Server } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Mobile App Development",
    points: [
      "Cross-platform apps using Flutter",
      "Clean architecture & scalable state management",
      "Modern UI/UX implementation",
    ],
  },
  {
    icon: Server,
    title: "Backend Development",
    points: [
      "Backend APIs using Spring Boot",
      "Database integration",
      "REST API development",
    ],
  },
];

const ServicesSection = () => (
  <section id="services" className="py-24 bg-muted/30">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-4xl font-bold mb-4">
          My <span className="gradient-text">Services</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="glass-card rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1"
          >
            <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center text-primary-foreground mb-6">
              <s.icon size={28} />
            </div>
            <h3 className="font-display text-xl font-semibold mb-4">{s.title}</h3>
            <ul className="space-y-2">
              {s.points.map((p) => (
                <li key={p} className="text-muted-foreground text-sm flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
