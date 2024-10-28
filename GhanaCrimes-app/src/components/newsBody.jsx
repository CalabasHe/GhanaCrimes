import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchNewsArticle } from "../api/newsReadAPI";
import moment from "moment";
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

  return (
    <main className="overflow-x-hidden px-[5%]">
      <div className="grid grid-cols-1 md:grid-cols-3 mt-8 gap-11">
        <div className="md:col-span-2">
          <div>
            {/* Topic */}
            <p className="text-[#f06c00]">{article?.topic.toUpperCase()}</p>
            {/* Main title */}
            <p className="font-EB font-bold text-[#212529] text-2xl lg:text-5xl">
              {article?.main_title.toUpperCase()}
            </p>
          </div>
          {/* Published and Updated */}
          <div className="md:flex md:justify-between md:items-center text-[#666666]">
            <div className="flex md:flex-1 gap-2 md:text-xs">
              <p>
                Published on:{" "}
                {article?.image?.created_at
                  ? moment(article.image.created_at).format(
                      "MMMM Do YYYY, h:mm:ss a"
                    )
                  : "N/A"}
              </p>
              <p>
                Updated on:{" "}
                {article?.image?.updated_at
                  ? moment(article.image.updated_at).format(
                      "MMMM Do YYYY, h:mm:ss a"
                    )
                  : "N/A"}
              </p>
            </div>
            <div className=" flex gap-3 mt-3 md:text-xs">
              {/* Save BTN */}
              <Link className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#666666"
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
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="#666666"
                    d="M8 1C3.6 1 0 3.5 0 6.5c0 2 2 3.8 4 4.8c0 2.1-2 2.8-2 2.8c2.8 0 4.4-1.3 5.1-2.1H8c4.4 0 8-2.5 8-5.5S12.4 1 8 1"
                  ></path>
                </svg>
                <p>
                  Comments{" "}
                  <span className="text-[#393939]">
                    {article?.total_comments}
                  </span>
                </p>
              </Link>
            </div>
          </div>

          {/* Image and description */}
          <div>
            <img
              className=" w-full max-h-[801px] object-cover mt-8"
              src={article?.image.image}
              alt=""
            />

            <p className="text-[#afafaf] mt-2">
              {article?.image.image_description}
            </p>
          </div>
          {/* Sub title */}
          <p className="font-EB font-bold lg:text-2xl mt-5">
            {article?.sub_title}
          </p>
          {/* Main Description */}
          <p className="mt-5 font-EB lg:text-2xl">{article?.description}</p>
          {/* Comments Section */}
          <div className="mt-8">
            <p className="font-EB font-bold text-lg">Comments</p>
            <hr className=" mb-4" />
          </div>
          <p>
            Please log in{" "}
            <span className="text-[#f06c00] cursor-pointer">here</span> to leave
            a comment.
          </p>
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
          <div className="bg-[#fafafa] h-[310px] md:col-span-1 sticky text-center">
            <p className="pt-4 text-[#D2D2D2] text-sm">ADVERTISEMENT</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NewsComponent;
