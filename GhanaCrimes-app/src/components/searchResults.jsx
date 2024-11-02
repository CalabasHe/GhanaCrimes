import { Link, useLocation } from "react-router-dom";
import NewsCard from "./newsCard";
import { useEffect, useState } from "react";

const SearchResultsList = () => {
  const location = useLocation();
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState([]);

  useEffect(() => {
    console.log(location.state?.message);
    setResults(location.state?.message);
    setQuery(location.state?.query?.toUpperCase());
  }, [location]);

  return (
    <>
      <main className="overflow-x-hidden pt-3 px-3">
        {/* Topic Heading */}
        <p className="text-xl font-bold font-EB pb-2 border-b border-black border-dotted ">
          {" "}
          SEARCH: {query}
        </p>
        <div className="w-full grid grid-cols-1 lg:px-[25%]  items-center pt-6 gap-y-8 gap-4">
          {/* News Cards */}
          {results.map((result) => (
            <div key={result.id}>
              <Link className="w-full flex gap-2 " to={`/news/${result.slug}`}>
                <div className="h-[220px] w-48 lg:w-56 lg:h-48 border shadow-md">
                  <img
                    src={result.image?.image}
                    alt={result.main_title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="pt-6">
                  <p className="text-[0.65rem] font-medium text-[#f06c00] mt-2">
                    {result.topic ? result.topic?.toUpperCase() : "GENERAL NEWS"}
                  </p>
                  <p className="text-[#393939] text-xl lg:text-2xl leading-tight hover:text-[#f06c00] font-EB font-semibold">
                    {result.main_title.charAt(0).toUpperCase() +
                      result.main_title.slice(1)}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        {/* Advertisement Placeholder */}
        <div className="h-[310px] bg-[#fafafa] mt-8 flex items-center justify-center">
          <p className="text-[#666666]">ADVERTISEMENT</p>
        </div>
      </main>
    </>
  );
};

export default SearchResultsList;
