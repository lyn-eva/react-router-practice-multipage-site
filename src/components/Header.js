import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "./assets/shared/logo.svg";
import menu from "./assets/shared/icon-hamburger.svg";
import close from "./assets/shared/icon-close.svg";

const Nav = ["home", "destination", "crew", "technology"];

function Header() {
  const [menuOn, setMenuOn] = useState(false);

  const triggerMenuHandler = () => {
    setMenuOn((prevState) => !prevState);
  };

  const navigation = Nav.map((nav) => {
    return (
      <li onClick={triggerMenuHandler} key={nav}>
        <NavLink
          to={nav}
          className={({ isActive }) => (isActive ? "pr-12 border-r-4" : "")}
        >
          {nav.toUpperCase()}
        </NavLink>
      </li>
    );
  });

  return (
    <header>
      <div className="flex justify-between items-center w-10/12 mx-auto my-8 laptop:w-full laptop:my-10 desktop:max-w-9xl">
        <div className="w-10 laptop:ml-[10%] desktop:w-14">
          <img className="w-full" src={logo} alt="logo" />
        </div>
        <nav className="desktop:w-[65%] desktop:max-w-[52rem]">
          <img
            className="laptop:hidden"
            src={menu}
            alt="open menu"
            onClick={triggerMenuHandler}
          />
          <ul
            className={`${
              menuOn ? "flex" : "hidden"
            } text-white backdrop-blur-md modal list-[decimal-leading-zero] fixed top-0 right-0 list-inside p-1 pt-36 pl-6 pr-6 h-full w-full max-w-[18rem] flex-col gap-6 laptop:flex laptop:flex-row laptop:static laptop:p-0 laptop:max-w-none laptop:py-6 laptop:pl-8 laptop:pr-16 desktop:py-8 desktop:gap-12 desktop:pl-16`}
          >
            <img
              onClick={triggerMenuHandler}
              className="w-4 fixed top-10 right-8 laptop:hidden"
              src={close}
              alt="exit menu"
            />
            {navigation}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
