import BannerIMG from "../assets/images/About-Us-Banner-Image.jpeg";

const AboutUsContent = () => {
  return (
    <main className="overflow-x-hidden hidden md:block px-[9%]">
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
      {/* <hr className="my-11" /> */}
      {/* About Us Content */}
      <p className="font-EB mt-5  lg:text-2xl font-black ">ABOUT GHANACRIMES</p>
      <p className="text-2xl leading-loose font-EB">
        GhanaCrimes is a premier news organization committed to providing
        comprehensive coverage of crime-related and breaking news across Ghana.
        Our platform is widely recognized for its authoritative reporting,
        focusing on delivering timely updates on criminal incidents, ongoing
        investigations, and significant developments affecting communities
        nationwide. We aim to inform the public about the issues impacting
        safety and security with clarity and precision.
        <br />
        {""}
        At GhanaCrimes, integrity and accuracy are the pillars of our
        journalism. Our team of dedicated reporters works tirelessly to ensure
        that every story is thoroughly researched, fact-checked, and presented
        with the highest ethical standards. By maintaining a strict commitment
        to impartiality, we offer a reliable source of information that
        audiences can trust, fostering greater awareness and understanding of
        critical issues.
        <br />
        {""}
        Our mission extends beyond reporting crime; GhanaCrimes seeks to be a
        voice that highlights societal challenges and promotes accountability.
        As our readership grows, we continue to expand our reach, creating a
        platform that not only informs but also encourages community engagement
        and dialogue.
      </p>
      {/* Socials */}
      <p className="font-EB my-5 text-2xl font-black">Our socials</p>
      <div className="border-dotted border border-black" />
      <div className="mt-4 flex items-center gap-2 text-[#666666] transition-colors duration-300">
        <a href="#" className="text-sm font-semibold hover:text-[#f06c00]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 1000 1000"
            className="fill-current"
          >
            <path d="M182.594 0C81.445 0 0 81.445 0 182.594v634.813c0 101.149 81.445 182.594 182.594 182.594h344.063V609.063H423.282v-140.75h103.375v-120.25c0-94.475 61.079-181.219 201.781-181.219c56.968 0 99.094 5.469 99.094 5.469l-3.313 131.438s-42.963-.406-89.844-.406c-50.739 0-58.875 23.378-58.875 62.188v102.781h152.75l-6.656 140.75H675.5v390.938h141.906c101.149 0 182.594-81.445 182.594-182.594V182.595C1000 81.446 918.555.001 817.406.001H182.593z"></path>
          </svg>
        </a>

        <a
          href="https://x.com/GhanaCrimes?t=xLbwf9MCnRgux047Ns7jRw&s=09"
          className="ml-2 text-sm font-semibold hover:text-[#f06c00]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={26}
            height={26}
            viewBox="0 0 448 512"
            className="fill-current"
          >
            <path d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm297.1 84L257.3 234.6L379.4 396h-95.6L209 298.1L123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5l78.2-89.5zm-37.8 251.6L153.4 142.9h-28.3l171.8 224.7h26.3z"></path>
          </svg>
        </a>

        <a
          href="https://www.instagram.com/ghanacrimes/profilecard/?igsh=OHhydXM3NGw0eG1j"
          className="ml-2 text-sm font-semibold hover:text-[#f06c00]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={28}
            height={28}
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M13.823 12.234c-.016.35-.13.688-.331.975a1.7 1.7 0 0 1-.829.643a1.77 1.77 0 0 1-1.053.088a1.8 1.8 0 0 1-.926-.516a1.9 1.9 0 0 1-.468-.976a1.76 1.76 0 0 1 .127-1.043c.144-.327.38-.606.682-.8c.307-.19.662-.291 1.024-.292c.477.026.926.232 1.258.575a1.85 1.85 0 0 1 .516 1.346"></path>
            <path d="M17.265 8.002a2.26 2.26 0 0 0-1.248-1.248a2.6 2.6 0 0 0-.887-.175H8.968A2.31 2.31 0 0 0 6.667 8.88v6.279a2.3 2.3 0 0 0 .682 1.628a2.32 2.32 0 0 0 1.619.673h6.162a2.32 2.32 0 0 0 2.123-1.419a2.3 2.3 0 0 0 .178-.882v-6.27a2.6 2.6 0 0 0-.166-.887m-2.437 5.441a2.9 2.9 0 0 1-.644.975c-.28.283-.611.51-.975.673a3.13 3.13 0 0 1-2.486-.028a3.08 3.08 0 0 1-1.765-3.365a3.2 3.2 0 0 1 .829-1.59a3.11 3.11 0 0 1 3.354-.692c.567.23 1.05.628 1.384 1.141a3.03 3.03 0 0 1 .527 1.677c.014.415-.063.827-.224 1.209M15.9 8.626a.555.555 0 1 1-1.102 0a.557.557 0 1 1 1.102 0"></path>
            <path d="M16.875 2.25h-9.75A4.875 4.875 0 0 0 2.25 7.125v9.75a4.875 4.875 0 0 0 4.875 4.875h9.75a4.875 4.875 0 0 0 4.875-4.875v-9.75a4.875 4.875 0 0 0-4.875-4.875m2.067 12.812c.01.51-.087 1.019-.283 1.491a3.9 3.9 0 0 1-2.096 2.096c-.473.196-.98.292-1.492.283H9.075a3.8 3.8 0 0 1-1.492-.282a4 4 0 0 1-1.258-.839a3.9 3.9 0 0 1-.838-1.258a3.7 3.7 0 0 1-.312-1.492V9.018a3.8 3.8 0 0 1 .283-1.492A3.9 3.9 0 0 1 7.535 5.41a3.9 3.9 0 0 1 1.54-.263h6.045a3.8 3.8 0 0 1 2.73 1.121c.357.362.641.79.838 1.258c.195.473.292.98.283 1.492z"></path>
          </svg>
        </a>
      </div>
    </main>
  );
};

export default AboutUsContent;
