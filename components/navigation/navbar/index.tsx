import MobileNavigation from "./MobileNavigation";

const Navbar = () => {
  return (
    <header className="py-5 px-5 border border-b-border">
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-2 font-playfair-display">
          <div className="bg-primary w-10 h-10 flex items-center justify-center rounded-full">
            <span className="text-primary-foreground font-bold text-xl">D</span>
          </div>
          <p className="bg-linear-to-r from-primary to-secondary font-bold bg-clip-text text-transparent">
            DailyBrief
          </p>
        </div>

        <MobileNavigation />
      </nav>
    </header>
  );
};

export default Navbar;
