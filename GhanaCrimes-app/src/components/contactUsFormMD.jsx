import ContactIMG from "../assets/images/Contact-Us-Banner-Image.jpeg";
import ContactFormField from "./contactFormFields";
const ContactUsFormMD = () => {
  return (
    <main className="overflow-x-hidden hidden md:block px-[5%]">
      <div className="mt-10 relative">
        {/* Text Overlay */}
        <div className="relative w-full h-40 lg:h-[500px]">
          {/* Banner Image */}
          <img
            src={ContactIMG}
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
              CONTACT US
            </p>
            <p className="text-white font-bold text-lg  lg:text-4xl lg:w-2/4 lg:leading-normal mt-2 z-10">
              We are always happy to hear from you. Please feel free to contact
              us with any questions, comments, or inquiries.
            </p>
          </div>
        </div>
      </div>
      <ContactFormField />
    </main>
  );
};

export default ContactUsFormMD;
