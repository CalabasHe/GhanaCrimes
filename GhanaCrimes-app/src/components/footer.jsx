import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="flex mt-10 grow m-0 w-full bg-[#404040] px-3 py-12">
        <div className="flex flex-col gap-10 text-sm text-white">
          <p className="text-lg font-semibold">
            <span className="text-xl lg:text-4xl font-bold">GhanaCrimes</span>
          </p>

          <section className="grid md:grid-cols-3 md:gap-11 lg:text-sm ">
            <article>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
              iure, expedita ullam ipsum adipisci sit nobis illum, quos quam
              perferendis in. Autem magni dolores et corrupti aperiam saepe!
              Reiciendis, in?
            </article>
            <div className="flex md:flex-col gap-4 font-bold">
              <Link to={"/about-us"} className="hover:text-[#f06c00]">
                About us
              </Link>
              <Link to={"/contact-us"} className="hover:text-[#f06c00]">
                Contact us
              </Link>
            </div>
            <div></div>
          </section>
        </div>
      </footer>
    </>
  );
};

export default Footer;
