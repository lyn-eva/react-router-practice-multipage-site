import { NavLink } from "react-router-dom";
import { Outlet, useNavigate } from "react-router";
import { useEffect } from "react";

function Destination() {
  const redirect = useNavigate();
  useEffect(() => {
    redirect("0/moon");
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
    <div className="mt-8 text-center font-barlow-condensed text-2xl text-white  laptop:text-left laptop:w-4/5 laptop:mx-auto laptop:mt-20 desktop:text-3xl desktop:mt-0">
      <h1>
        <span className="mr-4 text-fog">01</span> PICK YOUR DESTINATION
      </h1>
      <nav className="mt-8 laptop:mt-12">
        <ul className="mx-auto flex max-w-[18rem] justify-between gap-3 text-[1.2rem] tracking-widest tablet:max-w-sm desktop:text-xl desktop:mx-0 desktop:ml-auto desktop:mr-8 desktop:max-w-sm">
          {subNavigation}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Destination;
