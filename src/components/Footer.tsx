
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link to="/" className="text-xl font-bold gradient-text">MediScan</Link>
            <p className="mt-2 text-sm text-gray-500">
              AI-powered diagnostics for skin conditions, eye issues and wounds.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Product</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/plans" className="text-base text-gray-600 hover:text-gray-900">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/" className="text-base text-gray-600 hover:text-gray-900">
                  Features
                </Link>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-gray-900">
                  Security
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Support</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-gray-900">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-gray-900">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-gray-900">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-gray-900">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-gray-900">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-gray-900">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-500 text-center">
            &copy; {new Date().getFullYear()} MediScan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
