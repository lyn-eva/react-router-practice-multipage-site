import { useParams } from "react-router";
import { crew } from "../Data";

function Biography() {
  const { id } = useParams();

  return (
    <div className="mx-auto mt-8 w-11/12 laptop:flex laptop:flex-col-reverse desktop:mt-16 desktop:w-full desktop:flex-row-reverse desktop:justify-between desktop:gap-12">
      <div className="mx-auto w-10/12 max-w-sm laptop:mt-12 desktop:mt-0">
        <img
          className="w-full"
          src={crew[id].images.webp}
          alt={crew[id].name}
        />
        <hr className="laptop:hidden" />
      </div>
      <div className="my-8 mx-auto max-w-md text-center laptop:mt-2 laptop:max-w-lg desktop:ml-0 desktop:mt-28 desktop:max-w-[29rem] desktop:text-left">
        <div className="font-bellefair">
          <h3 className="text-[1rem] text-fog tablet:text-xl laptop:text-2xl desktop:text-3xl">
            {crew[id].role}
          </h3>
          <h2 className="text-lg tablet:text-2xl laptop:mt-2 laptop:text-4xl desktop:mt-3 desktop:text-5xl">
            {crew[id].name}
          </h2>
        </div>
        <p className="mt-3 text-[1rem] font-light leading-7 tablet:text-lg tablet:leading-8 laptop:mt-6 laptop:text-xl laptop:leading-9 laptop:tracking-wide desktop:mt-8 desktop:text-xl desktop:font-extralight desktop:leading-10">
          {crew[id].bio}
        </p>
      </div>
    </div>
  );
}

export default Biography;
