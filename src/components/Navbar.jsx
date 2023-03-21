import React from "react";
import { navLinks } from "../constants";
import Menu from "./Menu";
import Navlink from "./NavLink";

// Rendered Navlinks
const renderedLinks = navLinks.map((link) => (
  <Navlink key={link.id} {...link} />
));

//Navbar Component
const Navbar = () => {
  return (
    <nav>
      <div className="container relative z-50">
        <div className="flex-center-y min-h-[5rem]">
          {/* Logo */}
          <a href="#">
            <img src="./imgs/logo.svg" alt="Logo" className="w-[5rem]" />
          </a>
          {/* Nav Links */}
          <ul className="ml-[4rem] gap-[2.2rem] hidden md:flex">
            {renderedLinks}
          </ul>
          {/* Right Box */}
          <div className="ml-auto hidden md:block">
            <button
              type="button"
              className="font-Overpass text-h4 text-lightWhite capitalize mr-[1.5rem] font-bold"
            >
              login
            </button>
            <button type="button" className="filled-btn">
              sign up
            </button>
          </div>
          {/* Mobile Menu */}
          <Menu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
