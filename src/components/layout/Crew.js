import { Outlet, useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

function Crew() {
  const redirect = useNavigate();
  useEffect(() => redirect("0"), []);

  const subNav = ["0", "1", "2", "3"];
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
    <main className="mt-8 text-center font-barlow-condensed text-2xl text-white  laptop:mx-auto laptop:mt-20 laptop:w-4/5 laptop:text-left desktop:mt-0 desktop:text-3xl">
      <h1>
        <span className="mr-4 text-fog">01</span> MEET YOUR CREW
      </h1>
      <nav className="mt-8">
        <ul className="flex justify-center gap-5 tablet:gap-7">
          {subNavigation}
        </ul>
      </nav>
      <Outlet />
    </main>
  );
}

export default Crew;
