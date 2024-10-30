import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchNewsTopicsCategory } from "../api/newsReadAPI";

const TopicsNewsListContent = () => {
  const [topics, setTopics] = useState();
  const { slug } = useParams();

  useEffect(() => {
    const getNewsData = async () => {
      try {
        const data = await fetchNewsTopicsCategory(slug);
        setTopics(data.results);
        console.log("Fetched news data:", data);
      } catch (err) {
        console.error("Error fetching news data:", err);
      }
    };
    getNewsData();
  }, [slug]);

  return (
    <main className="overflow-x-hidden px-[5%]">
      <div>
        {/* {topics &&
          topics.map((topic) => (
            <div key={topic.id}>
              <div className="bg-slate-500 h-40"></div>
              <p className="text-sm text-[#f06c00]">{topic.topic}</p>
            </div>
          ))}  */}
        <div>
          <p className="mt-2 font-EB font-bold text-xl text-[#393939]">
            Local News
          </p>
          <p className="text-[#666666]">
            Latest <span>Brexit</span> news, information and practical advice
            from across Ghana.
          </p>
          <hr className="w-full mt-2" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 pt-6 gap-4">
          {/* First column */}
          <div className="lg:col-span-2 md:col-span-1">
            {/* First row */}
            <div>
              <div className="bg-slate-500 h-40"></div>

              <p className="text-sm text-[#f06c00]">Business</p>
              <p>
                Will Brits really be charged extra to see France's Mona Lisa?
              </p>
            </div>
            {/* Second row */}
            <div>
              <div className="bg-slate-500 h-40"></div>
              <div className="p-4 bg-[#f2f2f2]">
                <p className="text-sm text-[#f06c00]">Business</p>
                <p>
                  Will Brits really be charged extra to see France's Mona Lisa?
                </p>
              </div>
            </div>
            {/* Third row (ads) */}
            <div className="bg-[#fafafa]">
              <p className="pt-4">ADVERTISEMENT</p>
              {/* Ads Image */}
              <div className="object-cover"></div>
            </div>
            <div>
              <div className="bg-slate-500 h-40"></div>

              <p className="text-sm text-[#f06c00]">Business</p>
              <p>
                Will Brits really be charged extra to see France's Mona Lisa?
              </p>
            </div>
          </div>
          {/* Second column */}
          <div className="lg:col-span-3 md:col-span-1 order-first lg:order-none">
            <div>
              {/* Image */}
              <div className="object-cover bg-slate-600 h-[251px]"></div>
              {/* Topic */}
              <p className="text-sm text-[#f06c00] mt-2"></p>
              {/* Main title */}
              <p className="text-[#393939] text-xl lg:text-2xl leading-tight hover:text-[#f06c00] font-EB font-semibold"></p>
              {/* Subtitle */}
              <p></p>
            </div>
            <hr className="mt-4 mb-4 w-full" />
            <div>
              <div className="flex gap-3">
                {/* image */}
                <div className=" w-[185px] h-[123px] lg:justify-end flex-shrink-0"></div>
                <div className="">
                  {/* Topic */}
                  <p className="text-sm text-[#f06c00] mt-2"></p>
                  {/* Main title */}
                  <p className="text-[#393939] text-xl lg:text-2xl leading-tight hover:text-[#f06c00] font-EB font-semibold"></p>
                </div>
              </div>
              <hr className="mt-4 mb-4 w-full" />
            </div>
            <div>
              <div className="flex gap-3">
                {/* image */}
                <div className=" w-[185px] h-[123px] lg:justify-end flex-shrink-0"></div>
                <div className="">
                  {/* Topic */}
                  <p className="text-sm text-[#f06c00] mt-2"></p>
                  {/* Main title */}
                  <p className="text-[#393939] text-xl lg:text-2xl leading-tight hover:text-[#f06c00] font-EB font-semibold"></p>
                </div>
              </div>
              <hr className="mt-4 mb-4 w-full" />
            </div>
            <div>
              <div className="flex gap-3">
                {/* image */}
                <div className=" w-[185px] h-[123px] lg:justify-end flex-shrink-0"></div>
                <div className="">
                  {/* Topic */}
                  <p className="text-sm text-[#f06c00] mt-2"></p>
                  {/* Main title */}
                  <p className="text-[#393939] text-xl lg:text-2xl leading-tight hover:text-[#f06c00] font-EB font-semibold"></p>
                </div>
              </div>
              <hr className="mt-4 mb-4 w-full" />
            </div>
            <div>
              {/* image */}
              <div className="h-[205px] bg-slate-500"></div>
            </div>
          </div>
          <div className="space-y-8 lg:col-span-2 md:col-span-2">
            <div>
              {/* First row */}
              <div>
                <div className="bg-slate-500 h-40"></div>

                <p className="text-sm text-[#f06c00]">Business</p>
                <p>
                  Will Brits really be charged extra to see France's Mona Lisa?
                </p>
              </div>
            </div>
            <div>
              {/* Second row (ads) */}
              <div className="bg-[#fafafa]">
                <p className="pt-4">ADVERTISEMENT</p>
                {/* Ads Image */}
                <div className="object-cover"></div>
              </div>
              <div></div>
            </div>
            <div>
              {/* Third row */}
              <div>
                <div className="bg-slate-500 h-40"></div>

                <p className="text-sm text-[#f06c00]">Business</p>
                <p>
                  Will Brits really be charged extra to see France's Mona Lisa?
                </p>
              </div>
            </div>
            <div>
              {/* Fourth row */}
              <div>
                <div className="bg-slate-500 h-40"></div>

                <p className="text-sm text-[#f06c00]">Business</p>
                <p>
                  Will Brits really be charged extra to see France's Mona Lisa?
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Large Ads */}
        <div className="h-[310px] bg-[#fafafa] mt-8"></div>
      </div>
    </main>
  );
};

export default TopicsNewsListContent;
