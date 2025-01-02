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
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file ? file.name : null);
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    document.getElementById("attachimage").value = "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    const formData = {
      video_link: video || null,
      name: name || null,
      email: email || null,
      subject,
      message,
    };

    try {
      const response = await axios.post(
        "https://ghanacrimes-api.onrender.com/api/insider",
        formData
      );

      if (response.data) {
        setSuccess(true);
        SetVideo("");
        SetName("");
        SetEmail("");
        SetSubject("");
        SetMessage("");
      }
    } catch (err) {
      setError("Failed to submit form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="px-3 lg:px-[9%]">
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-11 gap-11">
        <div className="lg:col-span-2">
          <div>
            <h1 className="font-EB font-bold text-[#393939] text-2xl md:text-5xl">
              Know something? Send us <br />
              the info!
            </h1>
            <div className="mt-9 space-y-4">
              <p>
                Do you have any credible information or evidence that can help
                us investigate an issue of public interest?
              </p>
              <p>*Your identity will remain private!</p>
              <p className="font-bold">Information:</p>
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
            </div>
          </div>
          <div className="mt-9">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2">
                <label className="font-semibold">
                  Paste external video link here (optional)
                </label>
                <input
                  value={video}
                  onChange={(e) => SetVideo(e.target.value)}
                  className={`border-4 px-3 py-2 w-full outline-none  ${
                    video ? "border-[#f06c00]" : "border-[#828282]"
                  }`}
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-2 mt-5">
                <label className="font-semibold">Your name</label>
                <input
                  value={name}
                  onChange={(e) => SetName(e.target.value)}
                  className={`border-4 px-3 py-2 w-full outline-none  ${
                    name ? "border-[#f06c00]" : "border-[#828282]"
                  }`}
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-2 mt-5">
                <label className="font-semibold">Your email (optional)</label>
                <input
                  value={email}
                  onChange={(e) => SetEmail(e.target.value)}
                  className={`border-4 px-3 py-2 w-full outline-none  ${
                    email ? "border-[#f06c00]" : "border-[#828282]"
                  }`}
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-2 mt-5">
                <label className="font-semibold">
                  Subject <span className="text-red-600">*</span>
                </label>
                <input
                  value={subject}
                  onChange={(e) => SetSubject(e.target.value)}
                  className={`border-4 px-3 py-2 w-full outline-none  ${
                    subject ? "border-[#f06c00]" : "border-[#828282]"
                  }`}
                  type="text"
                  required
                />
              </div>
              <div className="flex flex-col gap-2 mt-5">
                <label className="font-semibold">
                  Your message <span className="text-red-600">*</span>
                </label>
                <textarea
                  value={message}
                  onChange={(e) => SetMessage(e.target.value)}
                  className={`border-4 px-3 py-2 w-full outline-none  h-40 ${
                    message ? "border-[#f06c00]" : "border-[#828282]"
                  }`}
                  required
                ></textarea>
              </div>
              <div className="flex flex-col gap-2 mt-5">
                <label
                  className="space-y-5 font-semibold cursor-pointer"
                  htmlFor="attachimage"
                >
                  <p>Attach an image (optional)</p>
                  <div className="border-dashed border-[#828282] border w-full h-52 flex justify-center items-center flex-col gap-2">
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
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p>Drop your file here or click to upload</p>
                  </div>
                </label>
                <input
                  className="hidden"
                  id="attachimage"
                  type="file"
                  onChange={handleFileChange}
                />
                {selectedFile && (
                  <div className="mt-2 flex items-center gap-5 font-EB">
                    <p className="text-lg text-green-600">
                      Selected File: {selectedFile}
                    </p>
                    <button
                      onClick={handleRemoveFile}
                      className="text-red-500 text-lg font-semibold"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill="#000"
                          d="M2.93 17.07A10 10 0 1 1 17.07 2.93A10 10 0 0 1 2.93 17.07M11.4 10l2.83-2.83l-1.41-1.41L10 8.59L7.17 5.76L5.76 7.17L8.59 10l-2.83 2.83l1.41 1.41L10 11.41l2.83 2.83l1.41-1.41L11.41 10z"
                        />
                      </svg>
                    </button>
                  </div>
                )}
              </div>

              <button
                className="bg-[#F06C00] text-white mt-8 px-8 py-2 disabled:opacity-50"
                disabled={loading}
              >
                {loading ? "Submitting" : "Submit"}
              </button>
            </form>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            {success && (
              <p className="text-green-500 mt-4">
                Your message has been sent successfully!
              </p>
            )}
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
