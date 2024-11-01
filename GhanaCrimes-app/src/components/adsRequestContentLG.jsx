import BannerIMG from "../assets/images/Advertisement-Request-Banner-Image.jpeg";
import FORMSVG from "../assets/svg/Advertisement-Form-BG.svg";
import { advertisementAPI } from "../api/adsAPI";
import { useState } from "react";

const AdsRequestContentLG = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    

    try {
      await advertisementAPI.createAdvertisementRequest(formData);
      setSuccess(true);
      setFormData({
        full_name: "",
        email: "",
        phone_number: "",
        message: "",
      });
    } catch (err) {
      setError("Failed to submit advertisement request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="px-3 lg:px-5 overflow-x-hidden  hidden md:block">
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
              ADVERTISE WITH US
            </p>
            <p className="text-white font-bold text-lg  lg:text-4xl lg:w-2/4 lg:leading-normal mt-2 z-10">
              Advertise with GhanaCrimes to reach a vast audience of
              international professionals and expats, connecting your brand with
              a global, engaged readership.
            </p>
          </div>
        </div>
      </div>
      <hr className="my-11" />
      {/* Advertisement Request Form */}
      <div className="bg-[#212529] h-full justify-center flex   ">
        {/* <img src={FORMSVG} alt="" className=" object-contain" /> */}
        <div className=" ">
          <div className="text-center px-11 py-11 font-EB text-white">
            <p className="text-4xl font-bold">CONTACT US</p>
            <p className="text-2xl pt-4">
              Contact our award-winning team for your complimentary ideas
              session and inspiration on how you can best reach our exclusive
              audience.
            </p>
          </div>
          {success ? (
            <div className="text-green-500 text-center p-4 bg-white">
              Advertisement request submitted successfully!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="px-14">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <input
                    type="text"
                    name="full_name"
                    className="p-3 w-full"
                    placeholder="Full Name *"
                    required
                    value={formData.full_name}
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    name="email"
                    className="p-3 w-full"
                    placeholder="Email *"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="phone_number"
                    className="p-3 w-full"
                    placeholder="Phone Number *"
                    required
                    value={formData.phone_number}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    className="w-full h-full p-3"
                    placeholder="Message *"
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {error && (
                <div className="col-span-2 text-red-500 text-center bg-white p-2 rounded">
                  {error}
                </div>
              )}
              <div className="justify-center flex my-11">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className=" bg-[#f06c00] text-white rounded-full px-8 py-4 font-semibold text-2xl "
                >
                  {isSubmitting ? "SENDING" : "SEND MESSAGE"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </main>
  );
};

export default AdsRequestContentLG;
