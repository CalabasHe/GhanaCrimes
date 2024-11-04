import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NewsCard from "./newsCard";
import TopicHeading from "./topicHeading";
import AdvertisementSection from "./adsComponents";

const TopicsNewsListContent = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const { slug } = useParams();
  const articlesPerPage = 12;

  useEffect(() => {
    // Reset pagination when topic changes
    setCurrentPage(1);
    setArticles([]);
    setHasMore(true);
    fetchArticles(1);
  }, [slug]);

  const fetchArticles = async (page) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://ghanacrimes-api.onrender.com/api/topics/${slug}/?page=${page}&per_page=${articlesPerPage}`
      );
      const data = await response.json();

      const uniqueArticles = data.results.news_articles.filter(
        (article, index, self) =>
          index === self.findIndex((a) => a.id === article.id)
      );

      if (page === 1) {
        setArticles(uniqueArticles);
      } else {
        setArticles((prev) => [...prev, ...uniqueArticles]);
      }

      // Check if there are more articles to load
      setHasMore(uniqueArticles.length === articlesPerPage);
    } catch (err) {
      console.error("Error fetching news data:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoadMore = () => {
    if (!isLoading && hasMore) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      fetchArticles(nextPage);
    }
  };

  return (
    <main className="overflow-x-hidden px-3 md:px-[9%]">
      {/* Topic Heading */}
      {articles.length > 0 && <TopicHeading topic={articles[0].topic} />}

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

      {/* Pagination */}
      {articles.length > 0 && (
        <div className="mt-8 mb-12">
          {isLoading ? (
            <button
              disabled
              className="w-full text-center text-sm font-medium text-gray-400 bg-gray-200 py-2"
            >
              Loading...
            </button>
          ) : hasMore ? (
            <button
              onClick={handleLoadMore}
              className="w-full text-center text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 py-2 transition duration-200"
            >
              Load More Articles
            </button>
          ) : (
            <p className="text-center text-sm text-gray-500">
              No more articles to load
            </p>
          )}
        </div>
      )}
    </main>
  );
};

export default TopicsNewsListContent;
