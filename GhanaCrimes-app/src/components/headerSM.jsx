import { Link } from "react-router-dom";
import { useState } from "react";

const HeaderSM = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <main className="block md:hidden">
      <div className="flex space-x-[80px] justify-center items-center mt-6 container">
        <div>
          <svg
            className="cursor-pointer"
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
        <Link to="/" className="text-3xl font-EB font-bold text-[#f06c00]">
          GhanaCrimes
        </Link>
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
      <hr className="w-full mt-4" />
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } fixed top-0 left-0 lg:w-3/12 w-3/6 h-full bg-white text-black transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex lg:mt-[120px] mt-[70px] mr-3 flex-col items-start p-5 space-y-4">
          <button onClick={toggleMenu} className="self-end">
            Close
          </button>

          <Link to="/" className="font-goudos text-lg self-end">
            EUROPE NEWS
          </Link>
          <Link to="/" className="font-goudos text-lg self-end">
            EUROPE NEWS
          </Link>
          <Link href="/" className="font-goudos text-lg self-end">
            EUROPE NEWS
          </Link>
          <Link to="/" className="font-goudos text-lg self-end">
            EUROPE NEWS
          </Link>
          <Link to="/" className="font-goudos text-lg self-end">
            EUROPE NEWS
          </Link>
        </div>
      </div>
      <div
        className={`${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } fixed inset-0 bg-black bg-opacity-50 -md z-40 transition-opacity duration-300 ease-in-out`}
      ></div>
    </main>
  );
};

export default HeaderSM;
