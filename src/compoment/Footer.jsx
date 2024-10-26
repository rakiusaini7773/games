import React from 'react';
import { Link } from 'react-router-dom';
import { FaGooglePlay, FaAppStoreIos } from 'react-icons/fa';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2C2F88] text-white py-4">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-2">
        {/* About Us */}
        <div>
          <ul className="space-y-1 text-xs">
            <li><Link to="/Privacy-Policy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link to="/Affiliate-Disclosure" className="hover:underline">Affiliate Disclosure</Link></li>
            <li><Link to="/term-and-condtiton" className="hover:underline">Terms and Condition</Link></li>
            <li><Link to="/" className="hover:underline">Site Maps</Link></li>
            <li><Link to="/Government-Register" className="hover:underline">Government register</Link></li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <ul className="space-y-1 text-xs">
            <li><Link to="/WhyChooseUs" className="hover:underline">Why Choose Us</Link></li>
            <li><Link to="/HowWeStarted" className="hover:underline">How We started</Link></li>
            <li><Link to="/QualityAssurance" className="hover:underline">Quality Surity</Link></li>
          </ul>
        </div>

        {/* Jewellery Guide */}
        <div>
          <ul className="space-y-2 text-xs">
            <li><Link to="/Rings" className="hover:underline">🔰 𝟵𝘄𝗶𝗰𝗸𝗲𝘁 𝘁𝘆𝗽𝗲
            </Link></li>
            <li><Link to="/Necklaces" className="hover:underline">🔰 𝙖𝙨𝙞𝙖 𝙩𝙮𝙥𝙚
            </Link></li>
            <li><Link to="/Pendants" className="hover:underline">🔰 𝗗𝟮𝟰𝟳 𝘁𝘆𝗽𝗲
            </Link></li>
            <li><Link to="/Braslits" className="hover:underline">🔰 𝗗𝗶𝗮𝗺𝗼𝗻𝗱 𝘁𝘆𝗽𝗲
            </Link></li>
            <li><Link to="/Bangles" className="hover:underline">🔰 𝗗𝗿𝗲𝗮𝗺𝟱𝟱𝟱 𝘁𝘆𝗽𝗲</Link></li>
            <li><Link to="/Earning" className="hover:underline">🔰 𝗟𝗼𝘁𝘂𝘀 𝘁𝘆𝗽𝗲
            </Link></li>
            <li><Link to="/Coins" className="hover:underline">🔰 𝗙𝗮𝗶𝗿𝗯𝗼𝗼𝗸 𝘁𝘆𝗽𝗲
            </Link></li>
            <li><Link to="/Coins" className="hover:underline">🔰 𝗘𝘅𝗰𝗵𝟰𝟰𝟰 𝘁𝘆𝗽𝗲
            </Link></li>
            <li><Link to="/Coins" className="hover:underline">
🔰 𝗜𝗰𝗲 𝘁𝘆𝗽𝗲
            </Link></li>
          </ul>
        </div>

        {/* App Download Section */}
      </div>

      {/* Customer Delight & Shop with Confidence */}

      {/* Bottom Section */}
      <div className="mt-4 border-t border-gray-600 pt-2 text-center md:text-left">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-2">
          <p className="text-xs">&copy; 2024 Zaveri Stone. All Rights Reserved.</p>

          {/* Social Media Icons */}
          <div className="flex space-x-2 justify-center md:justify-end">
            <a href="https://www.facebook.com" className="hover:opacity-75" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
            </a>
            <a href="https://twitter.com" className="hover:opacity-75" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
            </a>
            <a href="https://www.instagram.com" className="hover:opacity-75" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
            </a>
            <a href="https://www.pinterest.com" className="hover:opacity-75" target="_blank" rel="noopener noreferrer">
            <FaPinterestP />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;