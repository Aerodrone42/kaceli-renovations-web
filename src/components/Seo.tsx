
import { useEffect } from "react";

interface SeoProps {
  title: string;
  description: string;
}

const Seo = ({ title, description }: SeoProps) => {
  useEffect(() => {
    // Title SEO
    document.title = title;

    // Description meta SEO
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Nettoyage possible (optionnel ici)
    return () => {};
  }, [title, description]);

  return null;
};

export default Seo;
