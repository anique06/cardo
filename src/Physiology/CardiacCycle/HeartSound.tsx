import React, { useState } from "react";
import CardiacSynthesisDisplay from "./CardiacSynthesisDisplay";
import SynthesisPartTwo from "./SynthesisPartTwo";

interface Section {
  id: string;
  title: string;
  image: string;
  description: React.ReactNode;
}
const sections: Section[] = [
  {
    id: "cardiac-sound",
    title: "S1 (LUB)",
    image: "/CardiacContraction.png",
    description: (
      <div className="space-y-6 text-slate-800">
        {/* Intro Summary */}
        <p className="text-base text-slate-600 leading-relaxed">
          Caused by the sudden closure of the AV valves{" "}
          <strong>(mitral and tricuspid)</strong> at the beginning of
          ventricular systole. It marks the onset of ventricular contraction and
          is best heard at the apex of the heart.
        </p>
        <img src="/CardiacSound1.jpg" />
      </div>
    ),
  },
  {
    id: "cardiac-sound",
    title: "S2 (DUB)",
    image: "/CardiacContraction.png",
    description: (
      <div className="space-y-6 text-slate-800">
        {/* Intro Summary */}
        <p className="text-base text-slate-600 leading-relaxed">
          Caused by the closure of the semilunar valves{" "}
          <strong>(aortic and pulmonary)</strong>atthe onset of Isovolumetric
          Relaxation. Includes the dicrotic notch, a short pressure bump as
          blood collides against the closed aortic valve.
        </p>
        <img src="/CardiacSound2.jpg" />
      </div>
    ),
  },
  {
    id: "cardiac-sound",
    title: "S3 ",
    image: "/CardiacContraction.png",
    description: (
      <div className="space-y-6 text-slate-800">
        {/* Intro Summary */}
        <p className="text-base text-slate-600 leading-relaxed">
          A soft low pitch sound caused by the rapid filling of the ventricles
          during early diastole. It is often associated with increased
          ventricular filling pressures and can be a sign of heart failure or
          volume overload. S3 is best heard at the apex of the heart with the
          patient in the left lateral decubitus position.
        </p>
        <img src="/CardiacSound3.jpg" />
      </div>
    ),
  },
  {
    id: "cardiac-sound",
    title: "S4",
    image: "/CardiacContraction.png",
    description: (
      <div className="space-y-6 text-slate-800">
        {/* Intro Summary */}
        <p className="text-base text-slate-600 leading-relaxed">
          Vibration of stiff ventricular walls during atrial contraction. It is
          often associated with conditions that cause decreased ventricular
          compliance, such as hypertension, aortic stenosis, or hypertrophic
          cardiomyopathy. S4 is best heard at the apex of the heart with the
          patient in the left lateral decubitus position.
        </p>
        <img src="/CardiacSound4.jpg" />
      </div>
    ),
  },
];

export default function HeartSound() {
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
    <>
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
              The Acoustic Signature of the Cardiac
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CardiacSynthesisDisplay />
      <SynthesisPartTwo />
    </>
  );
}
