import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <NavLink to={"/"}>
      <div className="bg-[#F05941] w-full p-5 text-center font-bold text-3xl shadow-md  shadow-black text-white ">
        <h1 className="shadow shadow-black inline-block bg-white text-black rounded-md px-3 border-2 border-black">
          Paresh Blogs
        </h1>
      </div>
    </NavLink>
  );
}

export default Header;
