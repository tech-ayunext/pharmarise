import React from 'react';

const Header = () => {
  return (
    <header className="bg-slate-100">
      {/* Top contact bar */}
      <div className="bg-[rgba(13,74,141,1)] flex w-full items-stretch gap-5 flex-wrap justify-between px-[50px] py-[7px] max-md:max-w-full max-md:px-5">
        <div className="text-white text-xs font-normal">
          salesoffice@pharmarise.in
        </div>
        <div className="flex items-stretch gap-3">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/fea117476b340fce919f5a36765518aa9908fe39?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-3.5 shrink-0"
            alt="Social media icon"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/a77b8a7a1d075d63660652ae26129cba92999e83?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-3.5 shrink-0"
            alt="Social media icon"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/86eae95b00b45a1b995ef3507a3d9bf13d724e9f?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-3.5 shrink-0"
            alt="Social media icon"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/897b911bc04855f4cab7f55ef934b43300f4ae29?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-3.5 shrink-0"
            alt="Social media icon"
          />
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white z-10 flex w-full items-center gap-5 leading-none justify-between px-[37px] py-[13px] max-md:max-w-full max-md:px-5">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/19ab1363beee77369c8ee66d18e301c40fa04f99?placeholderIfAbsent=true"
          className="aspect-[4.52] object-contain w-[204px] self-stretch shrink-0 max-w-full"
          alt="PharmaRise logo"
        />
        
        <div className="flex items-center gap-8 max-md:hidden">
          <a href="#home" className="text-[rgba(13,74,141,1)] text-xl font-medium hover:opacity-80 transition-opacity">
            Home
          </a>
          <a href="#about" className="text-[rgba(13,74,141,1)] text-xl font-medium hover:opacity-80 transition-opacity">
            About
          </a>
          <div className="flex items-stretch gap-[5px] text-xl text-[rgba(13,74,141,1)] font-medium whitespace-nowrap">
            <span className="grow">Product</span>
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/56aa8dcd34b1649324d32da398898d78c8d3054e?placeholderIfAbsent=true"
              className="aspect-[1.12] object-contain w-[9px] shrink-0 mt-2 rounded-[1px]"
              alt="Dropdown arrow"
            />
          </div>
          <a href="#contact" className="text-[rgba(13,74,141,1)] text-xl font-medium hover:opacity-80 transition-opacity">
            Contact
          </a>
        </div>

        <button className="bg-[rgba(190,38,35,1)] flex flex-col items-stretch text-xs text-white font-semibold text-center justify-center p-[11px] rounded-[5px] hover:bg-opacity-90 transition-all">
          Enquire Now
        </button>
      </nav>
    </header>
  );
};

export default Header;
