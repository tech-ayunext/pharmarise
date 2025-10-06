import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative bg-[#0d4a8d] py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d4a8d] to-[#0099cd] opacity-90"></div>
        <div className="relative z-10 container mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl">
            Get in touch with our team for any inquiries about our pharmaceutical products and services.
          </p>
        </div>
      </div>

      {/* Company Information Section */}
      <div className="bg-[#d9eaff] py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-5xl font-semibold text-[#0d4a8d] mb-8 md:mb-12">
            Company Information
          </h2>
          <div className="w-full h-px bg-[#0d4a8d] mb-12"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Details */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-[#0d4a8d] mb-4">
                  Office Address
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Office No. 3(403), 4th Floor, E- Wing, Tandice 69, CTS No. 250(1-6), 251(1-7), 
                  AK Road, Gundavali, Andheri (East), Mumbai - 400059, Maharashtra, India.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-[#0d4a8d] mb-4">
                  Contact Information
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <img src="/images/sms.png" alt="Email" className="w-5 h-5" />
                    <a 
                      href="mailto:salesoffice@pharmarise.in" 
                      className="text-gray-700 hover:text-[#0d4a8d] transition-colors"
                    >
                      salesoffice@pharmarise.in
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#0d4a8d] mb-4">
                  Business Hours
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <h3 className="text-2xl font-semibold text-[#0d4a8d] mb-6">
                Send us a Message
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d4a8d] focus:border-transparent outline-none transition-all"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d4a8d] focus:border-transparent outline-none transition-all"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d4a8d] focus:border-transparent outline-none transition-all"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d4a8d] focus:border-transparent outline-none transition-all"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d4a8d] focus:border-transparent outline-none transition-all"
                    placeholder="Enter the subject"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d4a8d] focus:border-transparent outline-none transition-all resize-vertical"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-[#0d4a8d] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#0d4a8d]/90 transition-colors focus:ring-2 focus:ring-[#0d4a8d] focus:ring-offset-2 outline-none"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section (Optional) */}
      <div className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0d4a8d] mb-8 text-center">
            Find Us Here
          </h2>
          <div className="bg-gray-200 rounded-lg h-64 md:h-96 flex items-center justify-center">
            <p className="text-gray-600 text-lg">
              Interactive Map Coming Soon
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;