import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchNewsArticle } from "../api/newsReadAPI";
import moment from"moment";
const NewsComponent = () => {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    async function loadArticle() {
      try {
        setLoading(true);
        const data = await fetchNewsArticle(slug);
        console.log("Fetched data:", data); // Log the fetched data for debugging
        setArticle(data);
      } catch (err) {
        console.error("Error fetching article:", err); // Log the error for debugging
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadArticle();
  }, [slug]);

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;
  // if (!article) return <div>No article found</div>;

  return (
    <main className="overflow-x-hidden px-[5%]">
      <div className="grid lg:col-span-2">
        <div className="mt-8">
          <div>
            {/* Topic */}
            <p className="text-[#f06c00]">{article?.topic.toUpperCase()}</p>
            {/* Main title */}
            <p className="font-EB font-bold text-2xl lg:text-5xl">
            {article?.main_title.toUpperCase()}
            </p>
          </div>
          {/* Published and Updated */}
          <div className="flex gap-3">
          <p>
              Published on:{" "}
              {article?.image?.created_at
                ? moment(article.image.created_at).format("MMMM Do YYYY, h:mm:ss a")
                : "N/A"}
            </p>
            <p>
              Updated on:{" "}
              {article?.image?.updated_at
                ? moment(article.image.updated_at).format("MMMM Do YYYY, h:mm:ss a")
                : "N/A"}
            </p>
          </div>
          <div className=" flex gap-3 mt-3">
            {/* Save BTN */}
            <Link className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path
                  fill="black"
                  d="M17 5v12.554l-5-2.857l-5 2.857V5zm0-2H7a2 2 0 0 0-2 2v16l7-4l7 4V5a2 2 0 0 0-2-2"
                ></path>
              </svg>
              <p>Save</p>
            </Link>
            {/* Comment BTN */}
            <Link className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 48 48"
              >
                <defs>
                  <mask id="ipTComment0">
                    <g
                      fill="none"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={4}
                    >
                      <path fill="#555" d="M44 6H4v30h9v5l10-5h21z"></path>
                      <path d="M14 19.5v3m10-3v3m10-3v3"></path>
                    </g>
                  </mask>
                </defs>
                <path
                  fill="black"
                  d="M0 0h48v48H0z"
                  mask="url(#ipTComment0)"
                ></path>
              </svg>
              <p>
                Comments <span className="text-[#393939]">{article?.total_comments}</span>
              </p>
            </Link>
          </div>
          {/* Image and description */}
          <div>
            <img className="bg-slate-500 h-[351px] object-cover mt-8" src={article?.image.image} alt="" />
            
            <p className="text-[#afafaf] mt-2">
             {article?.image.image_description}
            </p>
          </div>
          {/* Sub title */}
          <p className="font-EB font-bold lg:text-2xl mt-5">
          {article?.sub_title}
          </p>
          {/* Main Description */}
          <p className="mt-5 font-EB lg:text-2xl">
            {article?.description}
          </p>
          {/* Comments Section */}
          <div className="mt-8">
            <p className="font-EB font-bold text-lg">Comments</p>
            <hr className=" mb-4" />
          </div>
          <p>Please log in here to leave a comment.</p>
          {/* See also section */}
          <div className="mt-8">
            <p className="font-EB font-bold text-lg">See also</p>
            <hr className=" mb-4" />
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-3 mt-11">
            <Link>
              <div className="bg-slate-500  h-40 object-cover" />
              <p className="text-sm text-[#f06c00]">Business</p>
              <p className="text-[#393939] text-xl lg:text-2xl leading-tight hover:text-[#f06c00] font-EB font-semibold">
                Michelin pauses some French tyre factories as demand falls
              </p>
            </Link>
            <Link>
              <div className="bg-slate-500  h-40 object-cover" />
              <p className="text-sm text-[#f06c00]">Business</p>
              <p className="text-[#393939] text-xl lg:text-2xl leading-tight  hover:text-[#f06c00] font-EB font-semibold">
                Michelin pauses some French tyre factories as demand falls
              </p>
            </Link>
            <Link>
              <div className="bg-slate-500  h-40 object-cover" />
              <p className="text-sm text-[#f06c00]">Business</p>
              <p className="text-[#393939] text-xl lg:text-2xl leading-tight hover:text-[#f06c00] font-EB font-semibold">
                Michelin pauses some French tyre factories as demand falls
              </p>
            </Link>
            <Link>
              <div className="bg-slate-500  h-40 object-cover" />
              <p className="text-sm text-[#f06c00]">Business</p>
              <p className="text-[#393939] text-xl lg:text-2xl leading-tight hover:text-[#f06c00] font-EB font-semibold">
                Michelin pauses some French tyre factories as demand falls
              </p>
            </Link>
          </div>
        </div>
        <div>
          <div className="bg-slate-400 h-10 "></div>
        </div>
      </div>
    </main>
  );
};

export default NewsComponent;
