import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/homePage";
import NewsPage from "./pages/newsPage";
import AboutUs from "./pages/aboutUs";
import ContactUs from "./pages/contactUS";
function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/news/:slug" element={<NewsPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </>
  );
}

export default App;
