import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/homePage";
import NewsPage from "./pages/newsPage";



function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/news/:slug" element={<NewsPage />} />
      </Routes>
    </>
  );
}

export default App;
