import HeartIntroduction from "./HeartIntroduction";

function Introduction() {
  return (
    // The wrapper container needs to be relative and hide horizontal overflows
    <div className="relative w-full min-h-screen overflow-hidden pt-14 text-center">
      {/* Elegant Full-Screen Red Box with top-only blur effect */}

      {/* Content goes here (e.g., your 3D heart or text) */}
      <div className="relative z-10 text-black pt-20">
        <p className="text-sm uppercase tracking-widest opacity-80">
          Introduction
        </p>
        <HeartIntroduction />

        {/* Your 3D Heart component can be placed right here */}
      </div>
    </div>
  );
}

export default Introduction;
