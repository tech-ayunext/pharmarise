import React from "react";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[rgba(0,33,69,1)] flex w-full flex-col items-stretch pt-[50px] sm:pt-[70px] lg:pt-[77px] pb-[27px] px-4 sm:px-8 lg:px-14 max-md:max-w-full max-md:pt-[100px] max-md:px-5">
      <div className="self-center w-full max-w-[1353px] max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          {/* Left Column - Logo, Description, Social Icons, Back to Top */}
          <div className="w-full lg:w-6/12 max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col max-md:max-w-full max-md:mt-10">
              {/* Logo */}
              <div className="flex items-start mb-6 justify-start sm:justify-start">
                <img
                  src="/images/PharmaRise logo_footer.png"
                  alt="PharmaRise Innovations LLP"
                  className="max-w-[400px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[550px] xl:max-w-[600px] h-auto object-contain"
                  style={{
                    aspectRatio: "377 / 83",
                  }}
                />
              </div>

              {/* Description */}
              <p
                className="self-stretch mb-6 max-md:max-w-full "
                style={{
                  color: "#FFF",
                  fontFamily: '"Red Hat Text"',
                  fontSize: "20px",
                  fontWeight: 500,
                  lineHeight: "175%",
                }}
              >
                PharmaRise Innovations LLP is a dynamic pharmaceutical marketing
                company dedicated to bridging the gap between high-quality
                pharmaceutical products and healthcare providers.
              </p>

              {/* Social Media Icons */}
              <div className="flex gap-[53px] items-center">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/pharmarise"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1_318)">
                      <path
                        d="M37.0391 0H2.95312C1.32031 0 0 1.28906 0 2.88281V37.1094C0 38.7031 1.32031 40 2.95312 40H37.0391C38.6719 40 40 38.7031 40 37.1172V2.88281C40 1.28906 38.6719 0 37.0391 0ZM11.8672 34.0859H5.92969V14.9922H11.8672V34.0859ZM8.89844 12.3906C6.99219 12.3906 5.45312 10.8516 5.45312 8.95312C5.45312 7.05469 6.99219 5.51562 8.89844 5.51562C10.7969 5.51562 12.3359 7.05469 12.3359 8.95312C12.3359 10.8438 10.7969 12.3906 8.89844 12.3906ZM34.0859 34.0859H28.1562V24.8047C28.1562 22.5938 28.1172 19.7422 25.0703 19.7422C21.9844 19.7422 21.5156 22.1562 21.5156 24.6484V34.0859H15.5938V14.9922H21.2812V17.6016H21.3594C22.1484 16.1016 24.0859 14.5156 26.9688 14.5156C32.9766 14.5156 34.0859 18.4688 34.0859 23.6094V34.0859Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_318">
                        <rect width="40" height="40" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/pharmarise"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_1_317)">
                      <path
                        d="M20 3.60156C25.3438 3.60156 25.9766 3.625 28.0781 3.71875C30.0313 3.80469 31.0859 4.13281 31.7891 4.40625C32.7188 4.76563 33.3906 5.20313 34.0859 5.89844C34.7891 6.60156 35.2188 7.26563 35.5781 8.19531C35.8516 8.89844 36.1797 9.96094 36.2656 11.9062C36.3594 14.0156 36.3828 14.6484 36.3828 19.9844C36.3828 25.3281 36.3594 25.9609 36.2656 28.0625C36.1797 30.0156 35.8516 31.0703 35.5781 31.7734C35.2188 32.7031 34.7813 33.375 34.0859 34.0703C33.3828 34.7734 32.7188 35.2031 31.7891 35.5625C31.0859 35.8359 30.0234 36.1641 28.0781 36.25C25.9688 36.3438 25.3359 36.3672 20 36.3672C14.6563 36.3672 14.0234 36.3438 11.9219 36.25C9.96875 36.1641 8.91406 35.8359 8.21094 35.5625C7.28125 35.2031 6.60938 34.7656 5.91406 34.0703C5.21094 33.3672 4.78125 32.7031 4.42188 31.7734C4.14844 31.0703 3.82031 30.0078 3.73438 28.0625C3.64063 25.9531 3.61719 25.3203 3.61719 19.9844C3.61719 14.6406 3.64063 14.0078 3.73438 11.9062C3.82031 9.95312 4.14844 8.89844 4.42188 8.19531C4.78125 7.26563 5.21875 6.59375 5.91406 5.89844C6.61719 5.19531 7.28125 4.76563 8.21094 4.40625C8.91406 4.13281 9.97656 3.80469 11.9219 3.71875C14.0234 3.625 14.6563 3.60156 20 3.60156ZM20 0C14.5703 0 13.8906 0.0234375 11.7578 0.117188C9.63281 0.210938 8.17188 0.554687 6.90625 1.04688C5.58594 1.5625 4.46875 2.24219 3.35938 3.35938C2.24219 4.46875 1.5625 5.58594 1.04688 6.89844C0.554688 8.17188 0.210938 9.625 0.117188 11.75C0.0234375 13.8906 0 14.5703 0 20C0 25.4297 0.0234375 26.1094 0.117188 28.2422C0.210938 30.3672 0.554688 31.8281 1.04688 33.0938C1.5625 34.4141 2.24219 35.5312 3.35938 36.6406C4.46875 37.75 5.58594 38.4375 6.89844 38.9453C8.17188 39.4375 9.625 39.7812 11.75 39.875C13.8828 39.9688 14.5625 39.9922 19.9922 39.9922C25.4219 39.9922 26.1016 39.9688 28.2344 39.875C30.3594 39.7812 31.8203 39.4375 33.0859 38.9453C34.3984 38.4375 35.5156 37.75 36.625 36.6406C37.7344 35.5312 38.4219 34.4141 38.9297 33.1016C39.4219 31.8281 39.7656 30.375 39.8594 28.25C39.9531 26.1172 39.9766 25.4375 39.9766 20.0078C39.9766 14.5781 39.9531 13.8984 39.8594 11.7656C39.7656 9.64063 39.4219 8.17969 38.9297 6.91406C38.4375 5.58594 37.7578 4.46875 36.6406 3.35938C35.5313 2.25 34.4141 1.5625 33.1016 1.05469C31.8281 0.5625 30.375 0.21875 28.25 0.125C26.1094 0.0234375 25.4297 0 20 0Z"
                        fill="white"
                      />
                      <path
                        d="M20 9.72656C14.3281 9.72656 9.72656 14.3281 9.72656 20C9.72656 25.6719 14.3281 30.2734 20 30.2734C25.6719 30.2734 30.2734 25.6719 30.2734 20C30.2734 14.3281 25.6719 9.72656 20 9.72656ZM20 26.6641C16.3203 26.6641 13.3359 23.6797 13.3359 20C13.3359 16.3203 16.3203 13.3359 20 13.3359C23.6797 13.3359 26.6641 16.3203 26.6641 20C26.6641 23.6797 23.6797 26.6641 20 26.6641Z"
                        fill="white"
                      />
                      <path
                        d="M33.0781 9.32032C33.0781 10.6484 32 11.7188 30.6797 11.7188C29.3516 11.7188 28.2812 10.6406 28.2812 9.32032C28.2812 7.99219 29.3594 6.92188 30.6797 6.92188C32 6.92188 33.0781 8 33.0781 9.32032Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_317">
                        <rect width="40" height="40" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/pharmarise"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      d="M20 0C8.9544 0 0 8.9544 0 20C0 29.3792 6.4576 37.2496 15.1688 39.4112V26.112H11.0448V20H15.1688V17.3664C15.1688 10.5592 18.2496 7.404 24.9328 7.404C26.2 7.404 28.3864 7.6528 29.2808 7.9008V13.4408C28.8088 13.3912 27.9888 13.3664 26.9704 13.3664C23.6912 13.3664 22.424 14.6088 22.424 17.8384V20H28.9568L27.8344 26.112H22.424V39.8536C32.3272 38.6576 40.0008 30.2256 40.0008 20C40 8.9544 31.0456 0 20 0Z"
                      fill="white"
                    />
                  </svg>
                </a>

                {/* Twitter / X */}
                <a
                  href="https://x.com/pharmarise"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="38"
                    height="34"
                    viewBox="0 0 38 34"
                    fill="none"
                  >
                    <path
                      d="M29.5438 0.17334H35.1663L22.8829 14.2125L37.3333 33.3166H26.0187L17.1567 21.7301L7.01657 33.3166H1.39071L14.529 18.3002L0.666656 0.17334H12.2685L20.279 10.7639L29.5438 0.17334ZM27.5705 29.9513H30.686L10.5756 3.36189H7.23242L27.5705 29.9513Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
              <div className="hidden md:flex justify-start mt-6">
                <button
                  onClick={scrollToTop}
                  className="border flex items-center gap-2 text-center leading-[35px] px-4 py-2 rounded border-white border-solid  hover:text-[rgba(0,33,69,1)] transition-all w-fit"
                  style={{
                    width: "170px",
                    color: "#FFF",
                    fontFamily: '"Red Hat Text"',
                    fontSize: "20px",
                    fontWeight: 300,
                    lineHeight: "175%",
                  }}
                >
                  <span>Back to Top</span>
                  <span className="text-xs">▲</span>
                </button>
              </div>

            </div>
          </div>

          {/* Right Side - Quick Links and Contact Info */}
          <div className="w-full lg:w-6/12 ml-0 lg:ml-5 max-md:w-full max-md:ml-0">
            <div className="mt-2.5 max-md:max-w-full max-md:mt-10">
              <div className="gap-8 flex max-md:flex-col max-md:items-stretch">
                {/* Quick Links */}
                <div className="w-full sm:w-[40%] max-md:w-full max-md:ml-0">
                  <div className="max-md:mt-10">
                    <h4
                      className=" mb-6"
                      style={{
                        color: "#FFF",
                        fontFamily: '"Red Hat Text"',
                        fontSize: "20px",
                        fontWeight: 400,
                        lineHeight: "175%",
                      }}
                    >
                      Quick Links
                    </h4>
                    <nav
                      className="space-y-3"
                      style={{
                        color: "#FFF",
                        fontFamily: '"Red Hat Text"',
                        fontSize: "20px",
                        fontWeight: 10,
                        lineHeight: "175%",
                      }}
                    >
                      <a
                        href="#home"
                        className="block hover:opacity-80 transition-opacity"
                      >
                        Home
                      </a>
                      <a
                        href="#about"
                        className="block hover:opacity-80 transition-opacity"
                      >
                        About Us
                      </a>
                      <a
                        href="#innovations"
                        className="block hover:opacity-80 transition-opacity"
                      >
                        Product
                      </a>
                      <a
                        href="/contact"
                        className="block hover:opacity-80 transition-opacity"
                      >
                        Contact Us
                      </a>
                    </nav>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="w-full sm:w-[60%] ml-0 sm:ml-5 max-md:w-full max-md:ml-0">
                  <div className="flex grow flex-col items-stretch max-md:mt-10">
                    <h4
                      className="font-bold mb-6"
                      style={{
                        color: "#FFF",
                        fontFamily: '"Red Hat Text"',
                        fontSize: "20px",
                        fontWeight: 400,
                        lineHeight: "175%",
                      }}
                    >
                      Contact info
                    </h4>
                    <div
                      className="space-y-2"
                      style={{
                        color: "#FFF",
                        fontFamily: '"Red Hat Text"',
                        fontSize: "20px",
                        fontWeight: 400,
                        lineHeight: "175%",
                      }}
                    >
                      <address className="not-italic">
                        <a
                          href=""
                          className="hover:opacity-80 transition-opacity block"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Office No. 3(403), 4th Floor, E- Wing, Tandice 69, CTS No. 250(1-6), 251(1-7), AK Road, Gundavali, Andheri (East), Mumbai - 400059, Maharashtra, India.
                        </a>
                        <a
                          href="mailto:salesoffice@pharmarise.in"
                          className="hover:opacity-80 transition-opacity flex items-center gap-2 mt-2"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="/images/sms.png"
                            alt="Email"
                            style={{
                              width: "20px",
                              height: "20px",
                              flexShrink: 0,
                            }}
                          />
                          salesoffice@pharmarise.in
                        </a>
                      </address>

                      {/* Back to Top Button - Mobile only - After email */}
                      <div className="flex justify-start mt-6 md:hidden">
                        <button
                          onClick={scrollToTop}
                          className="border flex items-center gap-2 text-center leading-[35px] px-4 py-2 rounded border-white border-solid hover:bg-white hover:text-[rgba(0,33,69,1)] transition-all w-fit"
                          style={{
                            width: "170px",
                            color: "#FFF",
                            fontFamily: '"Red Hat Text"',
                            fontSize: "20px",
                            
                            fontWeight: 300,
                            lineHeight: "175%",
                          }}
                        >
                          <span>Back to Top</span>
                          <span className="text-xs">▲</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border shrink-0 h-px mt-[45px] border-white border-solid max-md:max-w-full max-md:mt-10" />

      {/* Back to Top Button - Desktop/Laptop only - Before copyright */}


      {/* Copyright */}
      <div
        className="text-center self-center mt-7 max-md:max-w-full"
        style={{
          color: "#FFF",
          fontFamily: '"Red Hat Text"',
          fontSize: "20px",
          fontWeight: 400,
          lineHeight: "175%",
        }}
      >
        <span className="font-normal">© Copyright ©2025 </span>
        <a
          href="https://pharmarise.vercel.app/index.html"
          className="font-normal text-white hover:opacity-80 transition-opacity"
          target="_blank"
          rel="noopener noreferrer"
        >
          PharmaRise
        </a>
        <span className="font-normal">. All Rights Reserved Copyright</span>
      </div>
    </footer>
  );
};

export default Footer;
