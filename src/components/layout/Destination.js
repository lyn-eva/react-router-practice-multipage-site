import { NavLink } from "react-router-dom";
import { Outlet, useNavigate } from "react-router";
import { useEffect } from "react";

function Destination() {
  const redirect = useNavigate();
  useEffect(() => {
    redirect("0/moon"); // lifesaver
  }, []);

  const subNav = ["moon", "mars", "europa", "titan"];
  const subNavigation = subNav.map((nav, i) => {
    return (
      <li key={nav}>
        <NavLink
          to={`${i}/${nav}`}
          className={({ isActive }) => (isActive ? "border-b-2" : "")}
        >
          {nav.toUpperCase()}
        </NavLink>
      </li>
    );
  });

  return (
    <main className="mt-8 text-center font-barlow-condensed text-2xl text-white  laptop:mx-auto laptop:mt-20 laptop:w-4/5 laptop:text-left desktop:mt-0 desktop:text-3xl">
      <h1>
        <span className="mr-4 text-fog">01</span> PICK YOUR DESTINATION
      </h1>
      <nav className="mt-8 laptop:mt-12">
        <ul className="mx-auto flex w-11/12 max-w-[18rem] justify-between gap-3 text-[1.2rem] tracking-widest tablet:max-w-sm desktop:mx-0 desktop:ml-auto desktop:mr-8 desktop:max-w-sm desktop:text-xl">
          {subNavigation}
        </ul>
      </nav>
      <Outlet />
    </main>
  );
}

export default Destination;
