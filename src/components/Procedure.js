import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { technology } from "../Data";

function Procedure() {
  const { id } = useParams();
  const [resize, setResize] = useState(false);

  useEffect(() => {
    const resizeHandler = () => {
      setResize(window.innerWidth > 1079);
    };
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  console.log(resize);

  return (
    <div className="mx-auto mt-16 mb-16 w-10/12 text-center font-barlow-condensed text-2xl text-white desktop:mt-8 desktop:flex desktop:w-full desktop:flex-row-reverse desktop:justify-between desktop:gap-28">
      <div className="mx-auto max-w-[20rem] laptop:max-w-md desktop:mb-8 desktop:max-w-sm">
        <img
          className="w-full"
          src={technology[id - 1].images[resize ? "portrait" : "landscape"]}
          alt={technology[id - 1].name}
        />
      </div>
      <div className="mt-12 laptop:mt-16 desktop:mt-0 desktop:text-left desktop:ml-[12%]">
        <span className="text-lg tracking-wider text-fog">
          THE TERMINOLOGY...
        </span>
        <h2 className="mt-2 font-bellefair text-3xl laptop:text-4xl desktop:text-5xl">
          {technology[id - 1].name}
        </h2>
        <p className="mt-8 font-barlow text-[1rem] text-fog tablet:mx-auto tablet:max-w-md tablet:text-lg tablet:leading-8 laptop:max-w-lg desktop:max-w-md desktop:text-left desktop:text-xl desktop:leading-9">
          {technology[id - 1].description}
        </p>
      </div>
    </div>
  );
}

export default Procedure;
