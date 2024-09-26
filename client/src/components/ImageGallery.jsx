import React from 'react';
import '../styles/ImageGallery.css';
import carRentals from "../assets/images/car_rentals.png"
import hotels from "../assets/images/hotels.png"
import travelPackages from "../assets/images/travel_packages.png"

const ImageGallery = () => {

  // sayfanın en sağındaki resim galerisi
  
  return (
    <div className="side-images">
      <div className="image-item">
        <img src={carRentals} alt="Car Rentals" />
      </div>
      <div className="image-item">
        <img src={hotels} alt="Hotels" />
      </div>
      <div className="image-item">
        <img src={travelPackages} alt="Travel Packages" />
      </div>
    </div>
  );
};

export default ImageGallery;
