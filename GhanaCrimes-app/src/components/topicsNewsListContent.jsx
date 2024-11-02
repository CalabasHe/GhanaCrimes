import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NewsCard from "./newsCard";
import TopicHeading from "./topicHeading";

const TopicsNewsListContent = () => {
  const [articles, setArticles] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    const getNewsData = async () => {
      try {
        // Fetch data from the API with the slug parameter
        const response = await fetch(
          `https://ghanacrimes-api.onrender.com/api/topics/${slug}/`
        );

        // Parse JSON response
        const data = await response.json();
        // Extract articles only if they have unique IDs
        const uniqueArticles = data.results.news_articles.filter(
          (article, index, self) =>
            index === self.findIndex((a) => a.id === article.id)
        );
        setArticles(uniqueArticles);
      } catch (err) {
        console.error("Error fetching news data:", err);
      }
    };
    getNewsData();
  }, [slug]);

  return (
    <main className="overflow-x-hidden px-3">
      {/* Topic Heading */}
      {articles.length > 0 && <TopicHeading topic={articles[0].topic} />}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 pt-6 gap-4">
        {articles.map((article, index) => (
          <div
            key={article.id}
            className={`
        col-span-1 
        ${index === 0 ? "lg:col-span-2" : ""} 
        ${index === 1 ? "lg:col-span-3" : ""} 
        ${index === 2 ? "lg:col-span-2" : ""}
      `}
          >
            <NewsCard articleData={article} />
          </div>
        ))}
      </div>

      {/* Advertisement Placeholder */}
      <div className="h-[310px] bg-[#fafafa] mt-8 flex items-center justify-center">
        <p className="text-[#666666]">ADVERTISEMENT</p>
      </div>
    </main>
  );
};

export default TopicsNewsListContent;
