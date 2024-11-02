import { useEffect, useState } from "react";
import { getSearch } from "../api/search";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ showing = false }) => {
  const go = useNavigate();

  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [spin, setSpin] = useState(false);

  useEffect(() => {
    if (!showing) {
      setQuery("");
      setError("");
    }
  }, [showing]);

  const searchForNews = async (query) => {
    setSpin(true);
    setError(""); // Reset error state before new search
    try {
      const news = await getSearch(query);
      if (Array.isArray(news.data?.results) && news.data.results.length > 0) {
        go("/results", { state: { message: news.data.results, query: query } });
      } else {
        setError(`No results found for "${query}"`);
      }
    } catch (err) {
      if (err.status === 404) {
        setError("No Results Found");
      } else {
        setError("An error occurred. Please try again.");
      }
      console.log(err);
    } finally {
      setSpin(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      searchForNews(query);
    }
  };

  return (
    <>
      <div
        className={`${
          !showing && "hidden"
        } flex h-3/4 items-center justify-center pt-20`}
      >
        <div className="flex items-center bg-white px-2 rounded-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 1024 1024"
            id="searchIcon"
            className="stroke-current text-gray-500"
          >
            <path
              fill="#666"
              d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1S492.1 112 412 112s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6M570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4"
            ></path>
          </svg>
          <input
            className="bg-white p-2 py-3 placeholder:text-base text-lg md:px-4 md:py-3 w-[280px] focus:outline-none md:w-[400px]"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search..."
          />
          <svg
            aria-hidden="true"
            className={`${
              !spin && "hidden"
            } size-5 text-gray-200 animate-spin fill-[#f06c00]`}
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
      </div>
      {error && (
        <div className="error-message mx-4 overflow-hidden text-center mt-10 text-xl font-medium shadow text-orange-400">
          <span className="block text-wrap">{error}</span>
        </div>
      )}
    </>
  );
};

export default SearchBar;
