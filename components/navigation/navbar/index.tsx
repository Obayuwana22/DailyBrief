import NavLinks from "@/components/NavLinks";
import MobileNavigation from "./MobileNavigation";
import Link from "next/link";
import { Search } from "lucide-react";

const Navbar = () => {
  return (
    <header className="py-5 px-5 border-b border-b-border">
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-2 font-serif">
          <div className="bg-primary w-10 h-10 flex items-center justify-center rounded-full">
            <span className="text-primary-foreground font-bold text-xl">D</span>
          </div>
          <Link href="/">
            <p className="bg-linear-to-r from-primary to-secondary font-bold bg-clip-text text-transparent">
              DailyBrief
            </p>
          </Link>
        </div>

        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search news..."
              className="w-full border-2 border-border rounded-lg pl-10 pr-4 py-2 text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-0"
            />
          </div>
        </div>

        <div className="hidden sm:block">
          <NavLinks />
        </div>
        <MobileNavigation />
      </nav>
    </header>
  );
};

export default Navbar;
