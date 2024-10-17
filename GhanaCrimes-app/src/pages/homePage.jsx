import { useEffect } from "react";
import Header from "../components/header";
import MainGrid from "../components/mainGrid";
import { getCrimes } from "../api/authAPI";

const HomePage = () => {
  useEffect(() => {
    const getCrimeData = async () => {
      try {
        const data = await getCrimes();
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    getCrimeData();
  }, []);
  return (
    <div className="w-screen">
      <Header />
      <MainGrid />
    </div>
  );
};

export default HomePage;
