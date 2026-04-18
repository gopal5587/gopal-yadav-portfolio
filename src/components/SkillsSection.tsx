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
      { name: "Backend Dev" },
    ],
  },
];

const SkillsSection = () => (
  <section
    id="skills"
    className="py-28 relative"
    style={{ backgroundColor: "#0d1b2a", fontFamily: "'Space Grotesk', sans-serif" }}
  >
    <div className="container mx-auto px-6 relative z-10">
      {/* Heading */}
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
            color: "#64ffda",
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
          <span style={{ color: "#e6f1ff" }} className="block">
            TECHNICAL
          </span>
          <span style={{ color: "#1d3461" }} className="block">
            TOOLKIT
          </span>
        </h2>
      </motion.div>

      {/* Divider */}
      <div className="w-full h-px" style={{ backgroundColor: "#1d3461" }} />

      {/* Columns */}
      <div className="grid grid-cols-1 md:grid-cols-4">
        {columns.map((col, i) => (
          <motion.div
            key={col.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="md:border-r last:md:border-r-0 border-b md:border-b-0"
            style={{
              padding: "1.8rem",
              borderColor: "#1d3461",
            }}
          >
            <h3
              className="uppercase pb-3 mb-4 border-b"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "10px",
                letterSpacing: "0.2em",
                color: "#64ffda",
                borderColor: "#1d3461",
              }}
            >
              {col.title}
            </h3>
            <ul>
              {col.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="group flex flex-col py-2"
                  style={{ borderBottom: "0.5px solid rgba(29,52,97,0.5)" }}
                >
                  <div
                    className="flex items-baseline gap-2"
                    style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.83rem" }}
                  >
                    <span style={{ color: "#64ffda" }}>—</span>
                    <span
                      className="transition-colors duration-300 group-hover:text-[#64ffda]"
                      style={{ color: "#a8b2d8" }}
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
                        color: "#4a5568",
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
