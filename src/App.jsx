import React, { useState, useEffect } from "react";
import ImageSlider from "./compoment/ImageSliderRavindra";
import ProductGrid from "./compoment/ProductGrid";
import popupImage from "./assets/Get Your Dream Panel ID (1000 x 1500 px).png";
import Navbar from "./compoment/Navbar";
import Testimonial from "./compoment/Testimonial";
import Footer from "./compoment/footer";

export default function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 2000);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="w-full relative">
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative">
            <img src={popupImage} alt="Popup" className="w-96 h-auto" />
            <button 
              onClick={closePopup} 
              className="absolute top-0 right-0 mt-2 mr-2 text-white bg-red-500 rounded-full w-8 h-8 flex items-center justify-center"
              aria-label="Close Popup"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      <div className={`transition-opacity duration-500 ${showPopup ? 'opacity-30' : 'opacity-100'}`}>
        <Navbar />
        <ImageSlider />
        <ProductGrid id="image-grid" />
        <Testimonial />
        <Footer/>
      </div>
    </div>
  );
}
