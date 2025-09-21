import React from 'react';

const Partnership = () => {
  return (
    <section className="bg-[rgba(217,235,255,1)] flex w-full flex-col items-stretch pt-[31px] px-12 max-md:max-w-full max-md:px-5" id="partnership">
      <h2 className="text-[rgba(13,74,141,1)] text-6xl font-bold tracking-[-1.8px] ml-[61px] max-md:max-w-full max-md:text-[40px]">
        Why Partner with PharmaRise
      </h2>
      
      <div className="mt-[45px] max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/9cec5786f0df21ce48d05190abadd478796f96cc?placeholderIfAbsent=true"
              className="aspect-[1.32] object-contain w-full grow rounded-[0px_0px_0px_0px] max-md:max-w-full max-md:mt-10"
              alt="Partnership benefits illustration"
            />
          </div>
          
          <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col self-stretch items-stretch text-4xl text-[rgba(13,74,141,1)] font-semibold tracking-[-1.08px] my-auto max-md:max-w-full max-md:mt-10">
              <h3 className="leading-none ml-[42px] max-md:ml-2.5">
                Innovative Products
              </h3>
              <p className="text-[rgba(0,52,109,1)] text-[21px] font-normal leading-[31px] tracking-[-0.64px] mt-1.5 max-md:max-w-full">
                Experienced professionals driving brand growth & deeper market penetration for your products.
              </p>
              
              <h3 className="leading-none ml-[43px] mr-[21px] mt-[58px] max-md:max-w-full max-md:mr-2.5 max-md:mt-10">
                Learning & Development Solutions
              </h3>
              <p className="text-[rgba(0,52,109,1)] text-[21px] font-normal leading-[31px] tracking-[-0.64px] max-md:max-w-full">
                Experienced professionals driving brand growth & deeper market penetration for your products.
              </p>
              
              <h3 className="leading-none ml-[43px] mr-[21px] mt-[58px] max-md:max-w-full max-md:mr-2.5 max-md:mt-10">
                India Formulation & Consultation
              </h3>
              <p className="text-[rgba(0,52,109,1)] text-[21px] font-normal leading-[37px] tracking-[-0.64px] max-md:max-w-full">
                Our robust logistics and 24/7 service ensure your products reach every corner efficiently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
