import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link className="flex justify-center mt-6 " to="/home">
        <p className="font-EB font-bold text-2xl lg:text-4xl">GhanaCrimes</p>
      </Link>
      <div className="flex mt-6 justify-center space-x-14 text-lg items-center">
        <div className="flex justify-between space-x-9">
          <div className="flex space-x-4">
            <div>
              <svg
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
          <div className="space-x-5 text-[#828282] font-semibold">
            <Link to="/">EUROPE NEWS</Link>
            <Link to="/">TRAVEL NEWS</Link>
            <Link to="/">EUROPE NEWS</Link>
            <Link to="/">EUROPE NEWS</Link>
            <Link to="/">EUROPE NEWS</Link>
            <Link to="/">EUROPE NEWS</Link>
            <Link to="/">EUROPE NEWS</Link>
          </div>
        </div>

        <div className="flex justify-center space-x-3">
          <div>
            <Link className="text-[#828282] text-base font-semibold" to="/">
              Log in
            </Link>
          </div>
          <div>
            <Link className="bg-[#f06c00] text-white rounded-full px-5 py-3 font-semibold text-sm">
              BECOME A MEMBER
            </Link>
          </div>
        </div>
      </div>
      <hr className="w-full mt-6" />
    </div>
  );
};

export default Header;
