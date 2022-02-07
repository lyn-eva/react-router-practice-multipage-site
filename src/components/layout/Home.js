import React from "react";

function Home() {
  return (
    <main className="w-10/12 mx-auto mt-14 laptop:flex laptop:justify-between laptop:gap-2 laptop:mt-32 desktop:mt-40 desktop:gap-[15%] desktop:mb-16 desktop:max-w-9xl">
      <div className="text-center text-fog max-w-md mx-auto laptop:w-[45%] laptop:max-w-[20rem] desktop:max-w-[25rem]">
        <h1 className="text-lg font-barlow font-medium tracking-widest tablet:text-xl desktop:text-2xl">
          SO, YOU WANT TO TRAVEL TO
        </h1>
        <span className="text-7xl text-white font-bellefair font-light inline-block mt-6 mb-4 tablet:text-8xl tablet:mt-10 tablet:mb-6 desktop:text-[8.5rem] desktop:mt-12 desktop:mb-8">
          SPACE
        </span>
        <p className="font-barlow-condensed text-[1rem] font-light leading-7 tablet:text-lg desktop:text-xl desktop:text-left desktop:leading-8">
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="grid place-items-center mt-12 py-8 tablet:my-10 laptop:w-[35%]">
        <button className="bg-white font-bellefair text-2xl w-40 h-40 rounded-full desktop:ml-8 desktop:w-48 desktop:h-48 desktop:mt-12">
          EXPLORE
        </button>
      </div>
    </main>
  );
}

export default Home;
