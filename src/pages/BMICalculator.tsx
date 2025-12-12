import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ui/ContactForm';
import '../styles/bmi-calculator.css';

// Add custom CSS for animations
const contactAnimationStyles = `
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
}

.animate-fade-in-left {
  animation: fadeInLeft 0.8s ease-out forwards;
  opacity: 0;
}

.animate-fade-in-right {
  animation: fadeInRight 0.8s ease-out forwards;
  opacity: 0;
}

/* Modern Slider Styling */
.slider-thumb::-webkit-slider-thumb {
  appearance: none;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  background: #0D4A8D;
  cursor: pointer;
  border: 3px solid white;
  box-shadow: 0 2px 8px rgba(13, 74, 141, 0.3);
  transition: all 0.2s ease;
}

.slider-thumb::-webkit-slider-thumb:hover {
  transform: scale(1.2);
  box-shadow: 0 4px 12px rgba(13, 74, 141, 0.4);
}

.slider-thumb::-moz-range-thumb {
  height: 24px;
  width: 24px;
  border-radius: 50%;
  background: #0D4A8D;
  cursor: pointer;
  border: 3px solid white;
  box-shadow: 0 2px 8px rgba(13, 74, 141, 0.3);
  transition: all 0.2s ease;
}

.slider-thumb::-moz-range-thumb:hover {
  transform: scale(1.2);
  box-shadow: 0 4px 12px rgba(13, 74, 141, 0.4);
}
`;

// Inject styles
if (typeof document !== 'undefined') {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = contactAnimationStyles;
    document.head.appendChild(styleSheet);
}

const BMICalculator = () => {
    const navigate = useNavigate();
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState<number | null>(null);
    const [category, setCategory] = useState('');
    const [gender, setGender] = useState('male');
    const [unit, setUnit] = useState('metric');


    const calculateBMI = () => {
        if (weight && height) {
            const weightNum = parseFloat(weight);
            const heightNum = parseFloat(height) / 100; // Convert cm to meters
            const bmiValue = weightNum / (heightNum * heightNum);

            setBmi(parseFloat(bmiValue.toFixed(1)));

            // Determine BMI category
            if (bmiValue < 18.5) {
                setCategory('Underweight');
            } else if (bmiValue >= 18.5 && bmiValue < 25) {
                setCategory('Normal weight');
            } else if (bmiValue >= 25 && bmiValue < 30) {
                setCategory('Overweight');
            } else {
                setCategory('Obese');
            }
        }
    };

    const resetCalculator = () => {
        setWeight('');
        setHeight('');
        setBmi(null);
        setCategory('');
    };

    const getIdealWeight = () => {
        if (!height) return null;
        const heightM = parseFloat(height) / 100;
        // Using BMI of 22 as ideal for calculation
        const idealWeight = 22 * (heightM * heightM);
        return Math.round(idealWeight);
    };

    const getBMIColor = () => {
        if (!bmi) return 'text-gray-600';
        if (bmi < 18.5) return 'text-blue-600';
        if (bmi >= 18.5 && bmi < 25) return 'text-green-600';
        if (bmi >= 25 && bmi < 30) return 'text-yellow-600';
        return 'text-red-600';
    };

    const getBMISvg = () => {
        if (!category) {
            return gender === 'female' ? '/NormalWoman.svg' : '/Normal.svg'; // Default
        }

        if (gender === 'female') {
            if (category === 'Underweight') return '/UnderweightWomen.svg';
            if (category === 'Normal weight') return '/NormalWoman.svg';
            if (category === 'Overweight') return '/OverweightWomen.svg';
            if (category === 'Obese') return '/ObeseWomen.svg';
            return '/NormalWoman.svg'; // Fallback for female
        } else {
            if (category === 'Underweight') return '/Underweight.svg';
            if (category === 'Normal weight') return '/Normal.svg';
            if (category === 'Overweight') return '/Overweight.svg';
            if (category === 'Obese') return '/Obese.svg';
            return '/Normal.svg'; // Fallback for male
        }
    };

    return (
        <div className="min-h-screen">
            <Header />
            <div className="relative bg-[#0d4a8d] pt-[120px] pb-8 md:pb-12 min-h-[200px] md:min-h-[250px] flex items-center" style={{ backgroundImage: "url('/images/BMI.png')", backgroundSize: 'cover', backgroundPosition: 'center top' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-[#0d4a8d]/100 from-25% to-[#0d4a8d]/25"></div>
                <div className="relative z-10 container mx-auto px-4 md:px-8 w-full mt-[20px] lg:mt-[40px]">
                    <h1 className="text-4xl md:text-6xl font-bold text-white animate-fade-in transform transition-all duration-700 hover:scale-105">
                        BMI Calculator
                    </h1>
                </div>
            </div>
           

            {/* Information Section */}
            <section className="pt-8 sm:pt-12 lg:pt-16 pb-2 bg-[#F1F5F9]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                    {/* What does BMI mean? */}
                    <div className="mb-8 sm:mb-10 lg:mb-12 opacity-0 animate-[fadeInUp_0.6s_ease-out_0.2s_forwards]">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#BE2623] mb-2 relative hover:scale-[1.02] transition-transform duration-300">
                            About BMI
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#BE2623] animate-[expandWidth_0.8s_ease-out_0.4s_forwards]"></div>
                        </h2>
                        <p className="text-[#0D4A8D] text-base sm:text-lg lg:text-xl leading-relaxed mt-4 sm:mt-6 opacity-0 animate-[fadeIn_0.6s_ease-out_0.6s_forwards]">
                            Body Mass Index (BMI) estimates whether your weight is healthy for your height. While it’s a useful guide, it doesn’t measure body fat and may not apply to children, pregnant women, athletes, or some ethnic groups. To find your BMI, choose your gender and unit, enter your height and weight, and click Calculate to see your result.
                        </p>
                    </div>


                    {/* <div className="mb-8 sm:mb-10 lg:mb-12 opacity-0 animate-[fadeInUp_0.6s_ease-out_0.4s_forwards]">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#BE2623] mb-2 relative hover:scale-[1.02] transition-transform duration-300">
                            Limitations of BMI
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#BE2623] animate-[expandWidth_0.8s_ease-out_0.6s_forwards]"></div>
                        </h2>
                        <p className="text-[#0D4A8D] text-base sm:text-lg lg:text-xl leading-relaxed mt-4 sm:mt-6 opacity-0 animate-[fadeIn_0.6s_ease-out_0.8s_forwards]">
                            BMI does not provide information about body composition and therefore does not apply to pregnant women, children,
                            some ethnic groups, or those with an athletic build. Age will also influence readings.
                        </p>
                    </div>


                    <div className="pb-20 opacity-0 animate-[fadeInUp_0.6s_ease-out_0.6s_forwards]">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#BE2623] mb-2 relative hover:scale-[1.02] transition-transform duration-300">
                            How do I calculate BMI?
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#BE2623] animate-[expandWidth_0.8s_ease-out_0.8s_forwards]"></div>
                        </h2>
                        <p className="text-[#0D4A8D] text-base sm:text-lg lg:text-xl leading-relaxed mt-4 sm:mt-6 mb-0 opacity-0 animate-[fadeIn_0.6s_ease-out_1s_forwards]">
                            Select gender and preferred unit of measurement using the BMI calculator below. Then use the sliders to enter height and weight.
                            Click on 'calculate' to work out BMI and review the guidance on what the result could mean.
                        </p>
                    </div> */}


                </div>
            </section>

            {/* Modern BMI Calculator Section */}
            <section className="py-16 sm:py-20 lg:py-10 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    {/* Calculator Card Container */}
                    <div className="bg-white rounded-3xl   p-6 sm:p-8 lg:p-12 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">

                            {/* Left Side - Input Controls */}
                            <div className="space-y-6 order-1 lg:order-1">
                                {/* Gender Selection */}
                                <div>
                                    <div className="flex gap-3 mb-6">
                                        <button
                                            onClick={() => setGender('male')}
                                            className={`flex-1 py-3 px-6 rounded-xl font-bold text-base transition-all duration-300 flex items-center justify-center gap-2 ${gender === 'male'
                                                ? 'bg-[#0D4A8D] text-white shadow-lg transform scale-105'
                                                : 'bg-gray-100 text-[#0D4A8D] hover:bg-gray-200 hover:shadow-md'
                                                }`}
                                        >
                                            <span className="text-lg">♂</span>
                                            Male
                                        </button>
                                        <button
                                            onClick={() => setGender('female')}
                                            className={`flex-1 py-3 px-6 rounded-xl font-bold text-base transition-all duration-300 flex items-center justify-center gap-2 ${gender === 'female'
                                                ? 'bg-[#009ACD] text-white shadow-lg transform scale-105'
                                                : 'bg-gray-100 text-[#009ACD] hover:bg-gray-200 hover:shadow-md'
                                                }`}
                                        >
                                            <span className="text-lg">♀</span>
                                            Female
                                        </button>
                                    </div>
                                </div>

                                {/* Measuring System */}
                                <div>
                                    <h3 className="text-[#009ACD] text-lg font-semibold mb-3">Measuring System</h3>
                                    <select
                                        value={unit}
                                        onChange={(e) => setUnit(e.target.value)}
                                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#009ACD] focus:ring-0 text-[#0D4A8D] font-medium text-base transition-all duration-300 bg-[#009ACD] text-white"
                                    >
                                        <option value="metric">Metric</option>
                                        <option value="imperial">Imperial</option>
                                    </select>
                                </div>

                                {/* Height Input */}
                                <div>
                                    <div className="flex justify-between items-center mb-3">
                                        <h3 className="text-[#009ACD] text-lg font-semibold">Height ({unit === 'metric' ? 'cm' : 'in'})</h3>
                                        <input
                                            type="number"
                                            value={height}
                                            onChange={(e) => setHeight(e.target.value)}
                                            className="bg-[#0D4A8D] text-white px-4 py-2 rounded-lg font-bold text-lg min-w-[80px] text-center border-none outline-none"
                                            min={unit === 'metric' ? '100' : '39'}
                                            max={unit === 'metric' ? '250' : '98'}
                                            placeholder={unit === 'metric' ? '170' : '67'}
                                        />
                                    </div>
                                    <input
                                        type="range"
                                        min={unit === 'metric' ? '100' : '39'}
                                        max={unit === 'metric' ? '250' : '98'}
                                        value={height || (unit === 'metric' ? '170' : '67')}
                                        onChange={(e) => setHeight(e.target.value)}
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-thumb"
                                        style={{
                                            background: `linear-gradient(to right, #009ACD 0%, #009ACD ${((parseFloat(height || (unit === 'metric' ? '170' : '67')) - (unit === 'metric' ? 100 : 39)) / ((unit === 'metric' ? 250 : 98) - (unit === 'metric' ? 100 : 39))) * 100}%, #e5e7eb ${((parseFloat(height || (unit === 'metric' ? '170' : '67')) - (unit === 'metric' ? 100 : 39)) / ((unit === 'metric' ? 250 : 98) - (unit === 'metric' ? 100 : 39))) * 100}%, #e5e7eb 100%)`
                                        }}
                                    />
                                </div>

                                {/* Weight Input */}
                                <div>
                                    <div className="flex justify-between items-center mb-3">
                                        <h3 className="text-[#009ACD] text-lg font-semibold">Weight ({unit === 'metric' ? 'kg' : 'lbs'})</h3>
                                        <input
                                            type="number"
                                            value={weight}
                                            onChange={(e) => setWeight(e.target.value)}
                                            className="bg-[#0D4A8D] text-white px-4 py-2 rounded-lg font-bold text-lg min-w-[80px] text-center border-none outline-none"
                                            min={unit === 'metric' ? '30' : '66'}
                                            max={unit === 'metric' ? '200' : '440'}
                                            placeholder={unit === 'metric' ? '70' : '154'}
                                        />
                                    </div>
                                    <input
                                        type="range"
                                        min={unit === 'metric' ? '30' : '66'}
                                        max={unit === 'metric' ? '200' : '440'}
                                        value={weight || (unit === 'metric' ? '70' : '154')}
                                        onChange={(e) => setWeight(e.target.value)}
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-thumb"
                                        style={{
                                            background: `linear-gradient(to right, #009ACD 0%, #009ACD ${((parseFloat(weight || (unit === 'metric' ? '70' : '154')) - (unit === 'metric' ? 30 : 66)) / ((unit === 'metric' ? 200 : 440) - (unit === 'metric' ? 30 : 66))) * 100}%, #e5e7eb ${((parseFloat(weight || (unit === 'metric' ? '70' : '154')) - (unit === 'metric' ? 30 : 66)) / ((unit === 'metric' ? 200 : 440) - (unit === 'metric' ? 30 : 66))) * 100}%, #e5e7eb 100%)`
                                        }}
                                    />
                                </div>

                                {/* Calculate Button */}
                                <button
                                    onClick={calculateBMI}
                                    disabled={!weight || !height}
                                    className="w-full bg-[#0D4A8D] text-white py-4 px-6 rounded-xl font-bold text-lg hover:bg-[#0a3d73] transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98]"
                                >
                                    Calculate
                                </button>
                            </div>

                            {/* Center - Human Figure SVG */}
                            <div className="flex justify-center order-2 lg:order-2">
                                <div className="relative transform hover:scale-110 transition-transform duration-500 ease-out">
                                    <img
                                        src={getBMISvg()}
                                        alt={category || 'BMI Category'}
                                        className="w-32 h-80 sm:w-40 sm:h-96 lg:w-48 lg:h-[450px] xl:w-56 xl:h-[500px] object-contain transition-all duration-500 drop-shadow-lg"
                                    />
                                </div>
                            </div>

                            {/* Right Side - Results */}
                            <div className="space-y-6 order-3 text-center">
                                {/* BMI Category Circle */}
                                <div className="flex justify-center">
                                    <div className="relative w-48 h-48 sm:w-56 sm:h-56">
                                        <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 200 200">
                                            {/* Background Circle */}
                                            <circle
                                                cx="100"
                                                cy="100"
                                                r="85"
                                                fill="none"
                                                stroke="#e5e7eb"
                                                strokeWidth="12"
                                            />
                                            {/* Progress Circle */}
                                            <circle
                                                cx="100"
                                                cy="100"
                                                r="85"
                                                fill="none"
                                                stroke="#0D4A8D"
                                                strokeWidth="12"
                                                strokeLinecap="round"
                                                strokeDasharray={`${bmi ? Math.min((bmi / 40) * 534, 534) : 0} 534`}
                                                className="transition-all duration-1000 ease-out"
                                            />
                                        </svg>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-center">
                                                <div className="text-[#009ACD] text-xl sm:text-2xl font-bold mb-1">
                                                    {category || 'Category'}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* BMI and Ideal Weight Values */}
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <div className="text-gray-500 text-2xl mb-1">BMI</div>
                                        <div className="text-[#0D4A8D] text-3xl sm:text-5xl font-bold">
                                            {bmi || '0.0'}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-gray-500 text-2xl mb-1">Ideal Weight</div>
                                        <div className="text-[#0D4A8D] text-3xl sm:text-5xl font-bold">
                                            {getIdealWeight() || '0'}
                                        </div>
                                    </div>
                                </div>

                                {/* Health Message with Product Image */}
                                {bmi && category && (
                                    <div className="space-y-2">
                                        <div className="bg-gray-50 rounded-xl p-4 text-left">
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                {category === 'Underweight' && "You are underweight for your height, and keeping yourself in a healthy range will help your body stay stronger against infections. To support this, you can consider adding Cobalfine 6G to your routine for better nutrition and energy"}
                                                {category === 'Normal weight' && "You are within the normal weight range for your height. Maintain your healthy lifestyle with balanced nutrition and regular exercise."}
                                                {category === 'Overweight' && "You are overweight for your height. Consider adopting healthier eating habits and increasing physical activity."}
                                                {category === 'Obese' && "You are in the obese category for your height, so it's best to consult a healthcare professional for guidance. Along with that, you can consider Garcibio as a supportive option for managing weight."}
                                            </p>
                                        </div>
                                        
                                        {/* Product Image for Underweight and Obese */}
                                        {(category === 'Underweight' || category === 'Obese') && (
                                            <div className="flex justify-center">
                                                <img
                                                    src={category === 'Underweight' ? '/images/cobalFine_6g_popup.jpg' : '/images/Garci_Bio_popup.jpg'}
                                                    alt={category === 'Underweight' ? 'Cobalfine 6G' : 'Garcibio'}
                                                    className=" w-40 h-40 sm:w-48 sm:h-48 object-contain transition-all duration-300 cursor-pointer hover:scale-105"
                                                    onClick={() => {
                                                        const productId = category === 'Underweight' ? 2 : 1; // CobalFine 6G = 2, GarciBIO = 1
                                                        navigate(`/products#product-${productId}`);
                                                    }}
                                                />
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section
                className="bg-[#D9EBFF] py-8 sm:py-12 lg:py-16 "
                id="contact"
            >
                <div className="container mx-auto max-w-[1200px] px-4 ">

                    <div className="relative w-full overflow-hidden rounded-[66.265px] bg-white p-[32.3px] animate-fade-in-up transition-transform duration-300 hover:scale-[1.02]" style={{ animationDelay: '0.4s' }}>
                        {/* Top section with background image */}
                        <div className="relative w-full h-[160px] sm:h-[200px] md:h-[240px] lg:h-[280px] overflow-hidden rounded-t-[33.965px] border-2 border-[#D9EBFF]">
                            {/* Background image */}
                            <img
                                src="/images/Get in touch.png"
                                alt="Get in touch background"
                                className="absolute inset-0 w-full h-full object-cover"
                                style={{
                                    width: "100%",
                                    maxWidth: "1174.788px",
                                    height: "100%",
                                    flexShrink: 0,
                                }}
                            />
                            {/* Dark overlay for better text readability */}
                            <div className="absolute inset-0 bg-black/40"></div>
                            {/* Content overlay */}
                            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between h-full p-4 sm:p-6 md:p-8 lg:p-12">
                                {/* Left side - Get in touch text */}
                                <div className="text-white mb-4 sm:mb-0 sm:pr-8 animate-fade-in-left" style={{ animationDelay: '0.6s' }}>
                                    <h3 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-5xl font-bold mb-2 sm:mb-4 transition-transform duration-300 hover:scale-105">
                                        Get in touch
                                    </h3>
                                    <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-lg font-light text-white/90">
                                        Partner with PharmaRise today and take
                                    </p>
                                    <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-lg font-light text-white/90">
                                        your products to new heights.
                                    </p>
                                </div>
                                {/* Right side - Message textarea */}
                                <div className="w-full sm:w-auto relative animate-fade-in-right" style={{ animationDelay: '0.8s' }}>
                                    {/* Blurred background / border effect */}
                                    <div
                                        className="absolute top-[-8px] sm:top-[-15px] left-[-8px] sm:left-[-15px] right-[-1px] sm:right-[-15px] bottom-[-1px] sm:bottom-[-15px] rounded-[13px] sm:rounded-[30px]"
                                        style={{
                                            border: "0.947px solid rgba(255, 255, 255, 0.25)",
                                            background: "rgba(255, 255, 255, 0.36)",
                                            backdropFilter: "blur(14px)",
                                            pointerEvents: "none",
                                        }}
                                    />
                                    {/* Actual textarea */}

                                </div>
                            </div>
                        </div>
                        {/* Bottom section with form fields */}
                        <div className="p-4 sm:p-6 md:p-8 lg:p-12 animate-fade-in-up" style={{ animationDelay: '1.0s' }}>
                            <ContactForm useBmiTemplate={true} />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default BMICalculator;