import BannerIMG from "../assets/images/About-Us-Banner-Image.jpeg";

const AboutUsContent = () => {
  return (
    <main className="overflow-x-hidden hidden md:block px-3">
      <div className="mt-10 relative">
        {/* Text Overlay */}
        <div className="relative w-full h-40 lg:h-[500px]">
          {/* Banner Image */}
          <img
            src={BannerIMG}
            alt="About Us Banner"
            className="w-full h-full object-cover"
          />

          {/* Gradient Overlay */}
          <div
            style={{
              background:
                "linear-gradient(45deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)",
            }}
            className="absolute inset-0 opacity-100"
          ></div>

          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col justify-center  px-[5%]">
            <p className="text-[#f06c00] font-EB font-black md:text-xl lg:text-2xl z-10">
              ABOUT GHANACRIMES
            </p>
            <p className="text-white font-bold text-lg  lg:text-4xl lg:w-2/4 lg:leading-normal mt-2 z-10">
              The GhanaCrimes is one of the world’s leading news organisations,
              recognised internationally for its authority, integrity and
              accuracy.
            </p>
          </div>
        </div>
      </div>
      <hr className="my-11" />
      {/* About Us Content */}
      <div className="grid md:grid-cols-2  gap-11">
        <div className="bg-[#f06c00]  text-white p-8 shadow-lg">
          {/* Image Section */}
          <div className="relative w-full h-64 object-cover bg-black">
            {/* <img
              src={Image}
              alt="Company Building"
              className="w-full h-64 object-cover"
            /> */}
          </div>

          {/* Text Content */}
          <div className="mt-6">
            {/* Title */}
            <h2 className="text-xl font-bold text-white font-EB">COMPANY</h2>

            {/* Underline */}
            <div className="w-8 border-b-4 border-black my-2"></div>

            {/* Description */}
            <p className="text-white text-sm leading-relaxed">
              The FT Group employs more than 2,900 people worldwide, including
              700 journalists in 40 countries. It includes the Financial Times,
              FT Specialist, and a number of services and joint ventures.
            </p>
          </div>
        </div>
        <div className="bg-[#f06c00] text-white p-8 shadow-lg">
          {/* Image Section */}
          <div className="relative w-full h-64 object-cover bg-black">
            {/* <img
              src={Image}
              alt="Company Building"
              className="w-full h-64 object-cover"
            /> */}
          </div>

          {/* Text Content */}
          <div className="mt-6">
            {/* Title */}
            <h2 className="text-xl font-bold text-white font-EB">COMPANY</h2>

            {/* Underline */}
            <div className="w-8 border-b-4 border-black my-2"></div>

            {/* Description */}
            <p className="text-white text-sm leading-relaxed">
              The FT Group employs more than 2,900 people worldwide, including
              700 journalists in 40 countries. It includes the Financial Times,
              FT Specialist, and a number of services and joint ventures.
            </p>
          </div>
        </div>
        <div className="bg-[#f06c00] text-white p-8 shadow-lg">
          {/* Image Section */}
          <div className="relative w-full h-64 object-cover bg-black">
            {/* <img
              src={Image}
              alt="Company Building"
              className="w-full h-64 object-cover"
            /> */}
          </div>

          {/* Text Content */}
          <div className="mt-6">
            {/* Title */}
            <h2 className="text-xl font-bold text-white font-EB">COMPANY</h2>

            {/* Underline */}
            <div className="w-8 border-b-4 border-black my-2"></div>

            {/* Description */}
            <p className="text-white text-sm leading-relaxed">
              The FT Group employs more than 2,900 people worldwide, including
              700 journalists in 40 countries. It includes the Financial Times,
              FT Specialist, and a number of services and joint ventures.
            </p>
          </div>
        </div>
        <div className="bg-[#f06c00] text-white p-8 shadow-lg">
          {/* Image Section */}
          <div className="relative w-full h-64 object-cover bg-black">
            {/* <img
              src={Image}
              alt="Company Building"
              className="w-full h-64 object-cover"
            /> */}
          </div>

          {/* Text Content */}
          <div className="mt-6">
            {/* Title */}
            <h2 className="text-xl font-bold text-white font-EB">COMPANY</h2>

            {/* Underline */}
            <div className="w-8 border-b-4 border-black my-2"></div>

            {/* Description */}
            <p className="text-white text-sm leading-relaxed">
              The FT Group employs more than 2,900 people worldwide, including
              700 journalists in 40 countries. It includes the Financial Times,
              FT Specialist, and a number of services and joint ventures.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutUsContent;
