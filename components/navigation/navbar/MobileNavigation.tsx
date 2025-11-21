import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import NavLinks from "@/components/NavLinks";

const MobileNavigation = () => {
  return (
    <div className="sm:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu className="w-6 h-6 cursor-pointer" />
        </SheetTrigger>
        <SheetContent>
          <SheetTitle className="hidden">Navigation</SheetTitle>
          <div className="">
            <NavLinks />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavigation;
