
import React from 'react';

interface ElectricalInstallationImageProps {
  src: string;
  alt: string;
}

const ElectricalInstallationImage: React.FC<ElectricalInstallationImageProps> = ({ src, alt }) => {
  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-lg shadow-md">
      <img 
        src={src} 
        alt={alt} 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <div className="text-white text-center px-6 py-4 bg-black bg-opacity-50 rounded-lg">
          <h3 className="text-2xl font-bold mb-2">Installation électrique sécurisée</h3>
          <p className="text-sm">Conformité NF C 15-100 | Travaux garantis</p>
        </div>
      </div>
    </div>
  );
};

export default ElectricalInstallationImage;
