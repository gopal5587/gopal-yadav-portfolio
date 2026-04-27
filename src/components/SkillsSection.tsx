import { motion } from "framer-motion";

const columns = [
  {
    title: "Languages",
    skills: [{ name: "Java" }, { name: "Dart" }, { name: "C++" }, { name: "Python" }],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "Flutter" },
      { name: "Firebase" },
      { name: "Spring Boot" },
      { name: "Next.js" },
      { name: "FastAPI" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git / GitHub", note: "CI/CD Pipelines" },
      { name: "Docker" },
      { name: "MySQL" },
      { name: "AWS" },
      { name: "Figma" },
    ],
  },
  {
    title: "Core",
    skills: [
      { name: "Data Structures" },
      { name: "DBMS" },
      { name: "Operating System" },
      { name: "Computer Network" },
      { name: "Mobile Architecture" },
      { name: "Oops" },
    ],
  },
];

const SkillsSection = () => (
  <section
    id="skills"
    className="py-28 relative bg-background"
    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
  >
    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <span
          className="block mb-6"
          style={{
            fontFamily: "'Space Mono', monospace",
            color: "#9A9A9A",
            fontSize: "11px",
            letterSpacing: "0.22em",
          }}
        >
          // skills
        </span>
        <h2
          className="font-bold uppercase leading-[0.95] tracking-tight"
          style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}
        >
          <span style={{ color: "#0A0A0A" }} className="block">
            TECHNICAL
          </span>
          <span style={{ color: "#9A9A9A" }} className="block">
            TOOLKIT
          </span>
        </h2>
      </motion.div>

      <div className="w-full h-px" style={{ backgroundColor: "#E5E5E5" }} />

      <div className="grid grid-cols-1 md:grid-cols-4">
        {columns.map((col, i) => (
          <motion.div
            key={col.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="md:border-r last:md:border-r-0 border-b md:border-b-0"
            style={{ padding: "1.8rem", borderColor: "#E5E5E5" }}
          >
            <h3
              className="uppercase pb-3 mb-4 border-b"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "10px",
                letterSpacing: "0.2em",
                color: "#0A0A0A",
                borderColor: "#E5E5E5",
              }}
            >
              {col.title}
            </h3>
            <ul>
              {col.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="group flex flex-col py-2"
                  style={{ borderBottom: "0.5px solid rgba(229,229,229,0.8)" }}
                >
                  <div
                    className="flex items-baseline gap-2"
                    style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.83rem" }}
                  >
                    <span style={{ color: "#0A0A0A" }}>—</span>
                    <span
                      className="transition-colors duration-300 group-hover:text-black"
                      style={{ color: "#1A1A1A" }}
                    >
                      {skill.name}
                    </span>
                  </div>
                  {skill.note && (
                    <span
                      className="mt-1 ml-5"
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: "0.7rem",
                        color: "#6B6B6B",
                      }}
                    >
                      {skill.note}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
