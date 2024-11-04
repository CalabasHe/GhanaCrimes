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
        {displayedTopics.map(
          (topic) =>
            topic.news_count > 0 && (
              <Link
                key={topic.id}
                to={`/topics/${topic.slug}`}
                onClick={() => handleTopicClick(topic.slug)}
                className="hover:text-[#f06c00] transition-colors duration-200 text-left"
              >
                {topic.name}
              </Link>
            )
        )}
      </div>

      {hasMoreTopics && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-base md:text-lg font-medium flex items-center gap-1 text-[#f06c00] hover:text-[#cb7e3f] transition-colors duration-200"
        >
          <span>{isExpanded ? "See Less" : "See More"}</span>
          <span className="text-sm">
            {isExpanded ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="38"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#f06c00"
                  d="m12 11.828l-2.828 2.829l-1.415-1.414L12 9l4.243 4.243l-1.415 1.414z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="38"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#f06c00"
                  d="m12 15l-4.243-4.242l1.415-1.414L12 12.172l2.828-2.828l1.415 1.414z"
                />
              </svg>
            )}
          </span>
        </button>
      )}
    </div>
  );
};

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
