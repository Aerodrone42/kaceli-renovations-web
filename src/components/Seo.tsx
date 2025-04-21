
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SeoProps {
  title: string;
  description: string;
}

const Seo = ({ title, description }: SeoProps) => {
  const location = useLocation();
  const currentUrl = window.location.origin + location.pathname;

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

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', currentUrl);

    // Open Graph meta tags for social sharing
    addOrUpdateMeta('og:title', title);
    addOrUpdateMeta('og:description', description);
    addOrUpdateMeta('og:url', currentUrl);
    addOrUpdateMeta('og:type', 'website');

    // Twitter Card meta tags
    addOrUpdateMeta('twitter:card', 'summary');
    addOrUpdateMeta('twitter:title', title);
    addOrUpdateMeta('twitter:description', description);

    // Nettoyage possible (optionnel ici)
    return () => {};
  }, [title, description, currentUrl]);

  const addOrUpdateMeta = (name: string, content: string) => {
    let meta = document.querySelector(`meta[property="${name}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('property', name);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  };

  return null;
};

export default Seo;
