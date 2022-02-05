import React from "react";
import logo from "../assets/shared/logo.svg";

function Header() {
  return (
    <header>
      <div className="flex justify-between items-center py-10">
        <div className="ml-16">
          <img src={logo} alt="logo" />
        </div>
        <nav className="bg-blue-300 backdrop-blur-md modal w-3/5 pl-32">
          <ul className="flex list-[decimal-leading-zero] color-white py-[2.2rem]">
            <li className="text-white pl-1">HOME</li>
            <li className="ml-16 text-white pl-1">DESTINATION</li>
            <li className="ml-16 text-white pl-1">CREW</li>
            <li className="ml-16 text-white pl-1">TECHNOLOGY</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
