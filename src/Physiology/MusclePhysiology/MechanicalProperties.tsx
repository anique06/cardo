import React, { useState } from "react";
import { Stethoscope } from "lucide-react";
import MechanicalGame from "./MechanicalGame";

interface Section {
  id: string;
  title: string;
  image: string;
  description: React.ReactNode;
  clinicalTip: string;
}

const sections: Section[] = [
  {
    id: "electrolyteimbalances",
    title: "Cardiac Contraction (Systole)",
    image: "/CardiacContraction.png", // Replace with your image
    description: (
      <div className="space-y-5">
        <p>
          <strong>Cardiac contraction (systole)</strong> occurs through
          <strong> Calcium-Induced Calcium Release (CICR)</strong>, allowing
          actin and myosin filaments to generate force.
        </p>

        {/* Overview */}
        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 shadow-sm">
          <h4 className="font-semibold text-[#A71627] mb-2">
            Excitation-Contraction Coupling
          </h4>

          <p className="text-sm font-medium">
            Action Potential → L-Type Ca²⁺ Entry → RyR2 Activation → SR Ca²⁺
            Release → Troponin C Binding → Cross-Bridge Cycling
          </p>
        </div>

        {/* Step 1 */}
        <div className="rounded-xl border border-red-200 bg-red-50/70 p-4 shadow-sm">
          <h4 className="font-semibold text-[#A71627] mb-2">
            1. Depolarization & Trigger Calcium Entry
          </h4>

          <div className="space-y-2 text-sm">
            <p>
              <strong>Mechanism:</strong> Action potential spreads through the
              sarcolemma and T-tubules.
            </p>

            <ul className="list-disc pl-5 space-y-1">
              <li>
                Depolarization opens L-type Ca²⁺ channels (DHP receptors).
              </li>
              <li>Small amount of extracellular Ca²⁺ enters the cell.</li>
              <li>This Ca²⁺ acts as the trigger for contraction.</li>
            </ul>
          </div>
        </div>

        {/* Step 2 */}
        <div className="rounded-xl border border-blue-200 bg-blue-50/70 p-4 shadow-sm">
          <h4 className="font-semibold text-[#A71627] mb-2">
            2. Calcium-Induced Calcium Release (CICR)
          </h4>

          <div className="space-y-2 text-sm">
            <p>
              <strong>Mechanism:</strong> Trigger Ca²⁺ activates RyR2 receptors
              on the sarcoplasmic reticulum.
            </p>

            <ul className="list-disc pl-5 space-y-1">
              <li>RyR2 releases large amounts of stored Ca²⁺.</li>
              <li>Cytosolic Ca²⁺ increases about tenfold.</li>
              <li>High intracellular Ca²⁺ initiates contraction.</li>
            </ul>
          </div>
        </div>

        {/* Step 3 */}
        <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-4 shadow-sm">
          <h4 className="font-semibold text-[#A71627] mb-2">
            3. Cross-Bridge Cycling & Myofilament Sliding
          </h4>

          <div className="space-y-2 text-sm">
            <p>
              <strong>Mechanism:</strong> Ca²⁺ activates the contractile
              proteins.
            </p>

            <ul className="list-disc pl-5 space-y-1">
              <li>Ca²⁺ binds to Troponin C.</li>
              <li>Tropomyosin moves away from actin binding sites.</li>
              <li>Myosin binds actin to form cross-bridges.</li>
              <li>Power stroke shortens the sarcomere.</li>
              <li>ATP detaches and resets the myosin head.</li>
            </ul>
          </div>
        </div>
      </div>
    ),

    clinicalTip:
      "Exam tip: AP → L-type Ca²⁺ → RyR2 → SR Ca²⁺ release → Troponin C → Cross-bridge cycling → Cardiac contraction.",
  },
  {
    id: "cardiacrelaxation",
    title: "Cardiac Relaxation (Diastole)",
    image: "/CardiacRelaxation.png", // Replace with your image
    description: (
      <div className="space-y-5">
        <p>
          <strong>Cardiac relaxation (diastole)</strong> requires the rapid
          removal of <strong>cytosolic Ca²⁺</strong>, allowing myofilaments to
          detach and the sarcomere to return to its resting length.
        </p>

        {/* Overview */}
        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 shadow-sm">
          <h4 className="font-semibold text-[#A71627] mb-2">
            Relaxation Pathway
          </h4>

          <p className="text-sm font-medium">
            Cytosolic Ca²⁺ Clearance → Ca²⁺ Unbinds Troponin C → Tropomyosin
            Re-blocks Actin → Sarcomere Relaxes
          </p>
        </div>

        {/* Step 1 */}
        <div className="rounded-xl border border-red-200 bg-red-50/70 p-4 shadow-sm">
          <h4 className="font-semibold text-[#A71627] mb-2">
            1. Cytosolic Calcium Clearance
          </h4>

          <div className="space-y-2 text-sm">
            <p>
              <strong>Mechanism:</strong> Cytosolic Ca²⁺ is removed by three
              transport systems.
            </p>

            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <p className="font-medium text-[#A71627]">SERCA2a (~70%)</p>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>Pumps Ca²⁺ back into the SR.</li>
                  <li>Main pathway for relaxation.</li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-[#A71627]">NCX (~28%)</p>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>Exchanges 1 Ca²⁺ out for 3 Na⁺ in.</li>
                  <li>Removes Ca²⁺ from the cell.</li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-[#A71627]">PMCA (~2%)</p>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>Ca²⁺-ATPase pump.</li>
                  <li>Removes remaining Ca²⁺.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="rounded-xl border border-blue-200 bg-blue-50/70 p-4 shadow-sm">
          <h4 className="font-semibold text-[#A71627] mb-2">
            2. Myofilament Inactivation
          </h4>

          <div className="space-y-2 text-sm">
            <p>
              <strong>Mechanism:</strong> Falling intracellular Ca²⁺ stops
              cross-bridge cycling.
            </p>

            <ul className="list-disc pl-5 space-y-1">
              <li>Ca²⁺ dissociates from Troponin C.</li>
              <li>Tropomyosin re-blocks actin binding sites.</li>
              <li>Myosin can no longer bind actin.</li>
              <li>Sarcomere returns to its resting length.</li>
            </ul>
          </div>
        </div>
      </div>
    ),

    clinicalTip:
      "Exam tip: Relaxation = SERCA2a + NCX + PMCA remove Ca²⁺ → Troponin releases Ca²⁺ → Tropomyosin blocks actin → Sarcomere relaxes.",
  },
];

interface Section2 {
  id: string;
  title: string;
  image: string;
  description: React.ReactNode;
  clinicalTip: string;
}

const sections2: Section2[] = [
  {
    id: "intrinsicmechanisms",
    title: "Intrinsic Mechanisms (Autoregulation)",
    image: "/IntrinsicMechanisms.png", // Replace with your image
    description: (
      <div className="space-y-5">
        <p>
          <strong>Intrinsic autoregulation</strong> adjusts cardiac performance
          without neural or hormonal input, allowing the heart to match its
          pumping ability to changing physiological demands.
        </p>

        {/* Overview */}
        {/* <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 shadow-sm">
          <h4 className="font-semibold text-[#A71627] mb-2">
            Intrinsic Regulation
          </h4>

          <p className="text-sm font-medium">
            Frank-Starling Law → Bowditch (Treppe) Effect → Anrep Effect
          </p>
        </div> */}

        {/* Frank-Starling */}
        <div className="rounded-xl border border-red-200 bg-red-50/70 p-4 shadow-sm">
          <h4 className="font-semibold text-[#A71627] mb-2">
            A. Frank-Starling Law
          </h4>

          <div className="space-y-2 text-sm">
            <p>
              <strong>Mechanism:</strong> Increased preload stretches cardiac
              muscle fibers.
            </p>

            <ul className="list-disc pl-5 space-y-1">
              <li>↑ End-diastolic volume stretches sarcomeres.</li>
              <li>Improves actin-myosin overlap.</li>
              <li>↑ Troponin C sensitivity to Ca²⁺.</li>
              <li>Produces a stronger contraction.</li>
            </ul>
          </div>
        </div>

        {/* Bowditch
        <div className="rounded-xl border border-blue-200 bg-blue-50/70 p-4 shadow-sm">
          <h4 className="font-semibold text-[#A71627] mb-2">
            B. Bowditch (Treppe) Effect
          </h4>

          <div className="space-y-2 text-sm">
            <p>
              <strong>Mechanism:</strong> Increased heart rate increases
              contractile force.
            </p>

            <ul className="list-disc pl-5 space-y-1">
              <li>Shorter diastole reduces Ca²⁺ extrusion by NCX.</li>
              <li>More Ca²⁺ is stored in the SR via SERCA2a.</li>
              <li>Greater SR Ca²⁺ release during the next beat.</li>
              <li>Progressively increases contractility.</li>
            </ul>
          </div>
        </div>

        {/* Anrep 
        <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-4 shadow-sm">
          <h4 className="font-semibold text-[#A71627] mb-2">C. Anrep Effect</h4>

          <div className="space-y-2 text-sm">
            <p>
              <strong>Mechanism:</strong> Increased afterload causes a gradual
              increase in contractility.
            </p>

            <ul className="list-disc pl-5 space-y-1">
              <li>Occurs within 1–5 minutes after increased afterload.</li>
              <li>Stretch activates NHE-1 and stretch-sensitive channels.</li>
              <li>↑ Intracellular Na⁺ reduces NCX-mediated Ca²⁺ extrusion.</li>
              <li>↑ Intracellular Ca²⁺ strengthens contraction.</li>
            </ul>
          </div>
        </div>

        */}
      </div>
    ),

    clinicalTip: "Exam tip: Frank-Starling = ↑ Preload ",
  },
  {
    id: "extrinsicmechanisms",
    title: "Extrinsic Mechanisms (Neurohumoral & Metabolic)",
    image: "/ExtrinsicMechanisms.png", // Replace with your image
    description: (
      <div className="space-y-5">
        <p>
          <strong>Extrinsic regulation</strong> modifies cardiac contractility
          through <strong>neural, hormonal, and metabolic factors</strong> by
          altering intracellular Ca²⁺ handling and cross-bridge activity.
        </p>

        {/* Overview */}
        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 shadow-sm">
          <h4 className="font-semibold text-[#A71627] mb-2">
            Sympathetic Signaling Pathway
          </h4>

          <p className="text-sm font-medium">
            NE/Epi → β₁ Receptor → Gs → Adenylyl Cyclase → cAMP → PKA
          </p>

          <div className="grid gap-3 md:grid-cols-4 mt-4 text-sm">
            <div>
              <strong>L-type Ca²⁺</strong>
              <p>↑ Ca²⁺ Entry</p>
            </div>

            <div>
              <strong>RyR2</strong>
              <p>↑ SR Ca²⁺ Release</p>
            </div>

            <div>
              <strong>PLB</strong>
              <p>↑ SERCA2a Activity</p>
            </div>

            <div>
              <strong>Troponin I</strong>
              <p>↑ Relaxation Speed</p>
            </div>
          </div>
        </div>

        {/* Autonomic */}
        <div className="rounded-xl border border-red-200 bg-red-50/70 p-4 shadow-sm">
          <h4 className="font-semibold text-[#A71627] mb-2">
            A. Autonomic Nervous System
          </h4>

          <div className="grid gap-4 md:grid-cols-2 text-sm">
            <div>
              <p className="font-medium text-[#A71627]">Sympathetic (β₁)</p>

              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>↑ cAMP → ↑ PKA activation.</li>
                <li>↑ L-type Ca²⁺ entry.</li>
                <li>↑ RyR2 Ca²⁺ release.</li>
                <li>↑ SERCA2a activity via PLB.</li>
                <li>↑ Contractility & faster relaxation.</li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-[#A71627]">Parasympathetic (M₂)</p>

              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>ACh activates Gi proteins.</li>
                <li>↓ cAMP production.</li>
                <li>Opposes sympathetic stimulation.</li>
                <li>Mainly affects the atria.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Hormonal */}
        <div className="rounded-xl border border-blue-200 bg-blue-50/70 p-4 shadow-sm">
          <h4 className="font-semibold text-[#A71627] mb-2">
            B. Endocrine & Humoral Factors
          </h4>

          <div className="grid gap-4 md:grid-cols-3 text-sm">
            <div>
              <p className="font-medium text-[#A71627]">Thyroid Hormones</p>

              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>↑ α-MHC & SERCA2a.</li>
                <li>↓ Phospholamban.</li>
                <li>↑ Contractile force.</li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-[#A71627]">Glucagon</p>

              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>Activates Gs receptors.</li>
                <li>↑ cAMP independently of β₁.</li>
                <li>Useful in β-blocker toxicity.</li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-[#A71627]">Catecholamines</p>

              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>Epinephrine from adrenal medulla.</li>
                <li>Enhances sympathetic effects.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Metabolic */}
        <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-4 shadow-sm">
          <h4 className="font-semibold text-[#A71627] mb-2">
            C. Metabolic & Chemical Factors
          </h4>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-[#A71627] text-white">
                <tr>
                  <th className="px-3 py-2 text-left">Condition</th>
                  <th className="px-3 py-2 text-left">Effect</th>
                  <th className="px-3 py-2 text-left">Mechanism</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200 bg-white">
                <tr>
                  <td className="px-3 py-2">↓ pH (Acidosis)</td>
                  <td className="px-3 py-2">↓ Contractility</td>
                  <td className="px-3 py-2">
                    H⁺ competes with Ca²⁺ at Troponin C.
                  </td>
                </tr>

                <tr>
                  <td className="px-3 py-2">Ischemia / Hypoxia</td>
                  <td className="px-3 py-2">↓ Contractility</td>
                  <td className="px-3 py-2">
                    ATP depletion reduces force generation.
                  </td>
                </tr>

                <tr>
                  <td className="px-3 py-2">Hypercalcemia</td>
                  <td className="px-3 py-2">↑ Contractility</td>
                  <td className="px-3 py-2">
                    Greater Ca²⁺ influx through L-type channels.
                  </td>
                </tr>

                <tr>
                  <td className="px-3 py-2">Hyperkalemia</td>
                  <td className="px-3 py-2">↓ Contractility</td>
                  <td className="px-3 py-2">
                    Na⁺ channel inactivation slows excitation.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    ),

    clinicalTip:
      "Exam tip: Sympathetic stimulation increases contractility via β₁ → cAMP → PKA, whereas parasympathetic stimulation reduces cAMP. Metabolic disturbances such as acidosis, ischemia, and hyperkalemia decrease contractility, while hypercalcemia increases it.",
  },
];

interface Section3 {
  id: string;
  title: string;
  image: string;
  description: React.ReactNode;
  clinicalTip: string;
}

const sections3: Section3[] = [
  {
    id: "systolicdysfunction",
    title: "Systolic Dysfunction (Reduced Inotropy)",
    image: "/SystolicDysfunction.png", // Replace with your image
    description: (
      <div className="space-y-5">
        <p>
          <strong>Systolic dysfunction</strong> occurs when the myocardium
          cannot generate enough force during contraction, resulting in
          <strong>
            {" "}
            Heart Failure with Reduced Ejection Fraction (HFrEF)
          </strong>{" "}
          (EF ≤ 40%).
        </p>

        {/* Overview */}
        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 shadow-sm">
          <h4 className="font-semibold text-[#A71627] mb-2">
            Disease Progression
          </h4>

          <p className="text-sm font-medium">
            ↓ Ca²⁺ Handling → ↓ Contractility → ↑ End-Systolic Volume → ↓ Stroke
            Volume → Heart Failure (HFrEF)
          </p>
        </div>

        {/* Cellular Mechanisms */}
        <div className="rounded-xl border border-red-200 bg-red-50/70 p-4 shadow-sm">
          <h4 className="font-semibold text-[#A71627] mb-2">
            1. Cellular & Molecular Changes
          </h4>

          <div className="grid gap-4 md:grid-cols-2 text-sm">
            <div>
              <p className="font-medium text-[#A71627]">
                Calcium Handling Failure
              </p>

              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>↓ SERCA2a activity.</li>
                <li>Leaky RyR2 receptors.</li>
                <li>↓ SR Ca²⁺ stores.</li>
                <li>Smaller Ca²⁺ transients during contraction.</li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-[#A71627]">
                Myofilament Disruption
              </p>

              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>Loss of functional cardiomyocytes.</li>
                <li>Sarcomere disorganization.</li>
                <li>Slower myosin isoforms.</li>
                <li>↓ Cross-bridge cycling and force.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Hemodynamics */}
        <div className="rounded-xl border border-blue-200 bg-blue-50/70 p-4 shadow-sm">
          <h4 className="font-semibold text-[#A71627] mb-2">
            2. Hemodynamic Changes
          </h4>

          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>↓ ESPVR slope (reduced contractility).</li>
            <li>↑ End-Systolic Volume (ESV).</li>
            <li>↓ Stroke Volume (SV = EDV − ESV).</li>
            <li>↓ Cardiac Output unless compensated by ↑ heart rate.</li>
          </ul>
        </div>

        {/* Remodeling */}
        <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-4 shadow-sm">
          <h4 className="font-semibold text-[#A71627] mb-2">
            3. Structural Remodeling
          </h4>

          <div className="space-y-2 text-sm">
            <p>
              <strong>Chronic volume overload</strong> causes eccentric
              hypertrophy.
            </p>

            <ul className="list-disc pl-5 space-y-1">
              <li>Sarcomeres added in series.</li>
              <li>Ventricular chamber dilates.</li>
              <li>Wall becomes thinner.</li>
              <li>↑ Wall stress (Laplace's Law).</li>
            </ul>

            <div className="rounded-lg bg-white p-3 border border-slate-200 text-center font-medium">
              Wall Stress (σ) = (P × r) / 2h
            </div>
          </div>
        </div>
      </div>
    ),

    clinicalTip:
      "Exam tip: HFrEF = ↓ SERCA2a + Leaky RyR2 → ↓ Ca²⁺ availability → ↓ Contractility → ↑ ESV → ↓ SV with eccentric hypertrophy.",
  },
  {
    id: "diastolicdysfunction",
    title: "Diastolic Dysfunction (Reduced Compliance & Relaxation)",
    image: "/DiastolicDysfunction.png", // Replace with your image
    description: (
      <div className="space-y-5">
        <p>
          <strong>Diastolic dysfunction</strong> occurs when the ventricle
          becomes stiff or relaxes slowly, requiring
          <strong> higher filling pressures</strong> to achieve a normal
          end-diastolic volume (EDV). This is the hallmark of
          <strong>
            {" "}
            Heart Failure with Preserved Ejection Fraction (HFpEF)
          </strong>{" "}
          (EF ≥ 50%).
        </p>

        {/* Overview */}
        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 shadow-sm">
          <h4 className="font-semibold text-[#A71627] mb-2">
            Disease Progression
          </h4>

          <p className="text-sm font-medium">
            ↓ Relaxation + ↑ Ventricular Stiffness → ↑ LV Filling Pressure →
            Pulmonary Congestion → HFpEF
          </p>
        </div>

        {/* Cellular Mechanisms */}
        <div className="rounded-xl border border-red-200 bg-red-50/70 p-4 shadow-sm">
          <h4 className="font-semibold text-[#A71627] mb-2">
            1. Cellular & Molecular Changes
          </h4>

          <div className="grid gap-4 md:grid-cols-2 text-sm">
            <div>
              <p className="font-medium text-[#A71627]">
                Impaired Active Relaxation
              </p>

              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>↓ SERCA2a slows Ca²⁺ reuptake.</li>
                <li>Ca²⁺ remains bound to Troponin C longer.</li>
                <li>Cross-bridges persist during early diastole.</li>
                <li>Delayed myocardial relaxation (↓ lusitropy).</li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-[#A71627]">Passive Stiffness</p>

              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>Titin shifts to the stiffer N2B isoform.</li>
                <li>Interstitial collagen deposition (fibrosis).</li>
                <li>Reduced ventricular compliance.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Hemodynamics */}
        <div className="rounded-xl border border-blue-200 bg-blue-50/70 p-4 shadow-sm">
          <h4 className="font-semibold text-[#A71627] mb-2">
            2. Hemodynamic Changes
          </h4>

          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>↑ EDPVR (steeper pressure-volume relationship).</li>
            <li>↑ Left Ventricular End-Diastolic Pressure (LVEDP).</li>
            <li>Pressure backs up into the left atrium and lungs.</li>
            <li>Causes pulmonary congestion and exertional dyspnea.</li>
            <li>Ejection fraction remains preserved (HFpEF).</li>
          </ul>
        </div>

        {/* Remodeling */}
        <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-4 shadow-sm">
          <h4 className="font-semibold text-[#A71627] mb-2">
            3. Structural Remodeling
          </h4>

          <div className="space-y-2 text-sm">
            <p>
              <strong>Chronic pressure overload</strong> (e.g., hypertension or
              aortic stenosis) causes concentric hypertrophy.
            </p>

            <ul className="list-disc pl-5 space-y-1">
              <li>Sarcomeres added in parallel.</li>
              <li>Ventricular wall thickens.</li>
              <li>Internal chamber becomes smaller.</li>
              <li>Reduced ventricular compliance.</li>
            </ul>
          </div>
        </div>
      </div>
    ),

    clinicalTip:
      "Exam tip: HFpEF = ↓ SERCA2a-mediated relaxation + ventricular stiffness → ↑ LVEDP → pulmonary congestion despite preserved ejection fraction.",
  },
  {
    id: "hfcomparison",
    title: "Comparison: Systolic vs Diastolic Dysfunction",
    image: "/HeartFailureComparison.png", // Replace with your image
    description: (
      <div className="space-y-5">
        <p>
          <strong>Systolic (HFrEF)</strong> and
          <strong> diastolic (HFpEF)</strong> heart failure differ in their
          underlying mechanism, pressure-volume changes, and structural
          remodeling, although both can ultimately lead to pulmonary congestion.
        </p>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-[#A71627] text-white">
              <tr>
                <th className="px-4 py-3 text-left">Parameter</th>
                <th className="px-4 py-3 text-left">HFrEF (Systolic)</th>
                <th className="px-4 py-3 text-left">HFpEF (Diastolic)</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-200 bg-white">
              <tr className="hover:bg-red-50/40">
                <td className="px-4 py-3 font-semibold">Primary Defect</td>
                <td className="px-4 py-3">↓ Force generation & ejection</td>
                <td className="px-4 py-3">↓ Relaxation & compliance</td>
              </tr>

              <tr className="hover:bg-red-50/40">
                <td className="px-4 py-3 font-semibold">Ejection Fraction</td>
                <td className="px-4 py-3">↓ EF (&lt;40%)</td>
                <td className="px-4 py-3">Preserved EF (≥50%)</td>
              </tr>

              <tr className="hover:bg-red-50/40">
                <td className="px-4 py-3 font-semibold">
                  Pressure-Volume Loop
                </td>
                <td className="px-4 py-3">↑ ESV, ↓ ESPVR slope</td>
                <td className="px-4 py-3">↑ EDPVR (steeper curve)</td>
              </tr>

              <tr className="hover:bg-red-50/40">
                <td className="px-4 py-3 font-semibold">Predominant Stress</td>
                <td className="px-4 py-3">Volume overload</td>
                <td className="px-4 py-3">Pressure overload</td>
              </tr>

              <tr className="hover:bg-red-50/40">
                <td className="px-4 py-3 font-semibold">Remodeling</td>
                <td className="px-4 py-3">Eccentric hypertrophy</td>
                <td className="px-4 py-3">Concentric hypertrophy</td>
              </tr>

              <tr className="hover:bg-red-50/40">
                <td className="px-4 py-3 font-semibold">
                  Pulmonary Congestion
                </td>
                <td className="px-4 py-3">↑ ESV → Blood backs up</td>
                <td className="px-4 py-3">↑ LVEDP → Blood backs up</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Summary */}
        <div className="rounded-xl border border-[#A71627]/20 bg-[#A71627]/5 p-4">
          <h4 className="font-semibold text-[#A71627] mb-2">
            High-Yield Summary
          </h4>

          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>
              <strong>HFrEF:</strong> Pumping problem → Reduced contractility →
              Low EF.
            </li>
            <li>
              <strong>HFpEF:</strong> Filling problem → Stiff ventricle →
              Preserved EF.
            </li>
            <li>
              Both conditions may cause pulmonary congestion through different
              mechanisms.
            </li>
          </ul>
        </div>
      </div>
    ),

    clinicalTip:
      "Exam tip: HFrEF = Pumping problem (↓ EF, eccentric hypertrophy). HFpEF = Filling problem (normal EF, concentric hypertrophy).",
  },
  {
    id: "systemicconsequences",
    title: "Systemic & Clinical Consequences",
    image: "/HeartFailureConsequences.png", // Replace with your image
    description: (
      <div className="space-y-5">
        <p>
          <strong>Reduced cardiac performance</strong> activates compensatory
          neurohumoral mechanisms to maintain
          <strong> Mean Arterial Pressure (MAP = CO × SVR)</strong>. Although
          initially beneficial, these responses become maladaptive in chronic
          heart failure.
        </p>

        {/* Overview */}
        <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 shadow-sm">
          <h4 className="font-semibold text-[#A71627] mb-2">
            Compensatory Response
          </h4>

          <p className="text-sm font-medium">
            ↓ Cardiac Output → SNS Activation + RAAS Activation → Maintain Blood
            Pressure → Chronic Heart Failure Progression
          </p>
        </div>

        {/* SNS */}
        <div className="rounded-xl border border-red-200 bg-red-50/70 p-4 shadow-sm">
          <h4 className="font-semibold text-[#A71627] mb-2">
            1. Sympathetic Nervous System (SNS)
          </h4>

          <div className="space-y-2 text-sm">
            <p>
              <strong>Purpose:</strong> Restore blood pressure and cardiac
              output.
            </p>

            <ul className="list-disc pl-5 space-y-1">
              <li>↑ Heart rate (HR).</li>
              <li>↑ Systemic vascular resistance (SVR).</li>
              <li>Initially improves cardiac output.</li>
              <li>Chronic stimulation causes β₁-receptor downregulation.</li>
              <li>↑ Risk of arrhythmias and cardiomyocyte damage.</li>
            </ul>
          </div>
        </div>

        {/* RAAS */}
        <div className="rounded-xl border border-blue-200 bg-blue-50/70 p-4 shadow-sm">
          <h4 className="font-semibold text-[#A71627] mb-2">
            2. Renin-Angiotensin-Aldosterone System (RAAS)
          </h4>

          <div className="space-y-2 text-sm">
            <p>
              <strong>Purpose:</strong> Increase circulating blood volume and
              arterial pressure.
            </p>

            <ul className="list-disc pl-5 space-y-1">
              <li>Reduced renal perfusion activates RAAS.</li>
              <li>Fluid retention increases preload.</li>
              <li>Vasoconstriction increases afterload.</li>
              <li>Helps maintain blood pressure initially.</li>
            </ul>
          </div>
        </div>

        {/* Vicious Cycle */}
        <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-4 shadow-sm">
          <h4 className="font-semibold text-[#A71627] mb-2">
            3. Maladaptive Vicious Cycle
          </h4>

          <div className="space-y-2 text-sm">
            <p>
              <strong>Chronic compensation</strong> eventually worsens heart
              failure.
            </p>

            <ul className="list-disc pl-5 space-y-1">
              <li>↑ Afterload increases ventricular workload.</li>
              <li>Fluid retention worsens pulmonary edema.</li>
              <li>Peripheral edema develops.</li>
              <li>Progressive ventricular dysfunction.</li>
            </ul>
          </div>
        </div>
      </div>
    ),

    clinicalTip:
      "Exam tip: ↓ Cardiac output activates SNS and RAAS. Initially compensatory, chronic activation becomes maladaptive, increasing afterload, fluid retention, and heart failure progression.",
  },
];

export default function MechanicalProperties() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeIndex2, setActiveIndex2] = useState(0);
  const [activeIndex3, setActiveIndex3] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const activeSection = sections[activeIndex];
  const activeSection2 = sections2[activeIndex2];
  const activeSection3 = sections3[activeIndex3];

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

  const handleSection3Change = (index: number) => {
    if (index === activeIndex3) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex3(index);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <>
      {/*Lo1 */}
      <section
        id="lo21"
        className="w-full min-h-screen bg-[#FDF8F5] text-[#1F365C] py-16 px-6 md:px-12 lg:px-24 font-sans selection:bg-[#A71627]/10 selection:text-[#A71627]"
      >
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          {/* FULL-WIDTH HEADER SECTION */}
          <header className="w-full border-b border-[#1F365C]/10 pb-5">
            <p className="text-xs font-bold tracking-[0.2em] text-[#A71627] uppercase mb-2">
              Learning Outcome 1
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight">
              Mechanism of Cardiac Muscle
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
        id="lo22"
        className="w-full min-h-screen bg-[#FDF8F5] text-[#1F365C] py-16 px-6 md:px-12 lg:px-24 font-sans selection:bg-[#A71627]/10 selection:text-[#A71627]"
      >
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          {/* FULL-WIDTH HEADER SECTION */}
          <header className="w-full border-b border-[#1F365C]/10 pb-5">
            <p className="text-xs font-bold tracking-[0.2em] text-[#A71627] uppercase mb-2">
              Learning Outcome 2
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight">
              Regulation of Cardiac Contractility
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
        </div>
      </section>

      {/*Lo3 */}
      <section
        id="lo23"
        className="w-full min-h-screen bg-[#FDF8F5] text-[#1F365C] py-16 px-6 md:px-12 lg:px-24 font-sans selection:bg-[#A71627]/10 selection:text-[#A71627]"
      >
        <div className="max-w-4xl mx-auto flex flex-col gap-10">
          {/* FULL-WIDTH HEADER SECTION */}
          <header className="w-full border-b border-[#1F365C]/10 pb-5">
            <p className="text-xs font-bold tracking-[0.2em] text-[#A71627] uppercase mb-2">
              Learning Outcome 3
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight">
              Physiological & Clinical Significance
            </h2>
          </header>

          <div className="max-w-7xl mx-auto">
            {/* Segmented Controls Container */}
            <div className="space-y-6 pb-6">
              <div className="flex flex-wrap gap-2 p-1.5 bg-white/30 backdrop-blur-xl border border-white/40 rounded-2xl shadow-xl">
                {sections3.map((section3, index) => {
                  const isActive = activeIndex3 === index;
                  return (
                    <button
                      key={section3.id}
                      onClick={() => handleSection3Change(index)}
                      className={`flex-1 min-w-[120px] py-2.5 px-4 rounded-xl text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? "bg-[#A71627] text-white shadow-md transform -translate-y-0.5"
                          : "text-[#1F365C]/70 hover:bg-white/50 hover:text-[#1F365C] hover:shadow-sm"
                      }`}
                    >
                      {section3.title}
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
                    {activeSection3.description}
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
                          {activeSection3.clinicalTip}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <header>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight">
              Let's Test Your Knowledge !
            </h2>
          </header>
          <MechanicalGame />
        </div>
      </section>
    </>
  );
}
