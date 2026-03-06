import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { ThemeInit } from "../.flowbite-react/init";
import ScrollToTop from "./components/ScrollToTop";
import GlobalMotion from "./components/GlobalMotion";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import NewAboutPage from "./components/NewAbout";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import BMICalculator from "./pages/BMICalculator";
import GarciBioDetail from "./pages/GarciBioDetail";

const queryClient = new QueryClient();
const whatsappMessage =
  "Hello, I came across the Pharmarise Innovations Website and would like to learn more about your products and services. Could you please assist me with the details?";
const whatsappHref = `https://wa.me/919820410356?text=${encodeURIComponent(whatsappMessage)}`;

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ThemeInit />
      <BrowserRouter>
        <ScrollToTop />
        <GlobalMotion />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/new-about" element={<NewAboutPage />} />
          <Route path="/products/garcibio" element={<GarciBioDetail />} />
          <Route path="/products" element={<Products />} />
          <Route path="/bmi-calculator" element={<BMICalculator />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="fixed bottom-5 right-5 z-[9999] h-16 w-16 rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-[#1ebe5b] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 flex items-center justify-center animate-bounce"
          style={{ animationDuration: "2.2s" }}
        >
          <FaWhatsapp className="h-10 w-10" />
        </a>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;