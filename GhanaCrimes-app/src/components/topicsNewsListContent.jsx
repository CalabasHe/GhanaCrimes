import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import NewsCard from "./newsCard";
import TopicHeading from "./topicHeading";

const TopicsNewsListContent = () => {
  const [topics, setTopics] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    const getNewsData = async () => {
      try {
        // Use the direct API URL with the slug
        const response = await fetch(
          `https://ghanacrimes-api.onrender.com/api/topics/${slug}/`
        );

        // Parse JSON response
        const data = await response.json();
        setTopics(data.results.news_articles);
        console.log("Fetched news data:", data);
      } catch (err) {
        console.error("Error fetching news data:", err);
      }
    };
    getNewsData();
  }, [slug]);

  return (
    <main className="overflow-x-hidden px-3">
     {/* Topic Heading */}
     {topics.map((topic, index) => (
        <div key={topic.id || index}>
          <TopicHeading topic={topic.topic} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 pt-6 gap-4">
            {/* News Cards */}
            {topics.map((article, index) => (
              <div
                key={article.id || index}
                className={`col-span-1 ${index === 0 ? "lg:col-span-2" : "lg:col-span-1"}`}
              >
                <NewsCard articleData={article} />
              </div>
            ))}
          </div>
          {/* Advertisement Placeholder */}
          <div className="h-[310px] bg-[#fafafa] mt-8 flex items-center justify-center">
            <p className="text-[#666666]">ADVERTISEMENT</p>
          </div>
        </div>
      ))}
    </main>
  );
};

export default TopicsNewsListContent;