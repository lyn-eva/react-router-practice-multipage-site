import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router";
// import Planet from "../Planet";

function Destination() {
  // const parem = useParams()
  // console.log(parem);

  return (
    <div className="text-white text-center text-2xl font-barlow-condensed mt-8">
      <h1>
        <span className="text-fog mr-4">01</span> PICK YOUR DESTINATION
      </h1>
      <nav className="mt-8">
        <ul className="flex justify-between gap-3 text-[1.2rem] tracking-widest max-w-[18rem] mx-auto">
          <li>
            <NavLink
              to="0/moon"
              className={({ isActive }) => (isActive ? "border-b-2" : "")}
            >
              MOON
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              to="1/mars"
              className={({ isActive }) => (isActive ? "border-b-2" : "")}
            >
              MARS
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              to="2/europa"
              className={({ isActive }) => (isActive ? "border-b-2" : "")}
            >
              EUROPA
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              to="3/titan"
              className={({ isActive }) => (isActive ? "border-b-2" : "")}
            >
              TITAN
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Destination;
