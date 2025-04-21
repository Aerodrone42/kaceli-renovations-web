
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CallButtonFloating from './CallButtonFloating';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-kaceli-beige">
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

