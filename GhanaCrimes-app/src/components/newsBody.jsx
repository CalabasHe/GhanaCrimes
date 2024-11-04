import { Link } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { fetchNewsArticle, fetchNewsTopicsCategory } from "../api/newsReadAPI";
import { AuthContext } from "../context/context";
import AdvertisementSection from "../components/adsComponents";
import moment from "moment";

const NewsComponent = () => {
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [loadingRelated, setLoadingRelated] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  const { slug } = useParams();
  const [articleId, setArticleId] = useState();

  const { isLoginOpen, setIsLoginOpen, isLoggedIn, handleComment } =
    useContext(AuthContext);

  useEffect(() => {
    async function loadArticle() {
      try {
        setLoading(true);
        setLoadingRelated(true);
        setError(null);

        const data = await fetchNewsArticle(slug);
        setArticle(data);
        setArticleId(data.id);

        if (data.topic) {
          try {
            const topicData = await fetchNewsTopicsCategory(data.topic);
            if (topicData && Array.isArray(topicData.results?.news_articles)) {
              const filtered = topicData.results.news_articles
                .filter((newsItem) => newsItem.id !== data.id)
                .slice(0, 4);
              setRelatedArticles(filtered);
            } else {
              console.warn("No related articles found");
              setRelatedArticles([]);
            }
          } catch (err) {
            console.error("Related articles error:", err);
            setRelatedArticles([]);
          }
        } else {
          console.log("No topic found for article");
          setRelatedArticles([]);
        }
      } catch (err) {
        console.error("Main article error:", err);
        setError(
          err.message || "Failed to load article. Please try again later."
        );
        setArticle(null);
      } finally {
        setLoading(false);
        setLoadingRelated(false);
      }
    }

    if (slug) {
      loadArticle();
    }
  }, [slug]);
  const renderRelatedArticles = () => {
    if (loadingRelated) {
      return (
        <div className="col-span-full text-center py-8">
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      );
    }

    if (relatedArticles.length === 0) {
      return (
        <div className="col-span-full bg-[#f2f2f2] p-6 text-center">
          <p className="text-gray-600">
            No other articles available in this topic at the moment.
          </p>
        </div>
      );
    }

    return relatedArticles.map((relatedArticle) => (
      <Link
        key={relatedArticle.id}
        to={`/news/${relatedArticle.slug}`}
        className="group"
      >
        <div
          className="h-40 object-cover bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
          style={{
            backgroundImage: `url(${relatedArticle.image?.image || ""})`,
            backgroundColor: "#f2f2f2",
          }}
        />
        <p className="text-sm text-[#f06c00] mt-2">
          {relatedArticle.topic?.toUpperCase()}
        </p>
        <p className="text-[#393939] text-xl lg:text-2xl leading-tight group-hover:text-[#f06c00] font-EB font-semibold transition-colors duration-300">
          {relatedArticle.main_title}
        </p>
      </Link>
    ));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!message.trim()) {
        alert("Please enter a message");
        return;
      }

      await handleComment(message, articleId);
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

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#f06c00]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <p className="text-red-600 text-xl">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 bg-[#f06c00] text-white px-4 py-2 rounded hover:bg-[#d65c00]"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // if (!article) {
  //   return (
  //     <div className="flex justify-center items-center min-h-screen">
  //       <p className="text-xl">Article not found</p>
  //     </div>
  //   );
  // }

  function capitalizeWords(str) {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  return (
    <main className="relative px-3 md:px-[9%]">
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-11 gap-11">
        <div className="lg:col-span-2">
          <div>
            <p className="text-[#f06c00]">
              {" "}
              {article?.topic ? capitalizeWords(article.topic) : ""}
            </p>
            <p className="font-EB font-bold text-[#393939] text-2xl md:text-5xl">
              {article?.main_title}
            </p>
          </div>

          <div className="md:flex md:justify-between md:items-center md:self-center mt-2 text-[#666666]">
            <div className="lg:flex lg:flex-1 gap-2 font-medium text-xs">
              <p>
                Published:{" "}
                {article?.created_at
                  ? moment(article.created_at)
                      .utcOffset(0)
                      .format("D MMM, YYYY [GMT]")
                  : "N/A"}
              </p>
              <p>
                Updated:{" "}
                {article?.updated_at
                  ? moment(article.updated_at)
                      .utcOffset(0)
                      .format("ddd D MMM YYYY HH:mm [GMT]")
                  : "N/A"}
              </p>
            </div>

            <div className="flex pt-2 md:pt-0 gap-3 md:text-xs">
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
                  />
                </svg>
                <p>Save</p>
              </Link>
              <a
                href="#comments"
                className="flex items-center self-center gap-2 text-[#666666] hover:text-[#f06c00] transition-colors duration-300"
              >
                <div className="w-6 h-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full fill-current"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 1C3.6 1 0 3.5 0 6.5c0 2 2 3.8 4 4.8c0 2.1-2 2.8-2 2.8c2.8 0 4.4-1.3 5.1-2.1H8c4.4 0 8-2.5 8-5.5S12.4 1 8 1" />
                  </svg>
                </div>

                <p>
                  Comments{" "}
                  <span className="font-medium">
                    ({article?.total_comments})
                  </span>
                </p>
              </a>
            </div>
          </div>

          <div>
            <img
              className="w-full max-h-[300px] md:max-h-[550px] object-cover mt-8"
              src={article?.image?.image}
              alt={article?.main_title}
            />
            <p className="text-[#afafaf] 829 mt-2">
              {article?.image?.image_description}
            </p>
          </div>

          <p className="font-EB text-[#393939] font-bold lg:text-2xl mt-5">
            {article?.sub_title}
          </p>

          <div
            className="mt-5 text-[#393939] font-EB lg:text-2xl leading-loose"
            dangerouslySetInnerHTML={{ __html: article?.description }}
          />

          <div id="comments" className="mt-8">
            <p className="font-EB font-bold text-lg">
              Comments <span>({article?.total_comments})</span>
            </p>
            <hr className="mb-4 border-b border-[#AEAEAE] border-dotted" />
          </div>

          {!isLoggedIn ? (
            <p>
              Log in{" "}
              <span
                className="cursor-pointer text-[#f06c00]"
                onClick={() => setIsLoginOpen(true)}
              >
                here
              </span>{" "}
              to leave a comment
            </p>
          ) : (
            <div className="mt-4">
              <p>Leave a comment down below</p>
              <div>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="border px-3 py-2 w-full outline-none h-52 mt-4"
                  required
                  placeholder="Write your comment here..."
                />
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="bg-[#f06c00] text-white px-4 py-2 font-semibold text-sm cursor-pointer hover:bg-[#d65c00]"
                >
                  Comment
                </button>
              </div>
            </div>
          )}

          <div className="space-y-4 mt-4">
            {Array.isArray(article?.comments) && article.comments.length > 0 ? (
              article.comments.map((comment) => (
                <div
                  key={comment.id}
                  className="bg-[#f2f2f2] p-3 md:p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div>
                        <p className="font-semibold text-xs text-[#666666]">
                          {comment?.full_name || "Anonymous"}
                        </p>
                        <p className="text-sm font-semibold text-[#666666]">
                          {moment(comment.created_at).format(
                            "MMMM Do YYYY, h:mm A"
                          )}
                        </p>
                      </div>
                    </div>
                    <button className="text-gray-500 hover:text-gray-700">
                      •••
                    </button>
                  </div>
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
          {/* See also / suggested articles */}
          <div>
            <div className="mt-8">
              <p className="font-EB font-bold text-lg">See also</p>
              <hr className="mb-4 border-b border-[#AEAEAE] border-dotted" />
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-3 mt-11">
              {renderRelatedArticles()}
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="sticky top-[30%]">
            <div className="h-[410px]">
              <AdvertisementSection />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NewsComponent;
