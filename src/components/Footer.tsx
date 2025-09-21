import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[rgba(0,33,69,1)] flex w-full flex-col items-stretch pt-[137px] pb-[27px] px-14 max-md:max-w-full max-md:pt-[100px] max-md:px-5">
      <div className="self-center w-full max-w-[1353px] max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col text-xl text-white font-semibold leading-[35px] max-md:max-w-full max-md:mt-10">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/4eabbb5daef9f1eca8601a02bbad0ceff762c547?placeholderIfAbsent=true"
                className="aspect-[4.55] object-contain w-[377px] max-w-full"
                alt="PharmaRise logo"
              />
              
              <p className="self-stretch mt-8 max-md:max-w-full">
                PharmaRise Innovations LLP is a dynamic pharmaceutical marketing company dedicated to bridging the gap between high-quality pharmaceutical products and healthcare providers.
              </p>
              
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/b35e387d7ee450a0a206c9e308e99d950f5b2003?placeholderIfAbsent=true"
                className="aspect-[8] object-contain w-[319px] max-w-full mt-[13px]"
                alt="Social media links"
              />
            </div>
          </div>
          
          <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="mt-2.5 max-md:max-w-full max-md:mt-10">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                <div className="w-[22%] max-md:w-full max-md:ml-0">
                  <div className="text-xl text-white max-md:mt-10">
                    <h4 className="font-bold leading-[35px]">Quick Links</h4>
                    <nav className="font-normal leading-[47px] mt-10 max-md:mr-[7px]">
                      <a href="#home" className="block hover:opacity-80 transition-opacity">Home</a>
                      <a href="#about" className="block hover:opacity-80 transition-opacity">About Us</a>
                      <a href="#innovations" className="block hover:opacity-80 transition-opacity">Product</a>
                      <a href="#contact" className="block hover:opacity-80 transition-opacity">Contact Us</a>
                    </nav>
                  </div>
                </div>
                
                <div className="w-[78%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="flex grow flex-col items-stretch text-xl text-white max-md:mt-10">
                    <h4 className="font-bold leading-[35px]">Contact info</h4>
                    <div className="font-normal leading-[47px] mt-10">
                      <address className="not-italic">
                        <a
                          href="https://pharmarise.vercel.app/index.html#"
                          className="hover:opacity-80 transition-opacity"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Office No. 3(403), 4th Floor, E- Wing, Tandice 69, CTS No. 250(1-6), 251(1-7), AK Road, Gundavali, Andheri (East), Mumbai - 400059, Maharashtra, India.
                        </a>
                        <br />
                        <a
                          href="mailto:salesoffice@pharmarise.in"
                          className="hover:opacity-80 transition-opacity"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          salesoffice@pharmarise.in
                        </a>
                      </address>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToTop}
        className="border flex items-stretch gap-[13px] text-xl text-white font-medium text-center leading-[35px] ml-6 mt-10 px-5 py-[13px] rounded-[9px] border-white border-solid max-md:ml-2.5 hover:bg-white hover:text-[rgba(0,33,69,1)] transition-all w-fit"
      >
        <span>Back to Top</span>
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/c56dab417c0aaa91a87f5167993f051252100eae?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-2 shrink-0 my-auto"
          alt="Arrow up"
        />
      </button>
      
      <div className="border shrink-0 h-px mt-[45px] border-white border-solid max-md:max-w-full max-md:mt-10" />
      
      <div className="text-white text-xl font-medium leading-[35px] text-center self-center mt-7 max-md:max-w-full">
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
