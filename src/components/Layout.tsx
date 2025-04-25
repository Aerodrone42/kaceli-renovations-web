
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CallButtonFloating from './CallButtonFloating';
import Seo from './Seo';
import CookieConsent from './CookieConsent';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-kaceli-beige">
      <Seo 
        title="Plombier, électricien et chauffagiste à Chaponost | Kaceli Rénovation Conseil"
        description="Kaceli Rénovation Conseil, votre artisan à Chaponost et environs pour plomberie, électricité et chauffage. Installation, dépannage et rénovation."
        image="/lovable-uploads/38e029c4-3962-4a8f-ade8-88e7066c5408.png"
      />
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <CallButtonFloating />
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Layout;
