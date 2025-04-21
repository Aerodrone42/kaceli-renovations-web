
import { Link } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';
import { Zap, Droplet, Thermometer } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import Seo from '@/components/Seo';

const TassinLaDemiLune = () => {
  return (
    <>
      <Seo 
        title="Plombier, électricien et chauffagiste à Tassin-la-Demi-Lune | Kaceli Rénovation Conseil"
        description="Artisan Tassin-la-Demi-Lune : installation, dépannage, rénovation en plomberie, électricité, chauffage. Devis gratuit – Kaceli Rénovation Conseil."
      />
      
      <section className="container-section">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg mb-8">
            <strong>Kaceli Rénovation Conseil</strong> intervient à <strong>Tassin-la-Demi-Lune</strong> et dans les communes environnantes comme Écully, Charbonnières-les-Bains, Francheville, Craponne, Sainte-Foy-lès-Lyon et Lyon 5e. 
            Nous proposons des services complets en <strong>plomberie</strong>, <strong>électricité</strong> et <strong>chauffage</strong> pour répondre à tous vos besoins.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <ServiceCard 
              title="Électricité" 
              description="<strong>Installation électrique</strong> et <strong>dépannage électricité</strong> à <strong>Tassin-la-Demi-Lune</strong>."
              icon={<Zap size={36} />}
              link="/nos-services#electricite"
            />
            <ServiceCard 
              title="Plomberie" 
              description="<strong>Plombier à Tassin-la-Demi-Lune</strong> pour tous vos travaux de <strong>plomberie</strong>."
              icon={<Droplet size={36} />}
              link="/nos-services#plomberie"
            />
            <ServiceCard 
              title="Chauffage" 
              description="Installation et entretien de <strong>chauffages</strong> par votre <strong>chauffagiste à Tassin-la-Demi-Lune</strong>."
              icon={<Thermometer size={36} />}
              link="/nos-services#chauffage"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2>Services d'électricité à Tassin-la-Demi-Lune</h2>
            <p>
              En tant qu'<strong>électricien à Tassin-la-Demi-Lune</strong>, <strong>Kaceli Rénovation Conseil</strong> réalise tous types de travaux d'électricité, 
              de l'installation à la rénovation, en passant par le dépannage.
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li><strong>Installation électrique</strong> pour maisons et appartements</li>
              <li><strong>Mise aux normes électriques</strong> selon la réglementation en vigueur</li>
              <li>Installation de tableaux électriques sécurisés</li>
              <li>Pose de prises, interrupteurs et systèmes d'éclairage</li>
              <li><strong>Dépannage électrique</strong> rapide et efficace</li>
            </ul>
          </div>
          <div>
            <img 
              src="/kaceli-renovations-web/lovable-uploads/b8163cde-402e-4249-a7d5-f65402322a62.png" 
              alt="Services d'électricité à Tassin-la-Demi-Lune" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
          <div className="order-2 md:order-1">
            <img 
              src="/kaceli-renovations-web/lovable-uploads/3c400882-bf59-4125-a54d-795bebada849.png" 
              alt="Services de plomberie à Tassin-la-Demi-Lune" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2>Services de plomberie à Tassin-la-Demi-Lune</h2>
            <p>
              Votre <strong>plombier à Tassin-la-Demi-Lune</strong>, <strong>Kaceli Rénovation Conseil</strong>, intervient pour tous vos besoins en plomberie, 
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
            <h2>Services de chauffage à Tassin-la-Demi-Lune</h2>
            <p>
              <strong>Chauffagiste à Tassin-la-Demi-Lune</strong>, <strong>Kaceli Rénovation Conseil</strong> vous propose des solutions de chauffage 
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
              alt="Services de chauffage à Tassin-la-Demi-Lune" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
        
        <div className="mt-16">
          <h2>Notre expertise à Tassin-la-Demi-Lune</h2>
          <p>
            Intervenant régulièrement à <strong>Tassin-la-Demi-Lune</strong>, nous connaissons bien les spécificités des habitations de la commune, 
            qu'il s'agisse de maisons individuelles ou d'appartements en copropriété.
          </p>
          <p>
            Notre proximité nous permet d'être réactifs et d'intervenir rapidement dans toute la commune de <strong>Tassin-la-Demi-Lune</strong> 
            et ses environs, pour vos urgences comme pour vos projets de rénovation.
          </p>
        </div>
        
        <div className="mt-16 text-center">
          <h2>Un artisan de confiance à Tassin-la-Demi-Lune</h2>
          <p className="max-w-3xl mx-auto mb-8">
            En faisant appel à <strong>Kaceli Rénovation Conseil</strong> pour vos travaux à <strong>Tassin-la-Demi-Lune</strong>, vous bénéficiez 
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

export default TassinLaDemiLune;
