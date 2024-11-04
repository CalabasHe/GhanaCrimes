import { Link } from "react-router-dom";

const NewsCard = ({ articleData, className }) => {
  if (!articleData) return null;

  return (
    <Link to={`/news/${articleData.slug}`}>
      <div className="h-[230px] md:h-[190px] border mt-4 shadow-md ">
        <img
          src={articleData.image?.image}
          alt={articleData.main_title}
          className="w-full h-[230px] md:h-[190px]  object-cover"
        />
      </div>
      <div className={className}>
        <div className="flex text-[0.65rem] items-center mt-2 justify-between">
          <p className="text-xs font-medium text-[#f06c00] transition-colors duration-300 ease-in-out hover:text-[#666666]">
            {articleData.topic
              ? articleData.topic?.toUpperCase()
              : "General News".toUpperCase()}
          </p>
          {articleData.total_comments ? (
            <div className="flex items-center gap-x-2 text-[#f06c00]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                viewBox="0 0 16 16"
              >
                <path
                  fill="#f06c00"
                  d="M8 1C3.6 1 0 3.5 0 6.5c0 2 2 3.8 4 4.8c0 2.1-2 2.8-2 2.8c2.8 0 4.4-1.3 5.1-2.1H8c4.4 0 8-2.5 8-5.5S12.4 1 8 1"
                ></path>
              </svg>
              <p>{articleData?.total_comments}</p>
            </div>
          ) : (
            <></>
          )}
        </div>
        <p className="text-[#393939] text-xl lg:text-2xl leading-tight transition-colors duration-700 ease-in-out hover:text-[#f06c00] font-EB font-semibold">
          {articleData.main_title.charAt(0).toUpperCase() +
            articleData.main_title.slice(1)}
        </p>
      </div>
    </Link>
  );
};

export default NewsCard;
