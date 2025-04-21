import { Zap, Droplet, Thermometer, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import ElectricalInstallationImage from '@/components/ElectricalInstallationImage';

const Services = () => {
  return (
    <>
      <HeroSection 
        title="Nos services" 
        subtitle="Solutions complètes en électricité, plomberie et chauffage"
        showCta={false}
      />
      
      <section className="container-section">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-center mb-12">
            <strong>Kaceli Rénovation Conseil</strong> vous propose une gamme complète de services dans les domaines de l'électricité, 
            la plomberie et le chauffage. Que vous ayez besoin d'une installation, d'un dépannage ou d'une rénovation complète, 
            notre équipe d'artisans qualifiés est à votre service pour répondre à tous vos besoins.
          </p>
        </div>
        
      {/* Section Électricité */}
      <div id="electricite" className="mt-16">
        <div className="flex items-center mb-6">
          <Zap size={32} className="text-kaceli-orange mr-3" />
          <h2 className="m-0">Services d'électricité</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          <div>
            <h3>Installation électrique et mise aux normes</h3>
            <p>
              Nos électriciens qualifiés réalisent tous vos travaux d'<strong>installation électrique</strong> et de 
              <strong>mise aux normes</strong> selon la réglementation en vigueur (norme NF C 15-100). Que vous construisiez une 
              nouvelle maison ou que vous rénoviez un logement ancien, nous vous garantissons une installation sécurisée et 
              aux normes.
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li>Installation électrique complète pour constructions neuves</li>
              <li><strong>Mise aux normes électriques</strong> d'installations existantes</li>
              <li>Installation et remplacement de tableaux électriques</li>
              <li>Mise en place de prises et interrupteurs</li>
              <li>Installation de systèmes d'éclairage intérieur et extérieur</li>
            </ul>
          </div>
          
          <div>
            <ElectricalInstallationImage 
              src="/kaceli-renovations-web/lovable-uploads/bcd0b189-21c8-41e4-bf1b-6ad3f1392f99.png"
              alt="Installation électrique et mise aux normes" 
            />
          </div>
          
          <div>
            {/* Remplacer l'image qui ne s'affiche pas */}
            <img 
              src="/kaceli-renovations-web/lovable-uploads/b8163cde-402e-4249-a7d5-f65402322a62.png" 
              alt="Dépannage électrique" 
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
          
          <div>
            <h3>Dépannage électrique et interventions d'urgence</h3>
            <p>
              Un problème électrique ? Notre équipe intervient rapidement pour tout <strong>dépannage électrique</strong> 
              dans la région de <strong>Chaponost</strong> et ses environs. Nous diagnostiquons la panne et réalisons 
              les réparations nécessaires pour rétablir votre installation en toute sécurité.
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li>Recherche et réparation de pannes électriques</li>
              <li>Remplacement de disjoncteurs défectueux</li>
              <li>Résolution de courts-circuits</li>
              <li>Réparation de prises et interrupteurs</li>
              <li>Intervention rapide en cas d'urgence</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Section Plomberie */}
      <div id="plomberie" className="mt-20">
        <div className="flex items-center mb-6">
          <Droplet size={32} className="text-kaceli-orange mr-3" />
          <h2 className="m-0">Services de plomberie</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          <div>
            <h3>Installation et rénovation plomberie</h3>
            <p>
              Nous réalisons tous vos travaux de <strong>plomberie</strong>, de l'installation de nouveaux équipements à la rénovation 
              complète de votre réseau de distribution d'eau. Nos plombiers qualifiés vous garantissent un travail soigné et durable.
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li>Installation et remplacement de <strong>chauffe-eau</strong> (électriques, thermodynamiques)</li>
              <li>Installation de robinetterie et d'éviers</li>
              <li>Installation de douches, baignoires et sanitaires</li>
              <li>Rénovation complète de salles de bains</li>
              <li>Installation de systèmes de filtration d'eau</li>
            </ul>
          </div>
          
          <div>
            <img 
              src="/kaceli-renovations-web/lovable-uploads/3c400882-bf59-4125-a54d-795bebada849.png" 
              alt="Rénovation salle de bain" 
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
          
          <div>
            <img 
              src="/kaceli-renovations-web/lovable-uploads/3312d870-d0cf-4de0-a82d-b5a8fb38a3e3.png" 
              alt="Dépannage plomberie" 
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
          
          <div>
            <h3>Dépannage plomberie et débouchage</h3>
            <p>
              Fuite d'eau, canalisation bouchée, problème de robinetterie ? Notre service de <strong>dépannage plomberie</strong> 
              intervient rapidement pour résoudre tous vos problèmes de plomberie dans la région de <strong>Chaponost</strong>.
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li>Réparation de fuites d'eau</li>
              <li><strong>Débouchage de canalisations</strong> et évacuations</li>
              <li>Réparation de robinets et mitigeurs</li>
              <li>Réparation de chasse d'eau</li>
              <li>Intervention d'urgence 7j/7</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Section Chauffage */}
      <div id="chauffage" className="mt-20">
        <div className="flex items-center mb-6">
          <Thermometer size={32} className="text-kaceli-orange mr-3" />
          <h2 className="m-0">Services de chauffage</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          <div>
            <h3>Installation de systèmes de chauffage</h3>
            <p>
              <strong>Chauffagiste à Chaponost</strong> et sa région, nous vous proposons l'installation de différents systèmes de 
              chauffage adaptés à vos besoins et à votre budget. Nos experts vous conseillent sur la solution la plus adaptée à 
              votre logement.
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li>Installation de <strong>chauffages électriques</strong> (convecteurs, radiateurs à inertie)</li>
              <li>Installation de <strong>planchers chauffants</strong> hydrauliques ou électriques</li>
              <li>Installation et remplacement de chaudières</li>
              <li>Installation de radiateurs</li>
              <li>Conseils en économies d'énergie</li>
            </ul>
          </div>
          
          <div>
            <img 
              src="/kaceli-renovations-web/lovable-uploads/3657e19c-9901-4733-bf6e-8b0abf26f32a.png" 
              alt="Installation de chauffage" 
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
          
          <div>
            {/* Sixième image modifiée pour éviter doublon */}
            <img 
              src="/kaceli-renovations-web/lovable-uploads/96831c7d-8e69-4c30-8e34-b3428e65c1c8.png" 
              alt="Entretien de chauffage" 
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
          
          <div>
            <h3>Entretien et dépannage chauffage</h3>
            <p>
              Nous assurons l'entretien régulier et le <strong>dépannage de vos systèmes de chauffage</strong>. 
              Un entretien régulier garantit le bon fonctionnement et la longévité de votre installation.
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li>Entretien annuel de chaudières</li>
              <li>Dépannage de chauffages en panne</li>
              <li>Réparation de fuites sur radiateurs</li>
              <li>Purge de radiateurs</li>
              <li>Conseils d'optimisation pour votre système de chauffage</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Section Rénovation */}
      <div id="renovation" className="mt-20">
        <div className="flex items-center mb-6">
          <Home size={32} className="text-kaceli-orange mr-3" />
          <h2 className="m-0">Rénovation complète</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          <div>
            <h3>Rénovation de salles de bains et cuisines</h3>
            <p>
              <strong>Kaceli Rénovation Conseil</strong> vous accompagne dans vos projets de rénovation de salle de bains et de cuisine. 
              Nous prenons en charge l'ensemble des travaux, de la plomberie à l'électricité, en passant par la pose de carrelage 
              et la finition.
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li><strong>Rénovation complète de salles de bains</strong></li>
              <li><strong>Rénovation de cuisines</strong></li>
              <li>Remplacement de baignoires par des douches</li>
              <li>Installation de meubles de salle de bains</li>
              <li>Conseils d'aménagement et design</li>
            </ul>
          </div>
          
          <div>
            <img 
              src="/kaceli-renovations-web/lovable-uploads/3c400882-bf59-4125-a54d-795bebada849.png" 
              alt="Rénovation salle de bain" 
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
        </div>
      </div>
      
      <div className="mt-16 text-center">
        <h2>Zones d'intervention</h2>
        <p className="max-w-3xl mx-auto mb-8">
          Nous intervenons à <strong>Chaponost</strong> et dans toute la région lyonnaise, notamment à Francheville, Brignais, 
          Oullins, Saint-Genis-Laval, Lyon, et bien d'autres communes du Rhône.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
          <Link to="/chaponost" className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
            <h3 className="text-lg font-bold mb-0">Chaponost</h3>
          </Link>
          <Link to="/brignais" className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
            <h3 className="text-lg font-bold mb-0">Brignais</h3>
          </Link>
          <Link to="/francheville" className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
            <h3 className="text-lg font-bold mb-0">Francheville</h3>
          </Link>
          <Link to="/oullins" className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
            <h3 className="text-lg font-bold mb-0">Oullins</h3>
          </Link>
          <Link to="/lyon-5" className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
            <h3 className="text-lg font-bold mb-0">Lyon 5e</h3>
          </Link>
        </div>
        
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

export default Services;
