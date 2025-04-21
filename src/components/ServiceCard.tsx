
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link?: string;
}

const ServiceCard = ({ title, description, icon, link }: ServiceCardProps) => {
  const content = (
    <div className="service-card group hover-lift hover-glow animate-fade-scale">
      <div className="service-icon text-kaceli-orange group-hover:text-kaceli-blue transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 group-hover:text-kaceli-orange transition-colors duration-300">{title}</h3>
      <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: description }}></p>
    </div>
  );

  if (link) {
    return <Link to={link} className="block h-full">{content}</Link>;
  }

  return content;
};

export default ServiceCard;
