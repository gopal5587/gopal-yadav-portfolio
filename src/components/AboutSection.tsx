import { motion } from "framer-motion";
import { GraduationCap, Code, Smartphone, Server } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="py-24">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-4xl font-bold mb-4">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A passionate developer dedicated to crafting impactful software solutions.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-muted-foreground leading-relaxed mb-6">
            I'm a third-year Computer Science student at the Indian Institute of Information
            Technology, Sonepat, Haryana. I'm deeply interested in Software Development Engineer
            roles, with a strong focus on mobile app development and backend systems.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Currently learning Spring Boot backend development, I combine my strong knowledge of
            data structures and algorithms with practical Flutter expertise to build production-ready
            applications.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Smartphone, label: "Mobile Dev" },
              { icon: Server, label: "Backend" },
              { icon: Code, label: "DSA" },
              { icon: GraduationCap, label: "CSE Student" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="glass-card rounded-lg p-4 flex items-center gap-3 shadow-card hover:shadow-card-hover transition-shadow"
              >
                <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center text-primary-foreground">
                  <Icon size={20} />
                </div>
                <span className="font-medium text-sm">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Education timeline */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-display text-2xl font-semibold mb-8">Education</h3>
          <div className="relative border-l-2 border-primary/30 pl-8 space-y-8">
            <div>
              <div className="absolute -left-[9px] w-4 h-4 rounded-full gradient-bg" />
              <span className="font-mono text-xs text-primary">2023 – 2027 (Expected)</span>
              <h4 className="font-display font-semibold text-lg mt-1">
                B.Tech in Computer Science
              </h4>
              <p className="text-muted-foreground text-sm mt-1">
                Indian Institute of Information Technology, Sonepat, Haryana
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
