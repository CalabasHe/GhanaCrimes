import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";

import { getCrimes } from "../api/authAPI";
import NewsCard from "./newsCard";
import AdvertisementSection from "./adsComponents";

const BodyGridLG = () => {
  const [articles, setArticles] = useState([]);
  const CACHE_DURATION = 300000

  useEffect(() => {
    const getCrimeData = async () => {
      try {

        const cachedData = localStorage.getItem('crimeArticles');
        const cacheTime = localStorage.getItem('crimeArticlesTimestamp');

        if (cachedData && cacheTime) {
          const now = new Date().getTime();

          if (now - parseInt(cacheTime) < CACHE_DURATION) {
            setArticles(JSON.parse(cachedData));
            return;
          }
        }

        const data = await getCrimes();
        setArticles(data.results);


        localStorage.setItem('crimeArticles', JSON.stringify(data.results));
        localStorage.setItem('crimeArticlesTimestamp', new Date().getTime().toString());
      } catch (err) {
        console.log(err);
        const cachedData = localStorage.getItem('crimeArticles');
        if (cachedData) {
          setArticles(JSON.parse(cachedData));
        }
      }
    };

    getCrimeData();

    const interval = setInterval(checkForUpdates, 60000);
    return () => clearInterval(interval);
  }, []);

  const checkForUpdates = async () => {
    try {
      const data = await getCrimes();
      const newArticles = data.results;
      const cachedArticles = JSON.parse(localStorage.getItem('crimeArticles')) || [];

      if (newArticles.length > cachedArticles.length) {
        setArticles(newArticles);
        localStorage.setItem('crimeArticles', JSON.stringify(newArticles));
        localStorage.setItem('crimeArticlesTimestamp', new Date().getTime().toString());
      }
    } catch (err) {
      console.log(err);
    }
  };

  const capitalizeCharOne = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <main className="overflow-x-hidden px-3 lg:px-[9%]">
      <div className="mt-9">
        <div className="grid leading-6 mt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6">
          {articles.length > 0 && (
            <>
              {/*First Column*/}
              <div className="lg:col-span-2 md:col-span-1 ">
                {articles[2] && (
                  <Link to={`/news/${articles[2].slug}`}>
                    <div className="h-[230px] md:h-[190px] border ">
                      <img
                        src={articles[2].image?.image}
                        alt={articles[2].main_title}
                        className="w-full h-[230px] md:h-[190px]  object-cover"
                      />
                    </div>
                    <div className="flex items-center text-[0.65rem] mt-2 justify-between">
                      <p className="text-xs font-medium text-[#f06c00] transition-colors duration-300 ease-in-out hover:text-[#666666]">
                        {articles[2].topic
                          ? articles[2].topic?.toUpperCase()
                          : "General News".toUpperCase()}
                      </p>
                      {articles[2].total_comments ? (
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
                          <p>{articles[2]?.total_comments}</p>
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                    <p className="text-[#393939] text-xl lg:text-2xl leading-tight mt-2 transition-colors duration-700 ease-in-out hover:text-[#f06c00] font-EB font-semibold">
                      {capitalizeCharOne(articles[2].main_title)}
                    </p>
                  </Link>
                )}
                {articles[3] && (
                  <div className="mt-11">
                    <Link to={`/news/${articles[3].slug}`}>
                      <div className="h-[230px] md:h-[190px] border ">
                        <img
                          src={articles[3].image?.image}
                          alt={articles[3].main_title}
                          className="w-full h-[230px] md:h-[190px]  object-cover"
                        />
                      </div>
                      <div className="flex items-center text-[0.65rem] mt-2 justify-between">
                        <p className="text-xs font-medium text-[#f06c00] transition-colors duration-300 ease-in-out hover:text-[#666666]">
                          {articles[3].topic
                            ? articles[3].topic?.toUpperCase()
                            : "General News".toUpperCase()}
                        </p>
                        {articles[2].total_comments ? (
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
                            <p>{articles[3]?.total_comments}</p>
                          </div>
                        ) : (
                          <></>
                        )}
                      </div>
                      <p className="text-[#393939] text-xl lg:text-2xl leading-tight mt-2transition-colors duration-700 ease-in-out hover:text-[#f06c00] font-EB font-semibold">
                        {capitalizeCharOne(articles[3].main_title)}
                      </p>
                    </Link>
                  </div>
                )}
              </div>

              {/* Second Column */}
              <div className="lg:col-span-3 md:col-span-1 order-first lg:order-none">
                <div className="h-full flex flex-col space-y-2">
                  {/* First Section */}
                  {articles[0] && (
                    <Link to={`/news/${articles[0].slug}`}>
                      <div className="h-[240px] md:h-[418px]">
                        <img
                          src={articles[0].image?.image}
                          alt={articles[0].main_title}
                          className="w-full h-[240px] md:h-[418px] object-cover"
                        />
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <p className="text-xs font-medium text-[#f06c00] transition-colors duration-300 ease-in-out hover:text-[#666666]">
                          {articles[0].topic
                            ? articles[0].topic?.toUpperCase()
                            : "General News".toUpperCase()}
                        </p>
                        {articles[0].total_comments ? (
                          <div className="flex items-center text-[0.65rem] gap-x-2 text-[#f06c00]">
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
                            <p>{articles[0]?.total_comments}</p>
                          </div>
                        ) : (
                          <></>
                        )}
                      </div>
                      <p className="text-[#393939] text-xl lg:text-3xl leading-tight mt-2 transition-colors duration-700 ease-in-out hover:text-[#f06c00] font-EB font-semibold">
                        {capitalizeCharOne(articles[0].main_title)}
                      </p>
                      <p className="text-sm pt-2 font-normal text-slate-600 border-b border-[#AEAEAE] border-dotted pb-4">
                        {capitalizeCharOne(articles[0].sub_title)}
                      </p>
                    </Link>
                  )}

                  {/* Second Section */}
                  {articles[1] && (
                    <Link
                      to={`/news/${articles[1].slug}`}
                      className="flex  gap-3"
                    >
                      <div className=" w-[125px] h-[125px] lg:justify-end flex-shrink-0">
                        <img
                          src={articles[1].image?.image}
                          alt={articles[1].main_title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="">
                        <div className="flex items-center text-[0.65rem] mt-2 justify-between">
                          <p className="text-xs font-medium text-[#f06c00] transition-colors duration-300 ease-in-out hover:text-[#666666]">
                            {articles[1].topic
                              ? articles[1].topic?.toUpperCase()
                              : "General News".toUpperCase()}
                          </p>
                          {articles[2].total_comments ? (
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
                              <p>{articles[1]?.total_comments}</p>
                            </div>
                          ) : (
                            <></>
                          )}
                        </div>
                        <p className="text-[#393939] text-xl lg:text-2xl leading-tight mt-2 transition-colors duration-700 ease-in-out hover:text-[#f06c00] font-EB font-semibold">
                          {capitalizeCharOne(articles[1].main_title)}
                        </p>
                      </div>
                    </Link>
                  )}
                </div>
              </div>
            </>
          )}

          {/* Third Column */}
          <div className="space-y-8 lg:col-span-2 md:col-span-2">
            {articles[4] && (
              <div className="mt-11 md:mt-0">
                <Link to={`/news/${articles[4].slug}`}>
                  <div className="h-[230px] md:h-[190px] border ">
                    <img
                      src={articles[4].image?.image}
                      alt={articles[4].main_title}
                      className="w-full h-[230px] md:h-[190px]  object-cover"
                    />
                  </div>
                  <div className="flex items-center text-[0.65rem] mt-2 justify-between">
                    <p className="text-xs font-medium text-[#f06c00] transition-colors duration-300 ease-in-out hover:text-[#666666]">
                      {articles[4].topic
                        ? articles[4].topic?.toUpperCase()
                        : "General News".toUpperCase()}
                    </p>
                    {articles[4].total_comments ? (
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
                        <p>{articles[4]?.total_comments}</p>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                  <p className="text-[#393939] text-xl lg:text-2xl mt-2 leading-tight transition-colors duration-700 ease-in-out hover:text-[#f06c00] font-EB font-semibold">
                    {capitalizeCharOne(articles[4].main_title)}
                  </p>
                </Link>
              </div>
            )}

            {articles[5] && (
              <div className="mt-11 md:mt-0">
                <Link to={`/news/${articles[5].slug}`}>
                  <div className=" h-[230px] md:h-[190px]  border ">
                    <img
                      src={articles[5].image?.image}
                      alt={articles[5].main_title}
                      className="w-full h-[230px] md:h-[190px] object-cover"
                    />
                  </div>
                  <div className="flex items-center text-[0.65rem] mt-2 justify-between">
                    <p className="text-xs font-medium text-[#f06c00] transition-colors duration-300 ease-in-out hover:text-[#666666]">
                      {articles[5].topic
                        ? articles[5].topic?.toUpperCase()
                        : "General News".toUpperCase()}
                    </p>
                    {articles[5].total_comments ? (
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
                        <p>{articles[5]?.total_comments}</p>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                  <p className="text-[#393939] text-xl lg:text-2xl mt-2 leading-tight transition-colors duration-700 ease-in-out hover:text-[#f06c00] font-EB font-semibold">
                    {capitalizeCharOne(articles[5].main_title)}
                  </p>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Other News Section */}

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-3 max-lg:gap-y-8 mt-16">
        {articles.slice(6, 10)?.map((article, index) => (
          <div key={article.id} className="lg:col-span-1">
            <NewsCard
              articleData={article}
              className={index === 3 ? "bg-[#f2f2f2] p-2" : ""}
            />
          </div>
        ))}
      </div>

      <div className="my-11">
        <AdvertisementSection />
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-3 max-lg:gap-y-8 mt-16">
        {articles.slice(10, 18)?.map((article, index) => (
          <div key={article.id}>
            <NewsCard
              articleData={article}
              className={[3, 7].includes(index) ? "bg-[#f2f2f2] p-2" : ""}
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default BodyGridLG;
