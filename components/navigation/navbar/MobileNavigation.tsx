import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

const navLinks = [
  {
    label: "trending",
    route: "/trending",
  },
  {
    label: "categories",
    route: "/categories",
  },
  {
    label: "saved",
    route: "/saved",
  },
];

const MobileNavigation = () => {
  return (
    <div className="sm:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu className="w-6 h-6 cursor-pointer" />
        </SheetTrigger>
        <SheetContent>
          <SheetTitle className="hidden">Navigation</SheetTitle>
          <div className="mt-16 ml-5 sm:mt-0">
            <div className="flex flex-col gap-5 sm:flex-row">
              {navLinks.map((navLink, index) => (
                <Link key={index} href={navLink.route}>
                  <SheetClose asChild>
                    <span className="capitalize text-muted-foreground hover:text-foreground transition">
                      {navLink.label}
                    </span>
                  </SheetClose>
                </Link>
              ))}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavigation;
