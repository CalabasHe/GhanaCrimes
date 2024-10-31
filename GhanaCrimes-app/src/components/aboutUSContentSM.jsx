import BannerIMG from "../assets/images/About-Us-Banner-Image.jpeg";

const AboutUSContentSM = () => {
  return (
    <>
      <main className="overflow-x-hidden px-3 block md:hidden">
        <div className="mt-10">
          {/* Banner Image */}
          <img src={BannerIMG} alt="" />
          <p className="text-[#f06c00] font-EB font-bold text-xl mt-4">
            About GhanaCrimes
          </p>
          <p>
            The GhanaCrimes is one of the world’s leading news organisations,
            recognised internationally for its authority, integrity and
            accuracy.
          </p>
        </div>
        <hr className="my-11" />
        {/* About Us Content */}
        <div className="grid md:grid-cols-2  gap-6">
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
                700 journalists in 40 countries. It includes the Financial
                Times, FT Specialist, and a number of services and joint
                ventures.
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
                700 journalists in 40 countries. It includes the Financial
                Times, FT Specialist, and a number of services and joint
                ventures.
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
                700 journalists in 40 countries. It includes the Financial
                Times, FT Specialist, and a number of services and joint
                ventures.
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
                700 journalists in 40 countries. It includes the Financial
                Times, FT Specialist, and a number of services and joint
                ventures.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutUSContentSM;
