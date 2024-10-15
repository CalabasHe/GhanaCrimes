import { Link } from "react-router-dom";
import { useState } from "react";
import LoginOverlay from "../components/loginOverlay";
const HeaderMD = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <main className="hidden md:block">
      {/* Logo */}
      <Link className="flex justify-center mt-6" to="/home">
        <p className="font-EB font-bold lg:text-4xl text-[#f06c00]">
          GhanaCrimes
        </p>
      </Link>

      {/* Navbar Wrapper */}
      <div className="flex flex-wrap justify-between mt-6 items-center text-lg px-4">
        {/* Left Section (Menu Toggle + Search) */}
        <div className="flex items-center  lg:space-x-4">
          <div>
            <svg
              onClick={toggleMenu}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
            >
              <path
                stroke="#666"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M2.5 10h15M2.5 5h15M2.323 14.986h10"
              />
            </svg>
          </div>
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 19L14.65 14.65M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z"
                stroke="#828282"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 justify-center md:text-sm hidden lg:flex">
          <div className="space-x-5 text-[#828282] font-semibold">
            <Link to="/">EUROPE NEWS</Link>
            <Link to="/">TRAVEL NEWS</Link>
            <Link to="/">EUROPE NEWS</Link>
            <Link to="/">EUROPE NEWS</Link>
            <Link to="/">EUROPE NEWS</Link>
          </div>
        </nav>

        {/* Right Section (Login + Become a Member Button) */}
        <LoginOverlay />
        <div className="flex space-x-3 items-center md:text-sm">
          <Link
            onClick={() => setIsLoginOpen(true)}
            className="text-[#828282] text-base font-semibold"
            to="/"
          >
            Log in
          </Link>
          <Link className="bg-[#f06c00] text-white rounded-full px-4 py-2 font-semibold text-sm hidden md:block">
            BECOME A MEMBER
          </Link>
        </div>
      </div>

      <hr className="w-full mt-6" />

      {/* Side Menu */}
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } fixed top-0 left-0 lg:w-3/12 w-3/6 h-full bg-white text-black transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex lg:mt-[120px] mt-[70px] mr-3 flex-col items-start p-5 space-y-4">
          <p className="text-lg font-semibold">Topic</p>
          <button onClick={toggleMenu} className="self-end">
            Close
          </button>

          <Link to="/" className=" text-lg ml-8">
            EUROPE NEWS
          </Link>
          <Link to="/" className=" text-lg ml-8">
            EUROPE NEWS
          </Link>
          <Link href="/" className=" text-lg ml-8">
            EUROPE NEWS
          </Link>
          <Link to="/" className=" text-lg ml-8">
            EUROPE NEWS
          </Link>
          <Link to="/" className=" text-lg ml-8">
            EUROPE NEWS
          </Link>
        </div>
      </div>

      {/* Backdrop */}
      <div
        className={`${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ease-in-out`}
      ></div>
    </main>
  );
};

export default HeaderMD;
