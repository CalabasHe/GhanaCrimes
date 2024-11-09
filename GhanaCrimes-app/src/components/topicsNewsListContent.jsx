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

  // Get the current page from URL params or default to 1
  const getCurrentPage = () => {
    const searchParams = new URLSearchParams(location.search);
    return parseInt(searchParams.get("page") || "1", 10);
  };

  const [pagination, setPagination] = useState(getCurrentPage());

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://ghanacrimes-api.onrender.com/api/topics/${slug}/?page=${pagination}`
        );
        const data = await response.json();

        // Set pagination flags based on API response
        setHasPreviousPage(!!data.previous);
        setHasNextPage(!!data.next);

        // Extract and filter unique articles
        if (
          Array.isArray(data.results.news_articles) &&
          data.results.news_articles.length > 0
        ) {
          const uniqueArticles = data.results.news_articles.filter(
            (article, index, self) =>
              index === self.findIndex((a) => a.id === article.id)
          );
          setArticles(uniqueArticles);
        } else {
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
    // Update URL with current page
    navigate(`?page=${pagination}`, { replace: true });
  }, [pagination, slug, navigate]);

  const handleNextPage = () => {
    if (hasNextPage) {
      setPagination((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (hasPreviousPage) {
      setPagination((prev) => prev - 1);
    }
  };

  // if (isLoading) {
  //   return (
  //     <div className="h-[50vh] w-full flex items-center justify-center">
  //       <h1 className="text-black text-2xl sm:text-4xl font-bold animate-bounce">
  //         Loading...
  //       </h1>
  //     </div>
  //   );
  // }

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
              ${index % 3 === 1 ? "lg:col-span-4" : ""} 
              ${index % 3 === 2 ? "lg:col-span-2" : ""}
            `}
          >
            <NewsCard articleData={article} />
          </div>
        ))}
      </div>

      {/* Advertisement Placeholder */}
      <div className="mt-8">
        <AdvertisementSection />
      </div>

      {/* Pagination Controls */}
      {articles.length > 0 && (
        <div className="flex mt-4 md:mt-8 mb-12">
          <button
            onClick={handlePreviousPage}
            className={`${
              hasPreviousPage ? "flex border-r" : "hidden"
            }bg-[#f06c00] text-white rounded-full px-4 py-2 font-semibold text-sm cursor-pointer`}
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            className={`${
              hasNextPage ? "flex" : "hidden"
            }bg-[#f06c00] text-white rounded-full px-4 py-2 font-semibold text-sm cursor-pointer`}
          >
            More articles &gt;&gt;
          </button>
        </div>
      )}
    </main>
  );
};

export default TopicsNewsListContent;
