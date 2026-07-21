import React from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  Activity,
  Stethoscope,
  Shield,
  ArrowLeft,
  CircleCheck,
  BookOpen,
  Brain,
  BadgeInfo,
} from "lucide-react";
import HeartCanvas from "../HeartCanvas";
import AnatomyLo1 from "./AnatomyLo1";
import AnatomyLo2 from "./AnatomyLo2";
import AnatomyLo3 from "./AnatomyLo3";
import AnatomyLo4 from "./AnatomyLo4";
import AnatomyLo5 from "./AnatomyLo5";

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

interface QuickFact {
  label: string;
  value: string;
  icon: React.ReactNode;
}

interface LayerData {
  title: string;
  subtitle: string;
  explanation: string;
  clinical: string;
}

// ============================================================================
// DATA CONFIGURATIONS
// ============================================================================

const loLinks = [
  { id: "lo1", label: "LO1" },
  { id: "lo2", label: "LO2" },
  { id: "lo3", label: "LO3" },
  { id: "lo4", label: "LO4" },
  { id: "lo5", label: "LO5" },
];

const learningOutcomes = [
  {
    title: "State the boundaries and the contents of thoracic cage",
    path: "#lo1",
  },
  {
    title: "Describe mediastinum and its divisions",
    path: "#lo2",
  },
  {
    title: "Describe mediastinum contents",
    path: "#lo3",
  },
  {
    title: "Describe the great vessels that are directly related to the heart",
    path: "#lo4",
  },
  {
    title: "Describe the innervation and conducting system of the heart",
    path: "#lo5",
  },
];

const QUICK_FACTS: QuickFact[] = [
  {
    label: "Weight",
    value: "250–350 g",
    icon: <Activity className="w-4 h-4 text-[#A71627]" />,
  },
  {
    label: "Location",
    value: "Middle Mediastinum",
    icon: <Brain className="w-4 h-4 text-[#A71627]" />,
  },
  {
    label: "Chambers",
    value: "4 Functional Cavities",
    icon: <Heart className="w-4 h-4 text-[#A71627]" />,
  },
  {
    label: "Valves",
    value: "4 Mechanical Valves",
    icon: <Shield className="w-4 h-4 text-[#A71627]" />,
  },
  {
    label: "Blood Supply",
    value: "Coronary Arteries",
    icon: <Stethoscope className="w-4 h-4 text-[#A71627]" />,
  },
];

const HEART_WALL_LAYERS: LayerData[] = [
  {
    title: "Epicardium",
    subtitle: "Visceral Layer of Serous Pericardium",
    explanation:
      "The outermost protective protective layer, composed of mesothelium and delicate connective tissue. It houses the main coronary blood vessels and nerves that supply the muscular layer below, cushioned by a variable layer of adipose tissue.",
    clinical:
      "Pericarditis can cause inflammation tracking directly into the epicardium (epi-myocarditis), disrupting the smooth, friction-free movement within the pericardial cavity and leading to pericardial friction rubs detectable via auscultation.",
  },
  {
    title: "Myocardium",
    subtitle: "The Core Muscular Syncytium",
    explanation:
      'The structural and functional powerhouse forming the bulk of the heart wall. It consists of specialized involuntary, striated cardiac muscle fibers arranged spirally around the chambers. This arrangement allows a highly efficient "wringing" contraction mechanism.',
    clinical:
      "Myocardial cells are highly vulnerable to ischemia. Occlusion of coronary vessels leads swiftly to Myocardial Infarction (MI), where localized necrosis triggers irreversible damage, fibrous scar tissue remodeling, and compromised stroke volume.",
  },
  {
    title: "Endocardium",
    subtitle: "Internal Endothelial Interface",
    explanation:
      "A glistening, ultra-smooth inner membrane consisting of simple squamous endothelial cells overlying thin fibroelastic connective tissue. It lines all chambers and continuously covers the structural elements of the cardiac valves to minimize blood turbulence.",
    clinical:
      "Endothelial disruption predisposes patients to Infective Endocarditis. Pathogens form bacterial vegetations on vulnerable valve leaflets, potentially destroying structural scaffolding or breaking loose as systemic septic emboli.",
  },
];

const KEY_TAKEAWAYS: string[] = [
  "Student can state and explain about heart features based on external components",
  "Student will be able to describe each chamber of the heart and its internal features",
  "Student can differentiate between the coronary arteries and their branches, and describe their course and area of supply",
  "Student will be able to describe the venous drainage of the heart and its clinical significance",
  "Student can understand the innervation of the heart and how the electrical impulses are conducted",
];

// ============================================================================
// COMPONENT IMPLEMENTATION
// ============================================================================

export default function AnatomyHeartLocation() {
  return (
    <div
      id="top"
      className="min-h-screen bg-[#FDF8F5] text-[#1F365C] font-sans selection:bg-[#A71627]/10 selection:text-[#A71627] relative overflow-x-hidden pb-24"
    >
      <div className="bg-blend-soft-light relative h-20 overflow-hidden rounded-xl">
        <img
          src="/HeartLocation.png"
          className="w-full h-full object-cover"
          alt=""
        />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
      </div>
      {/* Premium Ambient Background Blurs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-rose-200/20 to-amber-100/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-[1200px] right-0 w-[500px] h-[500px] bg-gradient-to-bl from-red-100/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 left-10 w-[700px] h-[700px] bg-gradient-to-tr from-amber-100/15 to-rose-100/20 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-8">
        {/* Navigation Breadcrumb */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-[#1F365C]/70 hover:text-[#A71627] transition-colors group mb-12"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Home</span>
        </Link>

        {/* Hero Header Section */}
        <header className="mb-16">
          <p className="text-xs font-bold tracking-[0.3em] text-[#A71627] uppercase mb-3">
            Heart Location
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#1F365C] leading-[1.15] max-w-4xl">
            The Place of The Heart & Its Surrounding
          </h1>
        </header>

        {/* Split Section: Canvas & Introduction Cards */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-20">
          {/* Left Column: Sticky Interactive Canvas */}
          <div className="lg:col-span-7 w-full lg:sticky lg:top-8 z-10">
            <div className="w-full aspect-[4/3] sm:aspect-square lg:h-[calc(100vh-12rem)] rounded-3xl  border border-white/40 bg-white shadow-xl overflow-hidden relative group">
              <div className="absolute top-6 left-6 z-20 flex items-center gap-3 bg-white/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/50 shadow-sm text-xs font-medium tracking-wide text-[#1F365C]/80">
                <Activity className="w-3.5 h-3.5 text-[#A71627] animate-pulse" />
                <span>3D MACROSCOPIC SPECIMEN</span>
              </div>
              <HeartCanvas />
              <div className="absolute bottom-6 right-6 z-20 text-[10px] uppercase tracking-widest text-[#1F365C]/40 bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                Interactive Viewport
              </div>
            </div>
          </div>

          {/* Right Column: Introduction & Quick Facts */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Introduction Card */}
            <article className="rounded-3xl  border border-white/40 bg-white shadow-xl p-8 sm:p-10 transition-all hover:-translate-y-1 duration-3xl">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-5 h-5 text-[#A71627]" />
                <h3 className="font-serif text-xl font-medium tracking-tight">
                  Functional Synopsis
                </h3>
              </div>
              <p className="text-sm text-[#1F365C]/80 leading-loose mb-6">
                The human heart is a highly specialized, self-perpetuating
                muscular syncytium tasked with maintaining systemic perfusion
                pressure. Suspended inside the middle mediastinum within a
                fibroserous pericardial envelope, its muscular walls configure a
                synchronized four-chamber system that isolates deoxygenated
                blood returning from peripheral structures from highly
                oxygenated blood destined for corporal delivery.
              </p>
              <div className="p-4 rounded-2xl bg-red-50/80  inset-shadow-sm border border-white/60 text-xs text-[#1F365C]/90 leading-relaxed flex gap-3">
                <BadgeInfo className="w-4 h-4 text-[#A71627] shrink-0 mt-0.5" />
                <span>
                  <strong>Anatomical Position Note:</strong> The long axis of
                  the heart runs obliquely down and forward from base to apex,
                  rotated so its right aspect presents almost entirely to the
                  anterior chest wall.
                </span>
              </div>
            </article>

            {/* Quick Facts Card */}
            <article className="rounded-3xl  border border-white/40 bg-white shadow-xl p-8 sm:p-10 transition-all hover:-translate-y-1 duration-3xl">
              <h3 className="font-serif text-xl font-medium tracking-tight mb-6">
                Morphological Benchmarks
              </h3>
              <div className="divide-y divide-[#1F365C]/10">
                {QUICK_FACTS.map((fact, index) => (
                  <div
                    key={index}
                    className="py-4 flex items-center justify-between first:pt-0 last:pb-0"
                  >
                    <div className="flex items-center gap-3 text-sm text-[#1F365C]/70">
                      {fact.icon}
                      <span>{fact.label}</span>
                    </div>
                    <span className="text-sm font-medium tracking-wide text-[#1F365C]">
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        {/* Section: Overview */}
        <section className="mb-20">
          <div className="rounded-3xl border border-white/40 bg-white/40 backdrop-blur-xl shadow-xl p-8 sm:p-12">
            <h2 className="mb-6 font-serif text-3xl font-medium text-[#1F365C]">
              Learning Outcomes
            </h2>

            <div>
              {learningOutcomes.map((item) => (
                <a
                  href={item.path}
                  className="
    group
    flex
    items-center
    justify-between
    
  
  
   
   rounded-2xl
    p-2
    transition-all
    duration-300
    hover:border-[#A71627]/30
    hover:bg-red-50
  "
                >
                  <div className="flex items-center gap-4">
                    <CircleCheck size={20} className="text-[#A71627]" />

                    <span className="text-[#1F365C]">{item.title}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Section: External Anatomy */}
        <section id="lo1">
          <AnatomyLo1 />
          <nav
            className="
    mt-10 
    flex items-center gap-4 
    text-sm font-medium 
    tracking-wide 
    text-[#1F365C]/70
  "
          >
            {loLinks.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className="
        rounded-full 
        border border-[#A71627]/30
        px-3 py-1
        text-[#A71627]
        transition-all
        hover:bg-[#A71627]
        hover:text-white
      "
              >
                {label}
              </a>
            ))}
          </nav>
        </section>

        {/* Section: Heart Wall Layers */}
        <section className="mb-20">
          <p className="text-xs font-bold tracking-[0.2em] text-[#A71627] uppercase text-center mb-2">
            Histological Layers
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-center mb-12">
            The Tri-Layered Heart Wall
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {HEART_WALL_LAYERS.map((layer, index) => (
              <article
                key={index}
                className="rounded-3xl backdrop-blur-xl border border-white/40 bg-white/30 shadow-xl p-8 flex flex-col transition-all hover:-translate-y-1 duration-3xl"
              >
                <div className="mb-6">
                  <span className="text-[10px] font-bold tracking-widest text-[#A71627] block mb-1">
                    LAYER 0{index + 1}
                  </span>
                  <h3 className="font-serif text-2xl font-normal tracking-tight text-[#1F365C]">
                    {layer.title}
                  </h3>
                  <p className="text-xs text-[#1F365C]/60 italic mt-1">
                    {layer.subtitle}
                  </p>
                </div>
                <div className="flex-1 space-y-6">
                  <p className="text-sm text-[#1F365C]/80 leading-relaxed">
                    {layer.explanation}
                  </p>
                  <div className="pt-6 border-t border-[#1F365C]/10">
                    <span className="text-xs font-bold tracking-wider text-[#1F365C]/60 uppercase block mb-2">
                      Clinical Implication
                    </span>
                    <p className="text-xs text-[#1F365C]/70 leading-relaxed bg-white/40 p-4 rounded-xl border border-white/50">
                      {layer.clinical}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="lo2">
          <AnatomyLo2 />

          <nav
            className="
    mt-10 
    flex items-center gap-4 
    text-sm font-medium 
    tracking-wide 
    text-[#1F365C]/70
  "
          >
            {loLinks.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className="
        rounded-full 
        border border-[#A71627]/30
        px-3 py-1
        text-[#A71627]
        transition-all
        hover:bg-[#A71627]
        hover:text-white
      "
              >
                {label}
              </a>
            ))}
          </nav>
        </section>

        <section id="lo3">
          <AnatomyLo3 />

          <nav
            className="
    mt-10 
    flex items-center gap-4 
    text-sm font-medium 
    tracking-wide 
    text-[#1F365C]/70
  "
          >
            {loLinks.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className="
        rounded-full 
        border border-[#A71627]/30
        px-3 py-1
        text-[#A71627]
        transition-all
        hover:bg-[#A71627]
        hover:text-white
      "
              >
                {label}
              </a>
            ))}
          </nav>
        </section>

        <section id="lo4">
          <AnatomyLo4 />

          <nav
            className="
    mt-10 
    flex items-center gap-4 
    text-sm font-medium 
    tracking-wide 
    text-[#1F365C]/70
  "
          >
            {loLinks.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className="
        rounded-full 
        border border-[#A71627]/30
        px-3 py-1
        text-[#A71627]
        transition-all
        hover:bg-[#A71627]
        hover:text-white
      "
              >
                {label}
              </a>
            ))}
          </nav>
        </section>

        <section id="lo5" className="pb-5">
          <AnatomyLo5 />

          <nav
            className="
    mt-10 
    flex items-center gap-4 
    text-sm font-medium 
    tracking-wide 
    text-[#1F365C]/70
  "
          >
            {loLinks.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className="
        rounded-full 
        border border-[#A71627]/30
        px-3 py-1
        text-[#A71627]
        transition-all
        hover:bg-[#A71627]
        hover:text-white
      "
              >
                {label}
              </a>
            ))}
          </nav>
        </section>

        {/* Section: Key Takeaways */}
        <section className="mb-20">
          <div className="rounded-3xl backdrop-blur-xl border border-white/40 bg-white/30 shadow-xl p-8 sm:p-12 transition-all hover:-translate-y-1 duration-3xl">
            <h3 className="font-serif text-2xl font-normal tracking-tight mb-8">
              Essential High-Yield Takeaways
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {KEY_TAKEAWAYS.map((takeaway, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-2 rounded-xl bg-white/20 border border-white/40"
                >
                  <CircleCheck className="w-5 h-5 text-[#A71627] shrink-0 mt-0.5" />
                  <p className="text-sm text-[#1F365C]/90 leading-relaxed">
                    {takeaway}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Elegant Academic Footer */}
      <footer className="border-t border-[#1F365C]/10 pt-12 mt-12 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-xs text-[#1F365C]/50 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          {/* Navigation Breadcrumb */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-[#1F365C]/70 hover:text-[#A71627] transition-colors group "
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Home</span>
          </Link>
          <div className="w-2 h-2 bg-[#A71627] rounded-full" />
          <a
            href="#top"
            className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-[#1F365C]/70 hover:text-[#A71627] transition-colors group "
          >
            Top
          </a>
        </div>
        <p className="font-sans">
          &copy; 2026 Curriculum Module &bull; All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
