import HeroSection from '@/components/HeroSection';

const About = () => {
  return (
    <>
      <HeroSection 
        title="À propos de Kaceli Rénovation Conseil" 
        subtitle="Découvrez notre expertise et notre engagement pour la qualité"
        showCta={false}
      />
      
      <section className="container-section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="/lovable-uploads/383fc5b5-b169-4f76-acd4-a4f4a222afc5.png"
              alt="Fondateur de Kaceli Rénovation Conseil" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div>
            <h2>Notre histoire</h2>
            <p>
              Fondée par un artisan passionné et expérimenté, <strong>Kaceli Rénovation Conseil</strong> est née de l'envie 
              d'offrir des services de qualité dans les domaines de l'électricité, la plomberie et le chauffage en région lyonnaise.
            </p>
            <p>
              Fort d'une expérience solide dans le secteur du bâtiment et des travaux de rénovation, notre fondateur a créé une 
              entreprise à taille humaine où chaque client bénéficie d'un service personnalisé et d'un accompagnement sur mesure.
            </p>
            <p>
              Aujourd'hui, <strong>Kaceli Rénovation Conseil</strong> est reconnue pour son expertise technique, sa réactivité et 
              son engagement envers la satisfaction client.
            </p>
          </div>
        </div>
        
        <div className="mt-16">
          <h2>Nos valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Professionnalisme</h3>
              <p>
                Nous mettons un point d'honneur à réaliser chaque intervention avec sérieux et rigueur. 
                Nos techniciens sont formés aux dernières techniques et respectent scrupuleusement les normes en vigueur.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Réactivité</h3>
              <p>
                Nous comprenons l'importance d'une intervention rapide, surtout en cas de panne. 
                C'est pourquoi nous nous engageons à répondre promptement à toutes vos demandes et à intervenir dans les meilleurs délais.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Transparence</h3>
              <p>
                Nous croyons en des relations de confiance basées sur la transparence. 
                Vous recevez systématiquement un devis détaillé avant le début des travaux, sans surprise ni coûts cachés.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h2>Notre expertise</h2>
          <p className="mb-8">
            Chez <strong>Kaceli Rénovation Conseil</strong>, nous disposons de toutes les compétences nécessaires pour mener à bien 
            vos projets de rénovation, d'installation ou de dépannage dans les domaines suivants :
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Électricité</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Installation électrique complète</strong> pour constructions neuves et rénovations</li>
                <li><strong>Mise aux normes</strong> d'installations existantes (norme NF C 15-100)</li>
                <li>Installation de tableaux électriques</li>
                <li>Pose de prises, interrupteurs et systèmes d'éclairage</li>
                <li>Installation de VMC</li>
                <li><strong>Dépannage électrique</strong> rapide et efficace</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Plomberie</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Installation et remplacement de <strong>chauffe-eau</strong> (électriques, thermodynamiques)</li>
                <li>Installation et réparation de robinetterie</li>
                <li>Réparation de fuites d'eau</li>
                <li>Installation de douches, baignoires et sanitaires</li>
                <li>Débouchage de canalisations</li>
                <li><strong>Dépannage plomberie</strong> d'urgence</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Chauffage</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Installation de <strong>chauffages électriques</strong> (convecteurs, radiateurs à inertie)</li>
                <li>Installation de <strong>planchers chauffants</strong></li>
                <li>Installation et entretien de chaudières</li>
                <li>Remplacement de radiateurs</li>
                <li>Conseils pour optimiser votre système de chauffage</li>
                <li>Dépannage chauffage</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">Rénovation complète</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Rénovation de salles de bains</strong></li>
                <li><strong>Rénovation de cuisines</strong></li>
                <li>Rénovation d'appartements</li>
                <li>Travaux d'aménagement intérieur</li>
                <li>Mise aux normes de logements anciens</li>
                <li>Conseils et accompagnement pour vos projets</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h2>Notre engagement</h2>
          <p className="max-w-3xl mx-auto">
            Quel que soit votre projet, nous nous engageons à vous offrir un service de qualité, personnalisé et adapté à vos besoins.
            Notre priorité : votre satisfaction et votre tranquillité d'esprit.
          </p>
          <div className="mt-8">
            <a href="tel:0649092517" className="btn-primary inline-block mx-2">
              Appelez-nous au 06 49 09 25 17
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
