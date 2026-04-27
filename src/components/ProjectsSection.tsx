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
  customMockup?: "pocketpal" | "chat" | "medgen" | "zomato";
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
    customMockup: "medgen",
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
    customMockup: "pocketpal",
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
    customMockup: "zomato",
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
    customMockup: "chat",
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

const PocketPalMockup = () => (
  <div className="relative h-full w-full overflow-hidden rounded-xl shadow-lg">
    <svg viewBox="0 0 340 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" className="h-full w-full block">
      <rect width="340" height="200" fill="#071A10" />
      <circle cx="290" cy="40" r="55" fill="#0A2A14" opacity="0.8" />
      <circle cx="50" cy="180" r="45" fill="#0A2A14" opacity="0.5" />
      <rect x="20" y="20" width="300" height="28" rx="6" fill="#0A2014" />
      <circle cx="34" cy="34" r="7" fill="#1D9E75" />
      <text x="47" y="38" fontSize="9" fill="#5DCAA5" fontFamily="sans-serif" fontWeight="600">PocketPal</text>
      <text x="150" y="38" fontSize="8" fill="#2A6A40" fontFamily="sans-serif">Overview</text>
      <text x="196" y="38" fontSize="8" fill="#2A6A40" fontFamily="sans-serif">Budget</text>
      <text x="236" y="38" fontSize="8" fill="#2A6A40" fontFamily="sans-serif">Analytics</text>
      <rect x="20" y="58" width="140" height="80" rx="8" fill="#0A2014" stroke="#1A4A28" strokeWidth="0.5" />
      <text x="30" y="73" fontSize="7" fill="#3A8A58" fontFamily="sans-serif">Total Balance</text>
      <text x="30" y="92" fontSize="18" fill="#5DCAA5" fontFamily="sans-serif" fontWeight="700">₹42,850</text>
      <text x="30" y="104" fontSize="6" fill="#1D9E75" fontFamily="sans-serif">↑ +8.2% this month</text>
      <rect x="30" y="112" width="40" height="14" rx="4" fill="#1D9E75" />
      <text x="38" y="122" fontSize="7" fill="#E1F5EE" fontFamily="sans-serif">Add</text>
      <rect x="76" y="112" width="52" height="14" rx="4" fill="#0A2A18" stroke="#1D9E75" strokeWidth="0.5" />
      <text x="83" y="122" fontSize="7" fill="#5DCAA5" fontFamily="sans-serif">History</text>
      <rect x="170" y="58" width="150" height="80" rx="8" fill="#0A2014" stroke="#1A4A28" strokeWidth="0.5" />
      <text x="180" y="73" fontSize="7" fill="#3A8A58" fontFamily="sans-serif">Spending by Category</text>
      <circle cx="245" cy="105" r="22" fill="none" stroke="#1D9E75" strokeWidth="8" strokeDasharray="45 97" />
      <circle cx="245" cy="105" r="22" fill="none" stroke="#EF9F27" strokeWidth="8" strokeDasharray="30 97" strokeDashoffset="-45" />
      <circle cx="245" cy="105" r="22" fill="none" stroke="#378ADD" strokeWidth="8" strokeDasharray="22 97" strokeDashoffset="-75" />
      <circle cx="245" cy="105" r="10" fill="#0A2014" />
      <rect x="172" y="72" width="6" height="6" rx="1" fill="#1D9E75" />
      <text x="181" y="78" fontSize="6" fill="#3A8A58" fontFamily="sans-serif">Food 42%</text>
      <rect x="172" y="82" width="6" height="6" rx="1" fill="#EF9F27" />
      <text x="181" y="88" fontSize="6" fill="#3A8A58" fontFamily="sans-serif">Travel 28%</text>
      <rect x="172" y="92" width="6" height="6" rx="1" fill="#378ADD" />
      <text x="181" y="98" fontSize="6" fill="#3A8A58" fontFamily="sans-serif">Bills 20%</text>
      <rect x="20" y="150" width="300" height="1" fill="#0A2A14" />
      <text x="20" y="164" fontSize="7" fill="#1A4A28" fontFamily="sans-serif">Recent: Swiggy -₹240 · Petrol -₹800 · Netflix -₹199</text>
      <rect x="20" y="172" width="50" height="16" rx="4" fill="#0A2014" stroke="#1A4A28" strokeWidth="0.5" />
      <text x="29" y="183" fontSize="7" fill="#3A8A58" fontFamily="sans-serif">Flutter</text>
      <rect x="76" y="172" width="38" height="16" rx="4" fill="#0A2014" stroke="#1A4A28" strokeWidth="0.5" />
      <text x="83" y="183" fontSize="7" fill="#3A8A58" fontFamily="sans-serif">BLoC</text>
      <rect x="120" y="172" width="52" height="16" rx="4" fill="#0A2014" stroke="#1A4A28" strokeWidth="0.5" />
      <text x="128" y="183" fontSize="7" fill="#3A8A58" fontFamily="sans-serif">Firebase</text>
    </svg>
  </div>
);

const ChatMockup = () => (
  <div className="relative h-full w-full overflow-hidden rounded-xl shadow-lg">
    <svg viewBox="0 0 340 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" className="h-full w-full block">
      <rect width="340" height="200" fill="#0A0618" />
      <circle cx="295" cy="35" r="58" fill="#150D2A" opacity="0.8" />
      <circle cx="45" cy="178" r="42" fill="#150D2A" opacity="0.5" />
      <rect x="20" y="20" width="300" height="28" rx="6" fill="#110820" />
      <circle cx="34" cy="34" r="7" fill="#7F77DD" />
      <text x="47" y="38" fontSize="9" fill="#AFA9EC" fontFamily="sans-serif" fontWeight="600">Flutter Chat</text>
      <text x="158" y="38" fontSize="8" fill="#3A2A6A" fontFamily="sans-serif">Chats</text>
      <text x="194" y="38" fontSize="8" fill="#3A2A6A" fontFamily="sans-serif">Groups</text>
      <text x="238" y="38" fontSize="8" fill="#3A2A6A" fontFamily="sans-serif">Profile</text>
      <rect x="20" y="58" width="110" height="120" rx="8" fill="#110820" stroke="#2A1A4A" strokeWidth="0.5" />
      <text x="30" y="73" fontSize="7" fill="#534AB7" fontFamily="sans-serif">Recent</text>
      <rect x="30" y="79" width="16" height="16" rx="8" fill="#534AB7" />
      <text x="34" y="91" fontSize="7" fill="#EEEDFE" fontFamily="sans-serif">A</text>
      <text x="52" y="88" fontSize="7" fill="#AFA9EC" fontFamily="sans-serif" fontWeight="500">Arjun</text>
      <text x="52" y="97" fontSize="6" fill="#3A2A6A" fontFamily="sans-serif">Hey, what's up?</text>
      <rect x="30" y="102" width="16" height="16" rx="8" fill="#7F77DD" />
      <text x="34" y="114" fontSize="7" fill="#EEEDFE" fontFamily="sans-serif">P</text>
      <text x="52" y="111" fontSize="7" fill="#AFA9EC" fontFamily="sans-serif" fontWeight="500">Priya</text>
      <text x="52" y="120" fontSize="6" fill="#3A2A6A" fontFamily="sans-serif">Sent the files ✓✓</text>
      <rect x="30" y="124" width="16" height="16" rx="8" fill="#AFA9EC" />
      <text x="34" y="136" fontSize="7" fill="#26215C" fontFamily="sans-serif">R</text>
      <text x="52" y="133" fontSize="7" fill="#AFA9EC" fontFamily="sans-serif" fontWeight="500">Rahul</text>
      <text x="52" y="142" fontSize="6" fill="#3A2A6A" fontFamily="sans-serif">Meeting at 5pm</text>
      <rect x="140" y="58" width="180" height="120" rx="8" fill="#110820" stroke="#2A1A4A" strokeWidth="0.5" />
      <text x="210" y="73" fontSize="7" fill="#534AB7" fontFamily="sans-serif">Arjun</text>
      <rect x="148" y="80" width="90" height="18" rx="6" fill="#1A0E30" />
      <text x="156" y="92" fontSize="7" fill="#7F77DD" fontFamily="sans-serif">Hey, what's up? 👋</text>
      <rect x="232" y="104" width="78" height="18" rx="6" fill="#534AB7" />
      <text x="240" y="116" fontSize="7" fill="#EEEDFE" fontFamily="sans-serif">All good! You?</text>
      <rect x="148" y="128" width="96" height="18" rx="6" fill="#1A0E30" />
      <text x="156" y="140" fontSize="7" fill="#7F77DD" fontFamily="sans-serif">Check this repo out</text>
      <rect x="148" y="162" width="172" height="14" rx="4" fill="#150D2A" stroke="#2A1A4A" strokeWidth="0.5" />
      <text x="158" y="172" fontSize="7" fill="#3A2A6A" fontFamily="sans-serif">Type a message...</text>
      <circle cx="309" cy="169" r="7" fill="#7F77DD" />
      <text x="306" y="172" fontSize="8" fill="#EEEDFE" fontFamily="sans-serif">↑</text>
      <rect x="20" y="172" width="50" height="16" rx="4" fill="#110820" stroke="#2A1A4A" strokeWidth="0.5" />
      <text x="27" y="183" fontSize="7" fill="#3A2A6A" fontFamily="sans-serif">Flutter</text>
      <rect x="76" y="172" width="52" height="16" rx="4" fill="#110820" stroke="#2A1A4A" strokeWidth="0.5" />
      <text x="82" y="183" fontSize="7" fill="#3A2A6A" fontFamily="sans-serif">Firebase</text>
      <rect x="134" y="172" width="34" height="16" rx="4" fill="#110820" stroke="#2A1A4A" strokeWidth="0.5" />
      <text x="141" y="183" fontSize="7" fill="#3A2A6A" fontFamily="sans-serif">Dart</text>
    </svg>
  </div>
);

const MedGenMockup = () => (
  <div className="relative h-full w-full overflow-hidden rounded-xl shadow-lg">
    <svg viewBox="0 0 340 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" className="h-full w-full block">
      <rect width="340" height="200" fill="#060F1E" />
      <rect x="0" y="0" width="340" height="200" fill="#0A1628" />
      <circle cx="280" cy="30" r="60" fill="#0C2444" opacity="0.8" />
      <circle cx="60" cy="170" r="40" fill="#0C2444" opacity="0.6" />
      <rect x="20" y="20" width="300" height="28" rx="6" fill="#0D1F38" />
      <circle cx="34" cy="34" r="7" fill="#185FA5" />
      <text x="47" y="38" fontSize="9" fill="#7EB8F5" fontFamily="sans-serif" fontWeight="600">MedGen.AI</text>
      <text x="150" y="38" fontSize="8" fill="#3A6A9A" fontFamily="sans-serif">Symptoms</text>
      <text x="200" y="38" fontSize="8" fill="#3A6A9A" fontFamily="sans-serif">Diagnosis</text>
      <text x="252" y="38" fontSize="8" fill="#3A6A9A" fontFamily="sans-serif">Reports</text>
      <rect x="20" y="58" width="185" height="12" rx="3" fill="#0D1F38" />
      <rect x="20" y="58" width="110" height="12" rx="3" fill="#1A3A5C" />
      <circle cx="26" cy="64" r="4" fill="#185FA5" />
      <text x="34" y="67" fontSize="7" fill="#7EB8F5" fontFamily="sans-serif">Search symptoms or condition...</text>
      <rect x="215" y="58" width="105" height="12" rx="3" fill="#185FA5" />
      <text x="240" y="67" fontSize="7" fill="#B5D4F4" fontFamily="sans-serif" fontWeight="600">Analyze →</text>
      <rect x="20" y="82" width="88" height="54" rx="8" fill="#0D1F38" stroke="#1A3A5C" strokeWidth="0.5" />
      <text x="28" y="96" fontSize="7" fill="#4A8ABA" fontFamily="sans-serif">Confidence Score</text>
      <text x="28" y="112" fontSize="20" fill="#7EB8F5" fontFamily="sans-serif" fontWeight="700">94%</text>
      <text x="28" y="127" fontSize="6" fill="#2D5C8A" fontFamily="sans-serif">High confidence</text>
      <rect x="118" y="82" width="88" height="54" rx="8" fill="#0D1F38" stroke="#1A3A5C" strokeWidth="0.5" />
      <text x="126" y="96" fontSize="7" fill="#4A8ABA" fontFamily="sans-serif">Severity Level</text>
      <rect x="126" y="103" width="50" height="6" rx="3" fill="#0C2444" />
      <rect x="126" y="103" width="35" height="6" rx="3" fill="#EF9F27" />
      <text x="126" y="127" fontSize="7" fill="#BA7517" fontFamily="sans-serif" fontWeight="600">Moderate</text>
      <rect x="216" y="82" width="104" height="54" rx="8" fill="#0D1F38" stroke="#1A3A5C" strokeWidth="0.5" />
      <text x="224" y="96" fontSize="7" fill="#4A8ABA" fontFamily="sans-serif">Top Diagnosis</text>
      <text x="224" y="110" fontSize="8" fill="#9FE1CB" fontFamily="sans-serif" fontWeight="600">Viral Rhinitis</text>
      <text x="224" y="122" fontSize="7" fill="#5DCAA5" fontFamily="sans-serif">Traceable via RAG</text>
      <circle cx="316" cy="88" r="6" fill="#0F6E56" />
      <text x="313" y="91" fontSize="7" fill="#9FE1CB" fontFamily="sans-serif">✓</text>
      <rect x="20" y="148" width="300" height="1" fill="#0D2040" />
      <text x="20" y="163" fontSize="7" fill="#1D4A7A" fontFamily="sans-serif">Sources: PubMed · WHO · Clinical Guidelines</text>
      <rect x="20" y="170" width="60" height="16" rx="4" fill="#0D1F38" stroke="#1A3A5C" strokeWidth="0.5" />
      <text x="29" y="181" fontSize="7" fill="#4A8ABA" fontFamily="sans-serif">Next.js</text>
      <rect x="86" y="170" width="52" height="16" rx="4" fill="#0D1F38" stroke="#1A3A5C" strokeWidth="0.5" />
      <text x="95" y="181" fontSize="7" fill="#4A8ABA" fontFamily="sans-serif">FastAPI</text>
      <rect x="144" y="170" width="38" height="16" rx="4" fill="#0D1F38" stroke="#1A3A5C" strokeWidth="0.5" />
      <text x="152" y="181" fontSize="7" fill="#4A8ABA" fontFamily="sans-serif">FAISS</text>
      <rect x="188" y="170" width="44" height="16" rx="4" fill="#0D1F38" stroke="#1A3A5C" strokeWidth="0.5" />
      <text x="196" y="181" fontSize="7" fill="#4A8ABA" fontFamily="sans-serif">Flutter</text>
    </svg>
  </div>
);

const ZomatoMockup = () => (
  <div className="relative h-full w-full overflow-hidden rounded-xl shadow-lg">
    <svg viewBox="0 0 340 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" className="h-full w-full block">
      <rect width="340" height="200" fill="#1A0A00" />
      <circle cx="300" cy="30" r="60" fill="#2A1200" opacity="0.8" />
      <circle cx="40" cy="175" r="40" fill="#2A1200" opacity="0.5" />
      <rect x="20" y="20" width="300" height="28" rx="6" fill="#1E0D00" />
      <circle cx="34" cy="34" r="7" fill="#D85A30" />
      <text x="47" y="38" fontSize="9" fill="#F0997B" fontFamily="sans-serif" fontWeight="600">Mini Zomato</text>
      <text x="155" y="38" fontSize="8" fill="#6A3018" fontFamily="sans-serif">Restaurants</text>
      <text x="214" y="38" fontSize="8" fill="#6A3018" fontFamily="sans-serif">Orders</text>
      <text x="254" y="38" fontSize="8" fill="#6A3018" fontFamily="sans-serif">Track</text>
      <rect x="20" y="58" width="88" height="72" rx="8" fill="#1E0D00" stroke="#3A1A08" strokeWidth="0.5" />
      <rect x="20" y="58" width="88" height="30" rx="8" fill="#2A1400" />
      <rect x="20" y="74" width="88" height="14" fill="#2A1400" />
      <text x="30" y="80" fontSize="8" fill="#F0997B" fontFamily="sans-serif" fontWeight="600">Burger King</text>
      <text x="30" y="90" fontSize="6" fill="#993C1D" fontFamily="sans-serif">Fast Food · 25 min</text>
      <text x="30" y="104" fontSize="7" fill="#D85A30" fontFamily="sans-serif">★ 4.2</text>
      <text x="65" y="104" fontSize="7" fill="#6A3018" fontFamily="sans-serif">₹200 min</text>
      <rect x="30" y="110" width="58" height="12" rx="4" fill="#D85A30" />
      <text x="44" y="119" fontSize="7" fill="#FAECE7" fontFamily="sans-serif">Order Now</text>
      <rect x="118" y="58" width="88" height="72" rx="8" fill="#1E0D00" stroke="#3A1A08" strokeWidth="0.5" />
      <rect x="118" y="58" width="88" height="30" rx="8" fill="#261000" />
      <rect x="118" y="74" width="88" height="14" fill="#261000" />
      <text x="128" y="80" fontSize="8" fill="#F0997B" fontFamily="sans-serif" fontWeight="600">Pizza Hut</text>
      <text x="128" y="90" fontSize="6" fill="#993C1D" fontFamily="sans-serif">Pizza · 35 min</text>
      <text x="128" y="104" fontSize="7" fill="#D85A30" fontFamily="sans-serif">★ 4.5</text>
      <text x="163" y="104" fontSize="7" fill="#6A3018" fontFamily="sans-serif">₹300 min</text>
      <rect x="128" y="110" width="58" height="12" rx="4" fill="#993C1D" />
      <text x="142" y="119" fontSize="7" fill="#FAECE7" fontFamily="sans-serif">Order Now</text>
      <rect x="216" y="58" width="104" height="72" rx="8" fill="#1E0D00" stroke="#3A1A08" strokeWidth="0.5" />
      <text x="226" y="73" fontSize="7" fill="#6A3018" fontFamily="sans-serif">Your Cart</text>
      <text x="226" y="87" fontSize="8" fill="#F0997B" fontFamily="sans-serif">Whopper x1</text>
      <text x="285" y="87" fontSize="8" fill="#D85A30" fontFamily="sans-serif">₹199</text>
      <rect x="226" y="92" width="84" height="0.5" fill="#3A1A08" />
      <text x="226" y="104" fontSize="8" fill="#F0997B" fontFamily="sans-serif">Fries x2</text>
      <text x="285" y="104" fontSize="8" fill="#D85A30" fontFamily="sans-serif">₹120</text>
      <rect x="226" y="109" width="84" height="0.5" fill="#3A1A08" />
      <text x="226" y="120" fontSize="7" fill="#993C1D" fontFamily="sans-serif" fontWeight="600">Total: ₹319</text>
      <rect x="226" y="122" width="84" height="1" fill="#D85A30" opacity="0.3" />
      <rect x="20" y="142" width="300" height="1" fill="#2A1200" />
      <text x="20" y="156" fontSize="7" fill="#3A1A08" fontFamily="sans-serif">3 apps: Customer · Restaurant · Delivery Agent</text>
      <rect x="20" y="164" width="50" height="16" rx="4" fill="#1E0D00" stroke="#3A1A08" strokeWidth="0.5" />
      <text x="29" y="175" fontSize="7" fill="#6A3018" fontFamily="sans-serif">Flutter</text>
      <rect x="76" y="164" width="38" height="16" rx="4" fill="#1E0D00" stroke="#3A1A08" strokeWidth="0.5" />
      <text x="83" y="175" fontSize="7" fill="#6A3018" fontFamily="sans-serif">BLoC</text>
      <rect x="120" y="164" width="100" height="16" rx="4" fill="#1E0D00" stroke="#3A1A08" strokeWidth="0.5" />
      <text x="128" y="175" fontSize="7" fill="#6A3018" fontFamily="sans-serif">Clean Architecture</text>
    </svg>
  </div>
);

const MockupPreview = ({ project }: { project: Project }) => {
  if (project.customMockup === "pocketpal") return <PocketPalMockup />;
  if (project.customMockup === "chat") return <ChatMockup />;
  if (project.customMockup === "medgen") return <MedGenMockup />;
  if (project.customMockup === "zomato") return <ZomatoMockup />;
  return (
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
};

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
