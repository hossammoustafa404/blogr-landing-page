import React from "react";

const Hero = () => {
  return (
    <section className="bg-[#ff3d54] translate-y-[-5rem] min-h-[25rem] rounded-bl-[4rem] xs:bg-heroDesk bg-contain bg-repeat flex-center flex-col">
      <article className="max-w-[90%] text-center ">
        <p className="text-h1 text-heavyWhite mt-[3rem] mb-[0.3rem] font-medium">
          A modern publishing platform
        </p>
        <p className="text-h5 text-lightWhite mb-[2rem] font-Overpass">
          Grow your audience and build your online brand
        </p>
      </article>
      <div>
        <button
          type="button"
          className="filled-btn px-[0.8rem] py-[0.5rem] mr-[1rem]"
        >
          start for free
        </button>
        <button type="button" className="outlined-btn px-[0.8rem] py-[0.5rem]">
          learn more
        </button>
      </div>
    </section>
  );
};

export default Hero;
