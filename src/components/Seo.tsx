
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SeoProps {
  title: string;
  description: string;
  image?: string;
}

const Seo = ({ title, description, image }: SeoProps) => {
  const location = useLocation();
  const isGitHubPages = window.location.hostname === "www.kacelirenovationconseil.com" || 
                       window.location.hostname === "kacelirenovationconseil.com";
  
  // Pour GitHub Pages, nous devons utiliser les URLs avec '#'
  // La structure correcte est: hostname/#/route (pas hostname/route#/autre-route)
  const path = isGitHubPages ? `/#${location.pathname}` : location.pathname;
  const currentUrl = window.location.origin + path;
  
  const defaultImage = `${window.location.origin}/lovable-uploads/38e029c4-3962-4a8f-ade8-88e7066c5408.png`;
  const ogImage = image || defaultImage;

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
    addOrUpdateMeta('og:image', ogImage);

    // Twitter Card meta tags
    addOrUpdateMeta('twitter:card', 'summary_large_image');
    addOrUpdateMeta('twitter:title', title);
    addOrUpdateMeta('twitter:description', description);
    addOrUpdateMeta('twitter:image', ogImage);

    // Nettoyage possible (optionnel ici)
    return () => {};
  }, [title, description, currentUrl, ogImage]);

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
