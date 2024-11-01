import { useState } from "react";
import BannerIMG from "../assets/images/Advertisement-Request-Banner-Image.jpeg";
import { advertisementAPI } from "../api/adsAPI";

const AdsRequestContentSM = () => {
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
    <main className="overflow-x-hidden px-3 block md:hidden">
      <div className="mt-10">
        {/* Banner Image */}
        <img
          src={BannerIMG}
          alt="Advertisement Banner"
          className="w-full object-cover"
        />
        <p className="text-[#f06c00] font-EB font-bold text-xl mt-4">
          Advertise with us
        </p>
        <p className="text-gray-800 mt-2">
          Advertise with GhanaCrimes to reach a vast audience of international
          professionals and expats, connecting your brand with a global, engaged
          readership.
        </p>
      </div>
      <hr className="my-11" />

      {/* Contact Form Section */}
      <div className="bg-[#212529] p-6 ">
        <div className="text-white text-center mb-6">
          <h2 className="text-4xl font-bold font-EB mb-3">CONTACT US</h2>
          <p className="text-sm">
            Contact our award-winning team for your complimentary ideas session
            and inspiration on how you can best reach our exclusive audience.
          </p>
        </div>

        {success ? (
          <div className="bg-green-100 text-green-700 p-4 rounded-lg text-center">
            Advertisement request submitted successfully!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="full_name"
              className="w-full p-3"
              placeholder="Full Name *"
              required
              value={formData.full_name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              className="w-full p-3 "
              placeholder="Email *"
              required
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="text"
              name="phone_number"
              className="w-full p-3 "
              placeholder="Phone Number *"
              required
              value={formData.phone_number}
              onChange={handleChange}
            />

            <textarea
              name="message"
              className="w-full p-3  h-32"
              placeholder="Message *"
              required
              value={formData.message}
              onChange={handleChange}
            />

            {error && (
              <div className="bg-red-100 text-red-700 p-3 rounded-lg text-center">
                {error}
              </div>
            )}
            <div className="justify-center flex my-11">
              <button
                type="submit"
                disabled={isSubmitting}
                className=" bg-[#f06c00] text-white rounded-full px-8 py-4 font-semibold text-lg "
              >
                {isSubmitting ? "SENDING" : "SEND MESSAGE"}
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Add some bottom spacing */}
      <div className="h-8"></div>
    </main>
  );
};

export default AdsRequestContentSM;
