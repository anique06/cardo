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
    id: "general-origin",
    title: "General Origin",
    image: "/CoronaryOrigin.png",
    description: (
      <div className="space-y-4">
        <p className="text-sm">
          Both primary coronary arteries arise directly from the root of the
          ascending aorta, specifically within the{" "}
          <strong>aortic sinuses (sinuses of Valsalva)</strong> located
          immediately superior to the aortic valve cusps:
        </p>
        <ul className="list-disc pl-5 text-sm space-y-2">
          <li>
            <strong>Right Coronary Artery (RCA):</strong> Arises from the
            anterior (right) aortic sinus.
          </li>
          <li>
            <strong>Left Coronary Artery (LCA):</strong> Arises from the left
            posterior aortic sinus.
          </li>
        </ul>
        <p className="text-xs italic text-gray-500 bg-gray-50 p-2 rounded border border-gray-100">
          Note: The right posterior aortic sinus is completely non-coronary.
        </p>
      </div>
    ),
    clinicalTip:
      "The right posterior aortic sinus is functionally non-coronary because no coronary vessels originate from it.",
  },
  {
    id: "rca",
    title: "Right Coronary (RCA)",
    image: "/RightCoronaryArtery.png",
    description: (
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold mb-1 text-[#1F365C]">Course</h4>
          <p className="text-sm">
            Emerges from the anterior aortic sinus, travels forward between the
            right auricle and pulmonary trunk, and enters the{" "}
            <strong>anterior coronary sulcus</strong>. It loops around the
            inferior border to the posterior surface toward the crux.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-1 text-[#1F365C]">Key Branches</h4>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>
              <strong>Sinoatrial (SA) Nodal Artery:</strong> Arises near the
              origin (in ~60% of people) to supply the SA node.
            </li>
            <li>
              <strong>Right Marginal Artery:</strong> Branches near the inferior
              border and runs toward the apex.
            </li>
            <li>
              <strong>Atrioventricular (AV) Nodal Artery:</strong> Arises near
              the crux to supply the AV node.
            </li>
            <li>
              <strong>Posterior Interventricular / PDA:</strong> Runs in the
              posterior interventricular sulcus toward the apex.
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-1 text-[#1F365C]">Area of Supply</h4>
          <p className="text-sm">
            Right atrium, right ventricle, diaphragmatic/inferior surface of the
            left ventricle (via PDA), posterior 1/3 of the interventricular
            septum, the SA node (60%), and the AV node (85-90%).
          </p>
        </div>
      </div>
    ),
    clinicalTip:
      "An RCA occlusion can cause severe bradycardia or heart blocks because it supplies both the SA and AV nodes in the majority of patients.",
  },
  {
    id: "lca",
    title: "Left Coronary (LCA)",
    image: "/LeftCoronaryArtery.png",
    description: (
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold mb-1 text-[#1F365C]">Course</h4>
          <p className="text-sm">
            Often called the <strong>Left Main Coronary Artery</strong>. It
            passes between the pulmonary trunk and left auricle into the
            coronary sulcus, running a short course (less than 2 cm) before
            bifurcating.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-1 text-[#1F365C]">Key Branches</h4>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>
              <strong>Left Anterior Descending (LAD):</strong> Travels down the
              anterior interventricular sulcus toward the apex. Spawns{" "}
              <em>Diagonal branches</em> (anterolateral wall) and{" "}
              <em>Septal perforators</em> (deep septum).
            </li>
            <li>
              <strong>Left Circumflex (LCx):</strong> Curves left around the
              coronary sulcus to the posterior surface. Spawns the{" "}
              <em>Obtuse Marginal (OM) artery</em> (lateral wall).
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-1 text-[#1F365C]">Area of Supply</h4>
          <p className="text-sm">
            Left atrium, most of the left ventricle, anterior 2/3 of the
            interventricular septum (via LAD), the bundle of His/bundle
            branches, and the SA node (~40% via LCx).
          </p>
        </div>
      </div>
    ),
    clinicalTip:
      "Proximal occlusion of the LAD is colloquially termed the 'widow-maker' due to the massive drop in blood supply to the anterior left ventricular myocardium.",
  },
  {
    id: "dominance",
    title: "Coronary Dominance",
    image: "/CoronaryDominance.png",
    description: (
      <div className="space-y-4">
        <p className="text-sm">
          Coronary dominance is clinically determined by which artery gives rise
          to the <strong>Posterior Descending Artery (PDA)</strong> and the AV
          nodal artery, supplying the posterior interventricular septum.
        </p>
        <div className="overflow-x-auto mt-2">
          <table className="min-w-full text-xs text-left text-[#1F365C]/90 border border-[#1F365C]/10 rounded-lg overflow-hidden">
            <thead className="bg-[#1F365C]/5 text-[#1F365C] font-semibold">
              <tr>
                <th className="px-3 py-2 border-b border-[#1F365C]/10">
                  Dominance Type
                </th>
                <th className="px-3 py-2 border-b border-[#1F365C]/10">
                  Source of PDA
                </th>
                <th className="px-3 py-2 border-b border-[#1F365C]/10">
                  Frequency
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1F365C]/10">
              <tr>
                <td className="px-3 py-2 font-medium">Right Dominant</td>
                <td className="px-3 py-2">Right Coronary Artery (RCA)</td>
                <td className="px-3 py-2">~80% - 85%</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium">Left Dominant</td>
                <td className="px-3 py-2">Left Circumflex Artery (LCx)</td>
                <td className="px-3 py-2">~10% - 15%</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium">Codominant / Balanced</td>
                <td className="px-3 py-2">Both RCA and LCx contribute</td>
                <td className="px-3 py-2">~5%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
    clinicalTip:
      "Regardless of dominance, the Left Main and LAD always supply the largest total mass of functional left ventricular myocardium.",
  },
];

export default function AnatomyLo3() {
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
              Learning Outcome 3
            </p>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight mb-6">
            Coronary Arteries
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
