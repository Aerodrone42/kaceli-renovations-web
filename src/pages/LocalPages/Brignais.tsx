import { Link } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';
import { Zap, Droplet, Thermometer } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import Seo from '@/components/Seo';

const Brignais = () => {
  return (
    <>
      <Seo 
        title="Plombier, électricien et chauffagiste à Brignais | Kaceli Rénovation Conseil"
        description="Kaceli Rénovation Conseil : artisan local à Brignais. Installation, dépannage et rénovation en plomberie, électricité et chauffage. Devis gratuit. Intervention rapide à Brignais et environs."
      />
      
      <section className="container-section">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg mb-8">
            <strong>Kaceli Rénovation Conseil</strong> intervient à <strong>Brignais</strong> et dans les communes voisines comme Chaponost, Vourles, Millery, Irigny, Vernaison et Pierre-Bénite. 
            Nous proposons une gamme complète de services en <strong>plomberie</strong>, <strong>électricité</strong> et <strong>chauffage</strong> pour répondre à tous vos besoins.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <ServiceCard 
              title="Électricité" 
              description="<strong>Installation électrique</strong>, <strong>mise aux normes</strong> et <strong>dépannage électricité</strong> à <strong>Brignais</strong>."
              icon={<Zap size={36} />}
              link="/nos-services#electricite"
            />
            <ServiceCard 
              title="Plomberie" 
              description="<strong>Plombier à Brignais</strong> pour tous vos travaux de <strong>plomberie</strong>, installation et <strong>dépannage</strong>."
              icon={<Droplet size={36} />}
              link="/nos-services#plomberie"
            />
            <ServiceCard 
              title="Chauffage" 
              description="Installation et entretien de <strong>chauffages</strong> par votre <strong>chauffagiste à Brignais</strong>."
              icon={<Thermometer size={36} />}
              link="/nos-services#chauffage"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2>Services d'électricité à Brignais</h2>
            <p>
              En tant qu'<strong>électricien à Brignais</strong>, <strong>Kaceli Rénovation Conseil</strong> réalise tous types de travaux d'électricité, 
              de l'installation à la rénovation, en passant par le dépannage.
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li><strong>Installation électrique</strong> pour maisons neuves et rénovations</li>
              <li><strong>Mise aux normes électriques</strong> selon la réglementation en vigueur</li>
              <li>Installation de tableaux électriques sécurisés</li>
              <li>Pose de prises, interrupteurs et systèmes d'éclairage</li>
              <li><strong>Dépannage électrique</strong> rapide et efficace</li>
            </ul>
          </div>
          <div>
            <img 
              src="/kaceli-renovations-web/lovable-uploads/b8163cde-402e-4249-a7d5-f65402322a62.png"
              alt="Services d'électricité à Brignais" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
          <div className="order-2 md:order-1">
            <img 
              src="/kaceli-renovations-web/lovable-uploads/3312d870-d0cf-4de0-a82d-b5a8fb38a3e3.png"
              alt="Services de plomberie à Brignais" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2>Services de plomberie à Brignais</h2>
            <p>
              Votre <strong>plombier à Brignais</strong>, <strong>Kaceli Rénovation Conseil</strong>, intervient pour tous vos besoins en plomberie, 
              que ce soit pour une nouvelle installation, une réparation ou un dépannage d'urgence.
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li>Installation et remplacement de <strong>chauffe-eau</strong></li>
              <li>Installation et réparation de robinetterie</li>
              <li>Installation de sanitaires et d'éviers</li>
              <li><strong>Dépannage plomberie</strong> pour fuites et canalisations bouchées</li>
              <li>Rénovation de salles de bains</li>
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
          <div>
            <h2>Services de chauffage à Brignais</h2>
            <p>
              <strong>Chauffagiste à Brignais</strong>, <strong>Kaceli Rénovation Conseil</strong> vous propose des solutions de chauffage 
              adaptées à votre logement et à vos besoins. Nous assurons également l'entretien et le dépannage de vos installations.
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li>Installation de <strong>chauffages électriques</strong> (radiateurs, convecteurs)</li>
              <li>Installation de <strong>planchers chauffants</strong></li>
              <li>Installation et remplacement de chaudières</li>
              <li>Entretien et dépannage de systèmes de chauffage</li>
              <li>Conseils en économies d'énergie</li>
            </ul>
          </div>
          <div>
            <img 
              src="/kaceli-renovations-web/lovable-uploads/3657e19c-9901-4733-bf6e-8b0abf26f32a.png"
              alt="Services de chauffage à Brignais" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
        
        <div className="mt-16">
          <h2>Pourquoi nous choisir à Brignais ?</h2>
          <p>
            Basés à proximité de <strong>Brignais</strong>, nous connaissons parfaitement la commune et ses particularités. 
            Notre proximité nous permet d'intervenir rapidement, que ce soit pour un dépannage urgent ou un projet de rénovation.
          </p>
          <p>
            Nous travaillons aussi bien avec les particuliers que les professionnels de <strong>Brignais</strong> et ses environs, 
            offrant des solutions sur mesure adaptées à chaque besoin.
          </p>
        </div>
        
        <div className="mt-16 text-center">
          <h2>Un artisan de confiance à Brignais</h2>
          <p className="max-w-3xl mx-auto mb-8">
            En faisant appel à <strong>Kaceli Rénovation Conseil</strong> pour vos travaux à <strong>Brignais</strong>, vous bénéficiez 
            de l'expertise d'un artisan local, réactif et attentif à vos besoins. Nous nous engageons à vous offrir un service de qualité, 
            dans le respect des délais et du budget convenus.
          </p>
          
          <div className="mt-8">
            <Link to="/contact" className="btn-secondary inline-block mx-2">
              Demander un devis gratuit
            </Link>
            <a href="tel:0649092517" className="btn-primary inline-block mx-2">
              Appelez-nous au 06 49 09 25 17
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Brignais;
