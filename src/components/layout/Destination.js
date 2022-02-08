import { NavLink } from "react-router-dom";
import { Outlet, useNavigate } from "react-router";
import { useEffect } from "react";

function Destination() {
  const redirect = useNavigate();
  useEffect(() => {
    redirect("0/moon");
  }, [])


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
    <div className="font-barlow-condensed mt-8 text-center text-2xl text-white">
      <h1>
        <span className="text-fog mr-4">01</span> PICK YOUR DESTINATION
      </h1>
      <nav className="mt-8">
        <ul className="mx-auto flex max-w-[18rem] justify-between gap-3 text-[1.2rem] tracking-widest">
          {subNavigation}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Destination;
