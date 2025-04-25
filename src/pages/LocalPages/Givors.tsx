import { Link } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';
import { Zap, Droplet, Thermometer } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import Seo from '@/components/Seo';

const Givors = () => {
  return (
    <>
      <Seo 
        title="Plombier, électricien et chauffagiste à Givors | Kaceli Rénovation Conseil"
        description="Votre artisan à Givors pour l'installation, le dépannage et la rénovation en plomberie, chauffage et électricité. Kaceli Rénovation Conseil. Intervention rapide."
      />
      
      <section className="container-section">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg mb-8">
            <strong>Kaceli Rénovation Conseil</strong> intervient à <strong>Givors</strong> et dans les communes environnantes comme Grigny, Loire-sur-Rhône, Chasse-sur-Rhône, Millery et Montagny. 
            Nous proposons des services complets en <strong>plomberie</strong>, <strong>électricité</strong> et <strong>chauffage</strong> pour répondre à tous vos besoins.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <ServiceCard 
              title="Électricité" 
              description="<strong>Installation électrique</strong> et <strong>dépannage électricité</strong> à <strong>Givors</strong> par un <strong>électricien qualifié</strong>."
              icon={<Zap size={36} />}
              link="/nos-services#electricite"
            />
            <ServiceCard 
              title="Plomberie" 
              description="<strong>Plombier à Givors</strong> pour installation, réparation et <strong>dépannage plomberie</strong>."
              icon={<Droplet size={36} />}
              link="/nos-services#plomberie"
            />
            <ServiceCard 
              title="Chauffage" 
              description="Installation et entretien de <strong>chauffages</strong> par votre <strong>chauffagiste à Givors</strong>."
              icon={<Thermometer size={36} />}
              link="/nos-services#chauffage"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2>Services d'électricité à Givors</h2>
            <p>
              En tant qu'<strong>électricien à Givors</strong>, <strong>Kaceli Rénovation Conseil</strong> intervient pour tous vos besoins en électricité, 
              que ce soit pour une nouvelle installation, une rénovation ou un dépannage.
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li><strong>Installation électrique</strong> pour maisons et appartements</li>
              <li><strong>Mise aux normes électriques</strong> (norme NF C 15-100)</li>
              <li>Installation et modernisation de tableaux électriques</li>
              <li>Installation de prises, interrupteurs et éclairages</li>
              <li><strong>Dépannage électrique</strong> rapide et efficace</li>
            </ul>
          </div>
          <div>
            <img 
              src="/lovable-uploads/b8163cde-402e-4249-a7d5-f65402322a62.png"
              alt="Services d'électricité à Givors" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
          <div className="order-2 md:order-1">
            <img 
              src="/lovable-uploads/3312d870-d0cf-4de0-a82d-b5a8fb38a3e3.png"
              alt="Services de plomberie à Givors" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2>Services de plomberie à Givors</h2>
            <p>
              Votre <strong>plombier à Givors</strong>, <strong>Kaceli Rénovation Conseil</strong>, vous propose une gamme complète 
              de services de plomberie pour tous vos projets et dépannages.
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li>Installation et remplacement de <strong>chauffe-eau</strong></li>
              <li>Installation et réparation de robinetterie</li>
              <li>Installation de douches, baignoires et sanitaires</li>
              <li><strong>Dépannage plomberie</strong> (fuites, canalisations bouchées)</li>
              <li>Rénovation complète de salles de bains</li>
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
          <div>
            <h2>Services de chauffage à Givors</h2>
            <p>
              <strong>Chauffagiste à Givors</strong>, <strong>Kaceli Rénovation Conseil</strong> vous accompagne dans le choix, 
              l'installation et l'entretien de votre système de chauffage pour un confort optimal.
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li>Installation de <strong>chauffages électriques</strong> (radiateurs à inertie, convecteurs)</li>
              <li>Installation de <strong>planchers chauffants</strong> électriques ou hydrauliques</li>
              <li>Installation et remplacement de chaudières</li>
              <li>Entretien et dépannage de systèmes de chauffage</li>
              <li>Conseils personnalisés pour optimiser votre chauffage</li>
            </ul>
          </div>
          <div>
            <img 
              src="/lovable-uploads/3657e19c-9901-4733-bf6e-8b0abf26f32a.png"
              alt="Services de chauffage à Givors" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
        
        <div className="mt-16">
          <h2>Notre expertise à Givors</h2>
          <p>
            Intervenant régulièrement à <strong>Givors</strong>, nous connaissons bien les spécificités des habitations de la commune, 
            qu'il s'agisse de maisons anciennes du centre-ville ou de constructions plus récentes.
          </p>
          <p>
            Notre proximité nous permet d'être réactifs et d'intervenir rapidement dans toute la commune de <strong>Givors</strong> 
            et ses environs, pour vos urgences comme pour vos projets de rénovation.
          </p>
        </div>
        
        <div className="mt-16 text-center">
          <h2>Votre artisan de proximité à Givors</h2>
          <p className="max-w-3xl mx-auto mb-8">
            En choisissant <strong>Kaceli Rénovation Conseil</strong> pour vos travaux à <strong>Givors</strong>, vous optez pour 
            un artisan local, professionnel et à l'écoute de vos besoins. Nous nous engageons à vous offrir un service personnalisé 
            et des solutions adaptées à votre budget.
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

export default Givors;
