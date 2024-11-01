import { Link } from "react-router-dom";
import { AuthContext } from "../context/context";
import { useContext } from "react";

const MyAccountContent = () => {
  const { handleLogout } = useContext(AuthContext);

  const logouthandle = () => {
    handleLogout();
    
  };

  return (
    <main className="overflow-x-hidden  px-3">
      <div className="mt-2">
        <p className=" font-EB font-bold text-xl md:text-4xl text-[#212529]">
          Manage Account
        </p>
        <hr className="mt-2" />
      </div>
      <div className="flex mt-4 text-semibold gap-4">
        <Link className="text-[#42b3bc]">Saved News</Link>
        <button onClick={logouthandle()} className="text-[#f06c00]">
          Log out
        </button>
      </div>
    </main>
  );
};

export default MyAccountContent;
