import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/Get Your Dream Panel ID (1).png";
import image3 from "../assets/Get Your Dream Panel ID (2).png";
import image4 from "../assets/Get Your Dream Panel ID.png";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="max-w-full mx-auto p-4">
      <Slider {...settings}>
        <div className="flex justify-center items-center">
          <img src={image1} alt="Image 1" className="w-full max-w-full h-auto rounded-lg object-contain" />
        </div>
        
        <div className="flex justify-center items-center">
          <img src={image3} alt="Image 3" className="w-full max-w-full h-auto rounded-lg object-contain" />
        </div>
        <div className="flex justify-center items-center">
          <img src={image4} alt="Image 4" className="w-full max-w-full h-auto rounded-lg object-contain" />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
