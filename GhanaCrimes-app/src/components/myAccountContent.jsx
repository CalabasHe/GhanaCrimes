import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/context";
import { useContext } from "react";

const MyAccountContent = () => {
  const {
    handleLogout,
    isLoggedIn,
    setIsLoggedIn,
    isLoginOpen,
    setIsLoginOpen,
  } = useContext(AuthContext);
  const navigate = useNavigate();

  const logouthandle = () => {
    handleLogout();
    alert("Logged out successfully");

    navigate("/");

    window.location.reload();
  };

  const loginhandle = () => {
    setIsLoginOpen(true);
  };

  return (
    <main className="overflow-x-hidden  px-3">
      <div className="mt-2">
        {!isLoggedIn ? (
          <p className=" font-EB font-bold text-xl md:text-4xl text-[#212529]">
            Login to access
          </p>
        ) : (
          <p className=" font-EB font-bold text-xl md:text-4xl text-[#212529]">
            Manage Account
          </p>
        )}

        <hr className="mt-2" />
      </div>
      <div className="flex mt-4 text-semibold gap-4">
        {!isLoggedIn ? (
          <>
            <button className="text-[#42b3bc] disabled:border-y-gray-500">
              Saved News
            </button>
            <button onClick={loginhandle} className="text-[#f06c00]">
              Log in
            </button>
          </>
        ) : (
          <>
            <Link className="text-[#42b3bc]">Saved News</Link>
            <button onClick={logouthandle} className="text-[#f06c00]">
              Log out
            </button>
          </>
        )}
      </div>
    </main>
  );
};

export default MyAccountContent;
