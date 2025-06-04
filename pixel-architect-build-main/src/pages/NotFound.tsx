
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    document.title = "404 - Page Not Found | Chitkara Constructions";
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-construction-dark flex flex-col">
      <CustomCursor />
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center relative">
        <div className="noise-bg"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_white_0%,_transparent_30%)] opacity-[0.05] pointer-events-none"></div>
        
        <div className="text-center px-4 py-16 relative z-10">
          <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-4">404</h1>
          <p className="text-xl md:text-2xl text-white mb-8">Oops! The page you're looking for cannot be found.</p>
          <div className="w-16 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-gray-400 mb-10 max-w-md mx-auto">
            It seems the blueprint for this page is missing from our archives. Let's get you back to the main site.
          </p>
          <Link to="/" className="btn-primary inline-flex">
            Return to Homepage
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
