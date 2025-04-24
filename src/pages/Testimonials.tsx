
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import HeroSection from '@/components/HeroSection';
import TestimonialCard from '@/components/TestimonialCard';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jean Dupont",
      location: "Chaponost",
      testimonial: "Très satisfait de l'intervention pour la rénovation électrique de mon appartement. Travail soigné, dans les délais et au prix convenu. Je recommande vivement !",
      rating: 5,
      date: "15/03/2023"
    },
    {
      name: "Marie Martin",
      location: "Francheville",
      testimonial: "J'ai fait appel à Kaceli Rénovation pour l'installation d'un plancher chauffant. Équipe professionnelle, conseils pertinents et réalisation impeccable. Merci !",
      rating: 5,
      date: "22/06/2023"
    },
    {
      name: "Pierre Lefebvre",
      location: "Brignais",
      testimonial: "Intervention rapide suite à une fuite d'eau. Diagnostic précis et réparation efficace. Service client au top !",
      rating: 4,
      date: "10/09/2023"
    },
    {
      name: "Sophie Bernard",
      location: "Oullins",
      testimonial: "Rénovation complète de ma salle de bain. Travail de qualité, respect des délais et équipe très professionnelle. Je suis ravie du résultat !",
      rating: 5,
      date: "05/11/2023"
    },
    {
      name: "Thomas Girard",
      location: "Saint-Genis-Laval",
      testimonial: "Installation d'un nouveau système de chauffage dans ma maison. Conseils personnalisés et mise en œuvre parfaite. Économies d'énergie à la clé !",
      rating: 5,
      date: "17/12/2023"
    },
    {
      name: "Isabelle Petit",
      location: "Chaponost",
      testimonial: "Mise aux normes électriques de ma maison ancienne. Travail méticuleux et conforme à toutes les normes de sécurité. Un grand merci !",
      rating: 5,
      date: "22/01/2024"
    },
    {
      name: "Laurent Moreau",
      location: "Lyon 5e",
      testimonial: "Dépannage en urgence suite à une panne électrique. Intervention rapide et professionnelle. Problème résolu en un rien de temps !",
      rating: 4,
      date: "08/02/2024"
    },
    {
      name: "Caroline Durand",
      location: "Givors",
      testimonial: "Installation d'un chauffe-eau thermodynamique. Excellent conseil pour le choix du modèle et installation parfaite. Je recommande !",
      rating: 5,
      date: "14/03/2024"
    }
  ];
  
  return (
    <>
      <HeroSection 
        title="Avis de nos clients" 
        subtitle="Découvrez ce que nos clients pensent de nos services"
        showCta={false}
      />
      
      <section className="container-section">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg">
            La satisfaction de nos clients est notre priorité. Voici quelques témoignages de personnes qui nous ont fait confiance 
            pour leurs projets d'électricité, de plomberie, de chauffage et de rénovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              name={testimonial.name}
              location={testimonial.location}
              testimonial={testimonial.testimonial}
              rating={testimonial.rating}
              date={testimonial.date}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <h2>Votre satisfaction est notre priorité</h2>
          <p className="max-w-3xl mx-auto mb-8">
            Tous nos travaux sont réalisés dans les règles de l'art, avec un souci constant de la qualité et de la satisfaction client.
            Nous mettons tout en œuvre pour vous offrir un service à la hauteur de vos attentes.
          </p>
          
          <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="tel:0649092517" className="btn-primary inline-block">
              Appelez-nous au 06 49 09 25 17
            </a>
            <Link to="/contact" className="btn-secondary inline-block">
              Demander un devis gratuit
            </Link>
            <Button 
              onClick={() => window.open("https://www.google.com/search?sa=X&sca_esv=c458d476deb8d65d&tbm=lcl&sxsrf=AHTn8zoJG59vEAPnEz5XfN5GYeoaWvKM3w:1745500865782&q=kaceli+renovation+conseil+Avis&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDS2MDU2NjYyMTS1MDYxNTE2stjAyPiKUS47MTk1J1OhKDUvvyyxJDM_TyE5P684NTNHwbEss3gRKwEFAJxtfWhdAAAA&rldimm=11385333241583454328&hl=fr-FR&ved=2ahUKEwjIq7244fCMAxXwVqQEHe0fMegQ9fQKegQIPxAF&biw=1707&bih=791&dpr=1.5#lkt=LocalPoiReviews", "_blank")}
              variant="secondary"
            >
              Donner un avis
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;

