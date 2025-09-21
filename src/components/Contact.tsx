import React from 'react';
import ContactForm from './ui/ContactForm';

const Contact = () => {
  return (
    <section className="bg-gradient-to-b from-[#f0f9ff] to-[#e0f2fe] py-16" id="contact">
      <div className="container mx-auto max-w-[1200px] px-4">
        <h2 className="text-[#0D4A8D] text-5xl font-bold mb-12 text-center">
          Connect With Us
        </h2>

        <div className="relative w-full bg-white overflow-hidden rounded-[36px] shadow-2xl">
          <div className="relative overflow-hidden">
            {/* Blue gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400"></div>

            {/* Office image overlay with reduced opacity */}
            <div className="absolute inset-0 bg-[url('/images/office-bg.jpg')] bg-cover bg-center opacity-20"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center p-8 md:p-12">
              {/* Left side - Get in touch */}
              <div className="w-full md:w-2/5 text-white mb-8 md:mb-0 md:pr-8">
                <h3 className="text-4xl md:text-5xl font-bold mb-4">
                  Get in touch
                </h3>
                <p className="text-lg font-light text-white/90">
                  Partner with PharmaRise today and take your products to new heights.
                </p>
              </div>

              {/* Right side - Contact Form */}
              <div className="w-full md:w-3/5">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
