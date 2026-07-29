import React from "react";
import {
  Heart,
  Brain,
  Stethoscope,
  Check,
  ArrowRight,
  ClipboardList,
} from "lucide-react";

interface ModuleData {
  title: string;
  description: string;
  icon: React.ReactNode;
  learningOutcomes: string[];
  resources: string[];
  estimatedTime: string;
  buttonText: string;
}

const modules: ModuleData[] = [
  {
    title: "Anatomy",
    description:
      "Learn the structure of the heart before exploring its function. Build a rock-solid foundation.",
    icon: <Heart className="w-8 h-8" />,
    learningOutcomes: [
      "Heart anatomy & chambers",
      "Coronary circulation",
      "Conduction pathway",
    ],
    resources: ["3D", "Images", "Interactive"],
    estimatedTime: "4–6h",
    buttonText: "Start Learning",
  },
  {
    title: "Physiology",
    description:
      "Understand how the heart actually works, from mechanical cycles to cellular action potentials.",
    icon: <Brain className="w-8 h-8" />,
    learningOutcomes: [
      "Cardiac cycle mechanics",
      "Electrical conduction",
      "ECG interpretation",
    ],
    resources: ["Animation", "Graphs", "ECG"],
    estimatedTime: "5–7h",
    buttonText: "Continue",
  },
  {
    title: "Knowledge Check",
    description:
      "Reinforce your knowledge through active recall and identify gaps before moving to clinical applications.",
    icon: <ClipboardList className="w-8 h-8" />,
    learningOutcomes: [
      "Active recall practice",
      "Spaced repetition",
      "Identify knowledge gaps",
    ],
    resources: ["Practice Tests", "Flashcards", "Games"],
    estimatedTime: "2–3h",
    buttonText: "Test Yourself",
  },
  {
    title: "Clinical Cases",
    description:
      "Apply your knowledge to real-world patient scenarios and develop sharp clinical reasoning skills.",
    icon: <Stethoscope className="w-8 h-8" />,
    learningOutcomes: [
      "Clinical case analysis",
      "Differential diagnosis",
      "Real-world application",
    ],
    resources: ["Case Studies", "Scenarios", "Discussion"],
    estimatedTime: "3–4h",
    buttonText: "Solve Cases",
  },
];

export default function LearningJourney() {
  return (
    <section
      id="GetStarted"
      className="relative w-full min-h-screen py-24 overflow-hidden"
    >
      {/* 1. Premium Apple-style Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, #1F365C 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Faint radial glows */}
        <div className="absolute top-0 -left-40 w-[800px] h-[800px] bg-red-50/60 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 -right-40 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-24 max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1F365C] mb-6 tracking-tight">
            Your Learning <span className="italic text-red-700">Journey</span>
          </h2>
          <p className="text-md md:text-xl text-[#1F365C]/70 leading-relaxed max-w-2xl mx-auto">
            Learn in the correct sequence for maximum understanding and
            retention. Each module is designed to build upon the last.
          </p>
        </div>

        {/* Wide Zig-Zag Journey Track */}
        <div className="flex flex-col gap-10 md:gap-16 relative max-w-6xl mx-auto">
          {/* Central Connecting Spine for Wide Layout */}
          <div className="hidden md:block absolute left-1/2 top-10 bottom-10 w-[2px] -translate-x-1/2 bg-gradient-to-b from-red-700/30 via-[#1F365C]/15 to-red-700/30 pointer-events-none" />

          {modules.map((mod, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative w-full md:w-[48%] lg:w-[46%] ${
                  isEven ? "mr-auto" : "ml-auto"
                }`}
              >
                {/* Compact Card */}
                <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-5 md:p-6 border border-[#1F365C]/10 shadow-md hover:shadow-xl hover:border-red-700/40 hover:-translate-y-[4px] transition-all duration-300">
                  {/* Top Row: Icon & Time */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 md:w-13 md:h-13 rounded-xl bg-red-50 flex items-center justify-center text-red-700 ring-2 ring-white shadow-sm group-hover:bg-red-700 group-hover:text-white group-hover:scale-105 transition-all duration-300 [&_svg]:w-5 [&_svg]:h-5 md:[&_svg]:w-6 md:[&_svg]:h-6">
                      {mod.icon}
                    </div>
                    <span className="text-xs font-semibold text-[#1F365C]/60 bg-[#1F365C]/5 px-3 py-1 rounded-full">
                      {mod.estimatedTime}
                    </span>
                  </div>

                  {/* Text Content */}
                  <h3 className="text-lg md:text-xl font-serif text-[#1F365C] mb-1.5">
                    {mod.title}
                  </h3>
                  <p className="text-[#1F365C]/70 leading-relaxed mb-4 text-xs md:text-sm">
                    {mod.description}
                  </p>

                  <hr className="border-[#1F365C]/10 mb-4" />

                  {/* Checkmark Learning Outcomes */}
                  <ul className="space-y-2 mb-5">
                    {mod.learningOutcomes.map((outcome, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="w-4 h-4 text-red-600 mr-2 shrink-0 mt-0.5" />
                        <span className="text-[#1F365C]/80 font-medium text-xs md:text-sm">
                          {outcome}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Pill-style Resources */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {mod.resources.map((res, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-[#1F365C]/5 text-[#1F365C] rounded-full text-[10px] font-bold tracking-wide uppercase"
                      >
                        {res}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className="flex items-center text-xs md:text-sm text-red-700 font-bold tracking-wide group-hover:text-red-800 transition-colors">
                    {mod.buttonText}
                    <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Horizontal Branch Connector linking Card to Center Spine */}
                <div
                  className={`hidden md:flex absolute top-1/2 -translate-y-1/2 items-center pointer-events-none ${
                    isEven
                      ? "-right-8 lg:-right-12 left-full"
                      : "-left-8 lg:-left-12 right-full flex-row-reverse"
                  }`}
                >
                  <div className="h-[2px] w-full bg-gradient-to-r from-red-700/40 to-[#1F365C]/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-red-700 ring-4 ring-white shrink-0" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Refined Quote Footer */}
        <div className="mt-32 max-w-3xl mx-auto">
          <div className="relative py-12 px-8 border-y border-[#1F365C]/10 text-center">
            <p className="text-2xl md:text-3xl font-serif text-[#1F365C] italic leading-relaxed mb-6">
              "Master the basics before moving to clinical reasoning."
            </p>
            <p className="text-sm font-bold tracking-widest uppercase text-red-700">
              — Cardo Learning Path
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
