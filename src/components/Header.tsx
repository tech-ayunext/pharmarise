import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-slate-100">
      {/* Top contact bar */}
      <div className="bg-[rgba(13,74,141,1)] flex w-full items-center justify-between px-[20px] md:px-[50px] py-[7px]">
        <div className="flex items-center gap-2 text-white text-xs font-normal">
          <img
            src="/images/sms.png"
            alt="sms"
            className="w-4 h-4 flex-shrink-0"
          />
          <span>salesoffice@pharmarise.in</span>
        </div>

        <div className="flex items-center gap-3">
          {[
            "fea117476b340fce919f5a36765518aa9908fe39",
            "a77b8a7a1d075d63660652ae26129cba92999e83",
            "86eae95b00b45a1b995ef3507a3d9bf13d724e9f",
            "897b911bc04855f4cab7f55ef934b43300f4ae29",
          ].map((id, idx) => (
            <img
              key={idx}
              src={`https://api.builder.io/api/v1/image/assets/TEMP/${id}?placeholderIfAbsent=true`}
              className="w-4 h-4 object-contain"
              alt="Social media"
            />
          ))}
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white z-10 flex w-full items-center justify-between px-5 md:px-[37px] py-[13px] relative">
        {/* Logo */}
        <img
          src="/images/PharmaRise logo.png"
          className="w-[160px] md:w-[204px] object-contain"
          alt="PharmaRise logo"
        />

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
         
          <a
            href="/"
            className="text-[rgba(13,74,141,1)] text-xl font-medium hover:opacity-80 transition-opacity"
          >
            Home
          </a>
          <a
            href="/new-about"
            className="text-[rgba(13,74,141,1)] text-xl font-medium hover:opacity-80 transition-opacity"
          >
            About
          </a>
          <div className="flex items-center gap-1 text-xl text-[rgba(13,74,141,1)] font-medium cursor-pointer">
            <span>Product</span>
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/56aa8dcd34b1649324d32da398898d78c8d3054e?placeholderIfAbsent=true"
              className="w-[9px] mt-1"
              alt="Dropdown arrow"
            />
          </div>
          <a
            href="/#contact"
            className="text-[rgba(13,74,141,1)] text-xl font-medium hover:opacity-80 transition-opacity"
          >
            Contact
          </a>
        </div>

        {/* Enquire Button (desktop + mobile) */}
        <div className="flex items-center gap-3">
          <button className="bg-[rgba(190,38,35,1)] text-xs md:text-sm text-white font-semibold px-4 py-2 rounded-md hover:bg-opacity-90 transition-all">
            Enquire Now
          </button>

          {/* Hamburger (mobile only) */}
          <button
            className="md:hidden text-[rgba(13,74,141,1)] text-2xl font-bold focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white flex flex-col items-start gap-4 p-5 shadow-md md:hidden">
            <a
              href="#home"
              className="text-[rgba(13,74,141,1)] text-lg font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-[rgba(13,74,141,1)] text-lg font-medium"
            >
              About
            </a>
            <a
              href="#product"
              className="text-[rgba(13,74,141,1)] text-lg font-medium"
            >
              Product
            </a>
            <a
              href="#contact"
              className="text-[rgba(13,74,141,1)] text-lg font-medium"
            >
              Contact
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
