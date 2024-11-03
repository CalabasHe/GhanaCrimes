// App.jsx
import { Route, Routes } from "react-router-dom";
import { useScrollToTop } from "../src/components/scrollToTop"; // Import the function
import HomePage from "./pages/homePage";
import NewsPage from "./pages/newsPage";
import AboutUs from "./pages/aboutUs";
import ContactUs from "./pages/contactUS";
import TopicsNewsList from "./pages/topicsNewsList";
import AdsRequest from "./pages/adsRequest";
import SearchResults from "./pages/results";
import MyAccount from "./pages/myAccount";
import SavedNews from "./pages/savedNews";

function PageWrapper({ children }) {
  // The PageWrapper component is no longer handling loading state
  return children;
}

function AppRoutes() {
  useScrollToTop(); // Call scroll-to-top function here

  return (
    <Routes>
      <Route index element={<PageWrapper><HomePage /></PageWrapper>} />
      <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
      <Route path="/news/:slug" element={<PageWrapper><NewsPage /></PageWrapper>} />
      <Route path="/about-us" element={<PageWrapper><AboutUs /></PageWrapper>} />
      <Route path="/contact-us" element={<PageWrapper><ContactUs /></PageWrapper>} />
      <Route path="/results" element={<PageWrapper><SearchResults/></PageWrapper>} />
      <Route path="/topics/:slug" element={<PageWrapper><TopicsNewsList /></PageWrapper>} />
      <Route path="/advertisement-request" element={<PageWrapper><AdsRequest /></PageWrapper>} />
      <Route path="/my-account" element={<PageWrapper><MyAccount/></PageWrapper>} />
      <Route path="/saved-news" element={<PageWrapper><SavedNews/></PageWrapper>} />
    </Routes>
  );
}

function App() {
  // Removed LoadingProvider since it’s no longer needed
  return (
    <AppRoutes />
  );
}

export default App;
