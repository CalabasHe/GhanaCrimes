import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { getCrimes } from "../api/authAPI";

const BodyGridLG = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getCrimeData = async () => {
      try {
        const data = await getCrimes();
        setArticles(data.results);
      } catch (err) {
        console.log(err);
      }
    };

    getCrimeData();
  }, []);

  return (
    <main className="overflow-x-hidden px-[5%] md:block">
      <div className="mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
          {articles.length > 0 && (
            <>
              {/*First Column*/}
              <div className="lg:col-span-2 md:col-span-1 space-y-4">
                {articles[2] && (
                  <Link to={`/news/${articles[2].slug}`}>
                    <div className="h-40">
                      <img
                        src={articles[2].image.image}
                        alt={articles[2].main_title}
                        className="w-full h-full object-fill"
                      />
                    </div>
                    <p className="text-sm text-[#f06c00]">
                      {articles[2].topic.toUpperCase()}
                    </p>
                    <p className="text-[#393939] text-xl lg:text-2xl leading-tight hover:text-[#f06c00] font-EB font-semibold">
                      {articles[2].main_title}
                    </p>
                  </Link>
                )}
                <Link>
                  <div className="bg-slate-500 h-40 object-cover" />
                  <p className="text-sm text-[#f06c00]">Business</p>
                  <p className="text-[#393939] text-xl lg:text-2xl leading-tight hover:text-[#f06c00] font-EB font-semibold">
                    Michelin pauses some French tyre factories as demand falls
                  </p>
                </Link>
              </div>

              {/* Second Column */}
              <div className="lg:col-span-3 md:col-span-1 order-first lg:order-none">
                <div className="h-full flex flex-col space-y-4">
                  {/* First Section */}
                  {articles[0] && (
                    <Link to={`/news/${articles[0].slug}`}>
                      <div className="h-[251px]">
                        <img
                          src={articles[0].image.image}
                          alt={articles[0].main_title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="text-sm text-[#f06c00]">
                        {articles[0].topic.toUpperCase()}
                      </p>
                      <p className="text-[#393939] text-xl lg:text-4xl leading-tight hover:text-[#f06c00] font-EB font-semibold">
                        {articles[0].main_title}
                      </p>
                      <p>{articles[0].sub_title}</p>
                    </Link>
                  )}

                  <hr className="mt-4 mb-4 w-full" />

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
                          className="w-full h-full object-fit"
                        />
                      </div>
                      <div className="">
                        <p className="text-sm text-[#f06c00]">
                          {articles[1].topic.toUpperCase()}
                        </p>
                        <p className="text-[#393939] text-xl lg:text-2xl leading-tight hover:text-[#f06c00] font-EB font-semibold">
                          {articles[1].main_title}
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
            <Link>
              <div className="bg-slate-500 h-40 object-cover" />
              <p className="text-sm text-[#f06c00]">Business</p>
              <p className="text-[#393939] text-xl lg:text-2xl leading-tight hover:text-[#f06c00] font-EB font-semibold">
                Michelin pauses some French tyre factories as demand falls
              </p>
            </Link>
            <Link>
              <div className="bg-slate-500 h-40 object-cover" />
              <p className="text-sm text-[#f06c00]">Business</p>
              <p className="text-[#393939] text-xl lg:text-2xl leading-tight hover:text-[#f06c00] font-EB font-semibold">
                Michelin pauses some French tyre factories as demand falls
              </p>
            </Link>
          </div>
        </div>
      </div>

      {/* Travel News Section */}
      <div className="flex gap-3 mt-8 items-center">
        <div className="bg-[#f74548] w-4 h-4" />
        <p className="font-EB font-bold text-lg">TRAVEL NEWS</p>
      </div>
      <hr className="mb-4" />

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
      <div className=" flex gap-3 mt-8 items-center">
        <div className="bg-[#f74548] w-4 h-4" />
        <p className="font-EB font-bold text-lg">TRAVEL NEWS</p>
      </div>
      <hr className="mb-4" />
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
    </main>
  );
};

export default BodyGridLG;
