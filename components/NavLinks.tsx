"use client";

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

const NavLinks = () => {
  return (
    <div className="mt-16 ml-5 sm:mt-0">
      <div className="flex flex-col gap-5 sm:flex-row">
        {navLinks.map((navLink, index) => (
          <Link key={index} href={navLink.route}>
            <span className="capitalize text-muted-foreground hover:text-foreground transition">
              {navLink.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavLinks;
