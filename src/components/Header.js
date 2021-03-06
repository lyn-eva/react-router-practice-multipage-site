import { useState, useCallback } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "./assets/shared/logo.svg";
import menu from "./assets/shared/icon-hamburger.svg";
import close from "./assets/shared/icon-close.svg";

const Nav = ["home", "destination", "crew", "technology"];
function Header() {
  const [menuOn, setMenuOn] = useState(false);

  const triggerMenuHandler = useCallback(() => {
    setMenuOn((prevState) => !prevState);
  });

  const navigation = Nav.map((nav) => {
    return (
      <li key={nav} className="text-lg">
        <NavLink
          to={nav}
          onClick={triggerMenuHandler}
          className={({ isActive }) =>
            isActive
              ? "relative before:absolute before:-left-6 before:top-1 before:h-4 before:w-48 before:border-r-4 before:content-[''] laptop:before:top-6 laptop:before:h-0 laptop:before:w-[calc(100%+1.5rem)] laptop:before:border-b-2 laptop:before:border-r-0"
              : ""
          }
        >
          {nav.toUpperCase()}
        </NavLink>
      </li>
    );
  });

  return (
    <header className="absolute w-full">
      <div className="desktop:max-w-9xl mx-auto my-8 flex w-10/12 items-center justify-between laptop:my-10 laptop:w-full desktop:my-12">
        <div className="w-10 laptop:ml-[10%] desktop:ml-28 desktop:w-14">
          <Link to="home">
            <img className="w-full" src={logo} alt="logo" />
          </Link>
        </div>
        <nav className="desktop:w-[65%] desktop:max-w-[52rem]">
          <img
            className="laptop:hidden hover:cursor-pointer"
            src={menu}
            alt="open menu"
            onClick={triggerMenuHandler}
          />
          <ul
            className={`${
              menuOn ? "flex" : "hidden"
            }  fixed top-0 right-0 z-10 h-full w-full max-w-[18rem] list-inside list-[decimal-leading-zero] flex-col gap-6 bg-[rgba(255,255,255,0.04)] p-1 pt-36 pl-6 pr-6 font-barlow-condensed tracking-wider text-white backdrop-blur-[80px] laptop:static laptop:flex laptop:max-w-none laptop:flex-row laptop:p-0 laptop:py-6 laptop:pl-8 laptop:pr-16 desktop:gap-14 desktop:py-9 desktop:pl-20`}
          >
            <img
              onClick={triggerMenuHandler}
              className="fixed top-10 right-8 w-4 laptop:hidden hover:cursor-pointer"
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
