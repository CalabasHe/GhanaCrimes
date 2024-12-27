import AdvertisementSection from "./adsComponents";
import { useState } from "react";
import axios from "axios";

const InsiderBody = () => {
  const [name, SetName] = useState("");
  const [video, SetVideo] = useState("");
  const [email, SetEmail] = useState("");
  const [subject, SetSubject] = useState("");
  const [message, SetMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    // Log form data before submission
    const formData = {
      video_link: video || null,
      name: name || null,
      email: email || null,
      subject,
      message,
    };
    //console.log("Form Data:", formData);

    try {
      const response = await axios.post(
        "https://ghanacrimes-api.onrender.com/api/insider",
        formData
      );

      if (response.data) {
        setSuccess(true);
        // console.log("Submission successful!", response.data);
        // Clear form
        SetVideo("");
        SetName("");
        SetEmail("");
        SetSubject("");
        SetMessage("");
      }
    } catch (err) {
      // console.log(err)
      // const errorMessage = err.response?.data?.message || "Something went wrong";
      // console.error("Submission failed:", errorMessage);
      // setError(errorMessage);
    } finally {
      setLoading(false);
     // console.log("Form submission completed");
    }
  };

  return (
    <main className="px-3 lg:px-[9%]">
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-11 gap-11">
        <div className="lg:col-span-2">
          <div>
            <p className="font-EB font-bold text-[#393939] text-2xl md:text-5xl">
              Know something? Send us <br />
              the info!
            </p>
            <p className="mt-9">
              <p>
                Do you have any credible information or evidence that can help
                us investigate an issue of public interest?{" "}
              </p>{" "}
              <br /> <p>*Your identity will remain private!</p> <br />{" "}
              <p className="font-bold">Information:</p>{" "}
              <p>
                To upload video files, please go here or to a similar file
                transfer service of your choice. After the upload is ready,
                please send the link at{" "}
                <a
                  href="mailto:ghanacrimes@gmail.com"
                  className="text-orange-500 underline"
                >
                  ghanacrimes@gmail.com
                </a>{" "}
                or enter it in the form below:
              </p>
            </p>
          </div>
          <div className="mt-9">
            {error && <p className="text-red-500 mb-4">{error}</p>}
            {success && (
              <p className="text-green-500 mb-4">
                Your message has been sent successfully!
              </p>
            )}
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-4">
                <label className="font-semibold" htmlFor="">
                  Paste external video link here (optional)
                </label>
                <input
                  value={video}
                  onChange={(e) => SetVideo(e.target.value)}
                  className={`border-4 px-3 py-2 w-full outline-none mt-4 ${
                    video ? "border-[#f06c00]" : "border-[#828282]"
                  }`}
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-4 mt-5">
                <label className="font-semibold" htmlFor="">
                  Your name
                </label>
                <input
                  value={name}
                  onChange={(e) => SetName(e.target.value)}
                  className={`border-4 px-3 py-2 w-full outline-none mt-4 ${
                    name ? "border-[#f06c00]" : "border-[#828282]"
                  }`}
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-4 mt-5">
                <label className="font-semibold" htmlFor="">
                  Your email (optional)
                </label>
                <input
                  value={email}
                  onChange={(e) => SetEmail(e.target.value)}
                  className={`border-4 px-3 py-2 w-full outline-none mt-4 ${
                    email ? "border-[#f06c00]" : "border-[#828282]"
                  }`}
                  type="email"
                  name=""
                  id=""
                />
              </div>
              <div className="flex flex-col gap-4 mt-5">
                <label className="font-semibold" htmlFor="">
                  Subject <span className="text-red-600">*</span>
                </label>
                <input
                  value={subject}
                  onChange={(e) => SetSubject(e.target.value)}
                  className={`border-4 px-3 py-2 w-full outline-none mt-4 ${
                    subject ? "border-[#f06c00]" : "border-[#828282]"
                  }`}
                  type="text"
                  required
                />
              </div>
              <div className="flex flex-col gap-4 mt-5">
                <label className="font-semibold" htmlFor="">
                  Your message <span className="text-red-600">*</span>
                </label>
                <textarea
                  value={message}
                  onChange={(e) => SetMessage(e.target.value)}
                  className={`border-4 px-3 py-2 w-full outline-none mt-4 h-40 ${
                    message ? "border-[#f06c00]" : "border-[#828282]"
                  }`}
                  name=""
                  id=""
                  required
                ></textarea>
              </div>
              <div className="flex flex-col gap-4 mt-5">
                <label
                  className="space-y-5 font-semibold"
                  htmlFor="attachimage"
                >
                  <p>Attach an image (optional)</p>
                  <div className="border-dashed border-[#828282] border w-full h-52 flex justify-center items-center flex-col gap-2 cursor-pointer">
                    <svg
                      width="51"
                      height="51"
                      viewBox="0 0 51 51"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="50"
                        height="50"
                        rx="5"
                        fill="#F7F8FA"
                      />
                      <path
                        d="M25.5 21.3334V40.0834M25.5 21.3334L31.75 27.5834M25.5 21.3334L19.25 27.5834M36.9583 31.75C40.1229 31.75 42.1667 29.1854 42.1667 26.0209C42.1666 24.768 41.7558 23.5497 40.9972 22.5525C40.2386 21.5554 39.1741 20.8344 37.9667 20.5C37.7809 18.1635 36.8125 15.9579 35.2181 14.2398C33.6237 12.5217 31.4964 11.3916 29.1802 11.0322C26.864 10.6727 24.4943 11.1049 22.4541 12.259C20.414 13.413 18.8227 15.2214 17.9375 17.3917C16.0738 16.8751 14.0812 17.12 12.3981 18.0725C10.7149 19.025 9.47912 20.6072 8.9625 22.4709C8.44588 24.3346 8.69077 26.3272 9.6433 28.0103C10.5958 29.6934 12.178 30.9292 14.0417 31.4459"
                        stroke="#868E96"
                        stroke-width="5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    Drop your file here or click here to upload
                  </div>
                </label>
                <input
                  className="border-[#828282] w-full h-12 hidden"
                  id="attachimage"
                  type="file"
                />
              </div>
              <button
                className="bg-[#F06C00] text-white mt-8 px-8 py-1 disabled:opacity-50"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
        <div className="relative">
          <div className="sticky top-[30%]">
            <div className="h-[410px]">
              <AdvertisementSection />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default InsiderBody;
