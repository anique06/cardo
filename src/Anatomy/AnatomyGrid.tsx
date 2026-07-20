import { ArrowRight, HeartPulse } from "lucide-react";

import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

function AnatomyGrid() {
  return (
    // The wrapper container needs to be relative and hide horizontal overflows
    <div
      id="anatomy"
      className="relative w-full min-h-screen overflow-hidden pt-6 "
    >
      {/* TITLE */}
      <div className="flex justify-center lg:justify-start">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium tracking-tight text-slate-900 leading-[1.1] mb-6">
          Explore the <span className="italic text-red-700">Anatomy</span> of
          the heart.
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
                Heart Structure
              </h2>

              <p className="mt-3 text-slate-600 leading-7">
                Explore the external and internal anatomy of the heart,
                including its chambers, valves, blood vessels, and supporting
                structures.
              </p>

              <Link
                to="/Anatomy/AnatomyHeartStructure"
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
                Explore Anatomy
                <ArrowRight size={18} />
              </Link>
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
                Heart Position
              </h2>

              <p className="mt-3 text-slate-600 leading-7">
                Discover where the heart is positioned within the thoracic
                cavity, its orientation in the mediastinum, and its anatomical
                relationships with the lungs, sternum, diaphragm, and major
                blood vessels.
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
                Explore Location
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnatomyGrid;
