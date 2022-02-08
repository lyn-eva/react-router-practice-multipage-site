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
      <NavLink
        to={nav}
        className={({ isActive }) =>
          isActive
            ? "laptop:p-0 laptop:border-0 laptop:border-b-2 border-r-4 pr-12"
            : ""
        }
      >
        <li onClick={triggerMenuHandler} key={nav}>
          {nav.toUpperCase()}
        </li>
      </NavLink>
    );
  });

  return (
    <header>
      <div className="laptop:w-full laptop:my-10 desktop:max-w-9xl mx-auto my-8 flex w-10/12 items-center justify-between">
        <div className="laptop:ml-[10%] desktop:w-14 w-10">
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
            } modal laptop:flex laptop:flex-row laptop:static laptop:p-0 laptop:max-w-none laptop:py-6 laptop:pl-8 laptop:pr-16 desktop:py-8 desktop:gap-12 desktop:pl-16 fixed top-0 right-0 h-full w-full max-w-[18rem] list-inside list-[decimal-leading-zero] flex-col gap-6 p-1 pt-36 pl-6 pr-6 text-white backdrop-blur-md`}
          >
            <img
              onClick={triggerMenuHandler}
              className="laptop:hidden fixed top-10 right-8 w-4"
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
