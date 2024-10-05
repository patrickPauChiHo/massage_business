import React from "react";

const Nav = () => {
  return (
    <header
      className=" text-white mx-auto my-10 left-10 c-space absolute sm:fixed top-0 right-10
    z-50  p-y-10 bg-black bg-opacity-20 rounded-lg"
    >
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl lg:text-8xl">T&K Massage</h1>
          <h2 className="text-xs lg:text-3xl">
            1 Brookwood St Glen Waverley VIC 3150
          </h2>
        </div>
        <ul className="hidden xl:flex justify-between items-center gap-20">
          <li className="text-4xl hover:text-yellow-200 ">
            <a href="#about">About</a>
          </li>
          <li className="text-4xl hover:text-yellow-200">
            <a href="#services">Services</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Nav;
