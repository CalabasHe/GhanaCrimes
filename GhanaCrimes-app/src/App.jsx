// App.jsx
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import HomePage from "./pages/homePage";
import NewsPage from "./pages/newsPage";
import AboutUs from "./pages/aboutUs";
import ContactUs from "./pages/contactUS";
import TopicsNewsList from "./pages/topicsNewsList";
import AdsRequest from "./pages/adsRequest";
import { LoadingProvider, useLoading } from "./context/LoadingContext";
import LoadingScreen from "../src/components/loadingScreen";

// Wrap each page component to handle loading state
const PageWrapper = ({ children }) => {
  const { setIsLoading } = useLoading();

  useEffect(() => {
    // Show loading screen when component mounts
    setIsLoading(true);

    // Hide loading screen after content is presumably loaded
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6000); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, [setIsLoading]);

  return children;
};

function AppRoutes() {
  const { isLoading } = useLoading();

  return (
    <>
      {isLoading && <LoadingScreen />}
      <Routes>
        <Route index element={<PageWrapper><HomePage /></PageWrapper>} />
        <Route path="/home" element={<PageWrapper><HomePage /></PageWrapper>} />
        <Route path="/news/:slug" element={<PageWrapper><NewsPage /></PageWrapper>} />
        <Route path="/about-us" element={<PageWrapper><AboutUs /></PageWrapper>} />
        <Route path="/contact-us" element={<PageWrapper><ContactUs /></PageWrapper>} />
        <Route path="/topics/:slug" element={<PageWrapper><TopicsNewsList /></PageWrapper>} />
        <Route path="/advertisement-request" element={<PageWrapper><AdsRequest /></PageWrapper>} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <LoadingProvider>
      <AppRoutes />
    </LoadingProvider>
  );
}

export default App;