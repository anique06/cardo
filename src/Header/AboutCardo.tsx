import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";

// ═══════════════════════════════════════════════════════════════
// DESIGN BRIEF & TOKENS
// ═══════════════════════════════════════════════════════════════
// Subject: Cardiovascular learning platform for MBBS students
// Audience: Pre-clinical med students seeking clinical relevance
// Single job: Convey that Cardo bridges theory → clinical practice
//
// Design direction: Medical minimalism—clean, purposeful, clinical
// but warm. The heart model is the hero; text supports discovery.
// Signature: Staggered reveal on scroll, heart scales on attention.
//
// Color palette:
//   Deep Maroon: #A71930 (medical, authoritative, Cardo brand)
//   Off-White: #F8F8F6 (breathing room, reduced fatigue)
//   Slate: #2D3E50 (text, clinical precision)
//   Accent Red: #E63946 (call-to-action pulse)
//
// Type system:
//   Display: "Geist Mono" or serif (medical precision)
//   Body: "Inter" or sans-serif (clarity, accessibility)
//   Leading: Generous (medical reading is dense; give relief)
// ═══════════════════════════════════════════════════════════════

// Custom cubic-bezier ease, locked to a 4-tuple so it satisfies
// Framer Motion's `Easing` type (a plain number[] is too loose).
const MEDICAL_EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

// Scroll-aware animation variants
const createContainerVariants = (isInView: boolean): Variants => ({
  hidden: { opacity: 0 },
  visible: isInView
    ? {
        opacity: 1,
        transition: {
          staggerChildren: 0.12,
          delayChildren: 0.05,
        },
      }
    : { opacity: 0 },
});

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: MEDICAL_EASE,
    },
  },
};

const heartScaleVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      delay: 0.1,
    },
  },
};

export default function AboutCardo() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, {
    once: false, // Trigger every time it comes into view
    amount: 0.3, // Trigger when 30% of the section is visible
  });

  const containerVariants = createContainerVariants(isInView);

  return (
    <div className="min-h-screen w-full text-[#2D3E50] flex flex-col justify-between px-3 sm:px-12 py-16 font-sans">
      {/* Main Content Section */}
      <motion.main
        ref={containerRef}
        className="max-w-7xl mx-auto w-full my-auto flex flex-col items-center space-y-16"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Hero Section: Two-Column Grid */}
        <div
          id="about-Cardo"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full"
        >
          {/* Left Column: Headline & Description */}
          <motion.div className="flex flex-col space-y-6">
            {/* Main Headline */}
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-serif font-medium tracking-tight text-slate-900 leading-[1.1]"
              variants={itemVariants}
            >
              Know Your{" "}
              <span className="inline-block bg-gradient-to-r from-[#A71930] to-[#E63946] bg-clip-text text-transparent">
                Heart
              </span>
            </motion.h1>

            {/* Subheading: Full Form Acronym */}
            <motion.div className="space-y-2" variants={itemVariants}>
              <p className="text-sm uppercase tracking-widest font-semibold text-[#A71930]">
                Cardiovascular Adventure for Reasoning, Discovery & Outcomes
              </p>
              <p className="text-lg text-[#5A6F7D] font-light leading-relaxed">
                Interactive learning where cardiovascular physiology meets
                clinical reality.
              </p>
            </motion.div>

            {/* Core Value Proposition */}
            <motion.p
              className="text-base sm:text-lg text-[#5A6F7D] leading-relaxed font-light"
              variants={itemVariants}
            >
              Designed for MBBS students who demand more than memorization.
              Through{" "}
              <span className="font-semibold text-[#A71930]">
                immersive animations
              </span>
              ,{" "}
              <span className="font-semibold text-[#A71930]">
                case-based learning
              </span>
              , and{" "}
              <span className="font-semibold text-[#A71930]">
                clinical reasoning
              </span>
              , Cardo transforms theoretical knowledge into applied expertise.
            </motion.p>

            {/* Three-Point Value Stack */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#E8E6E1]"
              variants={itemVariants}
            >
              {[
                {
                  label: "Interactive",
                  sublabel: "Engage, don't passively absorb",
                },
                { label: "Clinical", sublabel: "Real cases, real reasoning" },
                {
                  label: "Outcomes",
                  sublabel: "Better retention, better grades",
                },
              ].map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <p className="font-semibold text-[#A71930] text-sm uppercase tracking-wide">
                    {item.label}
                  </p>
                  <p className="text-xs text-[#7A8A94]">{item.sublabel}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Heart Model Visual */}
          <motion.div
            className="flex flex-col items-center justify-center relative"
            variants={itemVariants}
          >
            <div className="relative w-full flex flex-col items-center">
              {/* Decorative Glow Circle (Background) */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-[#A71930]/10 to-[#E63946]/5 blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Heart Image */}
              <motion.img
                src="/AboutCardo.png"
                alt="Cardo 3D Heart Model"
                className="relative z-10 w-80 sm:w-64 lg:w-120 h-auto object-contain drop-shadow-lg"
                variants={heartScaleVariants}
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              />
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-[#A71930] to-[#E63946] rounded-full"
          variants={itemVariants}
        />

        {/* CTA Section */}
        <motion.div
          className="flex flex-col items-center space-y-6"
          variants={itemVariants}
        >
          <a
            href="#GetStarted"
            className="group flex flex-col items-center space-y-4"
          >
            <span className="text-3xl sm:text-4xl font-bold text-[#2D3E50] group-hover:text-[#A71930] transition-colors duration-300">
              Ready to explore?
            </span>

            {/* Animated Arrow */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
              }}
            >
              <motion.div
                className="flex items-center justify-center w-10 h-10 rounded-full bg-[#A71930] text-white"
                whileHover={{ scale: 1.1, backgroundColor: "#E63946" }}
              >
                <ArrowDown className="w-5 h-5" />
              </motion.div>
            </motion.div>

            <span className="text-xs uppercase tracking-widest font-semibold text-[#7A8A94] group-hover:text-[#A71930] transition-colors">
              Begin your journey
            </span>
          </a>
        </motion.div>
      </motion.main>
    </div>
  );
}
