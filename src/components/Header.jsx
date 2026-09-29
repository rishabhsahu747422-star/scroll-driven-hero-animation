const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <p className="text-sm font-semibold tracking-[0.3em]">FIZZ/26</p>

      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] opacity-50">
        <span className="h-1.5 w-1.5 rounded-full bg-black" />
        <span>Scroll to explore</span>
      </div>
    </header>
  );
};

export default Header;
