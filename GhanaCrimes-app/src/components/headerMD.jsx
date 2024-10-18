import { Link } from "react-router-dom";
import { useState } from "react";

const HeaderMD = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const switchToCreateAccount = () => {
    setIsCreatingAccount(true);
  };

  const switchToLogin = () => {
    setIsCreatingAccount(false);
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    setIsLoginOpen(true);
  };

  return (
    <main className="hidden md:block px-[4%]">
      {/* Logo */}
      <Link className="flex justify-center mt-6" to="/home">
        <p className="font-EB font-bold lg:text-4xl text-[#f06c00]">
          GhanaCrimes
        </p>
      </Link>

      {/* Navbar Wrapper */}
      <div className="flex flex-wrap justify-between mt-6 items-center text-lg">
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

        <div className="flex space-x-3 items-center md:text-sm">
          <a
            onClick={() => setIsLoginOpen(true)}
            className="text-[#828282] text-base font-semibold"
            to="/"
          >
            Log in
          </a>
          <a
            onClick={(e) => {
              e.preventDefault();
              setIsLoginOpen(true);
              switchToCreateAccount();
            }}
            className="bg-[#f06c00] text-white rounded-full px-4 py-2 font-semibold text-sm hidden md:block"
          >
            CREATE AN ACCOUNT
          </a>
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
      {isLoginOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-y-auto ">
          <div className="bg-white p-6 relative w-11/12 max-w-md max-h-[90vh] overflow-y-auto ">
            <p className="text-[#f06c00] font-EB font-bold text-4xl text-center pt-7 ">
              GhanaCrimes
            </p>
            <button
              onClick={() => setIsLoginOpen(false)}
              className="absolute top-4 right-4 text-lg text-red-600 hover:text-red-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 32 32"
              >
                <path
                  fill="black"
                  d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m5.4 21L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"
                />
              </svg>
            </button>
            {isCreatingAccount ? (
              // Create Account Form
              <div>
                <p className="font-semibold text-lg mt-6">Create Account</p>
                <div className="text-[#f06c00] flex justify-between">
                  <Link onClick={switchToLogin}>or create account</Link>

                  <Link>Log in help</Link>
                </div>

                <div className="flex border border-black mt-11 p-3 rounded-full space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="black"
                      fillRule="evenodd"
                      d="M12 4a8 8 0 0 0-6.96 11.947A4.99 4.99 0 0 1 9 14h6a4.99 4.99 0 0 1 3.96 1.947A8 8 0 0 0 12 4m7.943 14.076q.188-.245.36-.502A9.96 9.96 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12a9.96 9.96 0 0 0 2.057 6.076l-.005.018l.355.413A9.98 9.98 0 0 0 12 22q.324 0 .644-.02a9.95 9.95 0 0 0 5.031-1.745a10 10 0 0 0 1.918-1.728l.355-.413zM12 6a3 3 0 1 0 0 6a3 3 0 0 0 0-6"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <input
                    className="border-none outline-none"
                    type="text"
                    placeholder="First Name"
                  />
                </div>
                <div className="flex border border-black mt-6 p-3 rounded-full space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="black"
                      fillRule="evenodd"
                      d="M12 4a8 8 0 0 0-6.96 11.947A4.99 4.99 0 0 1 9 14h6a4.99 4.99 0 0 1 3.96 1.947A8 8 0 0 0 12 4m7.943 14.076q.188-.245.36-.502A9.96 9.96 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12a9.96 9.96 0 0 0 2.057 6.076l-.005.018l.355.413A9.98 9.98 0 0 0 12 22q.324 0 .644-.02a9.95 9.95 0 0 0 5.031-1.745a10 10 0 0 0 1.918-1.728l.355-.413zM12 6a3 3 0 1 0 0 6a3 3 0 0 0 0-6"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <input
                    className="border-none outline-none"
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
                <div className="flex border border-black mt-6 p-3 rounded-full space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="black"
                      d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z"
                    />
                  </svg>
                  <input
                    className="border-none outline-none"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="flex border border-black mt-6 p-3 rounded-full space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zm3-2V7a4 4 0 1 1 8 0v4m-1 5h.01m-3 0h.01m-3 0h.01"
                    ></path>
                  </svg>
                  <input
                    className="border-none outline-none"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <div className="flex border border-black mt-6 p-3 rounded-full space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="black"
                      d="M22 2.25h-3.25V.75a.75.75 0 0 0-1.5-.001V2.25h-4.5V.75a.75.75 0 0 0-1.5-.001V2.25h-4.5V.75a.75.75 0 0 0-1.5-.001V2.25H2a2 2 0 0 0-2 1.999v17.75a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V4.249a2 2 0 0 0-2-1.999M22.5 22a.5.5 0 0 1-.499.5H2a.5.5 0 0 1-.5-.5V4.25a.5.5 0 0 1 .5-.499h3.25v1.5a.75.75 0 0 0 1.5.001V3.751h4.5v1.5a.75.75 0 0 0 1.5.001V3.751h4.5v1.5a.75.75 0 0 0 1.5.001V3.751H22a.5.5 0 0 1 .499.499z"
                    ></path>
                    <path
                      fill="black"
                      d="M5.25 9h3v2.25h-3zm0 3.75h3V15h-3zm0 3.75h3v2.25h-3zm5.25 0h3v2.25h-3zm0-3.75h3V15h-3zm0-3.75h3v2.25h-3zm5.25 7.5h3v2.25h-3zm0-3.75h3V15h-3zm0-3.75h3v2.25h-3z"
                    ></path>
                  </svg>
                  <input
                    className="border-none outline-none"
                    type="date"
                    placeholder="DOB"
                  />
                </div>
                <p className="text-center mt-11 text-[#828282]">
                  Or continue with
                </p>
                <div className="flex justify-center mt-2">
                  <Link className="border rounded-full p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#ffc107"
                        d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917"
                      ></path>
                      <path
                        fill="#ff3d00"
                        d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691"
                      ></path>
                      <path
                        fill="#4caf50"
                        d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.9 11.9 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44"
                      ></path>
                      <path
                        fill="#1976d2"
                        d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917"
                      ></path>
                    </svg>
                  </Link>
                </div>
                <button className="rounded-full w-full bg-[#f06c00] mt-6 p-3 text-center text-white">
                  Sign Up
                </button>
              </div>
            ) : (
              <div>
                <div>
                  <p className="font-semibold mt-6 text-lg">Log in</p>
                  <div className="text-[#f06c00] flex justify-between">
                    <Link onClick={switchToCreateAccount}>
                      or create account
                    </Link>

                    <Link>Log in help</Link>
                  </div>
                </div>
                <div className="flex border border-black mt-11 p-3 rounded-full space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="black"
                      d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z"
                    />
                  </svg>
                  <input
                    className="border-none outline-none"
                    type="email"
                    name=""
                    id=""
                    placeholder="Email"
                  />
                </div>
                <button className="rounded-full w-full bg-[#f06c00] mt-6 p-3 text-center text-white">
                  <Link>Next</Link>
                </button>
                <hr className="mt-11" />
                <p className="text-center mt-11 text-[#828282]">
                  Or continue with
                </p>
                <div className="flex justify-center mt-2">
                  <Link className="border rounded-full p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#ffc107"
                        d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917"
                      ></path>
                      <path
                        fill="#ff3d00"
                        d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691"
                      ></path>
                      <path
                        fill="#4caf50"
                        d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.9 11.9 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44"
                      ></path>
                      <path
                        fill="#1976d2"
                        d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
};

export default HeaderMD;
