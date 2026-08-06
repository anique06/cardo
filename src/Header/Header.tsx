import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.215, 0.61, 0.355, 1.0],
    },
  },
};

function Header() {
  return (
    <motion.div
      className="flex flex-col items-start max-w-lg  relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Tag line */}
      <motion.span
        className="block text-[0.65rem] sm:text-xs font-bold tracking-[0.2em] text-red-700 uppercase mb-4"
        variants={itemVariants}
      >
        Interactive E-Learning
      </motion.span>

      {/* Main heading */}
      <motion.h1
        className="text-5xl sm:text-6xl lg:text-7xl font-serif font-medium tracking-tight text-slate-900 leading-[1.1]"
        variants={itemVariants}
      >
        Welcome to <br />
        <span className="italic text-red-700 font-serif">Cardo.</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="mt-6 text-base sm:text-lg text-slate-500 leading-relaxed pr-4"
        variants={itemVariants}
      >
        Learn through interactive 3D models to navigate a premium medical
        education website online.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        className="mt-10 flex flex-wrap items-center gap-4"
        variants={itemVariants}
      >
        <a
          href="#GetStarted"
          className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-white bg-[#A71627] rounded-full shadow-sm hover:bg-red-800 transition-colors duration-200"
        >
          Get Started
        </a>
        <a
          href="#about-Cardo"
          className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-slate-500 bg-transparent border border-slate-300 rounded-full hover:bg-white hover:text-slate-800 transition-colors duration-200"
        >
          About Cardo
        </a>
      </motion.div>
    </motion.div>
  );
}

export default Header;
