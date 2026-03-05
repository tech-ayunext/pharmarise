import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import NewAboutPage from "./components/NewAbout";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import BMICalculator from "./pages/BMICalculator";
import GarciBioDetail from "./pages/GarciBioDetail";
const queryClient = new QueryClient();
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/new-about" element={<NewAboutPage />} />
          <Route path="/products/garcibio" element={<GarciBioDetail />} />
          <Route path="/products" element={<Products />} />
          <Route path="/bmi-calculator" element={<BMICalculator />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;