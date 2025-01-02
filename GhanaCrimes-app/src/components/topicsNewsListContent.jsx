import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import NewsCard from "./newsCard";
import TopicHeading from "./topicHeading";
import AdvertisementSection from "./adsComponents";

const TopicsNewsListContent = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasPreviousPage, setHasPreviousPage] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(false);

  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const getCurrentPage = () => {
    const searchParams = new URLSearchParams(location.search);
    return parseInt(searchParams.get("page") || "1", 10);
  };

  const [pagination, setPagination] = useState(getCurrentPage());

  useEffect(() => {
    setPagination(1);
    navigate(`?page=1`, { replace: true });
  }, [slug, navigate]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://api.ghanacrimes.com/api/topics/${slug}/?page=${pagination}`
        );
        const data = await response.json();

        // console.log("API Response:", data);

        setHasPreviousPage(Boolean(data.previous));
        setHasNextPage(Boolean(data.next));

        if (data.results && Array.isArray(data.results.news_articles)) {
          const uniqueArticles = data.results.news_articles.filter(
            (article, index, self) =>
              index === self.findIndex((a) => a.id === article.id)
          );
          setArticles(uniqueArticles);
        } else {
          setArticles([]);
          console.log("No results found");
        }
      } catch (err) {
        console.error("Error fetching news data:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();

    if (pagination !== 1) {
      navigate(`?page=${pagination}`, { replace: true });
    }
  }, [pagination, slug, navigate]);

  const handleNextPage = () => {
    if (hasNextPage) {
      setPagination((prev) => prev + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePreviousPage = () => {
    if (hasPreviousPage) {
      setPagination((prev) => prev - 1);
      window.scrollTo(0, 0);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#f06c00]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-[50vh] md:h-[40vh] w-full flex items-center justify-center">
        {error.split(":")[0]}
      </div>
    );
  }

  return (
    <main className="overflow-x-hidden px-3 md:px-[9%]">
      {/* Topic Heading */}
      {articles.length > 0 && <TopicHeading topic={articles[0].topic} />}

      {/* News Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 pt-6 gap-4">
        {articles.map((article, index) => (
          <div
            key={article.id}
            className={`
              col-span-1 
              ${index % 3 === 0 ? "lg:col-span-2" : ""} 
              ${index % 3 === 1 ? "lg:col-span-2" : ""} 
              ${index % 3 === 2 ? "lg:col-span-2" : ""}
               ${index % 3 === 3 ? "lg:col-span-2" : ""}
            `}
          >
            <NewsCard articleData={article} />
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between mt-8 md:mt-8 mb-12">
        <button
          onClick={handlePreviousPage}
          disabled={!hasPreviousPage}
          className={`${
            hasPreviousPage ? "flex" : "hidden"
          } bg-[#f06c00] text-white rounded-full px-4 py-2 font-semibold text-sm cursor-pointer`}
        >
          &lt;&lt; Previous
        </button>
        <span className="text-lg font-EB font-medium">Page {pagination}</span>
        <button
          onClick={handleNextPage}
          disabled={!hasNextPage}
          className={`${
            hasNextPage ? "flex" : "hidden"
          } bg-[#f06c00] text-white rounded-full px-4 py-2 font-semibold text-sm cursor-pointer`}
        >
          More articles &gt;&gt;
        </button>
      </div>

      {/* Advertisement Placeholder */}
      <div className="mt-8">
        <AdvertisementSection />
      </div>
    </main>
  );
};

export default TopicsNewsListContent;
