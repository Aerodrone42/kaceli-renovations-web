
import { Phone, Zap, Droplet, Thermometer } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import ContactForm from '@/components/ContactForm';

const Index = () => {
  return (
    <>
      <HeroSection 
        title="Votre artisan de confiance à Chaponost" 
        subtitle="<strong>Installation et dépannage de systèmes électriques, plomberie et chauffage</strong><br/>Qualité, réactivité et professionnalisme au service de votre confort"
      />
      
      {/* Section Présentation */}
      <section className="container-section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2>Kaceli Rénovation Conseil</h2>
            <p>
              Basé à <strong>Chaponost</strong>, nous sommes spécialisés dans l'installation et le dépannage de systèmes électriques, 
              de plomberie et de chauffage pour les particuliers et professionnels dans tout le Rhône.
            </p>
            <p>
              Que vous ayez besoin d'une <strong>mise aux normes électriques</strong>, d'une <strong>installation de chauffage</strong> ou 
              d'un <strong>dépannage de plomberie</strong>, notre équipe d'artisans qualifiés est à votre service pour vous garantir 
              des prestations de qualité, réalisées dans les règles de l'art.
            </p>
            <div className="mt-6">
              <Link to="/a-propos" className="btn-primary inline-block">
                En savoir plus sur nous
              </Link>
            </div>
          </div>
          <div>
            <img 
              src="/kaceli-renovations-web/lovable-uploads/4f022d8e-de26-4f10-adf9-cd2956d0c915.png" 
              alt="Travail de rénovation" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </section>
      
      {/* Section Services */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2>Nos services</h2>
            <p className="max-w-3xl mx-auto text-gray-600">
              Découvrez notre gamme complète de services pour répondre à tous vos besoins en matière d'électricité, 
              de plomberie et de chauffage.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              title="Électricité" 
              description="<strong>Installation électrique</strong>, <strong>mise aux normes</strong>, tableaux électriques, 
              prises, interrupteurs, éclairage, VMC et <strong>dépannage électrique</strong>."
              icon={<Zap size={36} />}
              link="/nos-services"
            />
            <ServiceCard 
              title="Plomberie" 
              description="Installation et <strong>réparation de plomberie</strong>, chauffe-eau, 
              robinets, éviers, douches, <strong>dépannage plomberie</strong> et évacuations."
              icon={<Droplet size={36} />}
              link="/nos-services"
            />
            <ServiceCard 
              title="Chauffage" 
              description="Installation de tous types de <strong>chauffages</strong> (électriques, radiateurs, 
              <strong>planchers chauffants</strong>, chaudières) et entretien."
              icon={<Thermometer size={36} />}
              link="/nos-services"
            />
          </div>
          
          <div className="text-center mt-10">
            <Link to="/nos-services" className="btn-secondary inline-block">
              Tous nos services
            </Link>
          </div>
        </div>
      </section>
      
      {/* Section Contact avec Google Maps */}
      <section className="container-section">
        <div className="text-center mb-12">
          <h2>Contactez-nous</h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            Besoin d'un renseignement ou d'un devis ? N'hésitez pas à nous contacter par téléphone ou 
            en remplissant le formulaire ci-dessous.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <ContactForm />
          </div>
          
          <div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-bold mb-4">Nos coordonnées</h3>
              <div className="space-y-4">
                <p className="flex items-center">
                  <span className="text-kaceli-orange mr-3">
                    <Phone size={20} />
                  </span>
                  <a href="tel:0649092517" className="hover:text-kaceli-orange transition-colors">
                    06 49 09 25 17
                  </a>
                </p>
                <p>
                  <strong>Adresse :</strong><br />
                  2 Chemin des Landes<br />
                  69630 Chaponost
                </p>
                <p>
                  <strong>Email :</strong><br />
                  <a href="mailto:kacelirenovationconseil@gmail.com" className="hover:text-kaceli-orange transition-colors">
                    kacelirenovationconseil@gmail.com
                  </a>
                </p>
              </div>
            </div>
            
            {/* Google Maps */}
            <div className="rounded-lg overflow-hidden shadow-md h-80">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22300.110863930224!2d4.7209834!3d45.7124795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ead03f7ec24b%3A0x3f1bdacc88d90e68!2sChaponost!5e0!3m2!1sfr!2sfr!4v1681387046415!5m2!1sfr!2sfr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps - Kaceli Rénovation Conseil"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
