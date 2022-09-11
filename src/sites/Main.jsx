import React from "react";

import {
  BeakerIcon,
  Bars3Icon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";

const Main = () => {
  return (
    <div title="whole site" className=" bg-dark_gunmetal">
      <div title="main content" className="flex h-screen flex-col items-center">
        <div
          title="whole menu"
          className="test flex w-screen flex-row bg-dark_gunmetal py-6 pl-16 pr-16"
        >
          <div
            title="logo-menu"
            className="flex flex-row items-center gap-x-12"
          >
            <div title="hamburger">
              <Bars3Icon className="h-6 w-6 cursor-pointer text-roman_silver transition hover:text-white_custom" />
            </div>
            <div
              title="break"
              className="h-full border border-white_custom"
            ></div>
            <div
              title="logo"
              className="text-roman_silver transition hover:text-white_custom"
            >
              <a
                href="#"
                className="flex flex-row items-center gap-x-1 text-base"
              >
                <BeakerIcon className="h-6 w-6" />
                <div className="">MORANA</div>
              </a>
            </div>
            <div
              title="text1"
              className="text-base text-roman_silver transition hover:text-white_custom"
            >
              <a href="#">Morana Pro</a>
            </div>
            <div
              title="text2"
              className="text-base text-roman_silver transition hover:text-white_custom"
            >
              <a href="#">About the App</a>
            </div>
          </div>
          <div
            title="right menu"
            className="ml-auto flex flex-row items-center"
          >
            <div title="login logo">
              <UserCircleIcon className="h-6 w-6 cursor-pointer text-roman_silver transition hover:text-white_custom" />
            </div>
          </div>
        </div>
        <div
          title="big logo with text"
          className="test flex flex-row items-center text-8xl text-roman_silver"
        >
          <BeakerIcon className="h-24 w-24" />
          <div className="">MORANA</div>
        </div>
      </div>
    </div>
  );
};

export default Main;
