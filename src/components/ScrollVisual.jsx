const ScrollVisual = ({ visualRef }) => {
  return (
    <div className="flex h-[300px] items-center justify-center">
      <div
        ref={visualRef}
        className="hero-visual relative flex h-48 w-48 items-center justify-center md:h-60 md:w-60"
      >
        {/* Main gradient sphere */}
        <div className="absolute h-full w-full rounded-full bg-gradient-to-br from-violet-500 via-fuchsia-500 to-orange-400 shadow-2xl" />

        {/* Small orbit elements */}
        <div className="hero-orbit-1 absolute -right-4 top-8 h-5 w-5 rounded-full bg-orange-400 md:-right-6 md:h-7 md:w-7" />

        <div className="hero-orbit-2 absolute -bottom-2 left-4 h-3 w-3 rounded-full bg-violet-500 md:-bottom-3 md:h-5 md:w-5" />

        {/* Inner core */}
        <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-[#111] md:h-36 md:w-36">
          <span className="text-xs font-medium tracking-[0.35em] text-white">
            FIZZ
          </span>
        </div>

        {/* Outer ring */}
        <div className="hero-ring absolute h-[115%] w-[115%] rounded-full border border-black/10" />
      </div>
    </div>
  );
};

export default ScrollVisual;
