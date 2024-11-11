import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons from react-icons
import image1 from "../assets/AVERI__1_-removebg-preview.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle menu visibility
  };

  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-black text-white shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <img src={image1} alt="Logo" className="w-20 h-20" />
      </div>
      
      {/* Toggle Button for Small Screens */}
      <div className="md:hidden ml-auto"> {/* Use ml-auto to push the button to the right */}
        <button 
          onClick={toggleMenu} 
          className="text-white focus:outline-none">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />} {/* Show icon based on state */}
        </button>
      </div>
      
      {/* Links */}
      <div className={`flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-lg justify-center md:justify-end ${isOpen ? 'flex' : 'hidden md:flex'}`}>
        <a href="#image-grid" className="hover:text-blue-500">All Panel</a>
        <a href="#choose" className="hover:text-blue-500">Choose</a>
        <a href="#" className="hover:text-blue-500">Testimonial</a>
        <a href="#" className="hover:text-blue-500">Contact Us</a>
      </div>
    </nav>
  );
}

export default Navbar;
