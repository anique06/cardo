import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.215, 0.61, 0.355, 1.0],
    },
  },
};

const progressVariants: Variants = {
  hidden: { width: "0%" },
  visible: {
    width: "90%",
    transition: { duration: 1.2, ease: "easeOut", delay: 0.5 },
  },
};

export default function UnderCons() {
  return (
    <div className="min-h-screen w-full bg-[#FAF7F2] text-[#1E1E1E] flex flex-col justify-between p-6 sm:p-12 font-sans selection:bg-[#801220] selection:text-white">
      {/* Navigation Breadcrumb */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-[#1F365C]/70 hover:text-[#A71627] transition-colors group"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        <span>Home</span>
      </Link>
      {/* Top Navbar */}
      <motion.header
        className="w-full flex justify-center items-center py-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center">
          {/* Logo Icon */}
          <img src="/cardo-logo.png" alt="Cardo Logo" className="h-10 w-auto" />
          <span className="text-xl font-bold font-serif tracking-tight text-[#801220]">
            Cardo
          </span>
        </div>
      </motion.header>

      {/* Main Content Layout */}
      <motion.main
        className="max-w-6xl mx-auto w-full my-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Column: Text & CTA */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          <motion.span
            className="block text-xs font-semibold tracking-[0.2em] text-[#801220] uppercase"
            variants={itemVariants}
          >
            SITE UNDER CONSTRUCTION / COMING SOON
          </motion.span>

          <motion.h1
            className="text-4xl sm:text-6xl font-serif font-normal text-slate-900 leading-[1.1]"
            variants={itemVariants}
          >
            Our full experience <br />
            is <span className="italic text-[#801220]">in progress.</span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg text-stone-600 max-w-md leading-relaxed"
            variants={itemVariants}
          >
            We are carefully crafting the platform you expect. Join our journey.
          </motion.p>

          {/* Email Subscription Form */}
          <motion.form
            onSubmit={(e) => e.preventDefault()}
            className="w-full max-w-md flex flex-col sm:flex-row items-center gap-3 pt-2"
            variants={itemVariants}
          >
            <div className="relative w-full">
              <input
                type="email"
                placeholder="Stay informed: Enter your email..."
                className="w-full px-5 py-3 rounded-full bg-[#EFECE6] border border-stone-300/60 text-stone-800 placeholder-stone-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#801220]/40 transition"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#801220] hover:bg-[#660e19] text-white text-sm font-medium transition duration-200 whitespace-nowrap shadow-sm"
            >
              Notify Me
            </button>
          </motion.form>
        </div>

       {/* Right Column: Construction Illustration & Progress Bar */}
<div className="lg:col-span-5 flex flex-col items-center justify-center space-y-6">
  {/* Illustration Wrapper */}
  <motion.div
    variants={itemVariants}
    className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl flex items-center justify-center p-2"
  >
    <img
      src="/Site-Coming-soon.png"
      alt="Site under construction"
      className="w-full h-auto max-h-[380px] sm:max-h-[440px] object-contain transition-transform duration-300 hover:scale-105"
    />
  </motion.div>

  {/* Progress Indicator */}
  <motion.div
    className="w-full max-w-xs sm:max-w-sm flex flex-col items-center space-y-2.5"
    variants={itemVariants}
  >
    <div className="w-full h-2 bg-stone-300/60 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-[#801220] rounded-full"
        variants={progressVariants}
      />
    </div>
    <span className="text-xs sm:text-sm text-stone-600 font-medium tracking-wide">
      Platform Readiness: 90%
    </span>
  </motion.div>
</div>
      </motion.main>

      {/* Footer spacer */}
      <footer className="w-full text-center text-xs text-stone-400 py-2">
        © {new Date().getFullYear()} Cardo Inc. All rights reserved.
      </footer>
    </div>
  );
}
