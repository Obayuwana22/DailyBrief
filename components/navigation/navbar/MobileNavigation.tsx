import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const MobileNavigation = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="w-6 h-6 cursor-pointer md:hidden" />
      </SheetTrigger>
      <SheetContent>
        <SheetTitle className="hidden">Navigation</SheetTitle>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
