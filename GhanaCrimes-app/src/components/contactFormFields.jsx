const ContactFormField = () => {
  return (
    <main className="mt-8">
      <div className="grid md:grid-cols-2 gap-3">
        <div className="border p-8 ">
          <p className="text-lg md:text-2xl font-EB text-[#f06c00] font-bold">
            How can we help you?
          </p>
          <p className="my-4">Tell us why you want to contact us</p>
          <form className="space-y-4" action="">
            <input
              required
              className="border px-3 py-2 w-full outline-none"
              placeholder="Full Name"
              type="text"
              id="full_name"
              name="full_name"
            />
            <input
              required
              className="border px-3 py-2 w-full outline-none"
              placeholder="Email"
              type="email"
              id="email"
              name="email"
            />
            <input
              required
              className="border px-3 py-2 w-full outline-none"
              placeholder="Title"
              type="text"
              id="title"
              name="title"
            />
            <textarea
              className="border px-3 py-2 w-full outline-none h-52"
              name="description"
              id=""
            ></textarea>
            <button className="border p-4 bg-[#f06c00] text-white">
              Send message
            </button>
          </form>
        </div>
        <div className="border p-8 ">
          <p className="text-lg md:text-2xl font-EB text-[#f06c00] font-bold">
            Digital subscriptions
          </p>
          <div className="my-4 space-y-4">
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path
                  fill="black"
                  d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"
                ></path>
              </svg>
              <p>+233 54677890</p>
            </div>
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path
                  fill="black"
                  d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"
                ></path>
              </svg>
              <p>help@ghanacrimes.com</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactFormField;
