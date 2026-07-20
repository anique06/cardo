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
    id: "innervation",
    title: "Cardiac Innervation",
    image: "/HeartInnervation.png",
    description: (
      <div className="space-y-4">
        <p className="text-sm">
          The heart's autonomic regulatory network is organized into the{" "}
          <strong>cardiac plexus</strong>, located directly beneath the arch of
          the aorta. It features two opposing functional divisions:
        </p>
        <ul className="list-disc pl-5 text-sm space-y-2">
          <li>
            <strong>Sympathetic Division (T1–T4):</strong> Postganglionic fibers
            act to increase heart rate (<em>positive chronotropy</em>) and
            increase the force of myocardial contraction (
            <em>positive inotropy</em>).
          </li>
          <li>
            <strong>Parasympathetic Division (CN X / Vagus Nerve):</strong>{" "}
            Preganglionic fibers extend directly to the heart to decrease the
            heart rate, primarily acting on the nodal tissues.
          </li>
        </ul>
      </div>
    ),
    clinicalTip:
      "While the heart generates its own rhythm inherently, the autonomic nervous system via the cardiac plexus constantly modulates the rate and force to meet metabolic demands.",
  },
  {
    id: "referred-pain",
    title: "Referred Pain",
    image: "/ReferredPain.png",
    description: (
      <div className="space-y-4">
        <p className="text-sm">
          Ischemic cardiac pain (angina pectoris) is processed through a complex
          anatomical pathway that accounts for its specific somatic
          distribution:
        </p>
        <ul className="list-disc pl-5 text-sm space-y-2">
          <li>
            <strong>Afferent Pathway:</strong> Visceral pain fibers from the
            myocardium travel retrogradely alongside sympathetic pathways back
            into spinal cord segments <strong>T1 through T4</strong>.
          </li>
          <li>
            <strong>Mechanism:</strong> Because these visceral inputs share
            secondary sensory neurons in the dorsal horn with somatic afferents
            from the corresponding thoracic wall and upper limb skin segments,
            the brain misinterprets the source.
          </li>
        </ul>
      </div>
    ),
    clinicalTip:
      "This shared spinal pathway explains why classic cardiac ischemia presents as referred crushing pain across the chest and down the medial aspect of the left arm.",
  },
  {
    id: "atrial-conduction",
    title: "Atrial Conduction",
    image: "/AtrialConduction.png",
    description: (
      <div className="space-y-4">
        <p className="text-xs italic text-gray-500 mb-2">
          The upper electrical pathway coordinates simultaneous atrial
          depolarization and timing controls:
        </p>
        <ul className="list-disc pl-5 text-sm space-y-2">
          <li>
            <strong>Sinoatrial (SA) Node:</strong> Known as the primary
            pacemaker of the heart, it is located subepicardially at the
            junction of the superior vena cava and the right atrium. It
            spontaneously initiates the electrical impulse.
          </li>
          <li>
            <strong>Bachmann’s Bundle:</strong> A specialized interatrial
            conduction tract that rapidly directs the electrical impulse from
            the right atrium straight into the left atrium to ensure
            synchronized atrial contraction.
          </li>
          <li>
            <strong>Atrioventricular (AV) Node:</strong> Positioned in the
            interatrial septum within the <em>Triangle of Koch</em>. It serves
            as a regulatory gatekeeper, introducing a critical{" "}
            <strong>0.1-second delay</strong> to allow the ventricles to fill
            completely with blood before they are stimulated to contract.
          </li>
        </ul>
      </div>
    ),
    clinicalTip:
      "The AV nodal delay is functionally necessary—without it, atria and ventricles would contract at the exact same time, causing backward hemodynamic flow.",
  },
  {
    id: "ventricular-conduction",
    title: "Ventricular Conduction",
    image: "/VentricularConduction.png",
    description: (
      <div className="space-y-4">
        <p className="text-xs italic text-gray-500 mb-2">
          The lower electrical pathway pierces the fibrous skeleton and rapidly
          depolarizes the ventricular mass:
        </p>
        <ul className="list-disc pl-5 text-sm space-y-2">
          <li>
            <strong>AV Bundle (Bundle of His):</strong> Represents the solitary
            electrical bridge capable of penetrating the non-conductive fibrous
            skeleton of the heart to reach the ventricles.
          </li>
          <li>
            <strong>Bundle Branches (Right & Left):</strong> Travel inferiorly
            down both sides of the interventricular septum. The right bundle
            branch uniquely sends a branch through the <em>moderator band</em>,
            serving as a shortcut to contract the right ventricular papillary
            muscles early and stabilize the tricuspid valve.
          </li>
          <li>
            <strong>Purkinje Fibers:</strong> A vast subendocardial network that
            triggers rapid ventricular depolarization, traveling sequentially
            from the <strong>apex up toward the base</strong>.
          </li>
        </ul>
      </div>
    ),
    clinicalTip:
      "The apex-to-base direction of the Purkinje system acts like squeezing a tube of toothpaste from the bottom up, pushing blood efficiently upward into the outflow trunks.",
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
              Learning Outcome 5
            </p>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal tracking-tight mb-6">
            Innervation of The Heart
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
