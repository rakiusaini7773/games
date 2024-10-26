import React from 'react';
import image1 from "../assets/AVERI (1).png";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-start px-4 py-2 bg-gray-100 shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <img src={image1} alt="Logo" className="w-12 h-12 mr-4" />
      </div>
      
      {/* Links */}
      <div className="flex space-x-6 text-lg">
        <a href="#image-grid" className="hover:text-blue-500">All Panel</a>
        <a href="#choose" className="hover:text-blue-500">Choose</a>
        <a href="#" className="hover:text-blue-500">Testimonial</a>
      </div>
    </nav>
  );
}

export default Navbar;
