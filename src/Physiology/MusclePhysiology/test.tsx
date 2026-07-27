import React, { useState, useCallback } from "react";
import {
  Stethoscope,
  Activity,
  Zap,
  Droplets,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

interface Phase {
  id: number;
  name: string;
  shortName: string;
  title: string;
  voltage: string;
  ions: string[];
  currents: string[];
  description: React.ReactNode;
  clinicalTip: string;
  physiological: string;
  icon: React.ReactNode;
  bgColor: string;
  accentColor: string;
}

// ENHANCED PHASE DATA WITH MEDICAL ACCURACY
const phases: Phase[] = [
  {
    id: 0,
    name: "Phase 0",
    shortName: "Depolarization",
    title: "Rapid Depolarization",
    voltage: "+52 mV (Peak)",
    ions: ["Na⁺ (in)", "Ca²⁺ (minimal)"],
    currents: ["I_Na (rapid sodium)", "I_Cal (calcium L-type)"],
    description: (
      <div className="space-y-4">
        <p className="text-sm leading-relaxed text-[#1F365C]/80">
          The action potential begins when the membrane potential reaches{" "}
          <strong>threshold (~-65 mV)</strong>. Fast sodium channels open
          rapidly, allowing massive Na⁺ influx into the cardiomyocyte.
        </p>
        <p className="text-sm leading-relaxed text-[#1F365C]/80">
          This generates the <strong>positive slope</strong> of the action
          potential, reaching a peak of approximately
          <strong> +52 mV</strong>. The rapid depolarization phase is critical
          for electrical propagation through the ventricle.
        </p>
        <div className="bg-white/40 backdrop-blur-sm p-3 rounded-lg border border-white/30 mt-3">
          <p className="text-xs font-semibold text-[#A71627] uppercase tracking-wider mb-2">
            Key Features:
          </p>
          <ul className="text-xs text-[#1F365C]/70 space-y-1">
            <li>
              • <strong>Duration:</strong> ~1-2 ms
            </li>
            <li>
              • <strong>Slope (dV/dt):</strong> 100-200 V/s (very steep)
            </li>
            <li>
              • <strong>Na⁺ conductance:</strong> Increases ~600-fold
            </li>
          </ul>
        </div>
      </div>
    ),
    clinicalTip:
      "Abnormal Phase 0 slope indicates conduction blocks or severe hyperkalemia. Class I antiarrhythmic drugs (Na⁺ channel blockers) reduce the slope.",
    physiological:
      "Enables rapid electrical conduction throughout the ventricular myocardium, essential for coordinated contraction.",
    icon: <TrendingUp className="w-5 h-5" />,
    bgColor: "from-red-50 to-red-50/50",
    accentColor: "#EF4444",
  },
  {
    id: 1,
    name: "Phase 1",
    shortName: "Initial Repolarization",
    title: "Early Repolarization & Notch",
    voltage: "~+20 mV",
    ions: ["K⁺ (out)", "Cl⁻ (out)", "Na⁺ (in declining)"],
    currents: ["I_to (transient outward)", "I_Ka", "I_Kur"],
    description: (
      <div className="space-y-4">
        <p className="text-sm leading-relaxed text-[#1F365C]/80">
          As fast Na⁺ channels inactivate,{" "}
          <strong>transient outward K⁺ currents</strong> become active. This
          causes the characteristic{" "}
          <strong>notch or "spike-and-dome" configuration</strong> seen on the
          action potential waveform.
        </p>
        <p className="text-sm leading-relaxed text-[#1F365C]/80">
          The voltage rapidly falls from the peak (+52 mV) to approximately{" "}
          <strong>+20 mV</strong>, creating a brief phase of early
          repolarization before the plateau stabilizes.
        </p>
        <div className="bg-white/40 backdrop-blur-sm p-3 rounded-lg border border-white/30 mt-3">
          <p className="text-xs font-semibold text-[#A71627] uppercase tracking-wider mb-2">
            Clinical Note:
          </p>
          <p className="text-xs text-[#1F365C]/70">
            The notch is <strong>more prominent in epicardial cells</strong>{" "}
            than endocardial cells. Early repolarization patterns on ECG can be
            benign or pathological depending on context.
          </p>
        </div>
      </div>
    ),
    clinicalTip:
      "Enhanced I_to current (seen in athletes or certain genetic conditions) can create prominent J waves on ECG, sometimes called 'Brugada-like' pattern.",
    physiological:
      "Helps repolarize the myocardium back to baseline while maintaining membrane excitability for the next phase.",
    icon: <TrendingDown className="w-5 h-5" />,
    bgColor: "from-orange-50 to-orange-50/50",
    accentColor: "#F97316",
  },
  {
    id: 2,
    name: "Phase 2",
    shortName: "Plateau Phase",
    title: "Sustained Plateau - Contraction Phase",
    voltage: "~+10 to -10 mV",
    ions: ["Ca²⁺ (in)", "K⁺ (out, slow)"],
    currents: [
      "I_Ca-L (L-type calcium)",
      "I_Ks (slow potassium)",
      "I_Kr (rapid potassium)",
    ],
    description: (
      <div className="space-y-4">
        <p className="text-sm leading-relaxed text-[#1F365C]/80">
          The <strong>plateau phase is the longest</strong>, lasting 200-300 ms.
          It's characterized by a balance between inward{" "}
          <strong>Ca²⁺ current (L-type channels)</strong> and outward{" "}
          <strong>K⁺ currents</strong>. The voltage remains relatively constant,
          providing the{" "}
          <strong>
            sustained depolarization needed for myocardial contraction
          </strong>
          .
        </p>
        <p className="text-sm leading-relaxed text-[#1F365C]/80">
          The influx of Ca²⁺ triggers the{" "}
          <strong>
            ryanodine receptor (RyR2) on the sarcoplasmic reticulum
          </strong>
          , releasing intracellular Ca²⁺ stores—the mechanism of
          excitation-contraction coupling.
        </p>
        <div className="bg-white/40 backdrop-blur-sm p-3 rounded-lg border border-white/30 mt-3">
          <p className="text-xs font-semibold text-[#A71627] uppercase tracking-wider mb-2">
            Energetics:
          </p>
          <ul className="text-xs text-[#1F365C]/70 space-y-1">
            <li>
              • <strong>Duration:</strong> 200-300 ms (longest phase)
            </li>
            <li>
              • <strong>Ca²⁺-induced contraction:</strong> Thick/thin filament
              interaction
            </li>
            <li>
              • <strong>ATP consumption:</strong> Peak energy demand phase
            </li>
          </ul>
        </div>
      </div>
    ),
    clinicalTip:
      "Calcium channel blockers (diltiazem, verapamil) shorten the plateau and reduce contractility. Long QT syndromes often affect Phase 2 duration, increasing arrhythmia risk.",
    physiological:
      "Critical for maintaining cardiac contraction; without this prolonged depolarization, the heart wouldn't generate sufficient force.",
    icon: <Activity className="w-5 h-5" />,
    bgColor: "from-purple-50 to-purple-50/50",
    accentColor: "#8B5CF6",
  },
  {
    id: 3,
    name: "Phase 3",
    shortName: "Rapid Repolarization",
    title: "Rapid Repolarization & Recovery",
    voltage: "-30 mV → -90 mV",
    ions: ["K⁺ (out rapidly)", "Ca²⁺ (inactivation)"],
    currents: [
      "I_Kr (rapid delayed rectifier)",
      "I_Ks (slow delayed rectifier)",
      "I_K1 (inward rectifier)",
    ],
    description: (
      <div className="space-y-4">
        <p className="text-sm leading-relaxed text-[#1F365C]/80">
          As <strong>L-type Ca²⁺ channels inactivate</strong>, the{" "}
          <strong>delayed rectifier K⁺ currents (I_Kr and I_Ks)</strong>
          dominate. This triggers <strong>rapid repolarization</strong> back
          toward the resting potential, approximately
          <strong> -90 mV</strong>.
        </p>
        <p className="text-sm leading-relaxed text-[#1F365C]/80">
          The rapid voltage change reopens the fast Na⁺ channels toward the end
          of Phase 3, preparing the cell for the next heartbeat. This is the{" "}
          <strong>relative refractory period</strong>—a stronger stimulus can
          trigger another action potential.
        </p>
        <div className="bg-white/40 backdrop-blur-sm p-3 rounded-lg border border-white/30 mt-3">
          <p className="text-xs font-semibold text-[#A71627] uppercase tracking-wider mb-2">
            Conduction Details:
          </p>
          <ul className="text-xs text-[#1F365C]/70 space-y-1">
            <li>
              • <strong>Duration:</strong> ~100-150 ms
            </li>
            <li>
              • <strong>Repolarization rate:</strong> Faster than depolarization
            </li>
            <li>
              • <strong>Action potential duration (APD):</strong> 250-350 ms
              total
            </li>
          </ul>
        </div>
      </div>
    ),
    clinicalTip:
      "Mutations in hERG (I_Kr) cause Long QT Syndrome Type 2, increasing sudden cardiac death risk. Antiarrhythmics that block I_Kr can dangerously prolong QT interval.",
    physiological:
      "Restores the membrane to resting state, allowing the cell to reset for the next heartbeat and regulating heart rate.",
    icon: <TrendingDown className="w-5 h-5" />,
    bgColor: "from-cyan-50 to-cyan-50/50",
    accentColor: "#06B6D4",
  },
  {
    id: 4,
    name: "Phase 4",
    shortName: "Resting Potential",
    title: "Diastolic Resting Membrane Potential",
    voltage: "-90 mV (stable)",
    ions: ["K⁺ (equilibrium)", "Na⁺ (pumped out)"],
    currents: ["I_K1 (inward rectifier)", "Na⁺/K⁺-ATPase (pump current)"],
    description: (
      <div className="space-y-4">
        <p className="text-sm leading-relaxed text-[#1F365C]/80">
          At rest, the membrane potential stabilizes at approximately{" "}
          <strong>-90 mV</strong>. The{" "}
          <strong>inward rectifier K⁺ channels (I_K1)</strong> maintain this
          potential by allowing K⁺ efflux, balanced by the{" "}
          <strong>Na⁺/K⁺-ATPase pump</strong>
          that extrudes Na⁺ and retrieves K⁺.
        </p>
        <p className="text-sm leading-relaxed text-[#1F365C]/80">
          In <strong>nodal cells</strong> (SA and AV nodes), Phase 4 is not flat
          but shows <strong>slow diastolic depolarization</strong>, allowing
          these cells to spontaneously generate heartbeats. Ventricular myocytes
          have stable Phase 4, requiring external stimuli.
        </p>
        <div className="bg-white/40 backdrop-blur-sm p-3 rounded-lg border border-white/30 mt-3">
          <p className="text-xs font-semibold text-[#A71627] uppercase tracking-wider mb-2">
            Ion Balance:
          </p>
          <ul className="text-xs text-[#1F365C]/70 space-y-1">
            <li>
              • <strong>[K⁺] inside:</strong> ~140 mM
            </li>
            <li>
              • <strong>[K⁺] outside:</strong> ~5 mM
            </li>
            <li>
              • <strong>[Na⁺] inside:</strong> ~10 mM (kept low by pump)
            </li>
            <li>
              • <strong>ATP cost:</strong> ~30% of cell's total energy
            </li>
          </ul>
        </div>
      </div>
    ),
    clinicalTip:
      "Hyperkalemia (elevated K⁺) depolarizes the resting potential toward -70 mV, reducing excitability and causing peaked T waves. Severe hyperkalemia can cause cardiac arrest.",
    physiological:
      "Maintains cellular readiness for excitation and prevents spontaneous ectopic beats in ventricular myocytes.",
    icon: <Activity className="w-5 h-5" />,
    bgColor: "from-green-50 to-green-50/50",
    accentColor: "#10B981",
  },
];

export default function tests() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const activePhase = phases[activeIndex];

  const handlePhaseChange = useCallback(
    (index: number) => {
      if (index === activeIndex) return;
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex(index);
        setIsAnimating(false);
      }, 300);
    },
    [activeIndex],
  );

  return (
    <section
      id="electrical-properties"
      className="w-full min-h-screen bg-[#FDF8F5] text-[#1F365C] py-16 px-6 md:px-12 lg:px-24 font-sans selection:bg-[#A71627]/10 selection:text-[#A71627]"
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        {/* HEADER SECTION */}
        <header className="w-full border-b border-[#1F365C]/10 pb-6">
          <div className="flex items-center gap-3 mb-3">
            <Activity className="w-7 h-7 text-[#A71627]" />
            <p className="text-xs font-bold tracking-[0.2em] text-[#A71627] uppercase">
              Learning Outcome 2
            </p>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight mb-3">
            Ventricular Action Potential Phases
          </h2>
          <p className="text-sm text-[#1F365C]/70 leading-relaxed max-w-2xl">
            Understanding the five phases of the ventricular cardiomyocyte
            action potential is fundamental to grasping cardiac
            electrophysiology and arrhythmia mechanisms.
          </p>
        </header>

        {/* PHASE SELECTOR BUTTONS */}
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2 p-2 bg-white/30 backdrop-blur-xl border border-white/40 rounded-2xl shadow-xl">
            {phases.map((phase, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={phase.id}
                  onClick={() => handlePhaseChange(index)}
                  className={`
                    flex-1 min-w-[100px] sm:min-w-[120px] py-3 px-3 sm:px-4 rounded-xl text-xs sm:text-sm 
                    font-semibold transition-all duration-300 transform
                    focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A71627]
                    ${
                      isActive
                        ? "bg-[#A71627] text-white shadow-lg scale-105"
                        : "text-[#1F365C]/70 bg-white/40 hover:bg-white/60 hover:text-[#1F365C] hover:shadow-md"
                    }
                  `}
                >
                  <span className="block font-bold text-lg">{phase.id}</span>
                  <span className="block text-[10px] sm:text-xs leading-tight">
                    {phase.shortName}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center items-center gap-2 px-4">
            {phases.map((phase, index) => {
              const isActive = index === activeIndex;
              const isPassed = index < activeIndex;
              return (
                <div
                  key={`progress-${phase.id}`}
                  className="flex items-center gap-2"
                >
                  <div
                    className={`
                      w-2.5 h-2.5 rounded-full transition-all duration-500 border-2
                      ${
                        isActive
                          ? "bg-[#A71627] border-[#A71627] scale-125 shadow-md"
                          : isPassed
                            ? "bg-[#A71627]/50 border-[#A71627]/50"
                            : "bg-[#FDF8F5] border-[#1F365C]/20"
                      }
                    `}
                  />
                  {index < phases.length - 1 && (
                    <div
                      className={`w-6 h-0.5 transition-all duration-500 ${
                        isPassed || isActive
                          ? "bg-[#A71627]/40"
                          : "bg-[#1F365C]/10"
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* MAIN CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT: PHASE INFO & DESCRIPTION */}
          <div className="lg:col-span-2 space-y-6">
            {/* Phase Header Card */}
            <div
              className={`
                bg-gradient-to-br ${activePhase.bgColor} backdrop-blur-xl border border-white/40 
                rounded-2xl p-6 shadow-lg transition-all duration-300
                ${isAnimating ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0"}
              `}
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-12 h-12 rounded-xl text-white flex items-center justify-center shadow-md flex-shrink-0"
                  style={{ backgroundColor: activePhase.accentColor }}
                >
                  {activePhase.icon}
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#A71627] mb-1">
                    {activePhase.name}
                  </p>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1F365C] mb-1">
                    {activePhase.title}
                  </h3>
                  <p className="text-sm font-semibold text-[#A71627]">
                    {activePhase.voltage}
                  </p>
                </div>
              </div>

              {/* Voltage & Duration Visual */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/30">
                <div className="bg-white/40 backdrop-blur-sm p-3 rounded-lg border border-white/30">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#A71627] mb-1">
                    Peak Voltage
                  </p>
                  <p className="text-lg font-bold text-[#1F365C]">
                    {activePhase.voltage}
                  </p>
                </div>
                <div className="bg-white/40 backdrop-blur-sm p-3 rounded-lg border border-white/30">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#A71627] mb-1">
                    Physiological Role
                  </p>
                  <p className="text-xs text-[#1F365C] font-medium">
                    {activePhase.physiological}
                  </p>
                </div>
              </div>
            </div>

            {/* Description & Details */}
            <div
              className={`
                transition-all duration-300
                ${isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}
              `}
            >
              {activePhase.description}
            </div>

            {/* Ion & Current Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Ion Movements */}
              <div className="bg-white/30 backdrop-blur-xl border border-white/40 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                <div className="flex items-center gap-2 mb-3">
                  <Droplets className="w-4 h-4 text-blue-600" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#A71627]">
                    Ion Movements
                  </h4>
                </div>
                <div className="space-y-2">
                  {activePhase.ions.map((ion, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      <span className="text-xs font-medium text-[#1F365C]">
                        {ion}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Channels & Currents */}
              <div className="bg-white/30 backdrop-blur-xl border border-white/40 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="w-4 h-4 text-amber-600" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#A71627]">
                    Currents & Channels
                  </h4>
                </div>
                <div className="space-y-2">
                  {activePhase.currents.map((current, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      <span className="text-xs font-medium text-[#1F365C]">
                        {current}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Clinical Tip Card - Full Width */}
            <div className="bg-white/30 backdrop-blur-xl border border-white/40 rounded-2xl p-5 shadow-lg relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
              <div
                className="absolute -right-6 -top-6 w-32 h-32 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                style={{ backgroundColor: activePhase.accentColor }}
              />
              <div className="flex gap-4 relative z-10">
                <div className="shrink-0 w-10 h-10 rounded-full bg-[#A71627]/15 flex items-center justify-center text-[#A71627]">
                  <Stethoscope size={20} strokeWidth={2.5} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#A71627] uppercase tracking-[0.1em] mb-2">
                    Clinical Significance
                  </h4>
                  <p className="text-sm font-medium text-[#1F365C]/85 leading-relaxed">
                    {activePhase.clinicalTip}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: VISUAL SUMMARY CARD */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div
                className={`
                  bg-gradient-to-br ${activePhase.bgColor} backdrop-blur-xl border border-white/40 
                  rounded-2xl p-6 shadow-lg transition-all duration-300
                  ${isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"}
                `}
              >
                {/* Phase Number Large */}
                <div className="text-center mb-6">
                  <div
                    className="w-20 h-20 rounded-2xl text-white flex items-center justify-center text-4xl font-black shadow-lg mx-auto mb-3"
                    style={{ backgroundColor: activePhase.accentColor }}
                  >
                    {activePhase.id}
                  </div>
                  <h3 className="text-lg font-bold text-[#1F365C]">
                    {activePhase.name}
                  </h3>
                  <p className="text-xs text-[#A71627] font-semibold mt-1 uppercase tracking-wider">
                    {activePhase.title}
                  </p>
                </div>

                {/* Summary Stats Box */}
                <div className="space-y-3 bg-white/40 backdrop-blur-sm p-4 rounded-xl border border-white/30 mb-4">
                  <div className="text-center pb-3 border-b border-white/30">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#A71627] mb-1">
                      Membrane Voltage
                    </p>
                    <p className="text-2xl font-bold text-[#1F365C]">
                      {activePhase.voltage}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-center text-xs">
                    <div className="bg-blue-50/60 rounded-lg p-2 border border-blue-100/50">
                      <p className="font-bold text-blue-700 mb-1">Ions</p>
                      <p className="text-[10px] text-blue-600">
                        {activePhase.ions.length} active
                      </p>
                    </div>
                    <div className="bg-amber-50/60 rounded-lg p-2 border border-amber-100/50">
                      <p className="font-bold text-amber-700 mb-1">Channels</p>
                      <p className="text-[10px] text-amber-600">
                        {activePhase.currents.length} types
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Description */}
                <div className="bg-white/30 rounded-xl p-3 border border-white/20">
                  <p className="text-xs leading-relaxed text-[#1F365C]/80">
                    <span className="font-bold text-[#A71627]">Summary:</span>{" "}
                    {activePhase.title.toLowerCase()}.{" "}
                    {activePhase.physiological}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER INFO SECTION */}
        <div className="mt-8 pt-8 border-t border-[#1F365C]/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-[#1F365C]/70 leading-relaxed">
            <div>
              <p className="font-bold text-[#1F365C] mb-2">
                Action Potential Duration (APD)
              </p>
              <p>
                The complete cycle from Phase 0 to Phase 4 typically lasts{" "}
                <strong>250-350 ms</strong> in ventricular myocytes, with Phase
                2 (plateau) comprising the majority of the duration.
              </p>
            </div>
            <div>
              <p className="font-bold text-[#1F365C] mb-2">
                Refractory Periods
              </p>
              <p>
                The <strong>absolute refractory period</strong> (during Phases
                0-2) prevents re-excitation. The
                <strong> relative refractory period</strong> (during Phase 3)
                allows stimulation with suprathreshold current.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
