import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer>
        <div className="flex mt-10 grow m-0 w-full bg-[#404040] px-3 md:px-[9%] py-12">
          <div className="flex flex-col gap-10 text-sm text-white">
            <p className="text-lg font-semibold">
              <span className="text-xl lg:text-4xl font-bold">GhanaCrimes</span>
            </p>

            <section className="grid md:grid-cols-3 md:gap-11 lg:text-sm ">
              <article>
                GhanaCrimes is one of the world’s leading news organizations,
                internationally recognized for its journalistic authority,
                commitment to integrity, and dedication to accuracy in
                reporting.
              </article>
              <div className="flex md:flex-col gap-4 font-bold">
                <Link to={"/about-us"} className="hover:text-[#f06c00]">
                  About us
                </Link>
                <Link to={"/contact-us"} className="hover:text-[#f06c00]">
                  Contact us
                </Link>
              </div>
            </section>
            <div>
              {" "}
              {/* Socials */}
              <p className="font-EB my-5 text-2xl font-black">Our socials</p>
              <div className="mt-4 flex items-center gap-2 text-[#666666] transition-colors duration-300">
                <a
                  href="https://www.facebook.com/GhanaCrimes"
                  className="text-sm font-semibold hover:text-[#f06c00]"
                >
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
            </div>
          </div>
        </div>

        <div className="px-3 md:px-[9%] py-4 text-[#666666]">
          {currentYear} GhanaCrimes, All Rights Reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
