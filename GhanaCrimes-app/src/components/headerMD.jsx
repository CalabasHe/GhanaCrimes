import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useContext } from "react";
import AdvertisementSection from "../components/adsComponents";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/context";
import { fetchNewsTopics } from "../api/newsReadAPI";
import TopicList from "../components/sideMenuTopicList";
import SearchBar from "./searchbar";

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
  const [showSearch, setShowSearch] = useState(false);

  const navigate = useNavigate();

  const searchBarRef = useRef(null);

  const handleClickOutside = (event) => {
    if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
      setShowSearch(false);
    }
  };

  useEffect(() => {
    if (showSearch) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSearch]);

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

        navigate("/"); // Redirect to the home page
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
    setIsOpen(false);
  };

  const handleTopicClick = (slug) => {
    setIsOpen(false);
    navigate(`/topics/${slug}`);
  };
  const handleLinksClose = () => {
    setIsOpen(false);
  };
  const switchToLogin = () => {
    setIsCreatingAccount(false);
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    setIsOpen(false);
    setIsLoginOpen(true);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setShowSearch(false);
    }
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
    <main className="hidden md:block  sticky bg-white z-30 -top-[310px] px-3">
      <div
        onKeyDown={handleKeyDown}
        className={`${
          !showSearch && "hidden"
        } fixed inset-0 min-h-full bg-black/80`}
      >
        <div className="flex h-2/3 items-center justify-center pt-20">
          <div ref={searchBarRef}>
            <SearchBar id="searchBar" showing={showSearch} />
          </div>
        </div>
      </div>
      <AdvertisementSection />
      {/* Logo */}
      <Link className="flex justify-center mt-6" to="/">
        <p className="font-EB font-black lg:text-[44px] text-[#f06c00]">
          GHANACRIMES
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

          <button
            onClick={() => {
              if (!showSearch) {
                setShowSearch(true);
              } else {
                setShowSearch(false);
              }
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 1024 1024"
              id="searchIcon"
            >
              <path
                fill="#666"
                d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1S492.1 112 412 112s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6M570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4"
              ></path>
            </svg>
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 justify-start text-xs md:text-sm hidden xl:flex">
          <div className="space-x-5 text-[#828282] font-semibold">
            {/* {fetch && (
              
            )} */}
            {topicData.length > 0 &&
              topicData.slice(0, 5).map(
                (topic) =>
                  topic.news_count > 0 && (
                    <Link
                      className="text-nowrap"
                      key={topic.id}
                      to={`/topics/${topic.slug}`}
                    >
                      {topic.name.toUpperCase()}
                    </Link>
                  )
              )}
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
          <Link
            to="/my-account"
            className="text-[#828282] font-semibold text-sm cursor-pointer self-end"
          >
            My account
          </Link>
        )}
      </div>

      <hr className="w-full mt-6" />

      {/* Side Menu */}
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } fixed top-0 left-0 lg:w-3/12 w-3/6 h-full bg-white overflow-y-scroll text-black transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex  mr-3 flex-col items-start p-5 space-y-4">
          {/* {!isLoggedIn ? (
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
          )} */}
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

          <nav className="w-full flex flex-col gap-4">
            <p className="text-[#828282] text-xl font-semibold leading-none">
              Topics
            </p>
            <hr />
            <div className="ml-5">
              <TopicList topicData={topicData} />
            </div>

            <hr />
          </nav>
          <div className="ml-5 space-y-4">
            <Link
              onClick={handleLinksClose}
              to={"/about-us"}
              className="flex space-x-2 text-lg text-[#828282] font-medium items-center"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={22.5}
                  height={24}
                  viewBox="0 0 15 16"
                >
                  <path
                    fill="#828282"
                    d="M7.5 7a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5m0-4C6.67 3 6 3.67 6 4.5S6.67 6 7.5 6S9 5.33 9 4.5S8.33 3 7.5 3"
                  ></path>
                  <path
                    fill="#828282"
                    d="M13.5 11c-.28 0-.5-.22-.5-.5s.22-.5.5-.5s.5-.22.5-.5A2.5 2.5 0 0 0 11.5 7h-1c-.28 0-.5-.22-.5-.5s.22-.5.5-.5c.83 0 1.5-.67 1.5-1.5S11.33 3 10.5 3c-.28 0-.5-.22-.5-.5s.22-.5.5-.5A2.5 2.5 0 0 1 13 4.5c0 .62-.22 1.18-.6 1.62c1.49.4 2.6 1.76 2.6 3.38c0 .83-.67 1.5-1.5 1.5m-12 0C.67 11 0 10.33 0 9.5c0-1.62 1.1-2.98 2.6-3.38c-.37-.44-.6-1-.6-1.62A2.5 2.5 0 0 1 4.5 2c.28 0 .5.22.5.5s-.22.5-.5.5C3.67 3 3 3.67 3 4.5S3.67 6 4.5 6c.28 0 .5.22.5.5s-.22.5-.5.5h-1A2.5 2.5 0 0 0 1 9.5c0 .28.22.5.5.5s.5.22.5.5s-.22.5-.5.5m9 3h-6c-.83 0-1.5-.67-1.5-1.5v-1C3 9.57 4.57 8 6.5 8h2c1.93 0 3.5 1.57 3.5 3.5v1c0 .83-.67 1.5-1.5 1.5m-4-5A2.5 2.5 0 0 0 4 11.5v1c0 .28.22.5.5.5h6c.28 0 .5-.22.5-.5v-1A2.5 2.5 0 0 0 8.5 9z"
                  ></path>
                </svg>
              </div>
              <p>About us</p>
            </Link>
            <Link
              onClick={handleLinksClose}
              to={"/contact-us"}
              className="flex space-x-2 text-lg text-[#828282] font-medium items-center"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="#828282"
                    d="M15 2.5H1a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1m-1.3 1.25L8.42 8.56a.62.62 0 0 1-.84 0L2.3 3.75zm-12.45 8.5V4.48l5.49 5a1.86 1.86 0 0 0 2.52 0l5.49-5v7.77z"
                  ></path>
                </svg>
              </div>
              <p>Contact us</p>
            </Link>
            <Link
              onClick={handleLinksClose}
              to={"/advertisement-request"}
              className="flex space-x-2 text-lg text-[#828282] font-medium items-center"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#828282"
                    d="M5.5 7A1.5 1.5 0 0 1 4 5.5A1.5 1.5 0 0 1 5.5 4A1.5 1.5 0 0 1 7 5.5A1.5 1.5 0 0 1 5.5 7m15.91 4.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.11 0-2 .89-2 2v7c0 .55.22 1.05.59 1.41l8.99 9c.37.36.87.59 1.42.59s1.05-.23 1.41-.59l7-7c.37-.36.59-.86.59-1.41c0-.56-.23-1.06-.59-1.42"
                  ></path>
                </svg>
              </div>
              <p>Advertise with us</p>
            </Link>
          </div>
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
                </div>
                <form onSubmit={handleSubmit}>
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

                    <div className="flex items-center gap-1">
                      <input
                        className="translate-y-0.5 cursor-pointer"
                        type="radio"
                        name="gender"
                        id="m"
                        value="m"
                        checked={gender === "m"}
                        onChange={handleGenderMale}
                        required
                      />
                      <label htmlFor="m">Male</label>
                    </div>
                    <div className="flex items-center gap-1">
                      <input
                        className="translate-y-0.5 cursor-pointer "
                        type="radio"
                        name="gender"
                        id="f"
                        value="f"
                        checked={gender === "f"}
                        onChange={handleGenderFemale}
                        required
                      />
                      <label htmlFor="f">Female</label>
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
                        d="M22 2.25h-3.25V.75a.75.75 0 0 0-1.5-.001V2.25h-4.5V.75a.75.75 0 0 0-1.5-.001V2.25h-4.5V.75a.75.75 0 0 0-1.5-.001V2.25H2a2 2 0 0 0-2 1.999v17.75a2 2 0 0 0 2 2h20a2 2 0 0 0 2-1.999V4.25a2 2 0 0 0-2-2zM2 4.25h3.25V5.75a.75.75 0 1 0 1.5-.001V4.25h4.5V5.75a.75.75 0 1 0 1.5-.001V4.25h4.5V5.75a.75.75 0 1 0 1.5-.001V4.25H22c.278 0 .5.222.5.499V7.5H1.5V4.75A.75.75 0 0 1 2 4.25zm20 19H2a.5.5 0 0 1-.5-.5V9h21v13.75a.5.5 0 0 1-.5.5z"
                      />
                    </svg>
                    <input
                      className="border-none outline-none"
                      type="date"
                      name="dob"
                      placeholder="Date of Birth"
                      onChange={handleDateChange}
                      id="dob"
                      required
                    />
                  </div>

                  <button
                    className="bg-[#f06c00] hover:bg-gray-700 w-full text-white p-3 mt-7 rounded-full"
                    type="submit"
                  >
                    {isloading ? "Signing up " : "Sign up"}
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
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
};

export default HeaderMD;
