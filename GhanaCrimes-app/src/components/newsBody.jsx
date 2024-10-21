import { Link } from "react-router-dom";

const NewsComponent = () => {
  return (
    <main className="overflow-x-hidden px-[5%]">
      <div className="mt-8">
        <div>
          {/* Topic */}
          <p className="text-[#f06c00]">Science</p>
          {/* Main title */}
          <p className="font-EB font-bold text-2xl lg:text-5xl">
            CERN plans giant underground site between France and Switzerland
          </p>
        </div>
        {/* Published and Updated */}
        <div className="flex gap-3">
          <p>Published: 19 Oct, 2024 GMT</p>
          <p>Updated: Sat 19 Oct 2024 10:56 GMT</p>
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
              Comments <span className="text-[#393939]">(3)</span>
            </p>
          </Link>
        </div>
        {/* Image and description */}
        <div>
          <div className="bg-slate-500 h-[351px] object-cover mt-8"></div>
          <p className="text-[#afafaf] mt-2">
            A man carves prosciutto at the Salone del Gusto in Turin. Photo by
            FILIPPO MONTEFORTE / AFP
          </p>
        </div>
        {/* Sub title */}
        <p className="font-EB font-bold lg:text-2xl mt-5">
          In this week's Inside Italy review, we look at how a swine fever
          outbreak is endangering the country’s world-famous prosciutto
          industry, reports that Matera may be ‘moving’ to Puglia and the
          Italian autumn tradition of ‘la scampagnata’.
        </p>
        {/* Main Description */}
        <p className="mt-5 font-EB lg:text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
          laboriosam provident sit et dicta nobis, laudantium qui eius quod hic
          autem fugit unde doloribus neque rem id? Modi minima qui facilis eius
          deserunt mollitia aperiam repellendus aut! Doloremque reprehenderit{" "}
          <br />
          mollitia sit, labore beatae placeat doloribus quo necessitatibus
          nesciunt, quia nobis ipsum dolor odio minus aut temporibus eligendi
          ducimus. Numquam repudiandae veniam distinctio illum nam a. Esse
          ipsam, vel, veritatis corrupti voluptatum id recusandae perferendis
          minima culpa consequuntur, aut ducimus. Doloribus minima sit illum
          incidunt minus deleniti est at quidem necessitatibus qui? Quisquam,
          facere voluptas!
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
    </main>
  );
};

export default NewsComponent;
