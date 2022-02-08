import { useParams } from "react-router";
import { destinations } from "../Data";

function Planet() {
  const parem = useParams();

  return (
    <div className="mx-auto mt-16 mb-16 w-10/12 text-center font-barlow-condensed text-2xl text-white desktop:mt-8 desktop:flex desktop:w-full desktop:items-center desktop:justify-between desktop:gap-28">
      <div className="mx-auto w-4/5 max-w-[20rem] desktop:mb-8 desktop:max-w-sm">
        <img
          className="w-full"
          src={destinations[parem.id].images.webp}
          alt={destinations[parem.id].name}
        />
      </div>
      <div>
        <div className="mt-12 laptop:mt-16 desktop:mt-0">
          <h2 className="font-bellefair text-6xl desktop:text-[7rem]">
            {destinations[parem.id].name}
          </h2>
          <p className="mt-8 font-barlow text-[1rem] text-fog tablet:mx-auto tablet:max-w-md tablet:text-lg tablet:leading-8 laptop:max-w-lg desktop:max-w-md">
            {destinations[parem.id].description}
          </p>
        </div>
        <hr
          className="my-8 tablet:my-12 tablet:mx-auto tablet:max-w-md
      laptop:my-16 laptop:max-w-lg"
        />
        <div className="flex flex-col justify-between gap-8 tablet:mx-auto tablet:max-w-md tablet:flex-row laptop:max-w-lg">
          <div>
            <p className="mb-3 text-[1.2rem] font-light tracking-wider text-fog desktop:mb-5 desktop:text-[1.4rem]">
              AVG. DISTANCE
            </p>
            <span className="font-bellefair text-4xl">
              {destinations[parem.id].distance}
            </span>
          </div>
          <div className="">
            <p className="mb-3 text-[1.2rem] font-light tracking-wider text-fog desktop:mb-5 desktop:text-xl">
              EST. TRAVEL TIME
            </p>
            <span className="font-bellefair text-4xl">
              {destinations[parem.id].travel}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Planet;
