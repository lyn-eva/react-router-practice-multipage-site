import { useState } from "react";
import logo from "../assets/shared/logo.svg";
import menu from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg";

function Header() {
  const [menuOn, setMenuOn] = useState(false);

  const triggerMenuHandler = () => {
    setMenuOn((prevState) => !prevState);
  };

  return (
    <header className="p-[0.02px]">
      <div className="flex justify-between items-center w-10/12 mx-auto my-8">
        <div className="w-10">
          <img className="w-full" src={logo} alt="logo" />
        </div>
        <nav className="">
          <img src={menu} alt="open menu" onClick={triggerMenuHandler} />
          <ul
            className={`${
              menuOn ? "flex" : "hidden"
            } backdrop-blur-md modal list-[decimal-leading-zero] fixed top-0 right-0 list-inside p-1 pt-28 pl-6 h-full w-full max-w-[14rem] flex-col gap-6`}
          >
            <img
              onClick={triggerMenuHandler}
              className="w-4 fixed top-10 right-8"
              src={close}
              alt="exit menu"
            />
            <li className="text-white pl-1">HOME</li>
            <li className="text-white pl-1">DESTINATION</li>
            <li className="text-white pl-1">CREW</li>
            <li className="text-white pl-1">TECHNOLOGY</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

//
// flex list-[decimal-leading-zero] color-white py-[2.2rem]
// text-white pl-1
// ml-16 text-white pl-1
// flex justify-between items-center py-10 w-full
