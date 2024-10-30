import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useContext } from "react";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/context";
import { fetchNewsTopics } from "../api/newsReadAPI";

const HeaderMD = () => {
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);
  const [first_name, setFirstname] = useState();
  const [last_name, setLastname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const [dob, Setdate] = useState();
  const [error, SetErrors] = useState([]);
  const [gender, SetGender] = useState("f");
  const [dobError, setDobError] = useState(false);
  const [emailError, SetEmailErorr] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [isloading, SetLoading] = useState(false);
  const [loginPassword, SetLoginPassword] = useState("");
  const [loginEmail, SetLoginEmail] = useState("");
  const [topics, setTopics] = useState([]);

  const navigate = useNavigate();

  const {
    isOpen,
    setIsOpen,
    isLoggedIn,
    setIsLoggedIn,
    handleLogout,
    isLoginOpen,
    setIsLoginOpen,
    topicData,
    fetch,
  } = useContext(AuthContext);

  useEffect(() => {
    // Check if access token exists in local storage
    const token = localStorage.getItem("faccess_token");
    setIsLoggedIn(token !== null);
  }, []); // Empty dependency array to run once on component mount

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form submission
    setIsLoginOpen(true); // Show login UI/modal

    console.log("Logging in with:", loginEmail, loginPassword); // Log entered email and password

    try {
      SetLoading(true); // Ensure correct state function is called

      // Make the POST request to the server with email and password
      const response = await axios.post(
        "https://ghanacrimes-api.onrender.com/api/auth/login/",
        {
          email: loginEmail,
          password: loginPassword,
        }
      );

      // Log the entire response object for debugging
      console.log("Login Response: ", response);

      // Check if the response status indicates successful login
      if (response.status === 200) {
        const { access, refresh } = response.data; // Destructure the tokens from the response
        toStorage(access, refresh); // Store tokens in localStorage
        setIsLoginOpen(false);
        setIsOpen(false);

        setIsLoggedIn(true); // Update login state
        console.log(isLoggedIn);

        console.log();

        navigate("/home"); // Redirect to the home page
        window.location.reload();
        alert("Login successful");
      } else {
        alert("Unexpected response from the server."); // If status is not 200
      }
    } catch (error) {
      // Log the entire error object
      console.error("Error Object: ", error);

      // If response exists, log its details
      if (error.response) {
        console.log("Error Response Data: ", error.response.data);
        console.log("Error Response Status: ", error.response.status);

        // Handle specific status codes
        if (error.response.status === 401) {
          alert("Invalid password or email. Please try again."); // Handle wrong credentials
        } else if (error.response.status === 400) {
          alert("Bad request. Please check your input."); // Handle bad requests
        } else {
          alert("An unexpected error occurred."); // Handle other errors
        }
      } else {
        console.log("Error Message: ", error.message);
        alert("An unexpected error occurred."); // Handle network errors
      }
    } finally {
      SetLoading(false); // Ensure correct state function is called
    }
  };

  const toStorage = (access, refresh) => {
    localStorage.setItem("faccess_token", access);
    localStorage.setItem("refresh_token", refresh);
  };

  const handleGenderMale = (e) => {
    SetGender("m");
    console.log(gender);
  };

  const handleGenderFemale = (e) => {
    SetGender("f");
    console.log(gender);
  };

  const handleFirstnameChange = (e) => {
    setFirstname(e.target.value);
  };
  const handleLastnameChange = (e) => {
    setLastname(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleDateChange = (e) => {
    Setdate(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    SetLoading(true);
    try {
      const response = await axios.post(
        "https://ghanacrimes-api.onrender.com/api/auth/signup/",
        {
          first_name,
          last_name,
          email,
          password,
          dob,
          gender,
        }
      );

      console.log(response.data);
      setFirstname("");
      setLastname("");
      setEmail("");
      setPassword("");
      Setdate("");
      setIsCreatingAccount(false);
      setIsLoginOpen(false);
      SetLoading(false);
    } catch (error) {
      SetErrors(error.response.data);
      console.log(error.response.data);
      SetLoading(false);
    }
    SetLoading(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const switchToCreateAccount = () => {
    setIsCreatingAccount(true);
  };

  const switchToLogin = () => {
    setIsCreatingAccount(false);
  };

  const handleLoginClick = (e) => {
    e.preventDefault();

    setIsLoginOpen(true);
  };

  const getTopics = async () => {
    try {
      const topicData = await fetchNewsTopics();
      setTopics(topicData.results);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getTopics();
  }, []);

  return (
    <main className="hidden md:block px-[5%]">
      {/* Logo */}
      <Link className="flex justify-center mt-6" to="/home">
        <p className="font-EB font-bold lg:text-4xl text-[#f06c00]">
          GhanaCrimes
        </p>
      </Link>

      {/* Navbar Wrapper */}
      <div className="flex flex-wrap justify-between space-x-4 mt-6 items-center text-lg">
        {/* Left Section (Menu Toggle + Search) */}
        <div className="flex items-center lg:space-x-4">
          <div>
            <svg
              onClick={toggleMenu}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className="cursor-pointer"
              fill="none"
            >
              <path
                stroke="#666"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2.5 10h15M2.5 5h15M2.323 14.986h10"
              />
            </svg>
          </div>

          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 1024 1024"
            >
              <path
                fill="#666"
                d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1S492.1 112 412 112s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6M570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4"
              ></path>
            </svg>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 justify-start md:text-sm hidden lg:flex">
          <div className="space-x-5 text-[#828282] font-semibold">
            {/* {fetch && (
              
            )} */}
            {topicData.length > 0 &&
              topicData.slice(0, 5).map((topic) => (
                <Link key={topic.id} to={`/topics/${topic.slug}`}>
                  {topic.name.toUpperCase()}
                </Link>
              ))}
          </div>
        </nav>

        {/* Right Section (Login + Create an account) */}

        {!isLoggedIn ? (
          <div className="flex self-end items-center gap-3">
            <div
              className="text-[#828282] text-base font-semibold cursor-pointer"
              onClick={handleLoginClick}
            >
              Log in
            </div>
            <div
              className="bg-[#f06c00] text-white rounded-full px-4 py-2 font-semibold text-sm cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                setIsLoginOpen(true);
                switchToCreateAccount();
              }}
            >
              Create an account
            </div>
          </div>
        ) : (
          <button
            onClick={handleLogout}
            className="bg-[#f06c00] text-white rounded-full px-4 py-2 font-semibold text-sm cursor-pointer self-end"
          >
            {isloading ? "Signing out " : "Sign out"}
          </button>
        )}
      </div>

      <hr className="w-full mt-6" />

      {/* Side Menu */}
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } fixed top-0 left-0 lg:w-3/12 w-3/6 h-full bg-white text-black transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex lg:mt-[120px] mt-[70px] mr-3 flex-col items-start p-5 space-y-4">
          {!isLoggedIn ? (
            <div className="flex self-end items-center gap-3">
              <div
                className="text-[#828282] text-base font-semibold cursor-pointer"
                onClick={handleLoginClick}
              >
                Log in
              </div>
              <div
                className="bg-[#f06c00] text-white rounded-full px-4 py-2 font-semibold text-sm cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  setIsLoginOpen(true);
                  switchToCreateAccount();
                }}
              >
                Create an account
              </div>
            </div>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-[#f06c00] text-white rounded-full px-14 py-2 font-semibold text-sm cursor-pointer self-end"
            >
              {isloading ? "Signing out " : "Sign out"}
            </button>
          )}
          <button onClick={toggleMenu} className="self-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 0 32 32"
            >
              <path
                fill="black"
                d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m5.4 21L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"
              />
            </svg>
          </button>
          <p className="text-lg font-semibold">Topics</p>

          <nav>
            <div className="text-lg ml-8 flex-col flex space-y-4">
              {topicData.length > 0 &&
                topicData.slice(0, 5).map((topic) => (
                  <Link key={topic.id} to={`/topics/${topic.slug}`}>
                    {topic.name.toUpperCase()}
                  </Link>
                ))}
            </div>
          </nav>
        </div>
      </div>

      {/* Backdrop */}
      <div
        className={`${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ease-in-out`}
      ></div>
      {isLoginOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-y-auto ">
          <div className="bg-white p-6 relative w-11/12 max-w-md max-h-[90vh] overflow-y-auto ">
            <p className="text-[#f06c00] font-EB font-bold text-4xl text-center pt-7 ">
              GhanaCrimes
            </p>
            <button
              onClick={() => setIsLoginOpen(false)}
              className="absolute top-4 right-4 text-lg text-red-600 hover:text-red-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 32 32"
              >
                <path
                  fill="black"
                  d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m5.4 21L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"
                />
              </svg>
            </button>
            {isCreatingAccount ? (
              // Create Account Section
              <div>
                <p className="font-semibold text-lg mt-6">Create Account</p>
                <div className="text-[#f06c00] flex justify-between">
                  <Link onClick={switchToLogin}>
                    or log in an existing account
                  </Link>

                  <Link>Log in help</Link>
                </div>
                <form onSubmit={handleLogin}>
                  <div className="flex border border-black mt-11 p-3 rounded-full space-x-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="black"
                        fillRule="evenodd"
                        d="M12 4a8 8 0 0 0-6.96 11.947A4.99 4.99 0 0 1 9 14h6a4.99 4.99 0 0 1 3.96 1.947A8 8 0 0 0 12 4m7.943 14.076q.188-.245.36-.502A9.96 9.96 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12a9.96 9.96 0 0 0 2.057 6.076l-.005.018l.355.413A9.98 9.98 0 0 0 12 22q.324 0 .644-.02a9.95 9.95 0 0 0 5.031-1.745a10 10 0 0 0 1.918-1.728l.355-.413zM12 6a3 3 0 1 0 0 6a3 3 0 0 0 0-6"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <input
                      className="border-none outline-none"
                      type="text"
                      name="first_name"
                      placeholder="First Name"
                      onChange={handleFirstnameChange}
                      required
                    />
                  </div>
                  {/* {!first_name ? (
                    <p className="text-red-500 mt-2">
                      {" "}
                      *This fill is required{" "}
                    </p>
                  ) : (
                    <></>
                  )} */}
                  <div className="flex border border-black mt-6 p-3 rounded-full space-x-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="black"
                        fillRule="evenodd"
                        d="M12 4a8 8 0 0 0-6.96 11.947A4.99 4.99 0 0 1 9 14h6a4.99 4.99 0 0 1 3.96 1.947A8 8 0 0 0 12 4m7.943 14.076q.188-.245.36-.502A9.96 9.96 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12a9.96 9.96 0 0 0 2.057 6.076l-.005.018l.355.413A9.98 9.98 0 0 0 12 22q.324 0 .644-.02a9.95 9.95 0 0 0 5.031-1.745a10 10 0 0 0 1.918-1.728l.355-.413zM12 6a3 3 0 1 0 0 6a3 3 0 0 0 0-6"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <input
                      className="border-none outline-none"
                      type="text"
                      name="last_name"
                      placeholder="Last Name"
                      onChange={handleLastnameChange}
                      required
                    />
                  </div>
                  {/* {!last_name ? (
                    <p className="text-red-500 mt-2">
                      {" "}
                      *This fill is required{" "}
                    </p>
                  ) : (
                    <></>
                  )} */}
                  <div className="flex border border-black mt-6 p-3 rounded-full space-x-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="black"
                        d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z"
                      />
                    </svg>
                    <input
                      className="border-none outline-none"
                      type="email"
                      name="email"
                      placeholder="Email"
                      onChange={handleEmailChange}
                      required
                      id="email"
                    />
                  </div>
                  <div>
                    {!email ? (
                      <p className="text-red-500 mt-2">
                        {" "}
                        *Email fill is required{" "}
                      </p>
                    ) : (
                      <></>
                    )}
                    {error.email ? (
                      <p className="text-red-500 mt-2">
                        *This email is already in use
                      </p>
                    ) : (
                      <></>
                    )}{" "}
                  </div>
                  <div className="flex border border-black mt-6 p-3 rounded-full space-x-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="black"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zm3-2V7a4 4 0 1 1 8 0v4m-1 5h.01m-3 0h.01m-3 0h.01"
                      ></path>
                    </svg>
                    <input
                      className="border-none outline-none"
                      type="password"
                      placeholder="Password"
                      name="password"
                      onChange={handlePasswordChange}
                      id="password"
                      required
                    />
                  </div>
                  <div>
                    {!password ? (
                      <p className="text-red-500 mt-2">
                        {" "}
                        *Password fill is required{" "}
                      </p>
                    ) : (
                      <></>
                    )}
                    {error.password && (
                      <p className="text-red-500 mt-2">
                        *Ensure this field has at least 8 characters
                      </p>
                    )}
                  </div>
                  <div className="flex border border-black mt-6 p-3 rounded-full space-x-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="black"
                        fillRule="evenodd"
                        d="M8 7a4 4 0 1 1 8 0a4 4 0 0 1-8 0m0 6a5 5 0 0 0-5 5a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3a5 5 0 0 0-5-5z"
                        clipRule="evenodd"
                      ></path>
                    </svg>

                    <div>
                      <input
                        type="radio"
                        name="gender"
                        id="m"
                        value="m"
                        checked={gender === "m"}
                        onChange={handleGenderMale}
                        required
                      />
                      <label for="male">Male</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name="gender"
                        id="f"
                        value="f"
                        checked={gender === "f"}
                        onChange={handleGenderFemale}
                        required
                      />
                      <label for="male">Female</label>
                    </div>
                  </div>

                  <div className="flex border border-black mt-6 p-3 rounded-full space-x-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="black"
                        d="M22 2.25h-3.25V.75a.75.75 0 0 0-1.5-.001V2.25h-4.5V.75a.75.75 0 0 0-1.5-.001V2.25h-4.5V.75a.75.75 0 0 0-1.5-.001V2.25H2a2 2 0 0 0-2 1.999v17.75a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V4.249a2 2 0 0 0-2-1.999M22.5 22a.5.5 0 0 1-.499.5H2a.5.5 0 0 1-.5-.5V4.25a.5.5 0 0 1 .5-.499h3.25v1.5a.75.75 0 0 0 1.5.001V3.751h4.5v1.5a.75.75 0 0 0 1.5.001V3.751h4.5v1.5a.75.75 0 0 0 1.5.001V3.751H22a.5.5 0 0 1 .499.499z"
                      ></path>
                      <path
                        fill="black"
                        d="M5.25 9h3v2.25h-3zm0 3.75h3V15h-3zm0 3.75h3v2.25h-3zm5.25 0h3v2.25h-3zm0-3.75h3V15h-3zm0-3.75h3v2.25h-3zm5.25 7.5h3v2.25h-3zm0-3.75h3V15h-3zm0-3.75h3v2.25h-3z"
                      ></path>
                    </svg>
                    <input
                      className="border-none outline-none"
                      type="date"
                      placeholder="DOB"
                      name="dob"
                      onChange={handleDateChange}
                      required
                    />
                  </div>
                  <p className="text-center mt-11 text-[#828282]">
                    Or continue with
                  </p>
                  <div className="flex justify-center mt-2">
                    <div className="border rounded-full p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        viewBox="0 0 48 48"
                      >
                        <path
                          fill="#ffc107"
                          d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917"
                        ></path>
                        <path
                          fill="#ff3d00"
                          d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691"
                        ></path>
                        <path
                          fill="#4caf50"
                          d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.9 11.9 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44"
                        ></path>
                        <path
                          fill="#1976d2"
                          d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <button
                    className="rounded-full w-full bg-[#f06c00] mt-6 p-3 text-center text-white"
                    onClick={handleSubmit}
                  >
                    {isloading ? "Signing Up " : "Sign Up"}
                  </button>
                </form>

                {error.message}
              </div>
            ) : (
              // Login section
              <div>
                <div>
                  <p className="font-semibold mt-6 text-lg">Log in</p>
                  <div className="text-[#f06c00] flex justify-between">
                    <Link onClick={switchToCreateAccount}>
                      or create account
                    </Link>

                    <Link>Log in help</Link>
                  </div>
                </div>
                <form onSubmit={handleLogin}>
                  <div className="flex border border-black mt-11 p-3 rounded-full space-x-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="black"
                        d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z"
                      />
                    </svg>
                    <input
                      className="border-none outline-none"
                      type="email"
                      name=""
                      id=""
                      placeholder="Email"
                      onChange={(e) => SetLoginEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex border border-black mt-6 p-3 rounded-full space-x-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="black"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zm3-2V7a4 4 0 1 1 8 0v4m-1 5h.01m-3 0h.01m-3 0h.01"
                      ></path>
                    </svg>
                    <input
                      className="border-none outline-none"
                      type="password"
                      name=""
                      id=""
                      placeholder="Password"
                      onChange={(e) => SetLoginPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex justify-between mt-4">
                    <div className="flex space-x-3">
                      <input type="checkbox" name="" id="" />
                      <p>Stay logged in</p>
                    </div>
                    <Link className="text-[#f06c00]">I forgot my password</Link>
                  </div>
                  <button
                    className="rounded-full w-full bg-[#f06c00] mt-6 p-3 text-center text-white"
                    type="submit"
                  >
                    <div>{isloading ? "Signing in " : "Sign in"}</div>
                  </button>
                </form>

                <hr className="mt-11" />
                <p className="text-center mt-11 text-[#828282]">
                  Or continue with
                </p>
                <div className="flex justify-center mt-2">
                  <Link className="border rounded-full p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#ffc107"
                        d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917"
                      ></path>
                      <path
                        fill="#ff3d00"
                        d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691"
                      ></path>
                      <path
                        fill="#4caf50"
                        d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.9 11.9 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44"
                      ></path>
                      <path
                        fill="#1976d2"
                        d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
};

export default HeaderMD;
