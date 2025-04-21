
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import { Chaponost, Brignais, Francheville } from "./pages/LocalPages";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="a-propos" element={<About />} />
            <Route path="nos-services" element={<Services />} />
            <Route path="avis-clients" element={<Testimonials />} />
            <Route path="contact" element={<Contact />} />
            
            {/* Pages locales */}
            <Route path="chaponost" element={<Chaponost />} />
            <Route path="brignais" element={<Brignais />} />
            <Route path="francheville" element={<Francheville />} />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
