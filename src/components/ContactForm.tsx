
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Dans un cas réel, vous enverriez les données à un backend
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    
    // Réinitialiser l'état après quelques secondes
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {isSubmitted ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6" role="alert">
          <strong className="font-bold">Merci !</strong>
          <span className="block sm:inline"> Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.</span>
        </div>
      ) : null}
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Nom complet*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kaceli-orange"
              placeholder="Votre nom"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kaceli-orange"
              placeholder="Votre email"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Téléphone*
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kaceli-orange"
              placeholder="Votre numéro de téléphone"
            />
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
              Service concerné*
            </label>
            <select
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kaceli-orange"
            >
              <option value="">Sélectionnez un service</option>
              <option value="Électricité">Électricité</option>
              <option value="Plomberie">Plomberie</option>
              <option value="Chauffage">Chauffage</option>
              <option value="Rénovation">Rénovation complète</option>
              <option value="Autre">Autre</option>
            </select>
          </div>
        </div>
        
        <div className="mt-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message*
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kaceli-orange"
            placeholder="Décrivez votre projet ou votre besoin"
          ></textarea>
        </div>
        
        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-kaceli-blue text-white py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors"
          >
            Envoyer ma demande
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
