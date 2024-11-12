import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterestP } from "react-icons/fa";
import image1 from "../assets/AVERI__1_-removebg-preview.png";

const Footer = () => {
  return (
    <footer className="bg-[#2C2F88] text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo & Tagline */}
        <div className="space-y-3 flex flex-col items-center md:items-start">
          <img src={image1} alt="Logo" className="w-48 md:w-72 rounded-full" />
        </div>

        {/* Links Sections */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-2">About Us</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/Privacy-Policy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link to="/Affiliate-Disclosure" className="hover:underline">Affiliate Disclosure</Link></li>
            <li><Link to="/term-and-condition" className="hover:underline">Terms and Conditions</Link></li>
            <li><Link to="/" className="hover:underline">Site Map</Link></li>
            <li><Link to="/Government-Register" className="hover:underline">Government Register</Link></li>
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-2">Policies</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/WhyChooseUs" className="hover:underline">Why Choose Us</Link></li>
            <li><Link to="/HowWeStarted" className="hover:underline">How We Started</Link></li>
            <li><Link to="/QualityAssurance" className="hover:underline">Quality Assurance</Link></li>
          </ul>
        </div>

        <div className="text-center flex flex-col md:text-left">
          <h3 className="text-lg font-semibold mb-2"> Games Guide</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/Rings" className="hover:underline">🔰 9 Wicket Type</Link></li>
            <li><Link to="/Necklaces" className="hover:underline">🔰 Asia Type</Link></li>
            <li><Link to="/Pendants" className="hover:underline">🔰 D247 Type</Link></li>
            <li><Link to="/Braslits" className="hover:underline">🔰 Diamond Type</Link></li>
            <li><Link to="/Bangles" className="hover:underline">🔰 Dream555 Type</Link></li>
            <li><Link to="/Earnings" className="hover:underline">🔰 Lotus Type</Link></li>
            <li><Link to="/Coins" className="hover:underline">🔰 Fairbook Type</Link></li>
            <li><Link to="/Coins" className="hover:underline">🔰 Exch444 Type</Link></li>
            <li><Link to="/Coins" className="hover:underline">🔰 Ice Type</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t border-gray-600 pt-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-center md:text-left">&copy; 2024 SHIVRANJANI ENTERPRISES. All Rights Reserved.</p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 justify-center">
            <a href="https://www.facebook.com" className="hover:opacity-75" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={20} />
            </a>
            <a href="https://twitter.com" className="hover:opacity-75" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={20} />
            </a>
            <a href="https://www.instagram.com" className="hover:opacity-75" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={20} />
            </a>
            <a href="https://www.pinterest.com" className="hover:opacity-75" target="_blank" rel="noopener noreferrer">
              <FaPinterestP size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
