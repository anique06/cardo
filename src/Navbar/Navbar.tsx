import { useState, useEffect } from "react";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  // NEW
  const [isHoveringNavbar, setIsHoveringNavbar] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const threshold = 8;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (Math.abs(currentScrollY - lastScrollY) < threshold) return;

      // Always visible at top
      if (currentScrollY < 20) {
        setShowNavbar(true);
      }
      // Scroll down
      else if (currentScrollY > lastScrollY) {
        if (!isHoveringNavbar) {
          setShowNavbar(false);
        }
      }
      // Scroll up
      else {
        setShowNavbar(true);
      }

      lastScrollY = currentScrollY;
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Always visible at top of page
      if (window.scrollY < 20) {
        setShowNavbar(true);
        return;
      }

      // Mouse near top of screen
      if (e.clientY <= 50) {
        setShowNavbar(true);
      }
      // Mouse leaves top area
      else if (!isHoveringNavbar) {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isHoveringNavbar]);
  return (
    <>
      <nav
        onMouseEnter={() => {
          setIsHoveringNavbar(true);
          setShowNavbar(true);
        }}
        onMouseLeave={() => {
          setIsHoveringNavbar(false);

          if (window.scrollY > 20) {
            setShowNavbar(false);
          }
        }}
        className={`
          fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl
          transition-transform duration-400
          ${showNavbar ? "translate-y-0" : "-translate-y-32"}
        `}
      >
        <div
          className="
          inset-shadow-sm
            rounded-full
            border border-white/40
            bg-white/35
            backdrop-blur-xl
            shadow-md
            px-8
            h-16
            flex
            items-center
            justify-between
          "
        >
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/cardo-logo.png"
              alt="Cardo Logo"
              className="h-10 w-auto"
            />

            <span className="text-2xl font-bold tracking-tight text-[#A71627]">
              Cardo
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {["Anatomy", "Physiology", "Quiz", "Cases"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="
                  relative
                  text-[15px]
                  font-medium
                  text-slate-700
                  transition-all
                  duration-300
                  hover:text-[#A71627]
                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:h-[2px]
                  after:w-0
                  after:bg-[#A71627]
                  after:transition-all
                  after:duration-300
                  hover:after:w-full
                "
              >
                {item}
              </a>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#GetStarted"
              className="
                rounded-full
                bg-[#A71627]
                px-6
                py-2.5
                text-sm
                font-medium
                text-white
                transition-all
                duration-300
                hover:scale-105
                hover:bg-red-800
              "
            >
              Get Started
            </a>
          </div>

          {/* Mobile Button */}
          <button
            className="
              md:hidden
              rounded-full
              p-2
              transition
              hover:bg-white/50
            "
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="text-xl">{isMobileMenuOpen ? "✕" : "☰"}</span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className="
              mt-4
              rounded-3xl
              border
              border-white/40
              bg-white/40
              backdrop-blur-2xl
              shadow-xl
              p-6
              md:hidden
            "
          >
            <div className="flex flex-col gap-5">
              {["Anatomy", "Physiology", "Game", "Cases"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="
                    text-slate-700
                    font-medium
                    hover:text-[#A71627]
                    transition
                  "
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}

              <a
                href="#GetStarted"
                className="
                  mt-2
                  rounded-full
                  bg-[#A71627]
                  py-3
                  text-white
                  font-medium
                "
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
