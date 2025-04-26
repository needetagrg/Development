import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#d1d5db] px-4 sm:px-[200px] mt-[40px] text-black py-8">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="flex flex-wrap justify-around gap-6">
          {/* Brand Section */}
          <div className="flex items-center gap-4">
            <img
              src="/logo.png"
              alt="LuminSkin Logo"
              className="h-[150px] w-[150px]"
            />
            <p className="text-gray-600 text-sm max-w-xs">
              Glow naturally with premium skincare products designed to
              rejuvenate, hydrate, and enhance your skin.
            </p>
          </div>
          {/* Navigation Links */}
        
          <footer className="bg-theme-gray text-black py-8">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between">
                <div className="flex flex-col">
                  <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                  <Link
                    to="/"
                    className="text-black hover:text-gray-700 mb-2 transition-colors duration-300"
                  >
                    Home
                  </Link>
                  <Link
                    to="/allproducts"
                    className="text-black hover:text-gray-700 mb-2 transition-colors duration-300"
                  >
                    Products
                  </Link>
                  <Link
                    to="/about"
                    className="text-black hover:text-gray-700 mb-2 transition-colors duration-300"
                  >
                    About Us
                  </Link>
                  <Link
                    to="/contact"
                    className="text-black hover:text-gray-700 transition-colors duration-300"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </footer>
          
          {/* Contact Info */}
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-600 text-sm mb-2">
              Email: support@luminskin.com
            </p>
            <p className="text-gray-600 text-sm mb-2">Phone: +123-456-7890</p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-400 mt-8 pt-4 text-center">
          <p className="text-gray-600 text-sm">
            © 2025 LuminSkin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
