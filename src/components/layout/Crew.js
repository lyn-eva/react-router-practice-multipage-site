import { Outlet, useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

const subNav = ["0", "1", "2", "3"];

function Crew() {
  const redirect = useNavigate();
  useEffect(() => redirect("0"), []);

  const subNavigation = subNav.map((nav) => {
    return (
      <li
        key={nav}
        className="h-4 w-4 rounded-full bg-half-transparent hover:cursor-pointer"
      >
        <NavLink
          to={nav}
          className={({ isActive }) =>
            isActive ? "block h-4 rounded-full bg-white" : "block h-4"
          }
        ></NavLink>
      </li>
    );
  });

  return (
    <main className="min-h-screen bg-crew-sm bg-cover bg-no-repeat p-[0.02px] tablet:bg-crew-md desktop:bg-crew-lg">
      <div className="relative mt-28 text-center font-barlow-condensed text-2xl text-white  laptop:mx-auto laptop:mt-48 laptop:w-4/5 laptop:text-left desktop:mb-20 desktop:text-3xl">
        <h1 className="tracking-wide">
          <span className="mr-4 text-fog">02</span> MEET YOUR CREW
        </h1>
        <nav className="top-72 left-1/2 mt-8 laptop:absolute laptop:-translate-x-1/2 desktop:left-0 desktop:top-12 desktop:translate-x-0">
          <ul className="flex justify-center gap-5 tablet:gap-7">
            {subNavigation}
          </ul>
        </nav>
        <Outlet />
      </div>
    </main>
  );
}

export default Crew;
