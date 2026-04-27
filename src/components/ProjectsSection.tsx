import { Github, ExternalLink, Brain, Wallet, UtensilsCrossed, MessageSquare, X, LucideIcon } from "lucide-react";

type Project = {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  github: string;
  icon: LucideIcon;
  accent: string; // tailwind bg class for mockup hero
  shape1: string;
  shape2: string;
  shape3: string;
  customMockup?: "pocketpal";
};

const projects: Project[] = [
  {
    title: "MedGen.AI",
    subtitle: "AI Medical Platform",
    description:
      "AI-powered medical knowledge system using RAG for traceable, confidence-scored diagnosis assistance.",
    tags: ["Next.js", "FastAPI", "FAISS", "Flutter"],
    github: "https://github.com/NitishChoubey/MedGen.AI",
    icon: Brain,
    accent: "bg-blue-500",
    shape1: "bg-blue-300",
    shape2: "bg-blue-200",
    shape3: "bg-white/40",
  },
  {
    title: "PocketPal",
    subtitle: "Personal Finance App",
    description:
      "Flutter finance tracker with smart budgeting, expense categorization, and visual spending insights.",
    tags: ["Flutter", "BLoC", "Firebase"],
    github: "https://github.com/gopal5587/POCKETPAL",
    icon: Wallet,
    accent: "bg-emerald-500",
    shape1: "bg-emerald-300",
    shape2: "bg-emerald-200",
    shape3: "bg-white/40",
  },
  {
    title: "Mini Zomato",
    subtitle: "Food Delivery Platform",
    description:
      "Triple-app food delivery ecosystem supporting customer, restaurant, and delivery agent roles.",
    tags: ["Flutter", "BLoC", "Clean Architecture"],
    github: "https://github.com/gopal5587/Mini-Zomato-platform",
    icon: UtensilsCrossed,
    accent: "bg-orange-500",
    shape1: "bg-orange-300",
    shape2: "bg-orange-200",
    shape3: "bg-white/40",
  },
  {
    title: "Flutter Chat App",
    subtitle: "Real-time Messaging App",
    description:
      "Real-time chat app built with Flutter and Firebase with scalable mobile architecture.",
    tags: ["Flutter", "Firebase", "Dart"],
    github: "https://github.com/gopal5587/Flutter-Chat-Application",
    icon: MessageSquare,
    accent: "bg-purple-500",
    shape1: "bg-purple-300",
    shape2: "bg-purple-200",
    shape3: "bg-white/40",
  },
];

const Dots = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none"
    aria-hidden="true"
  >
    <defs>
      <pattern id="dots" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1" fill="white" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#dots)" />
  </svg>
);

const MockupPreview = ({ project }: { project: Project }) => (
  <div className="relative bg-white rounded-xl overflow-hidden shadow-lg h-full flex flex-col">
    {/* Browser nav bar */}
    <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-200 bg-gray-50">
      <div className="flex items-center gap-3">
        <div className={`w-5 h-5 rounded ${project.accent}`} />
        <div className="hidden sm:flex items-center gap-3">
          {["Home", "About", "Work", "Contact"].map((l) => (
            <span key={l} className="text-[9px] font-medium text-gray-500">
              {l}
            </span>
          ))}
        </div>
      </div>
      <button
        type="button"
        aria-label="close"
        className="w-4 h-4 rounded-full bg-gray-200 flex items-center justify-center"
      >
        <X size={8} className="text-gray-600" strokeWidth={3} />
      </button>
    </div>

    {/* Hero area */}
    <div className={`flex-1 ${project.accent} p-4 flex items-center gap-3 relative overflow-hidden`}>
      {/* Left: heading */}
      <div className="flex-1 z-10">
        <div className="h-2.5 w-3/4 bg-white rounded mb-1.5" />
        <div className="h-2.5 w-1/2 bg-white/80 rounded mb-3" />
        <div className="h-1.5 w-full bg-white/40 rounded mb-1" />
        <div className="h-1.5 w-2/3 bg-white/40 rounded" />
        <div className="mt-3 h-4 w-14 bg-white rounded-full" />
      </div>

      {/* Right: abstract shapes */}
      <div className="flex-1 relative h-20">
        <div className={`absolute right-0 top-0 w-12 h-12 rounded-full ${project.shape1}`} />
        <div className={`absolute right-8 bottom-0 w-10 h-10 rounded-lg ${project.shape2} rotate-12`} />
        <div className={`absolute right-2 bottom-3 w-6 h-6 rounded-full ${project.shape3}`} />
      </div>
    </div>
  </div>
);

const ProjectCard = ({ project }: { project: Project }) => {
  const Icon = project.icon;
  return (
    <div className="group relative bg-[#0D1B2E] rounded-2xl overflow-hidden p-5 transition-transform duration-200 hover:scale-[1.02] hover:ring-2 hover:ring-blue-500/40 ring-1 ring-white/5 flex flex-col">
      <Dots />

      {/* Top: mockup preview (~55%) */}
      <div className="relative z-10 h-56 mb-5">
        <MockupPreview project={project} />
      </div>

      {/* Bottom: info */}
      <div className="relative z-10 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-12 h-12 shrink-0 rounded-full bg-blue-500 flex items-center justify-center text-white">
              <Icon size={22} />
            </div>
            <div className="min-w-0">
              <h3 className="text-xl font-bold text-white truncate">{project.title}</h3>
              <p className="text-sm text-amber-400 truncate">{project.subtitle}</p>
            </div>
          </div>

          <div className="flex flex-col gap-2 shrink-0">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-200 border border-gray-600 rounded-full px-3 py-1.5 hover:bg-white/5 transition-colors"
            >
              <Github size={12} />
              Code
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-full px-3 py-1.5 transition-colors"
            >
              <ExternalLink size={12} />
              Demo
            </a>
          </div>
        </div>

        <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-auto pt-1">
          {project.tags.map((t) => (
            <span
              key={t}
              className="border border-gray-600 text-gray-300 text-xs rounded-full px-3 py-1"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => (
  <section id="projects" className="py-28 bg-[#0d1b2a]">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <span className="inline-block font-mono text-xs uppercase tracking-[0.22em] mb-4" style={{ color: "#64ffda" }}>
          // projects
        </span>
        <h2 className="font-bold uppercase leading-none" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
          <span style={{ color: "#e6f1ff" }}>RECENT</span>{" "}
          <span style={{ color: "#1d3461" }}>WORK</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
