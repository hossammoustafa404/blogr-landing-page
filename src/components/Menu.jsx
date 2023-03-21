import React, { useState } from "react";
import Navlink from "./NavLink";
import { navLinks } from "../constants";

// Rendered Navlinks
const renderedLinks = navLinks.map((link) => (
  <Navlink key={link.id} {...link} />
));

// Menu Component
const Menu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="ml-auto md:hidden">
      {/* Toggle Button */}
      <button
        type="button"
        onClick={() => {
          setOpenMenu((prev) => !prev);
        }}
      >
        <img
          src={`./imgs/icon-${openMenu ? "close" : "hamburger"}.svg`}
          alt="Menu Icon"
        />
      </button>

      {/* Menu */}
      <div
        className={`menu absolute left-[15px] right-[15px] top-[100%]  min-h-[20rem] bg-heavyWhite p-[2rem] rounded-md ${
          openMenu ? "block" : "hidden"
        } transition-[0.2s]`}
      >
        <ul className="pb-[1rem] border-b-[0.15rem] border-b-[#eee]">
          {renderedLinks}
        </ul>
        <div className="flex flex-col gap-[1rem] mt-[1.5rem] items-center">
          <button
            type="button"
            className="capitalize text-[#496379] text-h3 font-Overpass font-bold w-fit"
          >
            login
          </button>
          <button
            type="button"
            className="filled-btn bg-gradient-to-r from-[#f87c88] to-[#ff3d54] w-fit text-heavyWhite hover:text-heavyWhite px-[1.5rem] py-[0.5rem]"
          >
            sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
