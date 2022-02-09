import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

function Home() {
  const redirect = useNavigate();
  const clickHandler = () => {
    redirect('destination');
  }

  return (
    <main className="desktop:max-w-9xl mx-auto mt-14 w-10/12 laptop:mt-32 laptop:flex laptop:justify-between laptop:gap-2 desktop:mt-32 desktop:mb-16 desktop:gap-[15%]">
      <div className="mx-auto max-w-md text-center text-fog laptop:w-[45%] laptop:max-w-[20rem] desktop:max-w-[25rem]">
        <h1 className="font-barlow text-lg font-medium tracking-widest tablet:text-xl desktop:text-2xl">
          SO, YOU WANT TO TRAVEL TO
        </h1>
        <span className="mt-6 mb-4 inline-block font-bellefair text-7xl font-light text-white tablet:mt-10 tablet:mb-6 tablet:text-8xl desktop:mt-12 desktop:mb-8 desktop:text-[8.5rem]">
          SPACE
        </span>
        <p className="font-barlow-condensed text-[1rem] font-light leading-7 tracking-wide tablet:text-lg desktop:text-left desktop:text-xl desktop:leading-9 desktop:tracking-wide">
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="mt-12 grid place-items-center py-8 tablet:my-10 laptop:w-[35%]">
        <button onClick={clickHandler} className="h-40 w-40 rounded-full bg-white font-bellefair text-2xl desktop:mt-12 desktop:mr-20 desktop:h-52 desktop:w-52">
          EXPLORE
        </button>
      </div>
    </main>
  );
}

export default Home;
