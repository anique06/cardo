import { ArrowRight, HeartPulse, MapPin } from "lucide-react";

function GameGrid() {
  return (
    <div className="relative w-full min-h-screen overflow-visible  px-4 max-w-7xl mx-auto">
      <div
        id="game"
        className="flex justify-center lg:justify-start mb-5 mt-20"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight text-slate-900 leading-[1.1]">
          Test your knowledge with some{" "}
          <span className="italic text-red-700">Quiz !</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="group rounded-3xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-lg p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-red-200">
          <div className="relative h-56 overflow-hidden rounded-xl">
            <img
              src="/HeartStructure.png"
              className="w-full h-full object-cover"
              alt=""
            />

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
          </div>
          <div className="flex items-start gap-5">
            <div className="rounded-2xl bg-red-50 p-3">
              <HeartPulse className="text-[#A71627]" size={32} />
            </div>

            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-800">
                General Knowledge Game
              </h2>

              <p className="mt-3 text-slate-600 leading-7">
                Test your knowledge of heart anatomy and physiology with our
                interactive game!
              </p>

              <a
                href="#heart-structure"
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
                Play Game
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
        <div className="group rounded-3xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-lg p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-red-200">
          <div className="relative h-56 overflow-hidden rounded-xl">
            <img
              src="/HeartLocation.png"
              className="w-full h-full object-cover"
              alt=""
            />

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
          </div>
          <div className="flex items-start gap-5">
            <div className="rounded-2xl bg-red-50 p-3">
              <MapPin className="text-[#A71627]" size={32} />
            </div>

            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-800">
                Case Study Game
              </h2>

              <p className="mt-3 text-slate-600 leading-7">
                Solve real-world cases and apply your knowledge of heart anatomy
                and physiology!
              </p>

              <a
                href="#heart-structure"
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
                Play Case Study
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameGrid;
