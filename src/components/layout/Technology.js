import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

function Technology() {
  const redirect = useNavigate();
  useEffect(() => {
    redirect("1");
  }, []);

  const subNav = ["1", "2", "3"];
  const subNavigation = subNav.map((nav) => {
    return (
      <li key={nav} className="text-lg hover:cursor-pointer desktop:text-2xl">
        <NavLink
          to={nav}
          className={({ isActive }) =>
            isActive
              ? "block h-12 w-12 rounded-full bg-white pt-2 text-center text-dark desktop:h-20 desktop:w-20 desktop:pt-5"
              : "block h-12 w-12 rounded-full border-[1px] pt-2 text-center desktop:h-20 desktop:w-20 desktop:pt-5"
          }
        >
          {nav}
        </NavLink>
      </li>
    );
  });

  return (
    <main className="relative mt-8 text-center font-barlow-condensed text-2xl text-white  laptop:mx-auto laptop:mt-20 laptop:w-4/5 laptop:text-left desktop:mt-0 desktop:mb-20 desktop:text-3xl">
      <h1 className="tracking-wide">
        <span className="mr-4 text-fog">03</span> SPACE LAUNCH 101
      </h1>
      <nav className="mt-8 desktop:absolute">
        <ul className="flex justify-center gap-8 desktop:flex-col desktop:gap-16">
          {subNavigation}
        </ul>
      </nav>
      <Outlet />
    </main>
  );
}

export default Technology;
