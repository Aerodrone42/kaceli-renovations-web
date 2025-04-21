
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CallButtonFloating from './CallButtonFloating';
import Seo from './Seo';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-kaceli-beige">
      <Seo 
        title="Plombier, électricien et chauffagiste à Chaponost | Kaceli Rénovation Conseil"
        description="Kaceli Rénovation Conseil, votre artisan à Chaponost et environs pour plomberie, électricité et chauffage. Installation, dépannage et rénovation."
      />
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <CallButtonFloating />
      <Footer />
    </div>
  );
};

export default Layout;
