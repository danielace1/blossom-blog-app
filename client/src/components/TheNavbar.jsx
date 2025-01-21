import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { FiLogIn } from "react-icons/fi";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  useAuth,
  UserButton,
} from "@clerk/clerk-react";

import Image from "./Image";
const TheNavbar = () => {
  const [open, setOpen] = useState(false);

  const { getToken } = useAuth();

  useEffect(() => {
    getToken().then((token) => {
      console.log(token);
    });
  }, []);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      <Link
        to="/"
        className="flex items-center md:gap-3 text-2xl lg:text-3xl font-bold"
      >
        <Image
          src="logo.png"
          alt="blossom blog"
          className={"size-12"}
          w={32}
          h={32}
        />
        <span>Blossom Blogs</span>
      </Link>

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
          <Link to="/">Home</Link>
          <Link to="/">Trending</Link>
          <Link to="/">Most Popular</Link>
          <Link to="/">About</Link>
          <Link to="/">
            <button className="flex items-center py-2 px-4 rounded-3xl bg-blue-800 hover:bg-blue-900 text-white ">
              <FiLogIn className="text-lg mr-2" />
              Login
            </button>
          </Link>
        </div>
      </div>

      {/* desktop nav */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to="/">Home</Link>
        <Link to="/">Trending</Link>
        <Link to="/">Most Popular</Link>
        <Link to="/">About</Link>
        <SignedOut>
          <Link to="/login">
            <button className="flex items-center py-2 px-4 rounded-3xl bg-blue-800 hover:bg-blue-900 text-white ">
              <FiLogIn className="text-lg mr-2" />
              Login
            </button>
          </Link>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default TheNavbar;
