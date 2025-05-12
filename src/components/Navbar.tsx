
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold gradient-text">MediScan</span>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary">
              Home
            </Link>
            <Link to="/plans" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary">
              Pricing
            </Link>
            <Link to="/auth" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary">
              Login
            </Link>
            <Button asChild>
              <Link to="/auth?mode=register">Get Started</Link>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/plans"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary"
              onClick={toggleMenu}
            >
              Pricing
            </Link>
            <Link 
              to="/auth"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary"
              onClick={toggleMenu}
            >
              Login
            </Link>
            <Link 
              to="/auth?mode=register"
              className="block px-3 py-2 rounded-md text-base font-medium gradient-bg text-white font-medium py-2 px-4 rounded"
              onClick={toggleMenu}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
