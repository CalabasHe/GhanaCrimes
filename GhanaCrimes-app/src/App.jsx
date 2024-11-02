// App.jsx
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import ScrollToTop from "./components/scrolltoTop";
import HomePage from "./pages/homePage";
import NewsPage from "./pages/newsPage";
import AboutUs from "./pages/aboutUs";
import ContactUs from "./pages/contactUS";
import TopicsNewsList from "./pages/topicsNewsList";
import AdsRequest from "./pages/adsRequest";
import { LoadingProvider, useLoading } from "./context/LoadingContext";
import LoadingScreen from "../src/components/loadingScreen";
import SearchResults from "./pages/results";
import MyAccount from "./pages/myAccount";
import SavedNews from "./pages/savedNews";

// Wrap each page component to handle loading state
const PageWrapper = ({ children }) => {
  const { setIsLoading } = useLoading();

  useEffect(() => {
    setIsLoading(true);
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
        <Route
          index
          element={
            <PageWrapper>
              <HomePage />
            </PageWrapper>
          }
        />
        <Route
          path="/"
          element={
            <PageWrapper>
              <HomePage />
            </PageWrapper>
          }
        />
        <Route
          path="/news/:slug"
          element={
            <PageWrapper>
              <NewsPage />
            </PageWrapper>
          }
        />
        <Route
          path="/about-us"
          element={
            <PageWrapper>
              <AboutUs />
            </PageWrapper>
          }
        />
        <Route
          path="/contact-us"
          element={
            <PageWrapper>
              <ContactUs />
            </PageWrapper>
          }
        />
        <Route
          path="/results"
          element={
            <PageWrapper>
              <SearchResults />
            </PageWrapper>
          }
        />
        <Route
          path="/topics/:slug"
          element={
            <PageWrapper>
              <TopicsNewsList />
            </PageWrapper>
          }
        />
        <Route
          path="/advertisement-request"
          element={
            <PageWrapper>
              <AdsRequest />
            </PageWrapper>
          }
        />
        <Route
          path="/my-account"
          element={
            <PageWrapper>
              <MyAccount />
            </PageWrapper>
          }
        />
        <Route
          path="/saved-news"
          element={
            <PageWrapper>
              <SavedNews />
            </PageWrapper>
          }
        />
      </Routes>
    </>
  );
}

function App() {
  return (
    <LoadingProvider>
      <ScrollToTop /> {/* Add ScrollToTop component here */}
      <AppRoutes />
    </LoadingProvider>
  );
}

export default App;
