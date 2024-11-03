import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { AuthContext } from "../context/context";
import { useContext } from "react";

const TopicList = ({ topicData = [] }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const { isOpen, setIsOpen } = useContext(AuthContext);

  // Early return if topicData is not an array or is empty
  if (!Array.isArray(topicData) || topicData.length === 0) {
    return <div className="text-gray-500">No topics available</div>;
  }

  const handleTopicClick = (slug) => {
    // console.log(`Clicked topic: ${slug}`);
    setIsOpen(false);
    // You can add additional navigation or state management logic here
  };

  const displayedTopics = isExpanded ? topicData : topicData.slice(0, 5);
  const hasMoreTopics = topicData.length > 5;

  return (
    <div className="space-y-4">
      <div className="text-base md:text-lg text-[#828282] items-start text-nowrap font-medium flex-col flex space-y-4">
        {displayedTopics.map((topic) => (
          topic.news_count > 0 &&
          <Link
            key={topic.id}
            to={`/topics/${topic.slug}`}
            onClick={() => handleTopicClick(topic.slug)}
            className="hover:text-gray-600 transition-colors duration-200 text-left"
          >
            {topic.name}
          </Link>
        ))}
      </div>

      {hasMoreTopics && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-base flex items-center gap-1 text-[#f06c00] hover:text-[#cb7e3f] transition-colors duration-200"
        >
          <span>{isExpanded ? "See Less" : "See More"}</span>
          <span className="text-sm">{isExpanded ? "▲" : "▼"}</span>
        </button>
      )}
    </div>
  );
};

// Add prop type validation
TopicList.propTypes = {
  topicData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    })
  ),
};

export default TopicList;
