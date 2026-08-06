import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Dot, Search, X } from "lucide-react";

// ============================================================================
// TYPES & INTERFACES
// ============================================================================

interface SearchBarProps {
  query: string;
  setQuery: (q: string) => void;
}

// ============================================================================
// DATA CONFIGURATIONS
// ============================================================================

// ============================================================================
// COMPONENT IMPLEMENTATION
// ============================================================================

const SearchBar: React.FC<SearchBarProps> = ({ query, setQuery }) => {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative flex items-center w-full">
        {/* Left Search Icon */}
        <div className="absolute left-3.5 pointer-events-none text-slate-400">
          <Search className="w-5 h-5" />
        </div>

        {/* Input Field */}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="w-full pl-10 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
        />

        {/* Right Clear Button (Only visible when query is non-empty) */}
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            className="absolute right-3 text-slate-400 hover:text-slate-600 focus:outline-none p-0.5 rounded-full hover:bg-slate-200/50 transition-colors"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};

export default function PatoPhy() {
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      id="top"
      className="min-h-screen bg-[#FDF8F5] text-[#1F365C] font-sans selection:bg-[#A71627]/10 selection:text-[#A71627] relative overflow-x-hidden pb-24"
    >
      <div className="bg-blend-soft-light relative h-20 overflow-hidden rounded-xl">
        <img
          src="/HeartLocation.png"
          className="w-full h-full object-cover"
          alt="Heart location header"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
      </div>

      {/* Premium Ambient Background Blurs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-rose-200/20 to-amber-100/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-[1200px] right-0 w-[500px] h-[500px] bg-gradient-to-bl from-red-100/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 left-10 w-[700px] h-[700px] bg-gradient-to-tr from-amber-100/15 to-rose-100/20 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-8">
        {/* Navigation Breadcrumb */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-[#1F365C]/70 hover:text-[#A71627] transition-colors group mb-12"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Home</span>
        </Link>

        {/* Hero Header Section */}
        <header className="mb-16">
          <p className="text-xs font-bold tracking-[0.3em] text-[#A71627] uppercase mb-3">
            Pathophysiology
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#1F365C] leading-[1.15] max-w-4xl">
            Understanding the Pathophysiology of Cardiovascular Diseases
          </h1>
        </header>

        {/* Search Engine */}
        <div className="mb-12">
          <SearchBar query={query} setQuery={setQuery} />
        </div>

        {/* Content Section - Myocardial Infarction */}
        <section className="p-2 mb-6 relative">
          <div className="group rounded-3xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-lg p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-red-200">
            <div className="flex items-start gap-5">
              <div className="rounded-2xl bg-red-50 p-3 flex-shrink-0">
                <Dot className="text-[#A71627]" size={20} />
              </div>

              <div className="flex-1">
                <h2 className="text-2xl font-bold text-slate-800">
                  Myocardial Infarction
                </h2>

                <p className="mt-3 text-slate-600 leading-7">
                  Acute Inferior MI
                </p>
              </div>

              <div className="flex justify-end">
                <Link
                  to="/UnderCons"
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
                  Read More
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section - Coronary Artery Disease */}
        <section className="p-2 mb-6 relative">
          <div className="group rounded-3xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-lg p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-red-200">
            <div className="flex items-start gap-5">
              <div className="rounded-2xl bg-red-50 p-3 flex-shrink-0">
                <Dot className="text-[#A71627]" size={20} />
              </div>

              <div className="flex-1">
                <h2 className="text-2xl font-bold text-slate-800">
                  Coronary Artery Disease
                </h2>

                <p className="mt-3 text-slate-600 leading-7">
                  Atherosclerotic narrowing of coronary arteries
                </p>
              </div>

              <div className="flex justify-end">
                <Link
                  to="/UnderCons"
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
                  Read More
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Elegant Academic Footer */}
      <footer className="border-t border-[#1F365C]/10 pt-12 mt-12 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-xs text-[#1F365C]/50 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          {/* Navigation Breadcrumb */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-[#1F365C]/70 hover:text-[#A71627] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Home</span>
          </Link>
          <div className="w-2 h-2 bg-[#A71627] rounded-full" />
          <a
            href="#top"
            className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-[#1F365C]/70 hover:text-[#A71627] transition-colors group"
          >
            Top
          </a>
        </div>
        <p className="font-sans">
          &copy; 2026 Curriculum Module &bull; All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
