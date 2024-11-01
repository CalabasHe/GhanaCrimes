import { useState } from "react";

const TopicList = ({ topicData }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleTopicClick = (slug) => {
    console.log(`Clicked topic: ${slug}`);
  };

  const displayedTopics = isExpanded ? topicData : topicData.slice(0, 5);
  const hasMoreTopics = topicData.length > 5;

  return (
    <div className="space-y-4">
      <div className="text-xl md:text-lg text-[#828282] items-start text-nowrap font-medium flex-col flex space-y-4">
        {displayedTopics.map((topic) => (
          <button
            key={topic.id}
            onClick={() => handleTopicClick(topic.slug)}
            className="hover:text-gray-600 transition-colors duration-200 text-left"
          >
            {topic.name}
          </button>
        ))}
      </div>

      {hasMoreTopics && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-xl flex items-center gap-1 text-[#f06c00] hover:text-[#cb7e3f] transition-colors duration-200"
        >
          <span>{isExpanded ? "See Less" : "See More"}</span>
          <span className="text-sm">{isExpanded ? "▲" : "▼"}</span>
        </button>
      )}
    </div>
  );
};

export default TopicList;
