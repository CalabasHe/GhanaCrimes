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
        {/* <hr className="my-11" /> */}
        {/* About Us Content */}
       
      </main>
    </>
  );
};

export default AboutUSContentSM;
