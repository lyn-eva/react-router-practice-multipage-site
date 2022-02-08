import { useParams } from "react-router";
import { destinations } from "../Data";

function Planet() {
  const parem = useParams();

  return (
    <div className="font-barlow-condensed desktop:flex mx-auto mt-16 mb-16 w-10/12 text-center text-2xl text-white desktop:justify-between desktop:items-center desktop:w-full desktop:gap-28 desktop:mt-8">
      <div className="mx-auto w-4/5 max-w-[20rem] desktop:max-w-sm desktop:mb-8">
        <img
          className="w-full"
          src={destinations[parem.id].images.webp}
          alt={destinations[parem.id].name}
        />
      </div>
      <div>
        <div className="laptop:mt-16 mt-12 desktop:mt-0">
          <h2 className="font-bellefair text-6xl desktop:text-[7rem]">
            {destinations[parem.id].name}
          </h2>
          <p className="font-barlow text-fog tablet:mx-auto tablet:max-w-md tablet:text-lg tablet:leading-8 laptop:max-w-lg mt-8 text-[1rem] desktop:max-w-md">
            {destinations[parem.id].description}
          </p>
        </div>
        <hr
          className="tablet:my-12 tablet:mx-auto tablet:max-w-md laptop:my-16
      laptop:max-w-lg my-8"
        />
        <div className="tablet:mx-auto tablet:max-w-md tablet:flex-row laptop:max-w-lg flex flex-col justify-between gap-8">
          <div>
            <p className="text-fog mb-3 text-[1.2rem] font-light tracking-wider desktop:text-[1.4rem] desktop:mb-5">
              AVG. DISTANCE
            </p>
            <span className="font-bellefair text-4xl">
              {destinations[parem.id].distance}
            </span>
          </div>
          <div className="">
            <p className="text-fog mb-3 text-[1.2rem] font-light tracking-wider desktop:text-xl desktop:mb-5">
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
