import { Link } from "react-router-dom";
import {
  Activity,
  ArrowLeft,
  CircleCheck,
  BookOpen,
  BadgeInfo,
} from "lucide-react";
import { useEffect } from "react";

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

// ============================================================================
// DATA CONFIGURATIONS
// ============================================================================

const learningOutcomes = [
  {
    title:
      "Describe the electrical and mechanical events in the heart during a cardiac cycle.",
    path: "#lo1",
  },
  {
    title:
      "Analyze the changes in pressures and volumes in the heart chambers and the aorta.",
    path: "#lo2",
  },
  {
    title: " Explain the pathophysiology of abnormal heart sounds.",
    path: "#lo3",
  },
];

const KEY_TAKEAWAYS: string[] = [
  "Student will be able to map the 5 phases of the ventricular action potential to their specific ion currents (fast Na+ upstroke, L-type Ca2+ plateau, delayed rectifier K+ repolarization).",
];

// ============================================================================
// COMPONENT IMPLEMENTATION
// ============================================================================
export default function CardiacCycle() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    // Removed overflow-x-hidden from here to let the window manage scrolling cleanly
    <div
      id="top"
      className="min-h-screen bg-[#FDF8F5] text-[#1F365C] font-sans selection:bg-[#A71627]/10 selection:text-[#A71627] relative pb-24"
    >
      {/* If ambient blur blobs cause horizontal overflow, wrap JUST them in a clipped container */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-rose-200/20 to-amber-100/10 rounded-full blur-3xl" />
        <div className="absolute top-[1200px] right-0 w-[500px] h-[500px] bg-gradient-to-bl from-red-100/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-10 w-[700px] h-[700px] bg-gradient-to-tr from-amber-100/15 to-rose-100/20 rounded-full blur-3xl" />
      </div>

      <div className="bg-blend-soft-light relative h-20 overflow-hidden rounded-xl">
        <img
          src="/ECGHeader.png"
          className="w-full h-full object-cover"
          alt=""
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-8 relative z-10">
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
            Cardiac Cycle
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#1F365C] leading-[1.15] max-w-4xl">
            Heart Routine
          </h1>
        </header>

        {/* Split Section: Canvas & Introduction Cards */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-20">
          <div className="lg:col-span-7 w-full lg:sticky lg:top-8 z-10">
            <div className="w-full aspect-[4/3] sm:aspect-square lg:h-[calc(100vh-12rem)] rounded-3xl  border border-white/40 bg-white shadow-xl overflow-hidden relative group">
              <div className="absolute top-6 left-6 z-20 flex items-center gap-3 bg-white/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/50 shadow-sm text-xs font-medium tracking-wide text-[#1F365C]/80">
                <Activity className="w-3.5 h-3.5 text-[#A71627] animate-pulse" />
                <span>Cardiac Cycle</span>
              </div>

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
                Muscle physiology explores how electrical signals convert into
                physical movement across skeletal, cardiac, and smooth muscle
                tissues. At the structural level, contraction relies on sliding
                filament theory, where protein filaments (primarily actin and
                myosin) interact in response to calcium release and ATP
                consumption.
              </p>

              <div className="p-4 rounded-2xl bg-red-50/80 inset-shadow-sm border border-white/60 text-xs text-[#1F365C]/90 leading-relaxed flex gap-3">
                <BadgeInfo className="w-4 h-4 text-[#A71627] shrink-0 mt-0.5" />
                <span>
                  <strong>Important Note:</strong> Cardiac muscle tissue lacks
                  the ability to undergo significant cell division or repair.
                  Because functional heart muscle lost to ischemia or necrosis
                  (such as during a myocardial infarction) is replaced by
                  non-contractile scar tissue
                </span>
              </div>
            </article>
          </div>
        </section>

        {/* Electrical Properties of Cardiac Muscle */}

        <header className="mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#1F365C] leading-[1.15] max-w-4xl">
            Electrical Properties of Cardiac Muscle
          </h2>
        </header>

        {/* Section: Overview */}
        <section className="mb-20">
          <div className="rounded-3xl border border-white/40 bg-white backdrop-blur-xl shadow-xl p-8 sm:p-12">
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
                    <CircleCheck
                      size={20}
                      className="text-[#A71627] shrink-0"
                    />

                    <span className="text-[#1F365C]">{item.title}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Key Takeaways */}
        <section className="mb-20">
          <div className="rounded-3xl backdrop-blur-xl border border-white/40 bg-white shadow-xl p-8 sm:p-12 transition-all hover:-translate-y-1 duration-3xl">
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
