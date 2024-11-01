import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";

import { getCrimes } from "../api/authAPI";
import NewsCard from "./newsCard";

const BodyGridLG = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getCrimeData = async () => {
      try {
        const data = await getCrimes();
        // console.log(data);
        setArticles(data.results);
      } catch (err) {
        console.log(err);
      }
    };

    getCrimeData();
  }, []);

  const capitalizeCharOne = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <main className="overflow-x-hidden px-3 lg:px-5">
      <div className="mt-4">
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6">
          {articles.length > 0 && (
            <>
              {/*First Column*/}
              <div className="lg:col-span-2 md:col-span-1 ">
                {articles[2] && (
                  <Link to={`/news/${articles[2].slug}`}>
                    <div className="h-40 border ">
                      <img
                        src={articles[2].image.image}
                        alt={articles[2].main_title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-[0.65rem] font-medium text-[#f06c00] mt-2">
                      {articles[2].topic
                        ? articles[2].topic?.toUpperCase()
                        : "General News".toUpperCase()}
                    </p>
                    <p className="text-[#393939] text-xl lg:text-2xl leading-tight mt-2 hover:text-[#f06c00] font-EB font-semibold">
                      {capitalizeCharOne(articles[2].main_title)}
                    </p>
                  </Link>
                )}
                {articles[3] && (
                  <div className="mt-11">
                    <Link to={`/news/${articles[3].slug}`}>
                      <div className=" h-40 border ">
                        <img
                          src={articles[3].image.image}
                          alt={articles[3].main_title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-[0.65rem] font-medium text-[#f06c00] mt-2">
                        {articles[3].topic
                          ? articles[3].topic?.toUpperCase()
                          : "General News".toUpperCase()}
                      </p>
                      <p className="text-[#393939] text-xl lg:text-2xl leading-tight mt-2 hover:text-[#f06c00] font-EB font-semibold">
                        {capitalizeCharOne(articles[3].main_title)}
                      </p>
                    </Link>
                  </div>
                )}
              </div>

              {/* Second Column */}
              <div className="lg:col-span-3 md:col-span-1 order-first lg:order-none">
                <div className="h-full flex flex-col space-y-6">
                  {/* First Section */}
                  {articles[0] && (
                    <Link to={`/news/${articles[0].slug}`}>
                      <div className="h-[300px]">
                        <img
                          src={articles[0].image.image}
                          alt={articles[0].main_title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-[0.65rem] font-medium text-[#f06c00] mt-2">
                        {articles[0].topic
                          ? articles[0].topic?.toUpperCase()
                          : "General News".toUpperCase()}
                      </p>
                      <p className="text-[#393939] text-xl lg:text-3xl leading-tight mt-2 hover:text-[#f06c00] font-EB font-semibold">
                        {capitalizeCharOne(articles[0].main_title)}
                      </p>
                      <p className="text-sm mt-4 font-normal text-slate-600 border-b border-black border-dotted pb-2">
                        {capitalizeCharOne(articles[0].sub_title)}
                      </p>
                    </Link>
                  )}

                  {/* Second Section */}
                  {articles[1] && (
                    <Link
                      to={`/news/${articles[1].slug}`}
                      className="flex gap-3"
                    >
                      <div className=" w-[185px] h-[123px] lg:justify-end flex-shrink-0">
                        <img
                          src={articles[1].image.image}
                          alt={articles[1].main_title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="">
                        <p className="text-[0.65rem] font-medium text-[#f06c00] mt-2">
                          {articles[1].topic
                            ? articles[1].topic?.toUpperCase()
                            : "General News".toUpperCase()}
                        </p>
                        <p className="text-[#393939] text-xl lg:text-2xl leading-tight mt-2 hover:text-[#f06c00] font-EB font-semibold">
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
                  <div className=" h-40 border ">
                    <img
                      src={articles[4].image.image}
                      alt={articles[4].main_title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-[0.65rem] font-medium text-[#f06c00] mt-2">
                    {" "}
                    {articles[4].topic
                      ? articles[4].topic?.toUpperCase()
                      : "General News".toUpperCase()}
                  </p>
                  <p className="text-[#393939] text-xl lg:text-2xl mt-2 leading-tight hover:text-[#f06c00] font-EB font-semibold">
                    {capitalizeCharOne(articles[4].main_title)}
                  </p>
                </Link>
              </div>
            )}

            {articles[5] && (
              <div className="mt-11 md:mt-0">
                <Link to={`/news/${articles[5].slug}`}>
                  <div className=" h-40 border ">
                    <img
                      src={articles[5].image.image}
                      alt={articles[5].main_title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-[0.65rem] font-medium text-[#f06c00] mt-2">
                    {" "}
                    {articles[5].topic
                      ? articles[5].topic?.toUpperCase()
                      : "General News".toUpperCase()}
                  </p>
                  <p className="text-[#393939] text-xl lg:text-2xl mt-2 leading-tight hover:text-[#f06c00] font-EB font-semibold">
                    {capitalizeCharOne(articles[5].main_title)}
                  </p>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Travel News Section */}

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-3 max-lg:gap-y-8 mt-16">
        {articles.slice(6, 10)?.map((article) => (
          <div key={article.id}>
            <NewsCard articleData={article} />
          </div>
        ))}
      </div>

      <div className="bg-[#fafafa] h-[310px] text-center mt-8">
        <p className="pt-4 text-[#D2D2D2] text-sm">ADVERTISEMENT</p>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-3 mt-20">
        {articles.slice(10, 18)?.map((article) => (
          <div key={article.id}>
            <NewsCard articleData={article} />
          </div>
        ))}
      </div>

      {/* <div className="flex gap-3 mt-8 items-center">
        <div className="bg-[#f74548] w-4 h-4" />
          <p className="font-EB font-bold text-lg">TRAVEL NEWS</p>
        </div>
      <hr className="mb-4" /> */}
    </main>
  );
};

export default BodyGridLG;
