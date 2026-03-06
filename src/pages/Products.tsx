import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Add custom CSS for animations
const animationStyles = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fade-in {
    animation: fadeIn 0.6s ease-out forwards;
    opacity: 0;
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = animationStyles;
    document.head.appendChild(styleSheet);
}

const Products = () => {
    const navigate = useNavigate();

    const products = [
        {
            id: 1,
            name: "GarciBIO",
            image: "/images/p1.png",
            description: "A unique natural nutritional supplement for the first-time in India containing Garcinia Cambogia with added advantage of Salacia Reticulata as compared to other marketed Garcinia products. Multiple pathways of action make GarciBIO preferred choice for weight reduction of 6Kg in 9 days with Veg Capsule"
        },
        {
            id: 2,
            name: "CobalFine 6G",
            image: "/images/p3.png",
            description: "CobalFine 6G is Veg tablet formulation with 6 unique extract along with perfect ratio of Curcumin and Piperine which reduces stress to maintains youthfulness."
        },
        {
            id: 3,
            name: "CobalFine",
            image: "/images/p4.png",
            description: "We are the second company to market a unique combination containing both the Bioactive forms of B12. Addition of Adenosylcobalamin which is the only other bioactive form of b12 makes CobalFIne completely Bioactive product. The unique formula of CobalFine becomes a preferred choice amongst the doctors in very short time span."
        },
        {
            id: 4,
            name: "RosNano",
            image: "/images/rosnano.png",
            description: "RosNano is an innovative first time in India product which has Nanoparticle size based Rosuvastatin formulation stabilized in Cyclodextrin. Rosuvastatin is poorly soluble drug & hence low bioavailability (less drug reaches to blood circulation.) his improves the solubility & stability of poorly soluble. the particle size of rosuvastatin is 2-20 micron as compared to 200-400 micron of conventional marketed Rosuvastatin brands. This innovation ensures improved bioavailability of Rosuvastatin by 2 fold for enhanced efficacy, safety & reducing its dosage load for required effect.."
        },
        {
            id: 5,
            name: "Biognide GV2",
            image: "/images/p7.png",
            description: "BIOGNIDE GV2 - A triple drug therapy containing Metformin, Glimepride and Voglibose with proper dose scaleup. The advanced formulation enables Biognide GV2 to disintegrate faster as compare to other marketed brand that makes faster availability of drug at site of absorption."
        },
        {
            id: 6,
            name: "Biognide GV1",
            image: "/images/p6.png",
            description: "A triple drug therapy containing Metformin, Glimepride and Voglibose. The advanced formulation enables Biognide GV1 to disintegrate faster as compared to another marketed brand."
        },
        {
            id: 7,
            name: "Biognide-T",
            image: "/images/p5.png",
            description: "Biognide-T is a combination of Metformin & Teneligliptin for better glycaemic control. The solphilic technology used in formulation makes Biognide-T stand out amongst other brands. This technology allows Biognide-T to disintegrate faster with higher dissolution rate and offer improved Bioavailability. small tablet size increases patient convenience.."
        }
    ];


    return (
        <div className="min-h-screen ">
            <Header />

            {/* Hero Section */}
            <div className="relative bg-[#0d4a8d] pt-[120px] pb-8 md:pb-12 min-h-[200px] md:min-h-[250px] flex items-center" style={{ backgroundImage: "url('/images/Product_background.png')", backgroundSize: 'cover', backgroundPosition: 'center top' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-[#0d4a8d]/100 from-25% to-[#0d4a8d]/25"></div>
                <div className="relative z-10 container mx-auto px-4 md:px-8 w-full mt-[20px] lg:mt-[40px]">
                    <h1 className="text-4xl md:text-6xl font-bold text-white animate-fade-in transform transition-all duration-700 hover:scale-105">
                        Products
                    </h1>
                </div>
            </div>

            {/* Products Section */}
            <div className="py-4 sm:py-8 md:py-20 bg-[#D9EBFF]">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid gap-8 md:gap-12">
                            {products.map((product, index) => (
                                <div
                                    key={product.id}
                                    id={`product-${product.id}`}
                                    className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-xl hover:scale-[1.02] animate-fade-in relative ${product.id === 1 ? 'cursor-pointer group' : ''}`}
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                    onClick={product.id === 1 ? () => navigate('/products/garcibio') : undefined}
                                >
                                    {/* View Details overlay for GarciBIO */}
                                    {product.id === 1 && (
                                        <div className="absolute top-4 right-4 z-20 bg-[#0D4A8D] text-white text-xs font-bold px-4 py-2 rounded-full opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 shadow-lg flex items-center gap-1.5">
                                            View Details
                                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    )}
                                    {/* Desktop Layout */}
                                    <div className="hidden lg:flex relative h-[220px]">
                                        {/* Left Side - Card Background Image */}
                                        <div className="relative h-full w-[300px] rounded-l-xl overflow-hidden">
                                            <img
                                                src="/images/card_bg.png"
                                                alt="Card Background"
                                                className="w-full h-full object-cover"
                                            />
                                            {/* Product Image Overlay */}
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="rounded-xl p-2 transition-transform duration-300 hover:scale-105">
                                                    <img
                                                        src={product.image}
                                                        alt={product.name}
                                                        className="w-[320px] h-[200px] object-contain transition-transform duration-300"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Right Side - Description */}
                                        <div className="flex-1 p-8 flex flex-col justify-center bg-white rounded-r-xl">

                                            <p className="text-[#0D4A8D] leading-relaxed text-base">
                                                {product.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Mobile Layout */}
                                    <div className="lg:hidden">
                                        {/* Mobile Card Background with Image */}
                                        <div className="relative h-[160px] rounded-t-xl overflow-hidden">
                                            <img
                                                src="/images/card_bg.png"
                                                alt="Card Background"
                                                className="w-full h-full object-cover"
                                            />
                                            {/* Product Image Overlay */}
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="rounded-xl p-4  transition-transform duration-300 hover:scale-105">
                                                    <img
                                                        src={product.image}
                                                        alt={product.name}
                                                        className="w-[260px] h-[150px] object-contain transition-transform duration-300"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Mobile Description */}
                                        <div className="p-6 bg-white rounded-b-xl">

                                            <p className="text-[#0D4A8D] leading-relaxed text-sm">
                                                {product.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Products;