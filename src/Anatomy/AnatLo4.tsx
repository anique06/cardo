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
    id: "superior-vena-cava",
    title: "Superior Vena Cava (SVC)",
    image: "/SuperiorVenaCava.png",
    description: (
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold mb-1 text-[#1F365C]">Origin</h4>
          <p className="text-sm">
            Formed by the junction of the left and right brachiocephalic veins.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-1 text-[#1F365C]">
            Chamber Connection
          </h4>
          <p className="text-sm">Right Atrium (superior aspect).</p>
        </div>
        <div>
          <h4 className="font-semibold mb-1 text-[#1F365C]">Functional Role</h4>
          <p className="text-sm">
            Drains deoxygenated blood from the upper limbs, head, neck, and
            thorax above the diaphragm.
          </p>
        </div>
      </div>
    ),
    clinicalTip:
      "Central venous catheters (CVCs) are often placed in the SVC via the internal jugular or subclavian vein for fluid administration or monitoring.",
  },
  {
    id: "inferior-vena-cava",
    title: "Inferior Vena Cava (IVC)",
    image: "/InferiorVenaCava.png",
    description: (
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold mb-1 text-[#1F365C]">Origin</h4>
          <p className="text-sm">
            Formed by the common iliac veins; passes through the diaphragm at
            the caval opening (T₈).
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-1 text-[#1F365C]">
            Chamber Connection
          </h4>
          <p className="text-sm">Right Atrium (inferior aspect).</p>
        </div>
        <div>
          <h4 className="font-semibold mb-1 text-[#1F365C]">Functional Role</h4>
          <p className="text-sm">
            Drains deoxygenated blood from the abdomen, pelvis, and lower limbs.
          </p>
        </div>
      </div>
    ),
    clinicalTip:
      "An IVC filter can be surgically placed to prevent large deep vein thromboses (DVTs) from the lower extremities from reaching the lungs.",
  },
  {
    id: "pulmonary-trunk",
    title: "Pulmonary Trunk",
    image: "/PulmonaryTrunk.png",
    description: (
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold mb-1 text-[#1F365C]">Origin</h4>
          <p className="text-sm">
            Arises from the conus arteriosus (infundibulum) of the Right
            Ventricle.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-1 text-[#1F365C]">
            Chamber Connection
          </h4>
          <p className="text-sm">Right Ventricle.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-1 text-[#1F365C]">Functional Role</h4>
          <p className="text-sm">
            Carries deoxygenated blood away from the heart; branches into the
            Right and Left Pulmonary Arteries to supply the lungs.
          </p>
        </div>
      </div>
    ),
    clinicalTip:
      "A massive pulmonary embolism (saddle embolus) can lodge directly at the bifurcation of the pulmonary trunk, causing sudden and severe right heart failure.",
  },
  {
    id: "pulmonary-veins",
    title: "Pulmonary Veins",
    image: "/PulmonaryVeins.png",
    description: (
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold mb-1 text-[#1F365C]">Origin</h4>
          <p className="text-sm">
            Arise from the alveolar capillary beds in the lungs. There are 4 in
            total: 2 Right (Superior & Inferior) and 2 Left (Superior &
            Inferior).
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-1 text-[#1F365C]">
            Chamber Connection
          </h4>
          <p className="text-sm">Left Atrium (posterior wall).</p>
        </div>
        <div>
          <h4 className="font-semibold mb-1 text-[#1F365C]">Functional Role</h4>
          <p className="text-sm">
            Deliver oxygenated blood from the lungs back to the heart.
          </p>
        </div>
      </div>
    ),
    clinicalTip:
      "The myocardial sleeves extending into the pulmonary veins as they enter the left atrium are the most common source of ectopic electrical foci that trigger Atrial Fibrillation.",
  },
  {
    id: "ascending-aorta",
    title: "Ascending Aorta",
    image: "/AscendingAorta.png",
    description: (
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold mb-1 text-[#1F365C]">Origin</h4>
          <p className="text-sm">
            Arises from the aortic orifice of the Left Ventricle.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-1 text-[#1F365C]">
            Chamber Connection
          </h4>
          <p className="text-sm">Left Ventricle.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-1 text-[#1F365C]">Functional Role</h4>
          <p className="text-sm">
            Carries oxygenated blood to the systemic circulation. Branches
            immediately into the left and right coronary arteries at the aortic
            sinuses, before arching into the Aortic Arch.
          </p>
        </div>
      </div>
    ),
    clinicalTip:
      "The ascending aorta is subject to the highest pulsatile shear stress in the body, making it a prime location for aortic aneurysms and dissections.",
  },
];
export default function AnatLo3() {
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
        {/* HEADER SECTION */}
        <header className="w-full mb-5 border-b border-[#1F365C]/10 pb-5 max-w-4xl">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-[#A71627] uppercase mb-2">
              Learning Outcome 3
            </p>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight mb-6">
            Great Vessels & Heart Relation
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
                      className={`flex-1 min-w-[100px] py-2.5 px-3 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
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
              <div className="relative flex justify-between items-center px-6 max-w-full mr-auto lg:ml-0 w-full">
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
              <div className="mb-8 overflow-y-auto h-50 text-[#1F365C]/80 leading-relaxed text-base min-h-[200px]">
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
