const TopicHeading = ({ topic }) => {
  return (
    <div>
      <p className="mt-2 font-EB font-bold text-xl text-[#393939]">
        {topic.toUpperCase()}
      </p>
      <p className="text-[#666666]">
        Latest <span>{topic}</span> news, information, and practical advice from
        accros Ghana.
      </p>
      <hr className="w-full mt-2" />
    </div>
  );
};

export default TopicHeading;
