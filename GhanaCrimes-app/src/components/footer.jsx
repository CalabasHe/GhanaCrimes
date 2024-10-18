const Footer = () => {
  return (
    <>
      <footer className="flex mt-10 grow m-0 w-full bg-[#404040] px-6 py-12 md:px-14 lg:px-[10%]">
        <div className="flex flex-col gap-10 text-sm text-white">
          <p className="text-lg font-semibold">
            {" "}
            ©2024 <span className="text-xl font-bold">GhanaCrimes</span>{" "}
          </p>

          <section className="subpixel-antialiased flex flex-col gap-6 leading-relaxed  md:grid md:grid-cols-2 md:gap-7 lg:gap-8 ">
            <article>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
              iure, expedita ullam ipsum adipisci sit nobis illum, quos quam
              perferendis in. Autem magni dolores et corrupti aperiam saepe!
              Reiciendis, in?
            </article>

            <address className="flex flex-col gap-4 text-xs lg:text-sm">
              <a
                className="flex items-center gap-2 "
                // href={`tel:${companyInfo.phoneNumber}`}
                target="_blank"
                title="calabashe phone number"
              >
                {/* <FaPhoneAlt /> <span> {companyInfo.phoneNumber}</span> */}
              </a>
              <a
                className="flex items-center gap-2 "
                // href={`mailto:${companyInfo.email}`}
                target="_blank"
                title="calabashe email"
              >
                {/* <FaMailBulk /> <span>{companyInfo.email}</span> */}
              </a>
              <p className="flex items-center gap-2 ">
                {/* <FaMapPin />{" "} */}
                <span></span>{" "}
              </p>
            </address>
          </section>

          <div className="flex flex-col md:flex-row gap-3">
            <svg
              className="ml-2 w-7  md:ml-0 "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path
                d="M23.1818 5.45757H24.5454V6.82103C24.5454 7.18265 24.6891 7.52945 24.9448 7.78515C25.2005 8.04085 25.5474 8.1845 25.909 8.1845C26.2707 8.1845 26.6175 8.04085 26.8733 7.78515C27.129 7.52945 27.2727 7.18265 27.2727 6.82103V5.45757H28.6363C28.998 5.45757 29.3448 5.31391 29.6005 5.05821C29.8563 4.80252 29.9999 4.45571 29.9999 4.0941C29.9999 3.73248 29.8563 3.38568 29.6005 3.12998C29.3448 2.87428 28.998 2.73063 28.6363 2.73063H27.2727V1.36716C27.2727 1.00555 27.129 0.658743 26.8733 0.403043C26.6175 0.147343 26.2707 0.00369239 25.909 0.00369239C25.5474 0.00369239 25.2005 0.147343 24.9448 0.403043C24.6891 0.658743 24.5454 1.00555 24.5454 1.36716V2.73063H23.1818C22.8201 2.73063 22.4733 2.87428 22.2175 3.12998C21.9618 3.38568 21.8181 3.73248 21.8181 4.0941C21.8181 4.45571 21.9618 4.80252 22.2175 5.05821C22.4733 5.31391 22.8201 5.45757 23.1818 5.45757ZM8.18181 8.1845V21.8192C8.18181 22.1808 8.32547 22.5276 8.58121 22.7833C8.83694 23.039 9.18378 23.1827 9.54544 23.1827C9.9071 23.1827 10.2539 23.039 10.5097 22.7833C10.7654 22.5276 10.9091 22.1808 10.9091 21.8192V8.1845C10.9091 7.82289 10.7654 7.47608 10.5097 7.22038C10.2539 6.96468 9.9071 6.82103 9.54544 6.82103C9.18378 6.82103 8.83694 6.96468 8.58121 7.22038C8.32547 7.47608 8.18181 7.82289 8.18181 8.1845ZM28.0909 10.9114C27.9153 10.9472 27.7486 11.0172 27.6002 11.1174C27.4517 11.2177 27.3245 11.3462 27.2257 11.4956C27.1269 11.645 27.0585 11.8124 27.0245 11.9882C26.9904 12.164 26.9914 12.3449 27.0272 12.5203C27.5596 15.1057 27.2441 17.7939 26.1274 20.1858C25.0107 22.5777 23.1524 24.5457 20.8283 25.7979C18.5043 27.05 15.8384 27.5195 13.2263 27.1365C10.6143 26.7536 8.19533 25.5387 6.32858 23.6722C4.46184 21.8057 3.2468 19.387 2.86382 16.7753C2.48084 14.1636 2.95034 11.498 4.20263 9.1742C5.45492 6.85042 7.42324 4.99235 9.8154 3.87579C12.2076 2.75922 14.8961 2.4437 17.4818 2.97605C17.8434 3.04838 18.219 2.97409 18.5259 2.76953C18.8328 2.56497 19.0458 2.24689 19.1181 1.88528C19.1905 1.52366 19.1162 1.14813 18.9116 0.841291C18.707 0.534451 18.3889 0.321439 18.0272 0.249117C17.0293 0.0632095 16.0148 -0.0190358 15 0.00369239C12.0333 0.00369239 9.13317 0.883318 6.66644 2.53134C4.19971 4.17935 2.27712 6.52175 1.14181 9.2623C0.0064993 12.0029 -0.29055 15.0185 0.288227 17.9278C0.867004 20.8372 2.29561 23.5096 4.3934 25.6071C6.49118 27.7047 9.16392 29.1331 12.0736 29.7118C14.9833 30.2905 17.9993 29.9935 20.7402 28.8583C23.4811 27.7232 25.8238 25.8008 27.472 23.3344C29.1202 20.8679 29.9999 17.9682 29.9999 15.0018C30.0028 13.9943 29.9023 12.9892 29.6999 12.0022C29.6673 11.8243 29.5995 11.6546 29.5006 11.5031C29.4017 11.3516 29.2737 11.2213 29.1239 11.1198C28.9742 11.0183 28.8057 10.9476 28.6283 10.9118C28.451 10.876 28.2683 10.8759 28.0909 10.9114ZM13.6363 10.9114V12.2749C13.6424 13.2839 14.0212 14.2552 14.7 15.0018C14.0212 15.7485 13.6424 16.7197 13.6363 17.7288V19.0922C13.6363 20.1771 14.0673 21.2175 14.8345 21.9846C15.6017 22.7517 16.6423 23.1827 17.7272 23.1827H19.0909C20.1758 23.1827 21.2164 22.7517 21.9836 21.9846C22.7508 21.2175 23.1818 20.1771 23.1818 19.0922V17.7288C23.1758 16.7197 22.7969 15.7485 22.1181 15.0018C22.7969 14.2552 23.1758 13.2839 23.1818 12.2749V10.9114C23.1818 9.8266 22.7508 8.78619 21.9836 8.01909C21.2164 7.25199 20.1758 6.82103 19.0909 6.82103H17.7272C16.6423 6.82103 15.6017 7.25199 14.8345 8.01909C14.0673 8.78619 13.6363 9.8266 13.6363 10.9114ZM20.4545 19.0922C20.4545 19.4539 20.3108 19.8007 20.0551 20.0564C19.7994 20.3121 19.4525 20.4557 19.0909 20.4557H17.7272C17.3656 20.4557 17.0187 20.3121 16.763 20.0564C16.5073 19.8007 16.3636 19.4539 16.3636 19.0922V17.7288C16.3636 17.3672 16.5073 17.0204 16.763 16.7647C17.0187 16.509 17.3656 16.3653 17.7272 16.3653H19.0909C19.4525 16.3653 19.7994 16.509 20.0551 16.7647C20.3108 17.0204 20.4545 17.3672 20.4545 17.7288V19.0922ZM20.4545 10.9114V12.2749C20.4545 12.6365 20.3108 12.9833 20.0551 13.239C19.7994 13.4947 19.4525 13.6384 19.0909 13.6384H17.7272C17.3656 13.6384 17.0187 13.4947 16.763 13.239C16.5073 12.9833 16.3636 12.6365 16.3636 12.2749V10.9114C16.3636 10.5498 16.5073 10.203 16.763 9.94732C17.0187 9.69162 17.3656 9.54797 17.7272 9.54797H19.0909C19.4525 9.54797 19.7994 9.69162 20.0551 9.94732C20.3108 10.203 20.4545 10.5498 20.4545 10.9114Z"
                fill="white"
              />
            </svg>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p>
              The information provided on the site cannot be used to make a
              diagnosis, prescribe treatment and does not replace a doctor's
              appointment.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
