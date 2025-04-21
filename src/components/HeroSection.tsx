
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  showCta?: boolean;
}

const HeroSection = ({ title, subtitle, showCta = true }: HeroSectionProps) => {
  return (
    <section className="relative py-20 md:py-32 bg-kaceli-blue text-white overflow-hidden">
      {/* Overlay pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('/kaceli-renovations-web/lovable-uploads/3c400882-bf59-4125-a54d-795bebada849.png')] bg-cover bg-center"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white animate-fade-in">{title}</h1>
          <p className="text-xl text-gray-200 mb-8 animate-fade-in" dangerouslySetInnerHTML={{ __html: subtitle }}></p>
          
          {showCta && (
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in">
              <Link to="/contact" className="btn-secondary">
                Demandez un devis gratuit
              </Link>
              <a href="tel:0649092517" className="btn-primary">
                Appelez-nous au 06 49 09 25 17
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
