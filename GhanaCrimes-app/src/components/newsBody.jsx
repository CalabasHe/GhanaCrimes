import { Link } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { fetchNewsArticle } from "../api/newsReadAPI";
import { AuthContext } from "../context/context";
import { sendComment } from "../api/commentAPI";

import axios from "axios";
import moment from "moment";
const NewsComponent = () => {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { slug } = useParams();
  const [articleid, setArticleId] = useState();
  const [formData, setFormData] = useState({
    message: "",
  });
  const [message, setMessage] = useState();
  const {
    isLoginOpen,
    setIsLoginOpen,
    isLoggedIn,
    setIsLoggedIn,
    handleComment,
  } = useContext(AuthContext);

  useEffect(() => {
    async function loadArticle() {
      try {
        setLoading(true);
        const data = await fetchNewsArticle(slug);
        console.log("Fetched data:", data);
        setArticle(data);
        setArticleId(data.id);

        setFormData((prev) => ({
          ...prev,
          news_id: data.id, // Assuming your article data has an id field
        }));
      } catch (err) {
        console.error("Error fetching article:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadArticle();
  }, [slug]);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!message.trim()) {
        alert("Please enter a message");
        return;
      }

      await handleComment(message, articleid);
      alert("Your message has been sent successfully!");

      setMessage("");

      window.location.reload();
    } catch (error) {
      if (error.message === "Please login to add a comment") {
        setIsLoginOpen(true);
      } else {
        console.error("Comment error:", error);
        alert("Error posting comment. Please try again.");
      }
    }
  };

  return (
    <main className="overflow-x-hidden relative px-[5%]">
      <div className=" grid grid-cols-1 lg:grid-cols-3 mt-8 gap-11">
        <div className="lg:col-span-2">
          <div>
            {/* Topic */}
            <p className="text-[#f06c00]">{article?.topic?.toUpperCase()}</p>
            {/* Main title */}
            <p className="font-EB font-bold text-[#212529] text-3xl md:text-5xl">
              {article?.main_title.toUpperCase()}
            </p>
          </div>
          {/* Published and Updated */}
          <div className="md:flex md:justify-between md:items-center mt-2 text-[#666666]">
            <div className="lg:flex lg:flex-1 gap-2 text-xs">
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
              <Link className="flex gap-2 items-center">
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
              <a href="#comments" className="flex items-center gap-2">
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
              </a>
            </div>
          </div>

          {/* Image and description */}
          <div>
            <img
              className=" w-full max-h-[300px] md:max-h-[550px] lg:max-h-[700px]  object-cover mt-8"
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
          <div id="comments" className="mt-8">
            <p className="font-EB font-bold text-lg">
              Comments <span>({article?.total_comments})</span>
            </p>
            <hr className=" mb-4" />
          </div>
          {!isLoggedIn ? (
            <p className="cursor-pointer" onClick={() => setIsLoginOpen(true)}>
              Log in to leave a comment
            </p>
          ) : (
            <></>
          )}

          <div className="space-y-4 mt-4">
            {Array.isArray(article?.comments) ? (
              article.comments.map((comment) => (
                <div
                  key={comment.id}
                  className="bg-[#f2f2f2] p-3 md:p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* User Info and Time */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div>
                        <p className="font-semibold text-xs text-[#666666]">
                          {comment?.full_name || "Anonymous".toUpperCase()}
                        </p>
                        <p className="text-sm font-semibold text-[#666666]">
                          {moment(comment.created_at).format(
                            "MMMM Do YYYY, h:mm A"
                          )}
                        </p>
                      </div>
                    </div>

                    {/* Optional: Menu or actions */}
                    <button className="text-gray-500 hover:text-gray-700">
                      •••
                    </button>
                  </div>

                  {/* Comment Message */}
                  <div className="space-y-2">
                    <p className="text-gray-800">{comment.message}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-[#f2f2f2] p-3 md:p-6">
                <p className="md:text-xs text-gray-600">No comments yet</p>
              </div>
            )}
          </div>
          {isLoggedIn ? (
            <>
              <p className="mt-4">Leave a comment down below</p>
              <div>
                {/* Comment input */}
                <div className="">
                  <textarea
                    name="message"
                    id=""
                    value={message}
                    className="border px-3 py-2 w-full outline-none h-52 mt-4"
                    required
                    onChange={handleChange}
                  />

                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="bg-[#f06c00] text-white  px-4 py-2 font-semibold text-sm cursor-pointer"
                  >
                    Comment
                  </button>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}

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
            {/* <Link>
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
            </Link> */}
          </div>
        </div>
        <div className="sticky top-0">
          <div className="bg-[#fafafa] h-[310px] lg:col-span-1 text-center">
            <p className="pt-4 text-[#D2D2D2] text-sm">ADVERTISEMENT</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NewsComponent;
