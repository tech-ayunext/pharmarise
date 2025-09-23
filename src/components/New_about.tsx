import React from "react";
import Header from "./Header";
import Footer from "./Footer";
// Component 1: Hero Section
const Hero: React.FC = () => {
  return (
    <section className="w-full h-[252px] relative bg-[#0D4A8D]">
      <div className="w-full h-[252px] relative overflow-hidden">
        <div className="w-full h-[252px] absolute z-[2] left-0 top-0" />
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/4e56a2a30b3e6474811ffe5838c5a0879f1b8b3f?width=2284"
          alt="Hero Background"
          className="w-[1142px] h-[252px] absolute z-[1] right-0 top-0 max-sm:w-full max-sm:h-[252px] max-sm:object-cover"
        />
      </div>
      <h1 className="text-white text-6xl font-bold tracking-[-1.8px] absolute z-[3] left-[86px] top-[86px] max-md:text-5xl max-md:left-10 max-sm:text-[32px] max-sm:left-5 max-sm:top-[60px]">
        About Us
      </h1>
    </section>
  );
};

// Component 2: Features Grid Section
const FeaturesGrid: React.FC = () => {
  const features = [
    "Branded Pharmaceuticals",
    "Nutraceuticals",
    "Strategic Marketing",
    "Global Standard Products",
  ];
  const CheckmarkIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 13L9 17L19 7"
        stroke="#0D4A8D"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  return (
    <div className="grid grid-cols-1 gap-5 mt-10 sm:grid-cols-2 lg:grid-cols-4">
      {features.map((feature, index) => (
        <div
          key={index}
          // The ring classes are added conditionally to highlight the second item
          className={`
            bg-[#0D4A8D] rounded-xl flex flex-col items-center justify-start text-center p-6 min-h-[160px]
           
          `}
        >
          {/* White circle background for the icon */}
          <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center mb-4">
            <CheckmarkIcon />
          </div>

          {/* Feature text */}
          <h3 className="text-white text-lg font-bold leading-tight">
            {feature}
          </h3>
        </div>
      ))}
    </div>
  );
};

// Component 3: Main About Section with Image and Text
const AboutSection: React.FC = () => {
  return (
    <section className="pt-[50px] pb-0 px-[43px] max-md:pt-10 max-md:pb-0 max-md:px-5 max-sm:pt-[30px] max-sm:pb-0 max-sm:px-[15px]">
      <h2 className="text-[#0D4A8D] text-[55px] font-bold tracking-[-1.65px] max-w-[1001px] mb-[74px] max-md:text-[42px] max-md:mb-[50px] max-sm:text-[28px] max-sm:mb-[30px]">
        We'll Ensure You Always Get Best Results.
      </h2>
      <div className="flex gap-[35px] items-start max-md:flex-col max-md:gap-10 max-sm:gap-[30px]">
        <div className="shrink-0">
          <div className="relative w-[575px] h-[626px] max-md:w-full max-md:max-w-[575px] max-md:h-auto max-md:aspect-[575/626]">
            <img
              src="/images/person1.png"
              alt="PharmaRise Team"
              className="w-[542px] h-[562px] absolute z-[3] rounded-[0_0_102px_0] left-16 top-16 max-md:w-full max-md:h-auto"
            />
            <div className="w-[570px] h-[512px] absolute z-[1] bg-[#0D4A8D] rounded-[100px_0] left-[5px] top-[124px] max-md:w-[calc(100%_-_5px)]" />
            <div className="w-[570px] h-[512px] absolute z-[2] rounded-[100px_0] border-r-[10px] border-r-[#00ACE5] border-b-[10px] border-b-[#00ACE5] border-solid left-[5px] top-[124px] max-md:w-[calc(100%_-_5px)]" />
            <div className="w-[166px] h-[166px] absolute z-[4] flex items-center justify-center bg-[#00ACE5] rounded-[86px_5px_5px_5px] left-5 top-[140px] max-sm:w-[120px] max-sm:h-[120px]">
              <div className="text-white text-center leading-[105%]">
                <div className="text-[67px] font-bold max-sm:text-5xl mb-7">5</div>
                <div className="text-[25px] font-bold max-sm:text-lg">
                  Years of Excellence
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 pt-[124px]">
          <p className="text-[#0D4A8D] text-justify text-[25px] font-normal leading-[39.75px] mb-5 max-md:text-[22px] max-sm:text-lg">
            Pharmarise Innovations has been founded in 2024 by Mr Rajendra
            Patkar. A pharmacist by qualification and an MBA from Jamnalal
            Bajaj. He has launched many innovative products and has headed top
            pharma companies like Wockhardt, Jb Chemicals, & RPG where, he led
            major brand innovations. He has a vision to deliver innovative
            brands that lead to better patient outcomes. Many of the brands are
            first time in India showing that small companies can deliver big
            Innovations. We always keep in mind the better patient outcomes in
            all our Innovations.
          </p>
          <FeaturesGrid />
        </div>
      </div>
      {/* Logically placing the features grid within the about section flow */}
      
    </section>
  );
};

// Component 4: Why Choose Us Section
interface ChoiceCard {
  title: string;
  description: string;
  icon: string;
  bgColor: string;
  borderColor: string;
}

const WhyChooseSection: React.FC = () => {
  const choiceCards: ChoiceCard[] = [
    {
      title: "High Quality Products",
      description: "We work alongside trusted pharmaceutical producers.",
      bgColor: "bg-[#0D4A8D]",
      borderColor: "border-r-[#009ACD] border-b-[#009ACD]",
      icon: '<svg width="87" height="87" viewBox="0 0 87 87" fill="none" xmlns="http://www.w3.org/2000/svg" class="card-icon" style="width: 87px; height: 87px; margin-bottom: 40px"> <path d="M48.2126 29.3987L52.9976 38.9687C53.6501 40.2737 55.3901 41.5787 56.8401 41.7962L65.5039 43.2461C71.0501 44.1886 72.3551 48.1762 68.3676 52.1637L61.6251 58.9062C60.5014 60.0299 59.8488 62.2412 60.2113 63.8362L62.1327 72.2099C63.6552 78.8074 60.1389 81.3812 54.3027 77.9374L46.1826 73.1162C44.6963 72.2462 42.3039 72.2462 40.8177 73.1162L32.6976 77.9374C26.8613 81.3812 23.3451 78.8074 24.8676 72.2099L26.7889 63.8362C27.1514 62.2774 26.4989 60.0662 25.3751 58.9062L18.6327 52.1637C14.6452 48.1762 15.9501 44.1524 21.4963 43.2461L30.1601 41.7962C31.6101 41.5424 33.3501 40.2737 34.0026 38.9687L38.7877 29.3987C41.3614 24.2149 45.6388 24.2149 48.2126 29.3987Z" stroke="white" stroke-width="5.4375" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M21.75 32.625V7.25" stroke="white" stroke-width="5.4375" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M65.25 32.625V7.25" stroke="white" stroke-width="5.4375" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M43.5 14.5V7.25" stroke="white" stroke-width="5.4375" stroke-linecap="round" stroke-linejoin="round"></path> </svg>',
    },
    {
      title: "Innovative Solutions",
      description:
        "Cutting-edge medical solutions for modern healthcare needs.",
      bgColor: "bg-[#009ACD]",
      borderColor: "border-r-[#0D4A8D] border-b-[#0D4A8D]",
      icon: '<svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg" class="card-icon" style="width: 87px; height: 87px; margin-bottom: 40px"> <path d="M18.5068 79.6608C15.8243 79.6608 13.178 78.6458 11.148 76.6158C9.19053 74.6583 8.10303 72.0483 8.10303 69.257C8.10303 66.4658 9.19053 63.8558 11.148 61.8983L58.273 14.7733C62.333 10.7133 68.9305 10.7133 72.9905 14.7733C74.948 16.7308 76.0355 19.3408 76.0355 22.132C76.0355 24.9233 74.948 27.5333 72.9905 29.4908L25.8655 76.6158C23.8355 78.6458 21.1893 79.6608 18.5068 79.6608ZM65.6318 17.1658C64.363 17.1658 63.0943 17.637 62.1155 18.6158L14.9905 65.7408C14.048 66.6833 13.5405 67.9158 13.5405 69.257C13.5405 70.5983 14.048 71.8308 14.9905 72.7733C16.9118 74.6945 20.1018 74.6945 22.023 72.7733L69.148 25.6483C70.0905 24.7058 70.598 23.4733 70.598 22.132C70.598 20.7908 70.0905 19.5583 69.148 18.6158C68.1693 17.637 66.9005 17.1658 65.6318 17.1658Z" fill="white"></path> <path d="M65.6682 35.6895C64.9794 35.6895 64.2907 35.4358 63.7469 34.892L52.8719 24.017C51.8207 22.9658 51.8207 21.2258 52.8719 20.1745C53.9232 19.1233 55.6632 19.1233 56.7144 20.1745L67.5894 31.0495C68.6407 32.1008 68.6407 33.8408 67.5894 34.892C67.0457 35.4358 66.3569 35.6895 65.6682 35.6895Z" fill="white"></path> <path d="M36.6319 20.3195C36.4506 20.3195 36.3056 20.2833 36.1244 20.247L31.1944 18.797L26.2644 20.247C25.6119 20.4283 24.9232 20.247 24.4882 19.7758C24.0169 19.3045 23.8357 18.652 24.0169 17.9995L25.4669 13.0695L24.0169 8.13952C23.8357 7.48702 24.0169 6.79827 24.4882 6.36327C24.9594 5.89202 25.6481 5.71077 26.2644 5.89202L31.1944 7.34202L36.1244 5.89202C36.7769 5.71077 37.4294 5.89202 37.9007 6.36327C38.3719 6.83452 38.5531 7.52327 38.3719 8.13952L36.9219 13.0695L38.3719 17.9995C38.5531 18.652 38.3719 19.3408 37.9007 19.7758C37.5744 20.1383 37.1031 20.3195 36.6319 20.3195ZM31.1944 15.0995C31.3756 15.0995 31.5207 15.1358 31.7019 15.172L33.9494 15.8245L33.2969 13.577C33.1881 13.2508 33.1881 12.8883 33.2969 12.562L33.9494 10.3145L31.7019 10.967C31.3757 11.0758 31.0131 11.0758 30.6869 10.967L28.4394 10.3145L29.0919 12.562C29.2007 12.8883 29.2007 13.2508 29.0919 13.577L28.4394 15.8245L30.6869 15.172C30.8681 15.1358 31.0131 15.0995 31.1944 15.0995Z" fill="white"></path> <path d="M22.1319 42.0695C21.9506 42.0695 21.8056 42.0333 21.6244 41.997L16.6944 40.547L11.7644 41.997C11.1119 42.1783 10.4594 41.997 9.98815 41.5258C9.5169 41.0545 9.33565 40.3658 9.5169 39.7495L10.9669 34.8195L9.5169 29.8895C9.33565 29.237 9.5169 28.5483 9.98815 28.1133C10.4594 27.6783 11.1482 27.4608 11.7644 27.642L16.6944 29.092L21.6244 27.642C22.2407 27.4608 22.9294 27.642 23.4006 28.1133C23.8719 28.5845 24.0531 29.2733 23.8719 29.8895L22.4219 34.8195L23.8719 39.7495C24.0531 40.402 23.8719 41.0908 23.4006 41.5258C23.0744 41.8883 22.6031 42.0695 22.1319 42.0695ZM16.6944 36.8495C16.8756 36.8495 17.0206 36.8858 17.2019 36.922L19.4494 37.5745L18.7969 35.327C18.6881 35.0008 18.6881 34.6383 18.7969 34.312L19.4494 32.0645L17.2019 32.717C16.8756 32.8258 16.5132 32.8258 16.1869 32.717L13.9394 32.0645L14.5919 34.312C14.7007 34.6383 14.7007 35.0008 14.5919 35.327L13.9394 37.5745L16.1869 36.922C16.3682 36.8858 16.5131 36.8495 16.6944 36.8495Z" fill="white"></path> <path d="M76.5069 60.1944C76.3256 60.1944 76.1806 60.1581 75.9994 60.1219L71.0694 58.6719L66.1394 60.1219C65.4869 60.3031 64.8344 60.1219 64.3631 59.6506C63.8919 59.1794 63.7107 58.4906 63.8919 57.8744L65.3419 52.9444L63.8919 48.0144C63.7107 47.3619 63.8919 46.6731 64.3631 46.2381C64.8344 45.8031 65.5231 45.5857 66.1394 45.7669L71.0694 47.2169L75.9994 45.7669C76.6157 45.5857 77.3044 45.7669 77.7756 46.2381C78.2469 46.7094 78.4281 47.3982 78.2469 48.0144L76.7969 52.9444L78.2469 57.8744C78.4281 58.5269 78.2469 59.2156 77.7756 59.6506C77.4494 60.0131 76.9781 60.1944 76.5069 60.1944ZM71.0694 54.9744C71.2506 54.9744 71.3956 55.0106 71.5769 55.0469L73.8244 55.6994L73.1719 53.4519C73.0631 53.1256 73.0631 52.7631 73.1719 52.4369L73.8244 50.1894L71.5769 50.8419C71.2506 50.9506 70.8882 50.9506 70.5619 50.8419L68.3144 50.1894L68.9669 52.4369C69.0756 52.7631 69.0756 53.1256 68.9669 53.4519L68.3144 55.6994L70.5619 55.0469C70.7432 55.0106 70.8881 54.9744 71.0694 54.9744Z" fill="white"></path> </svg>',
    },
    {
      title: "Reliable Support",
      description: "Committed to accessibility for healthcare professionals.",
      bgColor: "bg-[#0D4A8D]",
      borderColor: "border-r-[#009ACD] border-b-[#009ACD]",
      icon: '<svg width="85" height="94" viewBox="0 0 85 94" fill="none" xmlns="http://www.w3.org/2000/svg" class="card-icon" style="width: 87px; height: 87px; margin-bottom: 40px"> <path d="M68.2909 76.5396H64.9829C61.5007 76.5396 58.1926 77.889 55.7551 80.3265L48.312 87.6828C44.9169 91.0344 39.3889 91.0344 35.9938 87.6828L28.5506 80.3265C26.1131 77.889 22.7616 76.5396 19.3229 76.5396H16.0584C8.83288 76.5396 3.00024 70.7507 3.00024 63.6122V16.124C3.00024 8.98551 8.83288 3.19653 16.0584 3.19653H68.2909C75.5164 3.19653 81.3491 8.98551 81.3491 16.124V63.6122C81.3491 70.7071 75.5164 76.5396 68.2909 76.5396Z" stroke="white" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M20.4097 34.3168C20.4097 30.2688 23.7177 26.9604 27.7658 26.9604C31.8138 26.9604 35.1219 30.2688 35.1219 34.3168C35.1219 42.4999 23.5001 43.3704 20.932 51.1618C20.4096 52.7723 21.759 54.3828 23.4566 54.3828H35.1219" stroke="white" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M59.7591 54.3395V29.4856C59.7591 28.3539 59.0192 27.3526 57.931 27.0479C56.8428 26.7432 55.6676 27.1785 55.0583 28.136C51.9243 33.1852 48.5291 38.9308 45.5693 43.98C45.0905 44.807 45.0905 45.8952 45.5693 46.7222C46.0481 47.5492 46.9622 48.0713 47.9633 48.0713H63.9378" stroke="white" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"></path> </svg>',
    },
    {
      title: "Expert Marketing",
      description:
        "Strategic marketing initiatives for enhanced brand visibility.",
      bgColor: "bg-[#009ACD]",
      borderColor: "border-r-[#0D4A8D] border-b-[#0D4A8D]",
      icon: '<svg width="87" height="87" viewBox="0 0 87 87" fill="none" xmlns="http://www.w3.org/2000/svg" class="card-icon" style="width: 87px; height: 87px; margin-bottom: 40px"> <path d="M65.7586 78.3725C62.5686 79.315 58.7987 79.75 54.3762 79.75H32.6262C28.2037 79.75 24.4337 79.315 21.2437 78.3725C22.0412 68.9475 31.7199 61.5161 43.5012 61.5161C55.2824 61.5161 64.9611 68.9475 65.7586 78.3725Z" stroke="white" stroke-width="5.4375" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M54.375 7.25H32.625C14.5 7.25 7.25 14.5 7.25 32.625V54.375C7.25 68.0775 11.3825 75.5812 21.2425 78.3725C22.04 68.9475 31.7188 61.5161 43.5 61.5161C55.2812 61.5161 64.96 68.9475 65.7575 78.3725C75.6175 75.5812 79.75 68.0775 79.75 54.375V32.625C79.75 14.5 72.5 7.25 54.375 7.25ZM43.5 51.3662C36.3225 51.3662 30.5225 45.5301 30.5225 38.3526C30.5225 31.1751 36.3225 25.375 43.5 25.375C50.6775 25.375 56.4775 31.1751 56.4775 38.3526C56.4775 45.5301 50.6775 51.3662 43.5 51.3662Z" stroke="white" stroke-width="5.4375" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M56.4772 38.3526C56.4772 45.5301 50.6772 51.3662 43.4997 51.3662C36.3222 51.3662 30.5222 45.5301 30.5222 38.3526C30.5222 31.1751 36.3222 25.375 43.4997 25.375C50.6772 25.375 56.4772 31.1751 56.4772 38.3526Z" stroke="white" stroke-width="5.4375" stroke-linecap="round" stroke-linejoin="round"></path> </svg>',
    },
  ];

  return (
    <section className="bg-[#D9EBFF] mt-[100px] px-[43px] py-[102px] max-md:px-5 max-md:py-20 max-sm:px-[15px] max-sm:py-[50px]">
      <h2 className="text-[#0D4A8D] text-[55px] font-bold tracking-[-1.65px] mb-[122px] max-md:text-[42px] max-md:mb-20 max-sm:text-[28px] max-sm:mb-[50px]">
        Why Choose PharmaRise
      </h2>
      <div className="grid grid-cols-[repeat(4,1fr)] gap-[54px] max-md:grid-cols-[repeat(2,1fr)] max-md:gap-[30px] max-sm:grid-cols-[1fr] max-sm:gap-5">
        {choiceCards.map((card, index) => (
          <article
            key={index}
            className={`w-[316px] h-[429px] relative flex flex-col items-center text-center ${card.bgColor} px-7 py-[52px] rounded-[21px_0] border-r-[7px] border-b-[7px] border-solid ${card.borderColor} max-md:w-full max-md:h-[380px] max-md:px-5 max-md:py-10 max-sm:h-80 max-sm:px-[15px] max-sm:py-[30px]`}
          >
            <h3 className="text-white text-center text-[40px] font-bold leading-[45.08px] tracking-[-1.2px] mb-10 max-md:text-[32px] max-md:mb-[30px] max-sm:text-2xl max-sm:mb-5">
              {card.title}
            </h3>
            <div dangerouslySetInnerHTML={{ __html: card.icon }} />
            <p className="text-white text-center text-2xl font-normal leading-[27.048000000000002px] tracking-[-0.714px] max-md:text-xl max-sm:text-base">
              {card.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

// Component 5: Vision & Mission Section
const VisionMissionSection: React.FC = () => {
  return (
    <section className="relative bg-[#009ACD] px-[78px] py-[97px] max-md:px-5 max-md:py-[60px] max-sm:px-[15px] max-sm:py-10">
      <h2 className="text-white text-[67px] font-bold leading-[71.02px] tracking-[-2.01px] w-[300px] mb-[97px] max-md:text-5xl max-md:mb-[60px] max-sm:text-[32px] max-sm:w-full max-sm:mb-10">
        Our Vision & Mission
      </h2>
      <div className="flex gap-36 items-start max-md:flex-col max-md:gap-[60px] max-sm:gap-10">
        <article className="flex-1">
          <h3 className="text-white text-[55px] font-bold tracking-[-1.65px] mb-[30px] max-md:text-[42px] max-md:mb-5 max-sm:text-[28px] max-sm:mb-[15px]">
            Vision
          </h3>
          <p className="text-white text-justify text-3xl font-normal tracking-[-0.9px] max-md:text-2xl max-sm:text-lg">
            Our vision is to be trusted by healthcare professionals by
            collaborating with renowned pharmaceutical manufacturers, promoting
            products that meet global standards, and driving sustainable growth
            through ethical marketing and regulatory compliance.
          </p>
        </article>
        <article className="flex-1">
          <h3 className="text-white text-[55px] font-bold tracking-[-1.65px] mb-[30px] max-md:text-[42px] max-md:mb-5 max-sm:text-[28px] max-sm:mb-[15px]">
            Mission
          </h3>
          <p className="text-white text-justify text-3xl font-normal tracking-[-0.9px] max-md:text-2xl max-sm:text-lg">
            PharmaRise Innovations LLP is dedicated to bridging healthcare gaps
            by delivering high-quality pharmaceutical products to providers. We
            ensure innovation, reliability, & accessibility, bringing advanced
            medical solutions efficiently to healthcare professionals and
            patients.
          </p>
        </article>
      </div>
    </section>
  );
};

// Main Page Component that combines all sections
const NewAboutPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <WhyChooseSection />
        <VisionMissionSection />
      </main>
      <Footer />
    </div>
  );
};

export default NewAboutPage;
