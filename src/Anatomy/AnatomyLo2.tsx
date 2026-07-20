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
    id: "right-atrium",
    title: "Right Atrium",
    image: "/RightAtrium.png",
    description: (
      <div className="space-y-4">
        <p className="text-xs italic text-gray-500 mb-2">
          Inflow tract (rough proper atrium) vs. Outflow tract (smooth sinus
          venarum).
        </p>
        <ul className="list-disc pl-5 text-sm space-y-2">
          <li>
            <strong>Sinus Venarum:</strong> The smooth-walled posterior portion
            derived from the embryonic sinus venosus. It receives the SVC, IVC,
            and coronary sinus.
          </li>
          <li>
            <strong>Atrium Proper:</strong> The rough-walled anterior portion
            lined with ridges called pectinate muscles.
          </li>
          <li>
            <strong>Crista Terminalis:</strong> A vertical fibromuscular ridge
            that separates the smooth sinus venarum from the rough atrium
            proper. Externally, this corresponds to the sulcus terminalis. The
            SA node lies in the superior part of this ridge.
          </li>
          <li>
            <strong>Interatrial Septum:</strong> Features the fossa ovalis, a
            remnant of the fetal foramen ovale.
          </li>
        </ul>
      </div>
    ),
    clinicalTip:
      "The SA node sits nicely in the superior part of the crista terminalis, making it a critical landmark during electrophysiology studies.",
  },
  {
    id: "right-ventricle",
    title: "Right Ventricle",
    image: "/RightVentricle.png",
    description: (
      <div className="space-y-4">
        <p className="text-xs italic text-gray-500 mb-2">
          Inflow tract (rough trabeculae) vs. Outflow tract (smooth
          infundibulum).
        </p>
        <ul className="list-disc pl-5 text-sm space-y-2">
          <li>
            <strong>Trabeculae Carneae:</strong> Irregular muscular ridges
            lining the main influx wall.
          </li>
          <li>
            <strong>Infundibulum (Conus Arteriosus):</strong> The smooth-walled,
            cone-shaped outflow tract leading into the pulmonary trunk.
          </li>
          <li>
            <strong>Tricuspid Valve Apparatus:</strong> Consists of three cusps
            (Anterior, Posterior, Septal) attached via chordae tendineae to
            three corresponding papillary muscles.
          </li>
          <li>
            <strong>Moderator Band (Septomarginal Trabecula):</strong> A
            specialized muscular band connecting the interventricular septum to
            the anterior papillary muscle. It carries the right bundle branch of
            the conduction system.
          </li>
        </ul>
      </div>
    ),
    clinicalTip:
      "The moderator band prevents overdistension of the ventricle and provides a shortcut for electrical signals to the anterior papillary muscle.",
  },
  {
    id: "left-atrium",
    title: "Left Atrium",
    image: "/LeftAtrium.png",
    description: (
      <div className="space-y-4">
        <p className="text-xs italic text-gray-500 mb-2">
          Inflow tract (smooth cavity) vs. Outflow tract ( pectinate muscles
          restricted to the auricle).
        </p>
        <ul className="list-disc pl-5 text-sm space-y-2">
          <li>
            <strong>Main Cavity:</strong> Characterized by a completely smooth
            posterior wall due to the embryological incorporation of the
            primordial pulmonary veins. It receives the four pulmonary veins.
          </li>
          <li>
            <strong>Left Auricle:</strong> Unlike the main cavity, the interior
            of the auricle contains rough pectinate muscles.
          </li>
        </ul>
      </div>
    ),
    clinicalTip:
      "The rough left auricle is a classic high-yield clinical site for thrombus formation in patients with atrial fibrillation.",
  },
  {
    id: "left-ventricle",
    title: "Left Ventricle",
    image: "/LeftVentricle.png",
    description: (
      <div className="space-y-4">
        <p className="text-xs italic text-gray-500 mb-2">
          Inflow tract (fine trabeculae) vs. Outflow tract (smooth aortic
          vestibule).
        </p>
        <ul className="list-disc pl-5 text-sm space-y-2">
          <li>
            <strong>Myometrial Thickness:</strong> The wall is three times
            thicker than that of the right ventricle to overcome high systemic
            vascular resistance.
          </li>
          <li>
            <strong>Aortic Vestibule:</strong> The smooth outflow tract located
            superiorly, leading directly into the aortic orifice.
          </li>
          <li>
            <strong>Mitral (Bicuspid) Valve Apparatus:</strong> Consists of two
            large cusps (Anterior and Posterior) anchored by robust chordae
            tendineae to two powerful papillary muscles (Anterolateral and
            Posteromedial).
          </li>
        </ul>
      </div>
    ),
    clinicalTip:
      "The smooth aortic vestibule directs blood straight into the aorta without turbulent interference.",
  },
];

export default function AnatomyLo2() {
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
              Learning Outcome 2
            </p>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight mb-6">
            Heart On The Inside
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
