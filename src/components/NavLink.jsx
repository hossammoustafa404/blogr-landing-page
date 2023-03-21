import React, { useRef, useState } from "react";

const Navlink = ({ link, subLinks }) => {
  const [openSubMenu, setOpenSubMenu] = useState(false);
  const linkRef = useRef();

  // Rendered subLinks
  const renderedSubLinks = subLinks?.map(({ link, id }) => (
    <li key={id} className="mb-[0.8rem] last:mb-0 text-center">
      <a href={`#${link}`} className="capitalize text-[#91969f] text-h3">
        {link}
      </a>
    </li>
  ));

  return (
    <li className="font-Overpass font-bold">
      <div className="flex-center-y gap-[0.4rem]">
        <a
          ref={linkRef}
          href={`#${link}`}
          className="capitalize text-h4 text-lightWhite font-bold hover:text-heavyWhite transition-[0.2s] relative before:absolute before:top-[100%] before:left-[50%] before:translate-x-[-50%]  before:h-[1px] before:bg-heavyWHite before:w-0 hover:before:w-full before:transition-[0.2s]"
        >
          {link}
        </a>
        <button
          type="button"
          className=""
          onClick={() => {
            setOpenSubMenu((prev) => !prev);
            if (!openSubMenu) {
              linkRef.current.focus();
            }
          }}
        >
          <img
            src="./imgs/icon-arrow-dark.svg"
            alt="Arrow Icon"
            className={`${openSubMenu && "rotate-[180deg]"} transition-[0.2s]`}
          />
        </button>
      </div>

      {/* SubMenu */}
      <ul
        className={`${
          openSubMenu && subLinks ? "block" : "hidden"
        } text-center p-[1.5rem] rounded-md bg-[#eee] mt-[1rem]`}
      >
        {renderedSubLinks}
      </ul>
    </li>
  );
};

export default Navlink;
