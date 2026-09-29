const ScrollVisual = ({ visualRef }) => {
  return (
    <div className="flex h-[300px] items-center justify-center">
      <div
        ref={visualRef}
        className="flex h-48 w-48 items-center justify-center rounded-full bg-black shadow-2xl"
      >
        <div className="flex h-28 w-28 items-center justify-center rounded-full border border-white/20">
          <span className="text-xs tracking-[0.3em] text-white">FIZZ</span>
        </div>
      </div>
    </div>
  );
};

export default ScrollVisual;
