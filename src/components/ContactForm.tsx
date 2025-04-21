
import React from 'react';

const ContactForm = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <form
        action="https://formsubmit.co/kacelirenovationconseil@gmail.com"
        method="POST"
        className=""
      >
        {/* Pour désactiver le captcha Formsubmit */}
        <input type="hidden" name="_captcha" value="false" />
        {/* Pour rediriger vers la page de confirmation (remplacer l'URL si besoin) */}
        {/* <input type="hidden" name="_next" value="https://votre-site.com/merci" /> */}

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

