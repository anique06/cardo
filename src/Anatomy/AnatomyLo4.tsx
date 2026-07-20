import React, { useState } from "react";
import { Stethoscope } from "lucide-react";

interface Section {
  id: string;
  title: string;
  image: string;
  description: React.ReactNode;
  clinicalTip: string;
}
const sections: Section[] = [
  {
    id: "coronary-sinus",
    title: "Coronary Sinus",
    image: "/CoronarySinus.png",
    description: (
      <div className="space-y-4">
        <p className="text-sm">
          The <strong>coronary sinus</strong> is the main pathway for cardiac
          venous drainage, returning approximately{" "}
          <strong>85% of cardiac blood</strong> back into circulation.
        </p>
        <ul className="list-disc pl-5 text-sm space-y-2">
          <li>
            <strong>Location:</strong> It lies nestled in the posterior part of
            the coronary sulcus (atrioventricular groove).
          </li>
          <li>
            <strong>Termination:</strong> It opens directly into the posterior
            wall of the right atrium between the IVC opening and the tricuspid
            orifice.
          </li>
          <li>
            <strong>Valvular Guard:</strong> Its opening is structurally guarded
            by a thin endocardial fold known as the{" "}
            <strong>Thebesian valve</strong>.
          </li>
        </ul>
      </div>
    ),
    clinicalTip:
      "The coronary sinus is a vital anatomical access route for electrophysiologists to place pacing leads for cardiac resynchronization therapy.",
  },
  {
    id: "vein-pairings",
    title: "Vein-Artery Pairings",
    image: "/VeinPairings.png",
    description: (
      <div className="space-y-4">
        <p className="text-sm">
          In practical examinations, cardiac veins are almost always evaluated
          based on the specific arterial structures they run alongside within
          the heart's grooves:
        </p>
        <div className="overflow-x-auto mt-2">
          <table className="min-w-full text-xs text-left text-[#1F365C]/90 border border-[#1F365C]/10 rounded-lg overflow-hidden">
            <thead className="bg-[#1F365C]/5 text-[#1F365C] font-semibold">
              <tr>
                <th className="px-3 py-2 border-b border-[#1F365C]/10">Vein</th>
                <th className="px-3 py-2 border-b border-[#1F365C]/10">
                  Accompanying Artery
                </th>
                <th className="px-3 py-2 border-b border-[#1F365C]/10">
                  Region Drained
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1F365C]/10">
              <tr>
                <td className="px-3 py-2 font-medium">Great Cardiac Vein</td>
                <td className="px-3 py-2">Anterior Interventricular (LAD)</td>
                <td className="px-3 py-2">Anterior wall & apex</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium">Middle Cardiac Vein</td>
                <td className="px-3 py-2">Posterior Interventricular (PDA)</td>
                <td className="px-3 py-2">Posterior / Diaphragmatic wall</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium">Small Cardiac Vein</td>
                <td className="px-3 py-2">Right Marginal Artery</td>
                <td className="px-3 py-2">Inferior right margin</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
    clinicalTip:
      "Easy Memory Hooks: Great pairs with LAD (The 'Great Left' side). Middle pairs with PDA (Both share a 'D' and represent the back/middle).",
  },
  {
    id: "direct-drainage",
    title: "Direct Drainage",
    image: "/DirectDrainage.png",
    description: (
      <div className="space-y-4">
        <p className="text-sm italic text-gray-500 mb-2">
          Certain venous networks bypass the coronary sinus entirely, emptying
          directly into the internal heart chambers:
        </p>
        <ul className="list-disc pl-5 text-sm space-y-3">
          <li>
            <strong>Anterior Cardiac Veins:</strong> A collection of 2 to 4
            small vessels that drain the anterior surface of the right
            ventricle. They travel directly across the coronary groove to
            discharge straight into the right atrium.
          </li>
          <li>
            <strong>Thebesian Veins (Venae Cordis Minimae):</strong>{" "}
            Microscopic, minute vascular channels located deep within the
            myocardium. They open directly into the interior of all four cardiac
            chambers.
          </li>
        </ul>
      </div>
    ),
    clinicalTip:
      "Thebesian veins that empty directly into the left atrium and left ventricle create a minor, completely normal physiological right-to-left shunt by mixing deoxygenated blood into systemic arterial circulation.",
  },
  {
    id: "vein-of-marshall",
    title: "Vein of Marshall",
    image: "/VeinOfMarshall.png",
    description: (
      <div className="space-y-4">
        <p className="text-sm">
          The <strong>Vein of Marshall</strong> (oblique vein of the left
          atrium) runs downward along the posterior aspect of the left atrium to
          merge directly into the great cardiac vein, forming the origin of the
          coronary sinus.
        </p>
        <ul className="list-disc pl-5 text-sm space-y-2">
          <li>
            <strong>Embryological Origin:</strong> It is a structural remnant
            left behind by the involution of the embryonic left superior vena
            cava.
          </li>
          <li>
            <strong>Pathophysiological Role:</strong> The muscular tissue
            surrounding this vestigial track is rich in arrhythmogenic nodes
            capable of generating rapid focal discharges.
          </li>
        </ul>
      </div>
    ),
    clinicalTip:
      "The Vein of Marshall is a highly high-yield clinical culprit and a specific target during catheter ablation procedures for patients suffering from recurrent atrial fibrillation.",
  },
];
export default function AnatomyLo1() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const activeSection = sections[activeIndex];

  const handleSectionChange = (index: number) => {
    if (index === activeIndex) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <section className="w-full min-h-screen bg-[#FDF8F5] text-[#1F365C] py-16 px-6 md:px-12 lg:px-24 font-sans selection:bg-[#A71627]/10 selection:text-[#A71627]">
      <div className="max-w-7xl mx-auto">
        {/* FULL-WIDTH HEADER SECTON */}
        <header className="w-full mb-5 border-b border-[#1F365C]/10 pb-5 max-w-4xl">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-[#A71627] uppercase mb-2">
              Learning Outcome 4
            </p>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight mb-6">
            Venous Drainage
          </h2>
        </header>

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
                  isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
                }`}
              />
            </div>
          </div>

          {/* RIGHT COLUMN: Controls & Adaptive Layout */}
          <div className="w-full lg:w-1/2 flex flex-col space-y-8">
            {/* Segmented Controls Container */}
            <div className="space-y-6">
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

              {/* Progress Dot Bar Indicator */}
              <div className="relative flex justify-between items-center px-6 max-w-sm mr-auto lg:ml-0 w-full">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-[#1F365C]/10 z-0"></div>
                {sections.map((section, index) => {
                  const isActive = index === activeIndex;
                  const isPassed = index < activeIndex;
                  return (
                    <div
                      key={`progress-${section.id}`}
                      className="relative z-10 flex flex-col items-center gap-2"
                    >
                      <div
                        className={`w-3 h-3 rounded-full transition-all duration-500 border-2 ${
                          isActive
                            ? "bg-[#A71627] border-[#A71627] scale-125"
                            : isPassed
                              ? "bg-[#1F365C]/40 border-[#1F365C]/40"
                              : "bg-[#FDF8F5] border-[#1F365C]/30"
                        }`}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Dynamic Content Block */}
            <div
              className={`transition-all duration-300 ${isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}
            >
              <div className="mb-8 overflow-y-auto h-50 text-[#1F365C]/80 leading-relaxed text-base min-h-[160px]">
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
    </section>
  );
}
