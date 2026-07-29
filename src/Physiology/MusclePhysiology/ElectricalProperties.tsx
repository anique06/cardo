import React, { useState } from "react";
import { Stethoscope } from "lucide-react";
import VentricularCardioAPGraph from "./VentricularCardioAPGraph";
import Game from "./Game";

interface Section {
  id: string;
  title: string;
  image: string;
  description: React.ReactNode;
  clinicalTip: string;
}

interface Section2 {
  id: string;
  title: string;
  image: string;
  description: React.ReactNode;
  clinicalTip: string;
}

const sections: Section[] = [
  {
    id: "plateauphase",
    title: "Plateau Phase (Phase 2)",
    image: "/PlateauPhase.png", // Replace with your image
    description: (
      <div className="space-y-4">
        <div>
          <p>
            The <strong>plateau phase (Phase 2)</strong> occurs in{" "}
            <strong>ventricular and atrial myocytes</strong> (non-pacemaker
            cells) and lasts approximately <strong>200–300 ms</strong>, making
            it much longer than the action potential of skeletal muscle.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-[#A71627]">Ionic Mechanism</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Ca²⁺ influx</strong> through{" "}
              <strong>L-type Ca²⁺ channels</strong>.
            </li>
            <li>
              <strong>K⁺ efflux</strong> through{" "}
              <strong>delayed rectifier K⁺ channels</strong>.
            </li>
            <li>
              These opposing currents keep the membrane potential near{" "}
              <strong>0 mV</strong>, producing the characteristic{" "}
              <strong>plateau</strong>.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-[#A71627]">
            Excitation–Contraction Coupling
          </h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Entering <strong>Ca²⁺</strong> activates <strong>RyR2</strong> on
              the sarcoplasmic reticulum.
            </li>
            <li>
              This causes{" "}
              <strong>Calcium-Induced Calcium Release (CICR)</strong>.
            </li>
            <li>
              Released <strong>Ca²⁺</strong> binds <strong>Troponin C</strong>,
              initiating cardiac muscle contraction.
            </li>
          </ul>
        </div>
      </div>
    ),
    clinicalTip:
      "Key concept: Ca²⁺ in through L-type channels → CICR via RyR2 → Troponin C activation → Cardiac contraction.",
  },
  {
    id: "refractoryperiods",
    title: "Refractory Periods",
    image: "/RefractoryPeriod.png", // Replace with your image
    description: (
      <div className="space-y-4">
        <div>
          <p>
            <strong>Refractory periods</strong> are intervals during which
            cardiac muscle cannot be easily re-excited. They ensure the heart
            contracts once per beat and prevent continuous stimulation.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-[#A71627]">
            Absolute / Effective Refractory Period (ARP/ERP)
          </h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Occurs:</strong> Phase <strong>0 → mid Phase 3</strong>.
            </li>
            <li>
              <strong>Mechanism:</strong> Fast <strong>Na⁺ channels</strong>{" "}
              remain inactivated after depolarization.
            </li>
            <li>
              <strong>Result:</strong> <strong>No new action potential</strong>{" "}
              can be generated, regardless of stimulus strength.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-[#A71627]">
            Relative Refractory Period (RRP)
          </h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Occurs:</strong> <strong>Late Phase 3</strong>.
            </li>
            <li>
              <strong>Mechanism:</strong> Some <strong>Na⁺ channels</strong>{" "}
              have recovered, but <strong>K⁺ efflux</strong> remains high.
            </li>
            <li>
              <strong>Result:</strong> Only a{" "}
              <strong>stronger-than-normal stimulus</strong> can trigger another
              action potential.
            </li>
          </ul>
        </div>
      </div>
    ),
    clinicalTip:
      "Exam tip: ARP = No stimulus can trigger an AP. RRP = Only a stronger-than-normal stimulus can trigger an AP.",
  },
  {
    id: "functionalimportance",
    title: "Functional Importance",
    image: "/FunctionalImportance.png", // Replace with your image
    description: (
      <div className="space-y-4">
        <div>
          <p>
            The <strong>long plateau phase and refractory period</strong> are
            essential for normal cardiac function, ensuring the heart pumps
            efficiently and maintains a regular rhythm.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-[#A71627]">1. Prevents Tetanus</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              The <strong>refractory period</strong> lasts almost as long as the
              cardiac contraction.
            </li>
            <li>
              Cardiac muscle <strong>cannot be re-excited</strong> before it
              relaxes.
            </li>
            <li>
              This allows <strong>ventricular filling</strong> before the next
              heartbeat.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-[#A71627]">
            2. Ensures Efficient Pumping
          </h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Promotes <strong>synchronized ventricular contraction</strong>.
            </li>
            <li>
              Generates sufficient pressure for{" "}
              <strong>effective blood ejection</strong>.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-[#A71627]">
            3. Prevents Arrhythmias
          </h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              The <strong>long ARP</strong> prevents{" "}
              <strong>re-entry circuits</strong>.
            </li>
            <li>
              Prevents <strong>retrograde conduction</strong>.
            </li>
            <li>
              Maintains <strong>one-way electrical conduction</strong> through
              the heart.
            </li>
          </ul>
        </div>
      </div>
    ),
    clinicalTip:
      "Remember: Long refractory period = No tetanus + Efficient pumping + Reduced risk of arrhythmias.",
  },
];

const sections2: Section2[] = [
  {
    id: "electrolyteimbalances",
    title: "Electrolyte Imbalances",
    image: "/ElectrolyteImbalance.png", // Replace with your image
    description: (
      <div className="space-y-5">
        <p>
          <strong>Electrolyte imbalances</strong> alter cardiac action
          potentials, affecting electrical conduction and increasing the risk of
          <strong> arrhythmias</strong>.
        </p>

        {/* Hyperkalemia */}
        <div className="rounded-xl border border-red-200 bg-red-50/70 p-4 shadow-sm">
          <h4 className="font-semibold text-[#A71627] mb-2">
            ↑ Hyperkalemia (High K⁺)
          </h4>

          <div className="space-y-2 text-sm">
            <p>
              <strong>Action Potential:</strong> Resting membrane becomes
              <strong> less negative</strong> → Na⁺ channels become inactivated
              → slower Phase 0 depolarization.
            </p>

            <p>
              <strong>ECG Changes:</strong>
            </p>

            <ul className="list-disc pl-5 space-y-1">
              <li>Tall, peaked T waves</li>
              <li>Prolonged PR interval</li>
              <li>Wide QRS complex</li>
              <li>Severe: Sine-wave pattern → VF/Asystole</li>
            </ul>
          </div>
        </div>

        {/* Hypokalemia */}
        <div className="rounded-xl border border-blue-200 bg-blue-50/70 p-4 shadow-sm">
          <h4 className="font-semibold text-[#A71627] mb-2">
            ↓ Hypokalemia (Low K⁺)
          </h4>

          <div className="space-y-2 text-sm">
            <p>
              <strong>Action Potential:</strong> Hyperpolarizes the membrane and
              prolongs <strong>Phase 3 repolarization</strong>.
            </p>

            <p>
              <strong>ECG Changes:</strong>
            </p>

            <ul className="list-disc pl-5 space-y-1">
              <li>Prolonged QT interval</li>
              <li>Prominent U waves</li>
              <li>Risk of Torsades de Pointes (EADs)</li>
            </ul>
          </div>
        </div>

        {/* Calcium Disorders */}
        <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-4 shadow-sm">
          <h4 className="font-semibold text-[#A71627] mb-2">Ca²⁺ Disorders</h4>

          <div className="grid gap-4 md:grid-cols-2 text-sm">
            <div>
              <p className="font-medium text-[#A71627]">↑ Hypercalcemia</p>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>Shortens Phase 2 (plateau)</li>
                <li>Shortened QT interval</li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-[#A71627]">↓ Hypocalcemia</p>
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>Prolongs Phase 2 (plateau)</li>
                <li>Prolonged QT interval</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),
    clinicalTip:
      "Exam shortcut: HyperK⁺ = Peaked T waves | HypoK⁺ = U waves | HyperCa²⁺ = Short QT | HypoCa²⁺ = Long QT.",
  },
  {
    id: "antiarrhythmics",
    title: "Antiarrhythmic Drugs (Vaughan Williams Classification)",
    image: "/AntiarrhythmicClasses.png", // Replace with your image
    description: (
      <div className="space-y-5">
        <div>
          <p>
            <strong>Antiarrhythmic drugs</strong> modify different phases of the
            cardiac action potential to restore a normal heart rhythm. Each
            class targets a specific ion channel or receptor.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-[#A71627] text-white">
              <tr>
                <th className="px-4 py-3 text-left">Class</th>
                <th className="px-4 py-3 text-left">Target</th>
                <th className="px-4 py-3 text-left">Action Potential</th>
                <th className="px-4 py-3 text-left">ECG Effect</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-200 bg-white">
              <tr className="hover:bg-red-50/40">
                <td className="px-4 py-3 font-semibold text-[#A71627]">IA</td>
                <td className="px-4 py-3">Moderate Na⁺ block + K⁺ block</td>
                <td className="px-4 py-3">↓ Phase 0, ↑ Phase 3</td>
                <td className="px-4 py-3">↑ QRS, ↑ QT</td>
              </tr>

              <tr className="hover:bg-red-50/40">
                <td className="px-4 py-3 font-semibold text-[#A71627]">IB</td>
                <td className="px-4 py-3">Weak Na⁺ block</td>
                <td className="px-4 py-3">Shortens Phase 3</td>
                <td className="px-4 py-3">Minimal ECG change</td>
              </tr>

              <tr className="hover:bg-red-50/40">
                <td className="px-4 py-3 font-semibold text-[#A71627]">IC</td>
                <td className="px-4 py-3">Strong Na⁺ block</td>
                <td className="px-4 py-3">Markedly ↓ Phase 0</td>
                <td className="px-4 py-3">Significant QRS widening</td>
              </tr>

              <tr className="hover:bg-red-50/40">
                <td className="px-4 py-3 font-semibold text-[#A71627]">II</td>
                <td className="px-4 py-3">β₁-blockers</td>
                <td className="px-4 py-3">↓ Phase 4 slope (SA node)</td>
                <td className="px-4 py-3">↓ HR, ↑ PR</td>
              </tr>

              <tr className="hover:bg-red-50/40">
                <td className="px-4 py-3 font-semibold text-[#A71627]">III</td>
                <td className="px-4 py-3">K⁺ channel block</td>
                <td className="px-4 py-3">↑ Phase 3</td>
                <td className="px-4 py-3">QT prolongation</td>
              </tr>

              <tr className="hover:bg-red-50/40">
                <td className="px-4 py-3 font-semibold text-[#A71627]">IV</td>
                <td className="px-4 py-3">L-type Ca²⁺ block</td>
                <td className="px-4 py-3">↓ Phase 2 & AV node conduction</td>
                <td className="px-4 py-3">↑ PR, ↓ Contractility</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="rounded-xl border border-[#A71627]/20 bg-[#A71627]/5 p-4">
          <h4 className="font-semibold text-[#A71627] mb-2">
            Common Drug Examples
          </h4>

          <div className="grid gap-3 md:grid-cols-3 text-sm">
            <div>
              <strong>Class IA</strong>
              <p>Procainamide</p>
            </div>

            <div>
              <strong>Class IB</strong>
              <p>Lidocaine</p>
            </div>

            <div>
              <strong>Class IC</strong>
              <p>Flecainide</p>
            </div>

            <div>
              <strong>Class II</strong>
              <p>β-Blockers</p>
            </div>

            <div>
              <strong>Class III</strong>
              <p>Amiodarone, Sotalol</p>
            </div>

            <div>
              <strong>Class IV</strong>
              <p>Verapamil, Diltiazem</p>
            </div>
          </div>
        </div>
      </div>
    ),
    clinicalTip:
      "High-yield memory aid: I = Na⁺ blockers, II = β-blockers, III = K⁺ blockers, IV = Ca²⁺ blockers.",
  },
  {
    id: "ischemiahypoxia",
    title: "Pathophysiological Alterations (Ischemia & Hypoxia)",
    image: "/IschemiaHypoxia.png", // Replace with your image
    description: (
      <div className="space-y-5">
        <div>
          <p>
            <strong>Myocardial ischemia</strong> reduces oxygen supply to
            cardiac muscle, impairing ATP production and disrupting normal
            electrical activity. These changes slow conduction and increase the
            risk of arrhythmias.
          </p>
        </div>

        {/* ATP Depletion */}
        <div className="rounded-xl border border-red-200 bg-red-50/70 p-4 shadow-sm">
          <h4 className="font-semibold text-[#A71627] mb-2">
            1. ATP Depletion
          </h4>

          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              Reduced ATP impairs the <strong>Na⁺/K⁺ ATPase pump</strong>.
            </li>
            <li>
              <strong>Na⁺ accumulates inside</strong> the cell, while{" "}
              <strong>K⁺ accumulates outside</strong>.
            </li>
            <li>
              Creates <strong>local hyperkalemia</strong> around the ischemic
              tissue.
            </li>
          </ul>
        </div>

        {/* Conduction Changes */}
        <div className="rounded-xl border border-blue-200 bg-blue-50/70 p-4 shadow-sm">
          <h4 className="font-semibold text-[#A71627] mb-2">
            2. Slowed Conduction
          </h4>

          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              Local hyperkalemia partially depolarizes the resting membrane.
            </li>
            <li>
              Fast <strong>Na⁺ channels</strong> become inactivated.
            </li>
            <li>
              <strong>Phase 0 depolarization slows</strong>, reducing conduction
              velocity.
            </li>
          </ul>
        </div>

        {/* Shortened AP */}
        <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-4 shadow-sm">
          <h4 className="font-semibold text-[#A71627] mb-2">
            3. Shortened Action Potential
          </h4>

          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              ATP-sensitive{" "}
              <strong>
                K<sub>ATP</sub>
              </strong>{" "}
              channels open during ischemia.
            </li>
            <li>
              Increased <strong>K⁺ efflux</strong> accelerates Phase 2 and Phase
              3 repolarization.
            </li>
            <li>
              Results in a{" "}
              <strong>shorter action potential duration (APD)</strong>.
            </li>
          </ul>
        </div>

        {/* ECG */}
        <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-4 shadow-sm">
          <h4 className="font-semibold text-[#A71627] mb-2">
            4. Current of Injury
          </h4>

          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              Ischemic and healthy myocardium develop different electrical
              potentials.
            </li>
            <li>
              This voltage difference generates a{" "}
              <strong>current of injury</strong>.
            </li>
            <li>
              Appears on ECG as <strong>ST-segment elevation</strong> or{" "}
              <strong>ST-segment depression</strong>.
            </li>
          </ul>
        </div>
      </div>
    ),
    clinicalTip:
      "Exam tip: Ischemia → ↓ ATP → Na⁺/K⁺ pump failure → Slower Phase 0 + Shorter APD + ST elevation/depression.",
  },
];

export default function ElectricalProperties() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeIndex2, setActiveIndex2] = useState(0);
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
    setIsAnimating(true); // or separate animation state if needed
    setTimeout(() => {
      setActiveIndex2(index);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <>
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
              Ventricular Cardiomyocyte Action Potential
            </h2>
          </header>

          {/* ROW 1: TOP IMAGE CONTAINER */}
          <div className="w-full flex justify-center">
            <VentricularCardioAPGraph />
          </div>
        </div>
      </section>

      {/*Lo2 */}

      <section
        id="lo2"
        className="w-full min-h-screen bg-[#FDF8F5] text-[#1F365C] py-16 px-6 md:px-12 lg:px-24 font-sans selection:bg-[#A71627]/10 selection:text-[#A71627]"
      >
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          {/* FULL-WIDTH HEADER SECTION */}
          <header className="w-full border-b border-[#1F365C]/10 pb-5">
            <p className="text-xs font-bold tracking-[0.2em] text-[#A71627] uppercase mb-2">
              Learning Outcome 2
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight">
              Plateu Phases & Refractory Period
            </h2>
          </header>

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
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
              {/* LEFT COLUMN: Large Glassmorphism Image Card */}
              <div className="w-full lg:w-1/2 flex justify-center lg:sticky lg:top-8">
                <div className="relative w-full aspect-square max-w-xl bg-white/30 backdrop-blur-xl border border-white/40 rounded-3xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] hover:-translate-y-1 p-8 flex items-center justify-center group">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-50 pointer-events-none rounded-3xl" />
                  <img
                    src={activeSection.image}
                    alt={activeSection.title}
                    className={`w-full h-full object-contain object-center transition-all duration-500 transform group-hover:scale-105 ${
                      isAnimating
                        ? "opacity-0 scale-95"
                        : "opacity-100 scale-100"
                    }`}
                  />
                </div>
              </div>

              {/* RIGHT COLUMN: Controls & Adaptive Layout */}
              <div className="w-full lg:w-1/2 flex flex-col space-y-8">
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

          {/* ROW 1: TOP IMAGE CONTAINER */}
          <div className="w-full flex justify-center"></div>
        </div>
      </section>

      {/*Lo3 */}
      <section
        id="lo3"
        className="w-full min-h-screen bg-[#FDF8F5] text-[#1F365C] py-16 px-6 md:px-12 lg:px-24 font-sans selection:bg-[#A71627]/10 selection:text-[#A71627]"
      >
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          {/* FULL-WIDTH HEADER SECTION */}
          <header className="w-full border-b border-[#1F365C]/10 pb-5">
            <p className="text-xs font-bold tracking-[0.2em] text-[#A71627] uppercase mb-2">
              Learning Outcome 3
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight">
              Effects of Changes On Cardiac Electrical Activity
            </h2>
          </header>

          <div className="max-w-7xl mx-auto">
            {/* Segmented Controls Container */}
            <div className="space-y-6 pb-6">
              <div className="flex flex-wrap gap-2 p-1.5 bg-white/30 backdrop-blur-xl border border-white/40 rounded-2xl shadow-xl">
                {sections2.map((section2, index) => {
                  const isActive = activeIndex2 === index;
                  return (
                    <button
                      key={section2.id}
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
                    {activeSection2.description}
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
                          {activeSection2.clinicalTip}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <article className="rounded-3xl  border border-white/40 bg-white shadow-xl p-8 sm:p-10 transition-all hover:-translate-y-1 duration-3xl">
            <div className="flex items-center gap-3 mb-6">
              <h3 className="font-serif text-xl font-medium tracking-tight">
                Summary
              </h3>
            </div>
            <p className="text-sm text-[#1F365C]/80 leading-loose mb-6">
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Phase 0 (Na⁺ channel activity):</strong> Changes
                  affect <strong>depolarization speed</strong>, conduction
                  velocity, and <strong>QRS duration</strong>.
                </li>

                <li>
                  <strong>Phase 2 (Ca²⁺ channel activity):</strong> Changes
                  affect the <strong>plateau phase</strong>, ST-segment
                  duration, and{" "}
                  <strong>cardiac contractile force (inotropy)</strong>.
                </li>

                <li>
                  <strong>Phase 3 (K⁺ channel activity):</strong> Changes affect{" "}
                  <strong>repolarization</strong>, QT interval, and the risk of{" "}
                  <strong>re-entry arrhythmias</strong>.
                </li>

                <li>
                  <strong>Phase 4 (Pacemaker currents/K⁺ leak):</strong> Changes
                  affect <strong>automaticity</strong> and determine the{" "}
                  <strong>heart rate</strong>.
                </li>
              </ul>
            </p>
          </article>

          <header className="w-full border-b border-[#1F365C]/10 pb-5">
            
            <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight">
              Let's Test Your Knowledge ! 
            </h2>
          </header>
          <Game />
          {/* ROW 1: TOP IMAGE CONTAINER */}
          <div className="w-full flex justify-center"></div>
        </div>
      </section>
    </>
  );
}
