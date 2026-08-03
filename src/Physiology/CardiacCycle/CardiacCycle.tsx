import { Link } from "react-router-dom";
import {
  Activity,
  ArrowLeft,
  CircleCheck,
  BookOpen,
  BadgeInfo,
  Stethoscope,
  ShieldAlert,
  Zap,
  ArrowUpDown,
  LogIn,
  ExternalLink,
  ArrowDownRight,
  Lock,
  ArrowUpRight,
  Gauge,
} from "lucide-react";
import CardiacCycleGraph from "./CardiacCycleGraph";
import React, { useState, useEffect } from "react";
import CardiacCycleGame from "./CardiacCycleGame";
import CardiacCycleDashboard from "./CardiacCycleDashboard";
import HeartSound from "./HeartSound";

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

// ============================================================================
// DATA CONFIGURATIONS
// ============================================================================

interface Section {
  id: string;
  title: string;
  image: string;
  description: React.ReactNode;
  clinicalTip: string;
}

const sections: Section[] = [
  {
    id: "cardiac-cycle",
    title: "Cardiac Cycle: Systole vs. Diastole (Macro View)",
    image: "/CardiacContraction.png",
    description: (
      <div className="space-y-6 text-slate-800">
        {/* Intro Summary */}
        <p className="text-base text-slate-600 leading-relaxed">
          A macro view comparison of <strong>Ventricular Systole</strong> and{" "}
          <strong>Ventricular Diastole</strong> throughout the 0.8-second
          cardiac cycle (at 75 bpm).
        </p>

        {/* Systole vs. Diastole Table */}
        <div className="rounded-xl border border-red-200 bg-red-50/40 overflow-hidden shadow-sm">
          <div className="bg-red-900 px-4 py-3 text-white flex items-center gap-2">
            <Activity className="h-5 w-5 text-red-300" />
            <h3 className="font-semibold text-lg">
              Macro View: Systole vs. Diastole
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-red-100/70 text-red-950 font-semibold border-b border-red-200">
                <tr>
                  <th className="p-3">Feature</th>
                  <th className="p-3">Ventricular Systole</th>
                  <th className="p-3">Ventricular Diastole</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-red-100">
                <tr className="hover:bg-red-50/60 transition-colors">
                  <td className="p-3 font-semibold text-red-900">
                    Primary Function
                  </td>
                  <td className="p-3">Contraction & Ejection</td>
                  <td className="p-3">Relaxation & Filling</td>
                </tr>
                <tr className="hover:bg-red-50/60 transition-colors">
                  <td className="p-3 font-semibold text-red-900">
                    Duration (@ 75 bpm)
                  </td>
                  <td className="p-3 font-medium text-red-700">0.3 Seconds</td>
                  <td className="p-3 font-medium text-red-700">
                    0.5 Seconds (0.8s total cycle)
                  </td>
                </tr>
                <tr className="hover:bg-red-50/60 transition-colors">
                  <td className="p-3 font-semibold text-red-900">
                    Concurrent Atrial Status
                  </td>
                  <td className="p-3">
                    Atrial Diastole (0.7s total) runs concurrently
                  </td>
                  <td className="p-3">
                    Atrial Systole (0.1s duration) occurs to top off ventricular
                    filling
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Golden Rule Card */}
        <div className="rounded-xl border border-red-300 bg-red-100/60 p-4 flex items-start gap-3">
          <ShieldAlert className="h-5 w-5 text-red-700 shrink-0 mt-0.5" />
          <div className="text-sm text-red-950 space-y-1">
            <h4 className="font-bold uppercase tracking-wide text-xs text-red-800">
              The Golden Rule
            </h4>
            <p>
              The atria and ventricles{" "}
              <strong>never contract at the same time</strong>.
            </p>
          </div>
        </div>
      </div>
    ),

    clinicalTip:
      "Exam tip: Remember the timing at 75 bpm — Ventricular Systole (0.3s) + Ventricular Diastole (0.5s) = 0.8s total. Atria and ventricles never contract simultaneously.",
  },
  {
    id: "cardiac-conduction",
    title: "The Conduction Pathway: Spark, Pause, Squeeze",
    image: "/CardiacContraction.png",
    description: (
      <div className="space-y-6 text-slate-800">
        {/* Intro Summary */}
        <p className="text-base text-slate-600 leading-relaxed">
          The electrical conduction system initiates depolarization and sets the
          pace for the heart, dictating when the heart moves through three
          primary steps.
        </p>

        {/* Conduction Pathway Table */}
        <div className="rounded-xl border border-red-200 bg-red-50/40 overflow-hidden shadow-sm">
          <div className="bg-red-900 px-4 py-3 text-white flex items-center gap-2">
            <Zap className="h-5 w-5 text-red-300" />
            <h3 className="font-semibold text-lg">The Conduction Pathway</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-red-100/70 text-red-950 font-semibold border-b border-red-200">
                <tr>
                  <th className="p-3">Step</th>
                  <th className="p-3">Conduction Mechanism & Function</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-red-100">
                <tr className="hover:bg-red-50/60 transition-colors">
                  <td className="p-3 font-semibold text-red-900 whitespace-nowrap">
                    Step 1: The Spark
                  </td>
                  <td className="p-3">
                    Spontaneous depolarization (pacemaker potential). Sets the
                    innate rhythm.
                  </td>
                </tr>
                <tr className="hover:bg-red-50/60 transition-colors">
                  <td className="p-3 font-semibold text-red-900 whitespace-nowrap">
                    Step 2: The Pause
                  </td>
                  <td className="p-3">
                    Specialized for slow conduction. Delays the signal to allow
                    atria to fully empty into ventricles before they contract.
                  </td>
                </tr>
                <tr className="hover:bg-red-50/60 transition-colors">
                  <td className="p-3 font-semibold text-red-900 whitespace-nowrap">
                    Step 3: The Squeeze
                  </td>
                  <td className="p-3">
                    Specialized for fast conduction. Spreads the depolarization
                    wave rapidly from the apex upward to eject blood.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    ),

    clinicalTip:
      "Exam tip: The Pause (slow conduction) allows complete atrial emptying into the ventricles, while The Squeeze (fast conduction) rapidly spreads depolarization from the apex upward for blood ejection.",
  },
  {
    id: "reading-ecg-map",
    title: "Reading the Electrical Map (ECG)",
    image: "/CardiacContraction.png",
    description: (
      <div className="space-y-6 text-slate-800">
        <p className="text-base text-slate-600 leading-relaxed">
          The Electrocardiogram (ECG) visualizes the electrical activity of the
          cardiac cycle, mapping atrial and ventricular electrical events over
          time.
        </p>

        {/* Interactive Recharts Graph Component */}
        <CardiacCycleGraph />

        {/* ECG Components Table */}
        <div className="rounded-xl border border-red-200 bg-red-50/40 overflow-hidden shadow-sm">
          <div className="bg-red-900 px-4 py-3 text-white flex items-center gap-2">
            <Activity className="h-5 w-5 text-red-300" />
            <h3 className="font-semibold text-lg">ECG Waveforms & Segments</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-red-100/70 text-red-950 font-semibold border-b border-red-200">
                <tr>
                  <th className="p-3">ECG Component</th>
                  <th className="p-3">Electrical Event</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-red-100">
                <tr className="hover:bg-red-50/60 transition-colors">
                  <td className="p-3 font-semibold text-red-900 whitespace-nowrap">
                    P Wave
                  </td>
                  <td className="p-3">
                    Atrial depolarization (SA node firing).
                  </td>
                </tr>
                <tr className="hover:bg-red-50/60 transition-colors">
                  <td className="p-3 font-semibold text-red-900 whitespace-nowrap">
                    QRS Complex
                  </td>
                  <td className="p-3">
                    Ventricular depolarization (Note: Atrial repolarization is
                    hidden here).
                  </td>
                </tr>
                <tr className="hover:bg-red-50/60 transition-colors">
                  <td className="p-3 font-semibold text-red-900 whitespace-nowrap">
                    T Wave
                  </td>
                  <td className="p-3">
                    Ventricular repolarization (preparing for the next cycle).
                  </td>
                </tr>
                <tr className="hover:bg-red-50/60 transition-colors">
                  <td className="p-3 font-semibold text-red-900 whitespace-nowrap">
                    PR Segment
                  </td>
                  <td className="p-3">
                    Isoelectric segment between atrial depolarization and
                    ventricular depolarization.
                  </td>
                </tr>
                <tr className="hover:bg-red-50/60 transition-colors">
                  <td className="p-3 font-semibold text-red-900 whitespace-nowrap">
                    ST Segment
                  </td>
                  <td className="p-3">
                    Isoelectric interval between ventricular depolarization and
                    repolarization.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    ),

    clinicalTip:
      "Exam tip: Atrial repolarization occurs at the same time as ventricular depolarization but is visually masked on the ECG by the larger QRS complex.",
  },
];

interface Section2 {
  id: string;
  title: string;
  image: string;
  description: React.ReactNode;
  clinicalTip: string;
}

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

  const [isImageOpen, setIsImageOpen] = useState(false);

  const sections2: Section2[] = [
    {
      id: "valve-pressure-gradients",
      title: "Heart Valve Mechanics: Pressure Gradients",
      image: "/CardiacContraction.png",
      description: (
        <div className="space-y-6 text-slate-800">
          {/* Overview Explanation */}
          <p className="text-base text-slate-600 leading-relaxed">
            Heart valves do not have motors or active muscles. They are{" "}
            <strong>passive, one-way doors</strong> that open and close based
            entirely on differences in blood pressure (pressure gradients).
          </p>

          {/* Valve Mechanics Table */}
          <div className="rounded-xl border border-red-200 bg-red-50/40 overflow-hidden shadow-sm">
            <div className="bg-red-900 px-4 py-3 text-white flex items-center gap-2">
              <ArrowUpDown className="h-5 w-5 text-red-300" />
              <h3 className="font-semibold text-lg">
                How Heart Valves Open and Work
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-red-100/70 text-red-950 font-semibold border-b border-red-200">
                  <tr>
                    <th className="p-3">Valve Type</th>
                    <th className="p-3">Specific Valves</th>
                    <th className="p-3">Condition for Opening</th>
                    <th className="p-3">Resulting Blood Flow</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-red-100">
                  <tr className="hover:bg-red-50/60 transition-colors">
                    <td className="p-3 font-semibold text-red-900 whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        <LogIn className="h-4 w-4 text-red-600" />
                        AV Valves (Entry Valves)
                      </div>
                    </td>
                    <td className="p-3">Mitral & Tricuspid Valves</td>
                    <td className="p-3 font-medium text-red-800">
                      Atrial Pressure &gt; Ventricular Pressure
                    </td>
                    <td className="p-3">
                      Blood flows from the atrium to fill the ventricle.
                    </td>
                  </tr>
                  <tr className="hover:bg-red-50/60 transition-colors">
                    <td className="p-3 font-semibold text-red-900 whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        <ExternalLink className="h-4 w-4 text-red-600" />
                        Semilunar Valves (Exit Valves)
                      </div>
                    </td>
                    <td className="p-3">Aortic & Pulmonary Valves</td>
                    <td className="p-3 font-medium text-red-800">
                      Ventricular Pressure &gt; Aortic/Arterial Pressure (&gt;80
                      mmHg)
                    </td>
                    <td className="p-3">
                      Blood is pumped out into the main arteries to the body.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ),

      clinicalTip:
        "Exam tip: Remember that blood always flows from high pressure to low pressure. When pressure behind a valve is higher than the pressure in front of it, the valve is pushed open.",
    },
    {
      id: "isovolumetric-phases",
      title: "The Locked Room: Isovolumetric Phases",
      image: "/CardiacCycleVolumePressure.jpg",
      description: (
        <div className="space-y-6 text-slate-800">
          {/* Slide Concept Banner */}
          <div className="rounded-xl border border-red-200 bg-red-50/70 p-4 shadow-sm">
            <div className="flex items-center gap-2 text-red-900 font-semibold mb-1">
              <Lock className="h-5 w-5 text-red-700" />
              <h3>The Locked Room Concept</h3>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              There are two moments in the 0.8s cycle where all four valves are{" "}
              <strong>closed simultaneously</strong>. Volume remains constant,
              but <strong>pressure changes violently</strong>.
            </p>
          </div>

          {/* Image Container */}

          <button
            type="button"
            onClick={() => setIsImageOpen(true)} // Now in scope!
            className="group relative flex w-full items-center justify-center overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <img
              src="/CardiacCycleVolumePressure.jpg"
              alt="The Locked Room Diagram"
              className="h-48 w-full max-w-xs object-contain"
            />
          </button>
          <p className="text-sm text-center text-[#1F365C]/80 leading-loose ">
            click to view
          </p>

          {/* Isovolumetric Phases Comparison Table */}
          <div className="rounded-xl border border-red-200 bg-red-50/40 overflow-hidden shadow-sm">
            <div className="bg-red-900 px-4 py-3 text-white flex items-center gap-2">
              <Gauge className="h-5 w-5 text-red-300" />
              <h3 className="font-semibold text-lg">
                Isovolumetric Contraction vs. Relaxation
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-red-100/70 text-red-950 font-semibold border-b border-red-200">
                  <tr>
                    <th className="p-3">Feature</th>
                    <th className="p-3">Isovolumetric Contraction</th>
                    <th className="p-3">Isovolumetric Relaxation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-red-100">
                  <tr className="hover:bg-red-50/60 transition-colors">
                    <td className="p-3 font-semibold text-red-900 whitespace-nowrap">
                      Duration
                    </td>
                    <td className="p-3 font-medium text-red-800">
                      0.05 Seconds
                    </td>
                    <td className="p-3 font-medium text-red-800">
                      0.10 Seconds
                    </td>
                  </tr>
                  <tr className="hover:bg-red-50/60 transition-colors">
                    <td className="p-3 font-semibold text-red-900 whitespace-nowrap">
                      Muscle Action
                    </td>
                    <td className="p-3">
                      Muscle fibers exert isometric force but cannot
                      shorten[cite: 1].
                    </td>
                    <td className="p-3">Muscle relaxes in a sealed chamber.</td>
                  </tr>
                  <tr className="hover:bg-red-50/60 transition-colors">
                    <td className="p-3 font-semibold text-red-900 whitespace-nowrap">
                      Pressure Dynamics
                    </td>
                    <td className="p-3 text-red-700 font-semibold">
                      <div className="flex items-center gap-1">
                        <ArrowUpRight className="h-4 w-4" />
                        Pressure <strong>skyrockets</strong> to overcome the 80
                        mmHg aortic hurdle.
                      </div>
                    </td>
                    <td className="p-3 text-red-700 font-semibold">
                      <div className="flex items-center gap-1">
                        <ArrowDownRight className="h-4 w-4" />
                        Pressure <strong>plummets sharply</strong> to allow the
                        AV valve to open for the next filling phase.
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-red-50/60 transition-colors">
                    <td className="p-3 font-semibold text-red-900 whitespace-nowrap">
                      Valve Status
                    </td>
                    <td className="p-3 font-medium text-slate-800">
                      Mitral & Aortic Valves CLOSED
                    </td>
                    <td className="p-3 font-medium text-slate-800">
                      Mitral & Aortic Valves CLOSED
                    </td>
                  </tr>
                  <tr className="hover:bg-red-50/60 transition-colors">
                    <td className="p-3 font-semibold text-red-900 whitespace-nowrap">
                      Volume Status
                    </td>
                    <td className="p-3 font-bold text-slate-800">
                      Constant Volume
                    </td>
                    <td className="p-3 font-bold text-slate-800">
                      Constant Volume (150 mL)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ),

      clinicalTip:
        "Exam tip: Both entry (Mitral) and exit (Aortic) hatches are locked during these phases. Volume cannot change, so muscle contraction or relaxation causes extreme pressure spikes or drops.",
    },
    {
      id: "reading-ecg-map",
      title: "Reading the Electrical Map (ECG)",
      image: "/CardiacContraction.png",
      description: (
        <div className="space-y-6 text-slate-800">
          <p className="text-base text-slate-600 leading-relaxed">
            The Electrocardiogram (ECG) visualizes the electrical activity of
            the cardiac cycle, mapping atrial and ventricular electrical events
            over time.
          </p>

          {/* Interactive Recharts Graph Component */}
          <CardiacCycleGraph />

          {/* ECG Components Table */}
          <div className="rounded-xl border border-red-200 bg-red-50/40 overflow-hidden shadow-sm">
            <div className="bg-red-900 px-4 py-3 text-white flex items-center gap-2">
              <Activity className="h-5 w-5 text-red-300" />
              <h3 className="font-semibold text-lg">
                ECG Waveforms & Segments
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-red-100/70 text-red-950 font-semibold border-b border-red-200">
                  <tr>
                    <th className="p-3">ECG Component</th>
                    <th className="p-3">Electrical Event</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-red-100">
                  <tr className="hover:bg-red-50/60 transition-colors">
                    <td className="p-3 font-semibold text-red-900 whitespace-nowrap">
                      P Wave
                    </td>
                    <td className="p-3">
                      Atrial depolarization (SA node firing).
                    </td>
                  </tr>
                  <tr className="hover:bg-red-50/60 transition-colors">
                    <td className="p-3 font-semibold text-red-900 whitespace-nowrap">
                      QRS Complex
                    </td>
                    <td className="p-3">
                      Ventricular depolarization (Note: Atrial repolarization is
                      hidden here).
                    </td>
                  </tr>
                  <tr className="hover:bg-red-50/60 transition-colors">
                    <td className="p-3 font-semibold text-red-900 whitespace-nowrap">
                      T Wave
                    </td>
                    <td className="p-3">
                      Ventricular repolarization (preparing for the next cycle).
                    </td>
                  </tr>
                  <tr className="hover:bg-red-50/60 transition-colors">
                    <td className="p-3 font-semibold text-red-900 whitespace-nowrap">
                      PR Segment
                    </td>
                    <td className="p-3">
                      Isoelectric segment between atrial depolarization and
                      ventricular depolarization.
                    </td>
                  </tr>
                  <tr className="hover:bg-red-50/60 transition-colors">
                    <td className="p-3 font-semibold text-red-900 whitespace-nowrap">
                      ST Segment
                    </td>
                    <td className="p-3">
                      Isoelectric interval between ventricular depolarization
                      and repolarization.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ),

      clinicalTip:
        "Exam tip: Atrial repolarization occurs at the same time as ventricular depolarization but is visually masked on the ECG by the larger QRS complex.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeIndex2, setActiveIndex2] = useState(0);

  const [isAnimating, setIsAnimating] = useState(false);

  const activeSection = sections[activeIndex];
  const activeSection2 = sections2[activeIndex2];

  const handleSectionChange = (index: number) => {
    if (index === activeIndex) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsAnimating(false);
    }, 300);
  };

  const handleSection2Change = (index: number) => {
    if (index === activeIndex2) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex2(index);
      setIsAnimating(false);
    }, 300);
  };

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
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#1F365C] leading-[1.15] max-w-4xl"></h2>
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

        {/*Lo1 */}
        <section
          id="lo1"
          className="w-full min-h-screen bg-[#FDF8F5] text-[#1F365C] py-16 px-6 md:px-12 lg:px-24 font-sans selection:bg-[#A71627]/10 selection:text-[#A71627]"
        >
          <div className="max-w-4xl mx-auto flex flex-col gap-10">
            {/* FULL-WIDTH HEADER SECTION */}
            <header className="w-full border-b border-[#1F365C]/10 pb-5">
              <p className="text-xs font-bold tracking-[0.2em] text-[#A71627] uppercase mb-2">
                Learning Outcome 1
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight">
                Two System, One Cycle
              </h2>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative rounded-3xl border border-white/40 bg-white backdrop-blur-xl shadow-xl p-8 sm:p-12">
                <h2 className="mb-3 font-serif text-3xl font-medium text-[#1F365C]">
                  The Electrician
                </h2>
                <p>
                  The conduction system. Initiates depolarization and sets the
                  paces. Dictates when the heart moves.
                </p>
              </div>

              <div className=" relative rounded-3xl border border-white/40 bg-white backdrop-blur-xl shadow-xl p-8 sm:p-12">
                <h2 className="mb-3 font-serif text-3xl font-medium text-[#1F365C]">
                  The pumper
                </h2>
                <p>
                  The mechanical system. Muscular contraction, pressure grdient,
                  and one way valves. Dicattes how blood flow
                </p>
              </div>
            </div>

            <div className="max-w-7xl mx-auto">
              {/* Segmented Controls Container */}
              <div className="space-y-6 pb-6">
                <div className="flex flex-wrap gap-2 p-1.5 bg-white/30 backdrop-blur-xl border border-white/40 rounded-2xl shadow-xl">
                  {sections.map((section, index) => {
                    const isActive = activeIndex === index;
                    return (
                      <button
                        key={section.id}
                        onClick={() => handleSectionChange(index)}
                        className={`flex-1 min-w-[120px] py-2.5 px-4 rounded-xl text-sm font-medium transition-all duration-300 ${
                          isActive
                            ? "bg-[#A71627] text-white shadow-md transform -translate-y-0.5"
                            : "text-[#1F365C]/70 hover:bg-white/50 hover:text-[#1F365C] hover:shadow-sm"
                        }`}
                      >
                        {section.title}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* TWO-COLUMN CONTENT LAYOUT */}
              <div className="flex  lg:flex-row gap-12 lg:gap-16 items-start">
                {/* RIGHT COLUMN: Controls & Adaptive Layout */}
                <div className="w-full  flex  space-y-8">
                  {/* Dynamic Content Block */}
                  <div
                    className={`transition-all duration-300 ${isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}
                  >
                    <div className="mb-8 overflow-y-auto h-80 text-[#1F365C]/80 leading-relaxed text-base min-h-[160px]">
                      {activeSection.description}
                    </div>

                    {/* Clinical Tip Card */}
                    <div className="bg-white/30 backdrop-blur-xl border border-white/40 rounded-2xl p-5 shadow-lg relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
                      <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#A71627]/5 rounded-full blur-2xl group-hover:bg-[#A71627]/10 transition-colors duration-500" />
                      <div className="flex gap-4 relative z-10">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#A71627]/10 flex items-center justify-center text-[#A71627]">
                          <Stethoscope size={20} />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-[#A71627] uppercase tracking-wider mb-1">
                            Clinical Tip
                          </h4>
                          <p className="text-sm font-medium text-[#1F365C] leading-snug">
                            {activeSection.clinicalTip}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*Lo2 */}
        <section
          id="lo2"
          className="w-full min-h-screen bg-[#FDF8F5] text-[#1F365C] py-16 px-6 md:px-12 lg:px-24 font-sans selection:bg-[#A71627]/10 selection:text-[#A71627]"
        >
          <div className="max-w-4xl mx-auto flex flex-col gap-10 pb-8">
            {/* FULL-WIDTH HEADER SECTION */}
            <header className="w-full border-b border-[#1F365C]/10 pb-5">
              <p className="text-xs font-bold tracking-[0.2em] text-[#A71627] uppercase mb-2">
                Learning Outcome 2
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight">
                Pressure Gradient & Volume Changes
              </h2>
            </header>

            <div className="w-full max-w-6xl mx-auto p-4 space-y-6">
              {/* 1. Navigation Tabs */}
              <div className="flex flex-wrap gap-2 p-1.5 bg-white/30 backdrop-blur-xl border border-white/40 rounded-2xl shadow-xl">
                {sections2.map((section2, index) => {
                  const isActive = activeIndex2 === index;
                  return (
                    <button
                      key={section2.id}
                      type="button"
                      onClick={() => handleSection2Change(index)}
                      className={`flex-1 min-w-[120px] py-2.5 px-4 rounded-xl text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? "bg-[#A71627] text-white shadow-md transform -translate-y-0.5"
                          : "text-[#1F365C]/70 hover:bg-white/50 hover:text-[#1F365C] hover:shadow-sm"
                      }`}
                    >
                      {section2.title}
                    </button>
                  );
                })}
              </div>

              {/* 2. Active Section Content & Clinical Tip */}
              {sections2[activeIndex2] && (
                <div className="space-y-6 transition-all duration-300">
                  {/* Render JSX Description of the active tab */}
                  {sections2[activeIndex2].description}

                  {/* Clinical Tip Banner (if present in active section) */}
                  {/* Clinical Tip Card */}
                  <div className="bg-white/30 backdrop-blur-xl border border-white/40 rounded-2xl p-5 shadow-lg relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#A71627]/5 rounded-full blur-2xl group-hover:bg-[#A71627]/10 transition-colors duration-500" />
                    <div className="flex gap-4 relative z-10">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#A71627]/10 flex items-center justify-center text-[#A71627]">
                        <Stethoscope size={20} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#A71627] uppercase tracking-wider mb-1">
                          Clinical Tip
                        </h4>
                        <p className="text-sm font-medium text-[#1F365C] leading-snug">
                          {activeSection2.clinicalTip}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 3. Fullscreen Lightbox Modal */}
              {isImageOpen && (
                <div
                  className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4 transition-opacity"
                  onClick={() => setIsImageOpen(false)}
                >
                  <div
                    className="relative max-w-5xl max-h-[90vh] w-full flex items-center justify-center"
                    onClick={(e) => e.stopPropagation()} // Prevents closing when clicking on the image card itself
                  >
                    {/* Close Button */}
                    <button
                      type="button"
                      onClick={() => setIsImageOpen(false)}
                      className="absolute -top-12 right-0 rounded-full bg-white/20 p-2 text-white hover:bg-white/40 focus:outline-none"
                      aria-label="Close modal"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>

                    {/* Expanded Image */}
                    <img
                      src={"/CardiacCycleVolumePressure.jpg"}
                      alt="Fullscreen view"
                      className="max-h-[85vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          <CardiacCycleDashboard />
          <HeartSound />

          <header className="w-full border-b border-[#1F365C]/10 pb-5">
            <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight">
              Let's Test Your Knowledge !
            </h2>
          </header>
          <CardiacCycleGame />
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
