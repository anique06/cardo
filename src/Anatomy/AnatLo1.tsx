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
    id: "apex",
    title: "Apex & Base",
    image: "/HeartApexBase.png",
    description: (
      <div className="space-y-4">
        <p>
          The <strong>apex</strong> of the heart is formed entirely by the left
          ventricle. It points inferolaterally toward the left fifth intercostal
          space approximately 9 cm from the midsternal line and represents the
          point of maximal impulse (PMI).
        </p>
        <p>
          The <strong>base</strong> is formed mainly by the left atrium with a
          small contribution from the right atrium. It faces posteriorly toward
          vertebral levels T6–T9 and serves as the entry point for the pulmonary
          veins and venae cavae.
        </p>
      </div>
    ),
    clinicalTip: "Always remember: Apex = Left Ventricle, Base = Left Atrium",
  },
  {
    id: "surfaces",
    title: "Surfaces & Borders",
    image: "/HeartSurfaces.png",
    description: (
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold mb-1 text-[#1F365C]">
            Anterior (Sternocostal) Surface
          </h4>
          <p className="text-sm">Mainly right ventricle.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-1 text-[#1F365C]">
            Inferior (Diaphragmatic) Surface
          </h4>
          <p className="text-sm">
            Mainly left ventricle with part of right ventricle.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-1 text-[#1F365C]">
            Pulmonary Surfaces
          </h4>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Left pulmonary surface = Left ventricle.</li>
            <li>Right pulmonary surface = Right atrium.</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-1 text-[#1F365C]">Borders</h4>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Right border = Right atrium.</li>
            <li>Inferior border = Mainly right ventricle.</li>
            <li>Left border = Mainly left ventricle.</li>
            <li>Superior border = Atria and great vessels.</li>
          </ul>
        </div>
      </div>
    ),
    clinicalTip: "Knowing the borders helps identify chambers during imaging.",
  },
  {
    id: "sulci",
    title: "Sulci & Grooves",
    image: "/HeartSulci.png",
    description: (
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold mb-1 text-[#1F365C]">Coronary Sulcus</h4>
          <p className="text-sm mb-1">
            Separates atria from ventricles. It contains:
          </p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Coronary sinus</li>
            <li>Right coronary artery</li>
            <li>Circumflex artery</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-1 text-[#1F365C]">
            Anterior Interventricular Sulcus
          </h4>
          <p className="text-sm mb-1">Contains:</p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>LAD artery</li>
            <li>Great cardiac vein</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-1 text-[#1F365C]">
            Posterior Interventricular Sulcus
          </h4>
          <p className="text-sm mb-1">Contains:</p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Posterior interventricular artery</li>
            <li>Middle cardiac vein</li>
          </ul>
        </div>
      </div>
    ),
    clinicalTip:
      "The coronary sulcus is one of the most important landmarks during anatomy practical examinations.",
  },
];

export default function AnatLo1() {
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
              Learning Outcome 1
            </p>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight mb-6">
            External Anatomy & Surface Landmarks
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
