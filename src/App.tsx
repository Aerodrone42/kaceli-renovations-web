
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import LegalMentions from "./pages/LegalMentions";
import { 
  Chaponost, 
  Brignais, 
  Francheville,
  Venissieux,
  Oullins,
  TassinLaDemiLune,
  Givors,
  SaintGenisLaval,
  PierreBenite,
  Lyon5
} from "./pages/LocalPages";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Détermine si nous sommes hébergés sur GitHub Pages
const isGitHubPages = window.location.hostname === "www.kacelirenovationconseil.com" || 
                     window.location.hostname === "kacelirenovationconseil.com";

// Utilise le routeur approprié en fonction de l'environnement d'hébergement
const Router = isGitHubPages ? HashRouter : BrowserRouter;

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="a-propos" element={<About />} />
            <Route path="nos-services" element={<Services />} />
            <Route path="avis-clients" element={<Testimonials />} />
            <Route path="contact" element={<Contact />} />
            <Route path="mentions-legales" element={<LegalMentions />} />
            
            {/* Pages locales */}
            <Route path="chaponost" element={<Chaponost />} />
            <Route path="brignais" element={<Brignais />} />
            <Route path="francheville" element={<Francheville />} />
            <Route path="venissieux" element={<Venissieux />} />
            <Route path="oullins" element={<Oullins />} />
            <Route path="tassin-la-demi-lune" element={<TassinLaDemiLune />} />
            <Route path="givors" element={<Givors />} />
            <Route path="saint-genis-laval" element={<SaintGenisLaval />} />
            <Route path="pierre-benite" element={<PierreBenite />} />
            <Route path="lyon-5" element={<Lyon5 />} />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
