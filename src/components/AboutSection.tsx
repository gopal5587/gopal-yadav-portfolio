import { motion } from "framer-motion";
import { GraduationCap, Code, Smartphone, Server, Calendar, MapPin, BookOpen, Trophy } from "lucide-react";

const highlights = [
  { icon: Smartphone, label: "Mobile Dev", desc: "Flutter Expert" },
  { icon: Server, label: "Backend", desc: "Spring Boot" },
  { icon: Code, label: "DSA", desc: "Problem Solver" },
  { icon: GraduationCap, label: "CSE Student", desc: "IIIT Sonepat" },
];

const stats = [
  { value: "3+", label: "Projects Built" },
  { value: "5+", label: "Technologies" },
  { value: "2027", label: "Expected Grad" },
  { value: "3rd", label: "Year Student" },
];

const AboutSection = () => (
  <section id="about" className="py-28 relative overflow-hidden">
    {/* Background decoration */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px]"
      />
    </div>

    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-block font-mono text-xs text-primary uppercase tracking-[0.3em] mb-4"
        >
          Who I Am
        </motion.span>
        <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4">
          About <span className="gradient-text">Me</span>
        </h2>
        <div className="w-16 h-1 rounded-full gradient-bg mx-auto mt-4" />
      </motion.div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-3xl mx-auto"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center glass-card rounded-xl p-5 shadow-card"
          >
            <span className="font-display text-2xl font-bold gradient-text">{stat.value}</span>
            <p className="text-xs text-muted-foreground mt-1 font-mono">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass-card rounded-2xl p-8 shadow-card mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-8 rounded-full gradient-bg" />
              <h3 className="font-display text-xl font-semibold">My Journey</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-5">
              I'm a third-year Computer Science student at the Indian Institute of Information
              Technology, Sonepat, Haryana. I'm deeply interested in Software Development Engineer
              roles, with a strong focus on mobile app development and backend systems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently learning Spring Boot backend development, I combine my strong knowledge of
              data structures and algorithms with practical Flutter expertise to build production-ready
              applications.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, label, desc }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                whileHover={{ scale: 1.03, y: -2 }}
                className="glass-card rounded-xl p-5 shadow-card hover:shadow-card-hover transition-all group cursor-default"
              >
                <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center text-primary-foreground mb-3 group-hover:scale-110 transition-transform">
                  <Icon size={20} />
                </div>
                <span className="font-semibold text-sm block">{label}</span>
                <span className="text-xs text-muted-foreground">{desc}</span>
              </motion.div>
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
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-8 rounded-full gradient-accent-bg" />
            <h3 className="font-display text-2xl font-semibold">Education</h3>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/50 to-transparent" />

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-14"
              >
                {/* Timeline dot */}
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute left-3 top-2 w-4 h-4 rounded-full gradient-bg border-4 border-background shadow-lg"
                />
                <div className="glass-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar size={14} className="text-primary" />
                    <span className="font-mono text-xs text-primary font-medium">2023 – 2027 (Expected)</span>
                  </div>
                  <h4 className="font-display font-semibold text-lg mb-2">
                    B.Tech in Computer Science
                  </h4>
                  <div className="flex items-start gap-2 mb-3">
                    <MapPin size={14} className="text-muted-foreground mt-0.5 shrink-0" />
                    <p className="text-muted-foreground text-sm">
                      Indian Institute of Information Technology, Sonepat, Haryana
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {["Computer Science", "DSA", "Software Engineering"].map(tag => (
                      <span key={tag} className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Interests */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative pl-14"
              >
                <div className="absolute left-3 top-2 w-4 h-4 rounded-full bg-secondary/50 border-4 border-background" />
                <div className="glass-card rounded-xl p-6 shadow-card">
                  <div className="flex items-center gap-2 mb-3">
                    <Trophy size={14} className="text-secondary" />
                    <span className="font-mono text-xs text-secondary font-medium uppercase tracking-wider">Interests & Goals</span>
                  </div>
                  <ul className="space-y-2">
                    {[
                      "Software Development Engineer roles",
                      "Mobile App Development (Flutter)",
                      "Backend Systems (Spring Boot)",
                      "Data Structures & Algorithms",
                    ].map(item => (
                      <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full gradient-bg shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
