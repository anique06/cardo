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
    id: "divisions",
    title: "Anatomical Divisions",
    image: "/MediastinumDivisions.png",
    description: (
      <div className="space-y-4">
        <p className="font-semibold text-[#1F365C]">
          An imaginary horizontal line divides the mediastinum into two primary
          parts:
        </p>
        <div>
          <h4 className="font-semibold mb-1 text-[#A71627]">Reference Line</h4>
          <p className="text-sm">
            Drawn from the <strong>sternal angle (Angle of Louis)</strong>{" "}
            anteriorly to the
            <strong> intervertebral disc between T₄ and T₅</strong> posteriorly.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-1 text-[#1F365C]">
            Superior Mediastinum
          </h4>
          <p className="text-sm">
            Lies above the sternal angle plane (T₁ to T₄/T₅).
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-1 text-[#1F365C]">
            Inferior Mediastinum
          </h4>
          <p className="text-sm mb-2">
            Lies below the sternal angle plane down to the diaphragm (T₅ to
            T₁₂). Further subdivided by pericardium into:
          </p>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>
              <strong>Anterior:</strong> Between sternum and anterior
              pericardium
            </li>
            <li>
              <strong>Middle:</strong> Occupied by pericardium and heart
            </li>
            <li>
              <strong>Posterior:</strong> Between posterior pericardium and
              vertebrae
            </li>
          </ul>
        </div>
      </div>
    ),
    clinicalTip:
      "The sternal angle (Angle of Louis) is a crucial palpable landmark for counting ribs and vertebrae.",
  },
  {
    id: "superior",
    title: "Superior Mediastinum",
    image: "/MediastinumSuperior.png",
    description: (
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold mb-1 text-[#1F365C]">Thymus</h4>
          <p className="text-sm">Or thymic remnants in adults.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-1 text-[#1F365C]">Major Vessels</h4>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>
              Aortic arch and 3 branches: Brachiocephalic trunk, Left Common
              Carotid, Left Subclavian
            </li>
            <li>Brachiocephalic veins</li>
            <li>Superior Vena Cava (upper half)</li>
            <li>Left Superior Intercostal vein</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-1 text-[#1F365C]">
            Nerves & Passageways
          </h4>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Phrenic nerves</li>
            <li>Vagus nerves</li>
            <li>Left Recurrent Laryngeal nerve</li>
            <li>Sympathetic trunks, Trachea, Esophagus, Thoracic duct</li>
          </ul>
        </div>
      </div>
    ),
    clinicalTip:
      "The aortic arch branches create a predictable anatomical pattern—remember: Brachiocephalic, Left Common Carotid, Left Subclavian.",
  },
  {
    id: "anterior",
    title: "Anterior Mediastinum",
    image: "/MediastinumAnterior.png",
    description: (
      <div className="space-y-4">
        <p className="text-sm mb-2">
          The smallest division, located between the sternum and anterior
          pericardium:
        </p>
        <ul className="list-disc pl-5 text-sm space-y-2">
          <li>
            <strong>Thymus</strong> — inferior extension in children
          </li>
          <li>
            <strong>Fat & Connective Tissue</strong> — loose areolar tissue
          </li>
          <li>
            <strong>Lymph Nodes</strong> — Sternopericardial and anterior
            mediastinal nodes
          </li>
          <li>
            <strong>Internal Thoracic Vessel Branches</strong> — with
            Sternopericardial ligaments
          </li>
        </ul>
        <p className="text-sm mt-4 italic text-[#1F365C]/70">
          Clinically, this space is often accessed during cardiac procedures.
        </p>
      </div>
    ),
    clinicalTip:
      "The anterior mediastinum expands with age as the thymus involutes; it's larger in children and nearly empty in adults.",
  },
  {
    id: "middle",
    title: "Middle Mediastinum",
    image: "/MediastinumMiddle.png",
    description: (
      <div className="space-y-4">
        <p className="text-sm font-semibold mb-3">
          Contains the heart and major cardiac structures:
        </p>
        <div>
          <h4 className="font-semibold mb-1 text-[#1F365C]">Primary Content</h4>
          <p className="text-sm mb-2">Heart & Pericardium</p>
        </div>
        <div>
          <h4 className="font-semibold mb-1 text-[#1F365C]">
            Great Vessels (Proximal)
          </h4>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Ascending aorta</li>
            <li>Superior Vena Cava (lower half)</li>
            <li>
              Pulmonary trunk & division into right/left pulmonary arteries
            </li>
            <li>Left & Right Pulmonary veins</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-1 text-[#1F365C]">
            Associated Structures
          </h4>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Phrenic nerves (pass along lateral pericardium)</li>
            <li>Pericardiophrenic vessels</li>
            <li>Tracheal bifurcation and tracheobronchial lymph nodes</li>
          </ul>
        </div>
      </div>
    ),
    clinicalTip:
      "The transverse pericardial sinus lies posterior to ascending aorta/pulmonary trunk; surgeons use it during cardiac bypass.",
  },
  {
    id: "posterior",
    title: "Posterior Mediastinum",
    image: "/MediastinumPosterior.png",
    description: (
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold mb-1 text-[#1F365C]">Digestive</h4>
          <p className="text-sm mb-2">
            Esophagus (accompanied by the Esophageal Plexus / Anterior &
            Posterior Vagal Trunks)
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-1 text-[#1F365C]">Vascular</h4>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Thoracic Descending Aorta and its branches</li>
            <li>Azygos & Hemiazygos venous systems</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-1 text-[#1F365C]">
            Lymphatic & Nervous
          </h4>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Thoracic Duct and posterior mediastinal lymph nodes</li>
            <li>Sympathetic trunks</li>
            <li>Thoracic splanchnic nerves (Greater, Lesser, Least)</li>
          </ul>
        </div>
      </div>
    ),
    clinicalTip:
      "The esophagus is a key anatomical landmark in the posterior mediastinum; inflammation or perforation has serious consequences.",
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
              Learning Outcome 2
            </p>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight mb-6">
            Mediastinum, Its Divisions & Contents
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
