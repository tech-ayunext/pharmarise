import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Animations
const garciBioStyles = `
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(40px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeInLeft {
    from { opacity: 0; transform: translateX(-40px); }
    to { opacity: 1; transform: translateX(0); }
  }
  @keyframes fadeInRight {
    from { opacity: 0; transform: translateX(40px); }
    to { opacity: 1; transform: translateX(0); }
  }
  @keyframes fadeInScale {
    from { opacity: 0; transform: scale(0.85); }
    to { opacity: 1; transform: scale(1); }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-12px); }
  }
  @keyframes pulseGlow {
    0%, 100% { box-shadow: 0 0 20px rgba(13, 74, 141, 0.15); }
    50% { box-shadow: 0 0 35px rgba(13, 74, 141, 0.3); }
  }
  @keyframes slideInBadge {
    from { opacity: 0; transform: scale(0.6) rotate(-10deg); }
    to { opacity: 1; transform: scale(1) rotate(0deg); }
  }
  .garci-fade-up { animation: fadeInUp 0.8s ease-out forwards; opacity: 0; }
  .garci-fade-left { animation: fadeInLeft 0.8s ease-out forwards; opacity: 0; }
  .garci-fade-right { animation: fadeInRight 0.8s ease-out forwards; opacity: 0; }
  .garci-fade-scale { animation: fadeInScale 0.8s ease-out forwards; opacity: 0; }
  .garci-float { animation: float 4s ease-in-out infinite; }
  .garci-pulse { animation: pulseGlow 3s ease-in-out infinite; }
  .garci-badge-in { animation: slideInBadge 0.6s ease-out forwards; opacity: 0; }

  .garci-gradient-text {
    background: linear-gradient(135deg, #0D4A8D 0%, #009ACD 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .garci-card-hover {
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  .garci-card-hover:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 60px rgba(13, 74, 141, 0.18);
  }

  .garci-accordion-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94), padding 0.3s ease;
  }
  .garci-accordion-content.open {
    max-height: 800px;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .garci-accordion-arrow {
    transition: transform 0.3s ease;
  }
  .garci-accordion-arrow.open {
    transform: rotate(180deg);
  }
`;

if (typeof document !== 'undefined') {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = garciBioStyles;
    document.head.appendChild(styleSheet);
}

// Expandable Section Component
const ExpandableSection = ({ title, children, defaultOpen = false, delay = '0s' }: {
    title: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
    delay?: string;
}) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div
            className="bg-white rounded-2xl shadow-md overflow-hidden garci-card-hover garci-fade-up"
            style={{ animationDelay: delay }}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between px-6 sm:px-8 py-5 sm:py-6 text-left hover:bg-blue-50/50 transition-colors"
            >
                <h3 className="text-lg sm:text-xl font-bold text-[#0D4A8D] pr-4">{title}</h3>
                <svg
                    className={`garci-accordion-arrow w-5 h-5 sm:w-6 sm:h-6 text-[#0D4A8D] flex-shrink-0 ${isOpen ? 'open' : ''}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div className={`garci-accordion-content px-6 sm:px-8 ${isOpen ? 'open' : ''}`}>
                {children}
            </div>
        </div>
    );
};

// Feature Badge Component
const FeatureBadge = ({ text, icon, delay, position }: {
    text: string;
    icon: React.ReactNode;
    delay: string;
    position: string;
}) => (
    <div
        className={`garci-badge-in absolute ${position} bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-2.5 z-10 garci-card-hover`}
        style={{ animationDelay: delay }}
    >
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0D4A8D] to-[#009ACD] flex items-center justify-center flex-shrink-0">
            {icon}
        </div>
        <span className="text-sm font-semibold text-[#0D4A8D] whitespace-nowrap">{text}</span>
    </div>
);

const GarciBioDetail = () => {
    const navigate = useNavigate();

    const benefits = [
        {
            title: "Appetite Control",
            description: "GarciBIO supports appetite control through the action of HCA (Hydroxycitric Acid) from Garcinia Cambogia, helping reduce cravings and caloric intake.",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 11h16" />
                    <path d="M6 11c0 3.866 2.239 7 6 7s6-3.134 6-7" />
                    <path d="M9 7.5c0-1.1.9-2 2-2" />
                    <path d="M12.5 6.5c0-1.1.9-2 2-2" />
                    <path d="M16 7.8c.9-.2 1.7-.7 2.2-1.5" />
                </svg>
            ),
            ref: "Evid Based Complementary Alternat Med 2013, Article Id751658"
        },
        {
            title: "Visceral Fat Reduction",
            description: "GarciBIO reduces abdominal visceral fat, the dangerous fat around internal organs, leading to improved metabolic health and reduced waist circumference.",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7.5 4.5c-1.7 1.8-2.8 4.4-2.8 7.5s1.1 5.7 2.8 7.5" />
                    <path d="M16.5 4.5c1.7 1.8 2.8 4.4 2.8 7.5s-1.1 5.7-2.8 7.5" />
                    <path d="M9 10.5c1 .9 2 .9 3 .9s2 0 3-.9" />
                    <path d="M9 13.5c1 .9 2 .9 3 .9s2 0 3-.9" />
                    <path d="M12 8v8" />
                </svg>
            ),
            ref: "Curr Ther Res 2003; 64:551-567"
        },
        {
            title: "Carbohydrate Metabolism",
            description: "GarciBIO has Salacia Reticulata which reduces carbohydrate metabolism, limiting the breakdown and absorption of carbohydrates for better weight management.",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="7" cy="8" r="2" />
                    <circle cx="17" cy="8" r="2" />
                    <circle cx="12" cy="16" r="2.2" />
                    <path d="M8.8 9.1l2 4.8" />
                    <path d="M15.2 9.1l-2 4.8" />
                    <path d="M9 8h6" />
                </svg>
            ),
            ref: "Nutr J. 2015; 27:14:21"
        }
    ];

    const certificationLogos = [
        {
            title: 'Hazard Analysis',
            subtitle: 'Critical Control Point',
            image: '/images/cert-haccp.png'
        },
        {
            title: 'Food Safety',
            subtitle: 'Management System',
            image: '/images/cert-iso-22000.png'
        },
        {
            title: 'Good Manufacturing',
            subtitle: 'Practice',
            image: '/images/cert-gmp.png'
        },
        {
            title: 'Registrar Corp',
            subtitle: 'USA',
            image: '/images/cert-registrar-corp.png'
        }
    ];

    return (
        <div className="min-h-screen bg-[#F0F6FF]">
            <Header />




            {/* ===== PRODUCT SHOWCASE SECTION ===== */}
            <section className="pt-[120px] pb-8 md:pt-[140px] md:pb-16 bg-gradient-to-br from-[#EAF1FB] via-[#F2F6FF] to-[#E8F0FE] overflow-hidden relative">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0D4A8D]/[0.03] rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#009ACD]/[0.03] rounded-full translate-y-1/3 -translate-x-1/4 blur-3xl"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">

                    {/* Back to Products */}
                    <div className="mb-2">
                        <button
                            onClick={() => navigate('/products')}
                            className="inline-flex items-center gap-2 text-[#0D4A8D]/60 hover:text-[#0D4A8D] transition-colors text-sm font-medium"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                            Back to Products
                        </button>
                    </div>

                    {/* Headline */}
                    <div className="text-center mb-4 md:mb-8 garci-fade-up">
                        <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight">
                            <span className="text-[#0D4A8D]">NATURAL CARE</span>{' '}
                            <span className="garci-gradient-text"> REAL RESULTS.</span>
                        </h2>
                    </div>



                    {/* Main Content — 2 columns */}
                    <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-10">

                        {/* LEFT: Big Bottle Image */}
                        <div className="w-full lg:w-1/2 flex justify-center garci-fade-left" style={{ animationDelay: '0.3s' }}>
                            <div className="relative">
                                {/* Soft glow */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-[350px] h-[350px] sm:w-[420px] sm:h-[420px] md:w-[480px] md:h-[480px] bg-gradient-radial from-[#0D4A8D]/[0.07] to-transparent rounded-full blur-2xl"></div>
                                </div>
                                {/* Bottle */}
                                <div className="relative garci-float">
                                    <img
                                        src="/images/garcibiobottle.png"
                                        alt="GarciBIO Bottle"
                                        className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[270px] drop-shadow-2xl relative z-10"
                                        style={{ display: 'block' }}
                                    />
                                    {/* Floating Veg Capsule Badge */}
                                    <div className="absolute top-4 -left-12 sm:-left-16 w-24 sm:w-28 garci-float-delayed z-20">
                                        <img
                                            src="/images/Veg capsule.png"
                                            alt="Veg Capsule"
                                            className="w-full h-auto drop-shadow-lg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Product Info */}
                        <div className="w-full lg:w-1/2 garci-fade-right" style={{ animationDelay: '0.4s' }}>
                            <div className="text-center lg:text-left max-w-lg mx-auto lg:mx-0">
                                {/* Product Name Image */}
                                <img
                                    src="/images/Product2.png"
                                    alt="GarciBIO"
                                    className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto mb-4 mx-auto lg:mx-0"
                                />

                                {/* Badges Row — Moved here */}
                                <div className="flex flex-nowrap overflow-x-auto justify-start gap-2 sm:gap-3 mb-6 pb-2 scrollbar-hide">
                                    {[

                                        { label: "100% Natural", color: "#009ACD", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" },
                                        { label: "Non-GMO", color: "#FFA000", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
                                        { label: "First in India", color: "#E91E63", icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" }
                                    ].map((badge, i) => (
                                        <div key={i} className="bg-white/60 backdrop-blur-sm rounded-full border border-[#0D4A8D]/10 px-3 py-1.5 flex items-center gap-1.5">
                                            <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: badge.color }}>
                                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d={badge.icon} /></svg>
                                            </div>
                                            <span className="text-xs font-semibold text-[#0D4A8D]">{badge.label}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Info card */}
                                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 sm:p-6 shadow-lg border border-white/50 mb-6">
                                    <p className="text-[#0D4A8D] font-bold text-base sm:text-lg mb-3">Natural Nutritional Supplement for</p>
                                    <div className="flex items-baseline justify-center lg:justify-start gap-2 flex-wrap">
                                        <span className="text-5xl sm:text-6xl font-extrabold text-[#4CAF50]">6</span>
                                        <span className="text-lg sm:text-xl font-bold text-[#0D4A8D]">kg weight loss* in</span>
                                        <span className="text-5xl sm:text-6xl font-extrabold text-[#FFA000]">90</span>
                                        <span className="text-lg sm:text-xl font-bold text-[#0D4A8D]">days</span>
                                    </div>
                                    <p className="text-gray-400 text-xs mt-3">* along with diet and exercise, in overweight patients</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Full-width details row to avoid empty left area */}
                    <div className="mt-8 md:mt-10 garci-fade-up" style={{ animationDelay: '0.5s' }}>
                        <div className="max-w-6xl mx-auto text-center px-4 sm:px-6">
                            <p className="text-[#0D4A8D] text-lg sm:text-xl md:text-2xl font-semibold leading-relaxed mb-4">
                                Garcinia Cambogia extract (HCA 50%) 400 mg &amp; <span className="block sm:inline">Salacia Reticulata extract 200 mg</span>
                            </p>

                            <p className="text-[#0D4A8D]/80 text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-5xl mx-auto">
                                A unique natural nutritional supplement, first in India, containing Garcinia Cambogia with the added advantage of Salacia Reticulata. Formulated with science-backed ingredients and free from artificial additives.
                            </p>

                            <button
                                onClick={() => navigate('/contact')}
                                className="group inline-flex items-center gap-3 px-8 py-4 bg-[#0D4A8D] text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:bg-[#0a3d75] transition-all duration-300 text-base"
                            >
                                Enquire Now
                                <span className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                                    <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== TRANSFORMATION SECTION ===== */}
            <section className="py-12 md:py-16 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-10 garci-fade-up">
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#0D4A8D]">
                            Experience the <span className="text-[#4CAF50]">Transformation</span>
                        </h2>
                        <p className="text-gray-500 mt-2">Natural progression towards a healthier you</p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 max-w-5xl mx-auto">

                        {/* BEFORE: Obese Image */}
                        <div className="flex flex-col items-center garci-fade-right" style={{ animationDelay: '0.2s' }}>
                            <div className="relative w-48 h-64 sm:w-56 sm:h-80 md:w-64 md:h-96 mb-4">
                                <img
                                    src="/fitnessimage/obese image.png"
                                    alt="Before Transformation"
                                    className="w-full h-full object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-red-100/90 backdrop-blur border border-red-200 text-red-700 px-4 py-1 rounded-full text-sm font-bold shadow-sm">
                                    Before
                                </div>
                            </div>
                        </div>

                        {/* CENTER: The Catalyst (GarciBIO) */}
                        <div className="flex flex-col items-center justify-center gap-4 garci-fade-up relative z-10" style={{ animationDelay: '0.4s' }}>
                            {/* Animated Arrows for Mobile (Down) / Desktop (Right) */}
                            <div className="text-[#4CAF50] text-4xl animate-pulse md:hidden">↓</div>
                            <div className="hidden md:flex items-center text-[#4CAF50] gap-1 text-3xl animate-pulse">
                                <span>›</span><span>›</span><span>›</span>
                            </div>

                            <div className="relative w-48 h-48 sm:w-64 sm:h-64 flex items-center justify-center">
                                {/* Glow effect */}
                                <div className="absolute inset-0 bg-green-100 rounded-full blur-2xl animate-pulse opacity-60"></div>
                                {/* Bottle & Capsule */}
                                <div className="relative w-full h-full flex items-center justify-center">
                                    <img
                                        src="/fitnessimage/garcibio bottle.png"
                                        alt="GarciBIO"
                                        className="w-full h-auto max-h-full object-contain relative z-10 drop-shadow-xl"
                                    />
                                    {/* Floating Veg Capsule Badge (Right side per reference) */}
                                    <img
                                        src="/fitnessimage/capsule.png"
                                        alt="Veg Capsule"
                                        className="w-12 sm:w-16 h-auto absolute top-4 -right-2 rotate-6 drop-shadow-lg animation-float z-20"
                                    />
                                </div>
                            </div>

                            <div className="text-[#4CAF50] text-4xl animate-pulse md:hidden">↓</div>
                            <div className="hidden md:flex items-center text-[#4CAF50] gap-1 text-3xl animate-pulse">
                                <span>›</span><span>›</span><span>›</span>
                            </div>
                        </div>

                        {/* AFTER: Slim Image */}
                        <div className="flex flex-col items-center garci-fade-left" style={{ animationDelay: '0.6s' }}>
                            <div className="relative w-48 h-64 sm:w-56 sm:h-80 md:w-64 md:h-96 mb-4">
                                <img
                                    src="/fitnessimage/slim image.png"
                                    alt="After Transformation"
                                    className="w-full h-full object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-green-100/90 backdrop-blur border border-green-200 text-green-700 px-4 py-1 rounded-full text-sm font-bold shadow-sm">
                                    After
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>

            {/* ===== KEY BENEFITS SECTION ===== */}
            <section className="py-12 sm:py-16 md:py-20 bg-[#F0F6FF]">
                <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                    <h2 className="text-3xl sm:text-4xl md:text-[45px] font-bold text-[#0D4A8D] text-center mb-4 garci-fade-up">
                        Key Benefits
                    </h2>
                    <p className="text-[#0D4A8D]/60 text-center text-lg mb-10 sm:mb-14 garci-fade-up" style={{ animationDelay: '0.1s' }}>
                        Clinically studied ingredients for effective weight management
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="garci-fade-up garci-card-hover bg-white rounded-2xl overflow-hidden shadow-md"
                                style={{ animationDelay: `${0.2 + index * 0.15}s` }}
                            >
                                {/* Card Header */}
                                <div className={`p-6 ${index === 1 ? 'bg-gradient-to-br from-[#009ACD] to-[#0D4A8D]' : 'bg-gradient-to-br from-[#0D4A8D] to-[#009ACD]'}`}>
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="w-14 h-14 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                                            {benefit.icon}
                                        </div>
                                        <h3 className="text-white text-xl font-bold leading-tight">{benefit.title}</h3>
                                    </div>
                                </div>
                                {/* Card Body */}
                                <div className="p-6">
                                    <p className="text-[#0D4A8D]/80 text-sm leading-relaxed mb-4">
                                        {benefit.description}
                                    </p>
                                    <div className="flex items-start gap-2 bg-blue-50 rounded-lg p-3">
                                        <svg className="w-4 h-4 text-[#009ACD] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <p className="text-xs text-[#0D4A8D]/60 italic">Ref: {benefit.ref}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== DOSAGE SECTION (Redesigned) ===== */}
            <section className="py-10 md:py-12 bg-gradient-to-b from-white to-blue-50/30">
                <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                        {/* LEFT: Lifestyle Image */}
                        <div className="relative garci-fade-right">
                            <div className="h-64 sm:h-72 md:h-80 rounded-2xl overflow-hidden shadow-xl relative group">
                                <img
                                    src="/images/medidosage.png"
                                    alt="Healthy Lifestyle Routine"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                {/* Overlay gradient for text readability if needed */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0D4A8D]/20 to-transparent"></div>

                                {/* Decorative circle */}
                                <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#4CAF50]/10 rounded-full blur-3xl mix-blend-multiply"></div>
                                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#009ACD]/10 rounded-full blur-3xl mix-blend-multiply"></div>
                            </div>
                        </div>

                        {/* RIGHT: Dosage Info */}
                        <div className="garci-fade-left">
                            <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-[#0D4A8D] font-semibold text-xs mb-3">
                                Daily Routine
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-[#0D4A8D] mb-5 leading-tight">
                                Simple steps for <br /><span className="text-[#4CAF50]">Better Results</span>
                            </h2>

                            <div className="space-y-4">
                                {/* Step 1 */}
                                <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 group border border-transparent hover:border-blue-50">
                                    <div className="w-10 h-10 rounded-full bg-[#0D4A8D] text-white flex items-center justify-center flex-shrink-0 text-lg font-bold shadow-sm group-hover:scale-110 transition-transform">
                                        2
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-[#0D4A8D]">Capsules Daily</h3>
                                        <p className="text-gray-500 text-sm">Morning & Evening for metabolism support.</p>
                                    </div>
                                </div>

                                {/* Step 2 */}
                                <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 group border border-transparent hover:border-blue-50">
                                    <div className="w-10 h-10 rounded-full bg-[#009ACD] text-white flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                                        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-[#0D4A8D]">30 Mins Before Meals</h3>
                                        <p className="text-gray-500 text-sm">Best absorption on empty stomach.</p>
                                    </div>
                                </div>

                                {/* Step 3 */}
                                <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 group border border-transparent hover:border-blue-50">
                                    <div className="w-10 h-10 rounded-full bg-[#4CAF50] text-white flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                                        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-[#0D4A8D]">With Warm Water</h3>
                                        <p className="text-gray-500 text-sm">Aids faster dissolution & digestion.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ===== EXPANDABLE SECTIONS ===== */}
            <section className="py-12 sm:py-16 md:py-20 bg-[#F0F6FF]">
                <div className="container mx-auto px-4 md:px-8 max-w-4xl">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#0D4A8D] text-center mb-10 garci-fade-up">
                        Additional Information
                    </h2>

                    <div className="space-y-4">
                        <ExpandableSection title="How GarciBIO Works" defaultOpen={true} delay="0.1s">
                            <div className="space-y-4 pb-2">
                                <p className="text-[#0D4A8D]/80 text-sm sm:text-base leading-relaxed">
                                    GarciBIO combines two powerful natural extracts that work synergistically for weight management:
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="bg-blue-50 rounded-xl p-4">
                                        <h4 className="font-bold text-[#0D4A8D] mb-2 flex items-center gap-2">
                                            <span className="w-6 h-6 rounded-full bg-[#0D4A8D] text-white text-xs flex items-center justify-center">1</span>
                                            Garcinia Cambogia (HCA 50%)
                                        </h4>
                                        <p className="text-[#0D4A8D]/70 text-sm leading-relaxed">
                                            Hydroxycitric Acid (HCA) inhibits the enzyme citrate lyase, which the body uses to make fat. It also raises levels of serotonin, helping to reduce appetite and food cravings.
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 rounded-xl p-4">
                                        <h4 className="font-bold text-[#0D4A8D] mb-2 flex items-center gap-2">
                                            <span className="w-6 h-6 rounded-full bg-[#009ACD] text-white text-xs flex items-center justify-center">2</span>
                                            Salacia Reticulata
                                        </h4>
                                        <p className="text-[#0D4A8D]/70 text-sm leading-relaxed">
                                            Salacia inhibits carbohydrate-digesting enzymes (alpha-glucosidase), reducing the breakdown and absorption of carbohydrates. It also improves insulin sensitivity and reduces visceral fat.
                                        </p>
                                    </div>
                                </div>
                                <p className="text-[#0D4A8D]/70 text-sm leading-relaxed">
                                    Multiple pathways of action make GarciBIO the preferred choice for weight reduction. The combination delivers synergistic effects that are superior to either ingredient alone.
                                </p>
                            </div>
                        </ExpandableSection>

                        <ExpandableSection title="Who Should Take GarciBIO?" delay="0.2s">
                            <div className="space-y-3 pb-2">
                                <p className="text-[#0D4A8D]/80 text-sm sm:text-base leading-relaxed">
                                    GarciBIO is recommended for overweight patients when diet and exercise alone are not adequate:
                                </p>
                                <ul className="space-y-2">
                                    {[
                                        "Adults with BMI above 25 (overweight category)",
                                        "Individuals struggling with appetite control",
                                        "Those looking for a natural, vegetarian weight management supplement",
                                        "Patients seeking to reduce abdominal visceral fat",
                                        "People wanting to improve carbohydrate metabolism"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-[#0D4A8D]/80 text-sm sm:text-base">
                                            <svg className="w-5 h-5 text-[#4CAF50] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="bg-green-50 rounded-xl p-4 mt-4 flex items-start gap-3">
                                    <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                    <p className="text-green-800 text-sm">
                                        <strong>Vegetarian Friendly:</strong> Available in gelatin-free Veg capsules — Indian vegetarian population can take it without any hesitation.
                                    </p>
                                </div>
                            </div>
                        </ExpandableSection>

                        <ExpandableSection title="Product Highlights" delay="0.3s">
                            <div className="space-y-3 pb-2">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {[
                                        { label: "Composition", value: "Garcinia Cambogia (HCA 50%) 400mg + Salacia Reticulata 200mg" },
                                        { label: "Form", value: "Vegetarian Capsules (Gelatin-free)" },
                                        { label: "Pack Size", value: "30 Capsules per bottle" },
                                        { label: "Category", value: "Natural Nutritional Supplement" },
                                        { label: "Dosage", value: "2 capsules, twice daily" },
                                        { label: "Best Results", value: "When combined with diet and exercise" }
                                    ].map((item, i) => (
                                        <div key={i} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                                            <p className="text-xs text-[#009ACD] font-semibold uppercase tracking-wider mb-1">{item.label}</p>
                                            <p className="text-[#0D4A8D] text-sm font-medium">{item.value}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ExpandableSection>

                        <ExpandableSection title="Scientific References" delay="0.4s">
                            <div className="space-y-3 pb-2">
                                {[
                                    { num: 1, ref: "Evid Based Complementary Alternat Med 2013, Article Id751658" },
                                    { num: 2, ref: "Curr Ther Res 2003; 64:551-567" },
                                    { num: 3, ref: "J Cardiovasc Dis Res 2011;2:199-205" },
                                    { num: 4, ref: "Nutr J. 2015; 27:14:21" }
                                ].map((item) => (
                                    <div key={item.num} className="flex items-start gap-3">
                                        <span className="w-6 h-6 rounded-full bg-[#0D4A8D] text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">{item.num}</span>
                                        <p className="text-[#0D4A8D]/70 text-sm">{item.ref}</p>
                                    </div>
                                ))}
                                <p className="text-gray-400 text-xs italic mt-2">* Along with diet and exercise</p>
                            </div>
                        </ExpandableSection>
                    </div>
                </div>
            </section>

            {/* ===== CERTIFICATIONS SECTION ===== */}
            <section className="py-12 sm:py-16 bg-white">
                <div className="container mx-auto px-4 md:px-8 max-w-5xl">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#0D4A8D] text-center mb-3 garci-fade-up">
                        Manufactured at a Plant with the Following Certifications
                    </h2>
                    <p className="text-[#0D4A8D]/50 text-sm text-center mb-10 garci-fade-up" style={{ animationDelay: '0.1s' }}>
                        Quality assurance backed by international standards
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-7">
                        {certificationLogos.map((cert, index) => (
                            <div
                                key={cert.title}
                                className="garci-fade-up bg-[#F2F4F7] rounded-xl px-4 py-5 flex flex-col items-center text-center border border-[#0D4A8D]/10"
                                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                            >
                                <div className="w-full max-w-[170px] h-[165px] bg-transparent rounded-lg overflow-hidden mb-4 flex items-center justify-center">
                                    <img
                                        src={cert.image}
                                        alt={`${cert.title} ${cert.subtitle}`}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <p className="text-[#0D4A8D] font-bold text-[19px] leading-tight">{cert.title}</p>
                                <p className="text-[#0D4A8D] font-bold text-[19px] leading-tight mt-1">{cert.subtitle}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CTA SECTION ===== */}
            <section className="py-12 sm:py-16 bg-gradient-to-b from-[#D9EBFF] to-[#F0F6FF]">
                <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center garci-fade-up">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0D4A8D] mb-4">
                        Interested in GarciBIO?
                    </h2>
                    <p className="text-[#0D4A8D]/70 text-base sm:text-lg mb-8 max-w-xl mx-auto">
                        Connect with us to learn more about GarciBIO and how it can support your weight management journey.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                            onClick={() => navigate('/contact')}
                            className="px-8 py-3.5 bg-gradient-to-r from-[#0D4A8D] to-[#009ACD] text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-base"
                        >
                            Enquire Now
                        </button>
                        <button
                            onClick={() => navigate('/products')}
                            className="px-8 py-3.5 bg-white text-[#0D4A8D] font-bold rounded-xl border-2 border-[#0D4A8D] hover:bg-blue-50 hover:scale-105 transition-all duration-300 text-base"
                        >
                            ← Back to Products
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default GarciBioDetail;
