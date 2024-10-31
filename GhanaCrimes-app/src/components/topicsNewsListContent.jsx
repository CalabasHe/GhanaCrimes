import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

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
      {topics &&
        topics.map((topics, index) => (
          <div key={topics.id || index}>
            <p className="mt-2 font-EB font-bold text-xl text-[#393939]">
              {topics.topic.toUpperCase()}
            </p>
            <p className="text-[#666666]">
              Latest <span>{topics.topic}</span> news, information, and
              practical advice from accros Ghana.
            </p>
            <hr className="w-full mt-2" />
          </div>
        ))}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 pt-6 gap-4">
          {topics && topics.length > 0 ? (
            topics.map((topic, index) => (
              <Link
              to={`/news/${topic.slug}`}
                key={topic.id || index}
                className={`col-span-1 ${
                  index === 0 ? "lg:col-span-2" : "lg:col-span-1"
                }`}
              >
                {/* Image Placeholder */}
                <div className="">
                  <img
                    className="h-40 object-contain"
                    src={topic.image.image}
                    alt=""
                  />
                </div>

                {/* Topic */}
                <p className="text-sm text-[#f06c00]">
                  {topic.topic?.toUpperCase()}
                </p>

                {/* Main Title */}
                <p className="text-[#393939] text-xl lg:text-2xl leading-tight hover:text-[#f06c00] font-EB font-semibold">
                  {topic.main_title}
                </p>

                {/* Optional Subtitle */}

                <p className="text-[#666666] mt-1">{topic.sub_title}</p>
              </Link>
            ))
          ) : (
            <p>No news available for this topic.</p>
          )}
        </div>

        {/* Advertisement Placeholder */}
        <div className="h-[310px] bg-[#fafafa] mt-8 flex items-center justify-center">
          <p className="text-[#666666]">ADVERTISEMENT</p>
        </div>
      </div>
    </main>
  );
};

export default TopicsNewsListContent;
