
import HeroSection from '@/components/HeroSection';
import ContactForm from '@/components/ContactForm';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <>
      <HeroSection 
        title="Contactez-nous" 
        subtitle="Nous sommes à votre écoute pour tous vos projets"
        showCta={false}
      />
      
      <section className="container-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2>Nos coordonnées</h2>
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <MapPin size={24} className="text-kaceli-orange mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl mb-2">Adresse</h3>
                  <p>
                    2 Chemin des Landes<br />
                    69630 Chaponost<br />
                    France
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone size={24} className="text-kaceli-orange mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl mb-2">Téléphone</h3>
                  <p>
                    <a href="tel:0649092517" className="text-kaceli-blue hover:text-kaceli-orange transition-colors">
                      06 49 09 25 17
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mail size={24} className="text-kaceli-orange mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl mb-2">Email</h3>
                  <p>
                    <a href="mailto:kacelirenovationconseil@gmail.com" className="text-kaceli-blue hover:text-kaceli-orange transition-colors">
                      kacelirenovationconseil@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            
            <h2>Horaires d'ouverture</h2>
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-bold">Lundi - Vendredi</p>
                  <p>8h00 - 19h00</p>
                </div>
                <div>
                  <p className="font-bold">Samedi</p>
                  <p>9h00 - 18h00</p>
                </div>
                <div className="col-span-2">
                  <p className="font-bold">Dimanche</p>
                  <p>Fermé (sauf urgences)</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="font-medium text-kaceli-blue">
                  Service d'urgence disponible 7j/7 pour les dépannages
                </p>
              </div>
            </div>
            
            <h2>Zones d'intervention</h2>
            <p>
              Nous intervenons principalement à <strong>Chaponost</strong> et dans un rayon de 30 km autour, 
              couvrant ainsi une grande partie de la région lyonnaise.
            </p>
            <p>
              Nos zones d'intervention principales incluent : Chaponost, Brignais, Francheville, Oullins, 
              Saint-Genis-Laval, Tassin-la-Demi-Lune, Lyon, Givors, Vénissieux et Pierre-Bénite.
            </p>
          </div>
          
          <div>
            <h2>Formulaire de contact</h2>
            <p className="mb-6">
              Vous avez une question, besoin d'un renseignement ou d'un devis ? 
              N'hésitez pas à nous contacter en remplissant le formulaire ci-dessous.
            </p>
            
            <ContactForm />
            
            <div className="mt-8">
              <h2>Nous trouver</h2>
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
        </div>
      </section>
    </>
  );
};

export default Contact;
