import React from "react";

function Home() {
  return (
    <div className="w-10/12 mx-auto mt-14">
      <div className="text-fog">
        <div className="text-center">
          <h1 className="text-lg font-barlow font-semibold tracking-widest">
            SO, YOU WANT TO TRAVEL TO
          </h1>
          <span className="text-7xl text-white font-bellefair font-light inline-block mt-6 mb-4">
            SPACE
          </span>
          <p className="font-barlow-condensed text-[1rem] font-light leading-7">
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>
      </div>
      <div className="grid place-items-center my-4 py-8">
        <button className="bg-white font-bellefair text-2xl w-40 h-40 rounded-full">
          EXPLORE
        </button>
      </div>
    </div>
  );
}

export default Home;

// w-4/5 mx-auto mt-32 flex justify-between gap-32
// text-fog w-full
// w-[26rem] mx-auto
//
//
//
// w-full grid items-center
