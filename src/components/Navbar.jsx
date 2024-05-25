import React from "react";
import { navLinks } from "../constants";

function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0">
      <nav className="container py-8 flex justify-between items-center">
        <h3 className="text-3xl text-slate-200 font-bold leading-0">Ocean</h3>
        <ul className="flex gap-8 max-lg:hidden">
          {navLinks.map(({ href, label }, index) => (
            <li key={index}>
              <a
                href={href}
                className="text-red-100 font-normal text-base leading-0"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex flex-col justify-between gap-1 h-6 w-10 box-border items-center lg:hidden">
          <span className="bg-slate-100 w-full h-[3px] rounded-xl"></span>
          <span className="bg-slate-100 w-full h-[3px] rounded-xl"></span>
          <span className="bg-slate-100 w-full h-[3px] rounded-xl"></span>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
