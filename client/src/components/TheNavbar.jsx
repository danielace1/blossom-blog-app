import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { FiLogIn } from "react-icons/fi";

import Image from "./Image";

const TheNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      <div className="flex items-center md:gap-3 text-2xl font-bold">
        <Image
          src="logo.png"
          alt="blossom blog"
          className={"size-12"}
          w={32}
          h={32}
        />
        <span>Blossom Blog</span>
      </div>

      {/* mobile nav */}
      <div className="md:hidden" onClick={() => setOpen((prev) => !prev)}>
        <IoClose
          className={`absolute top-5 right-3 text-2xl transition-all duration-300 ease-in-out hover:cursor-pointer ${
            open ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        />
        <RxHamburgerMenu
          className={`absolute top-5 right-3  text-2xl transition-all duration-300 ease-in-out hover:cursor-pointer ${
            open ? "opacity-0 scale-75" : "opacity-100 scale-100"
          }`}
        />

        <div
          className={`w-full h-screen flex flex-col items-center gap-8 font-medium justify-center absolute top-0 transition-transform duration-300 ease-in-out ${
            open ? "-right-0" : "translate-x-full"
          }`}
        >
          <a href="/">Home</a>
          <a href="/">Trending</a>
          <a href="/">Most Popular</a>
          <a href="/">About</a>
          <a href="/">
            <button className="flex items-center py-2 px-4 rounded-3xl bg-blue-800 hover:bg-blue-900 text-white ">
              <FiLogIn className="text-lg mr-2" />
              Login
            </button>
          </a>
        </div>
      </div>

      {/* desktop nav */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <a href="/">Home</a>
        <a href="/">Trending</a>
        <a href="/">Most Popular</a>
        <a href="/">About</a>
        <a href="/">
          <button className="flex items-center py-2 px-4 rounded-3xl bg-blue-800 hover:bg-blue-900 text-white ">
            <FiLogIn className="text-lg mr-2" />
            Login
          </button>
        </a>
      </div>
    </div>
  );
};

export default TheNavbar;
