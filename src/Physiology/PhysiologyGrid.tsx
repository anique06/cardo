import { Link } from "react-router-dom";

import {
  ArrowRight,
  HeartPulse,
  Activity,
  ActivitySquare,
  HeartCrack,
} from "lucide-react";

function PhysiologyGrid() {
  return (
    // Cleaned up padding and set a solid max-width container for better structure
    <div className="relative w-full min-h-screen overflow-visible  px-4 max-w-7xl mx-auto">
      {/* TITLE */}
      <div
        id="physiology"
        className="flex justify-center lg:justify-start mb-5 mt-20"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight text-slate-900 leading-[1.1]">
          Uncover the heart
          <span className="italic text-red-700"> Physiology</span>.
        </h1>
      </div>

      {/* GRID CONTAINER */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* CARD 1: Muscle Physiology */}
        <div
          className="
          relative
          overflow-hidden
          h-60
          group
          rounded-2xl
          border border-slate-100
          bg-white
          transition-all
          duration-300
          hover:border-red-200
          hover:shadow-lg
        "
        >
          {/* Background Image */}
          <img
            src="/HeartMuscle.png"
            alt=""
            className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-right
            opacity-90
            transition-transform
            duration-500
            group-hover:scale-105
          "
          />

          {/* White Gradient Overlay */}
          <div
            className="
            absolute
            inset-0
            bg-gradient-to-l
            from-transparent
            via-white/100
            to-white
          "
          />

          {/* Optional Blur Layer */}
          <div
            className="
            absolute
            inset-0
            backdrop-blur-[1px]
          "
          />

          {/* Content */}
          <div className="relative z-10 flex h-full flex-col justify-between p-8">
            <div className="flex items-start gap-5">
              <div className="rounded-2xl bg-red-50 p-3 shrink-0">
                <HeartPulse className="text-[#A71627]" size={32} />
              </div>

              <div className="flex-1 max-w-[70%]">
                <h2 className="text-2xl font-bold text-slate-800">
                  Muscle Physiology
                </h2>

                <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                  Explore the cellular mechanisms, action potentials, and
                  contractile properties unique to cardiac muscle tissue.
                </p>
              </div>
            </div>

            <div className="flex justify-end">
              <Link
                to="/Physiology/MusclePhysiology/MusclePhysiology"
                className="
                absolute right-10 bottom-0 
                p-5
                    mt-6
                    inline-flex
                    items-center
                    gap-8
                    font-semibold
                    text-[#A71627]
                    transition-all
                    duration-300
                    group-hover:gap-3
                "
              >
                Explore Muscle Physiology
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* CARD 2: Cardiac Cycle */}
        <div
          className="
          relative
          overflow-hidden
          h-60
          group
          rounded-2xl
          border border-slate-100
          bg-white
          transition-all
          duration-300
          hover:border-red-200
          hover:shadow-lg
        "
        >
          {/* Background Image */}
          <img
            src="/HeartCycle.png"
            alt=""
            className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-right
            opacity-90
            transition-transform
            duration-500
            group-hover:scale-105
          "
          />

          {/* White Gradient Overlay */}
          <div
            className="
            absolute
            inset-0
            bg-gradient-to-l
            from-transparent
            via-white/100
            to-white
          "
          />

          {/* Optional Blur Layer */}
          <div
            className="
            absolute
            inset-0
            backdrop-blur-[1px]
          "
          />

          {/* Content */}
          <div className="relative z-10 flex h-full flex-col justify-between p-8">
            <div className="flex items-start gap-5">
              <div className="rounded-2xl bg-red-50 p-3 shrink-0">
                <Activity className="text-[#A71627]" size={32} />
              </div>

              <div className="flex-1 max-w-[70%]">
                <h2 className="text-2xl font-bold text-slate-800">
                  Cardiac Cycle
                </h2>

                <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                  Understand the sequential events that occur during each
                  heartbeat, including systole and diastole phases.
                </p>
              </div>
            </div>

            <div className="flex justify-end">
              <a
                href="#cardiac-cycle"
                className="
          inline-flex
          items-center
          gap-2
          font-semibold
          text-[#A71627]
          transition-all
          duration-300
          group-hover:gap-3
        "
              >
                Explore Cardiac Cycle
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* CARD 3: ECG */}
        <div
          className="
          relative
          overflow-hidden
          h-60
          group
          rounded-2xl
          border border-slate-100
          bg-white
          transition-all
          duration-300
          hover:border-red-200
          hover:shadow-lg
        "
        >
          {/* Background Image */}
          <img
            src="/HeartECG.png"
            alt=""
            className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-right
            opacity-90
            transition-transform
            duration-500
            group-hover:scale-105
          "
          />

          {/* White Gradient Overlay */}
          <div
            className="
            absolute
            inset-0
            bg-gradient-to-l
            from-transparent
            via-white/100
            to-white
          "
          />

          {/* Optional Blur Layer */}
          <div
            className="
            absolute
            inset-0
            backdrop-blur-[1px]
          "
          />

          {/* Content */}
          <div className="relative z-10 flex h-full flex-col justify-between p-8">
            <div className="flex items-start gap-5">
              <div className="rounded-2xl bg-red-50 p-3 shrink-0">
                <ActivitySquare className="text-[#A71627]" size={32} />
              </div>

              <div className="flex-1 max-w-[70%]">
                <h2 className="text-2xl font-bold text-slate-800">ECG</h2>

                <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                  Decode the electrical activity of the heart, mapping
                  conduction pathways and understanding waveforms like the P
                  wave, QRS complex, and T wave.
                </p>
              </div>
            </div>

            <div className="flex justify-end">
              <Link
                to="/Physiology/ECG/ECG"
                className="
                absolute right-10 bottom-0 
                p-5
                    mt-6
                    inline-flex
                    items-center
                    gap-8
                    font-semibold
                    text-[#A71627]
                    transition-all
                    duration-300
                    group-hover:gap-3
                "
              >
                Explore ECG
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* CARD 4: Pathophysiology */}
        <div
          className="
          relative
          overflow-hidden
          h-60
          group
          rounded-2xl
          border border-slate-100
          bg-white
          transition-all
          duration-300
          hover:border-red-200
          hover:shadow-lg
        "
        >
          {/* Background Image */}
          <img
            src="/HeartPatophysiology.png"
            alt=""
            className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-right
            opacity-90
            transition-transform
            duration-500
            group-hover:scale-105
          "
          />

          {/* White Gradient Overlay */}
          <div
            className="
            absolute
            inset-0
            bg-gradient-to-l
            from-transparent
            via-white/100
            to-white
          "
          />

          {/* Optional Blur Layer */}
          <div
            className="
            absolute
            inset-0
            backdrop-blur-[1px]
          "
          />

          {/* Content */}
          <div className="relative z-10 flex h-full flex-col justify-between p-8">
            <div className="flex items-start gap-5">
              <div className="rounded-2xl bg-red-50 p-3 shrink-0">
                <HeartCrack className="text-[#A71627]" size={32} />
              </div>

              <div className="flex-1 max-w-[70%]">
                <h2 className="text-2xl font-bold text-slate-800">
                  Pathophysiology
                </h2>

                <p className="mt-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                  Examine what happens when physiological systems fail,
                  exploring the mechanisms behind heart failure, arrhythmias,
                  and ischemic heart disease.
                </p>
              </div>
            </div>

            <div className="flex justify-end">
              <a
                href="#pathophysiology"
                className="
                shadow-white
          inline-flex
          items-center
          gap-2
          font-semibold
          text-[#A71627]
          transition-all
          duration-300
          group-hover:gap-3
        "
              >
                Explore Pathophysiology
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhysiologyGrid;
