import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";

import HomePage from "./pages/homePage";
import NewsPage from "./pages/newsPage";
import { getCrimes } from "../api/authAPI";
function App() {
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
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
    </>
  );
}

export default App;
