import React, { useState } from 'react';
import '../styles/Home.css';
import ImageGallery from '../components/ImageGallery';
import FlightSearch from '../components/FlightSearch';
import FlightList from '../components/FlightList';
import Footer from '../components/Footer';

const Home = () => {


  return (
    <div className="home">
      <div className="left-content">
        <FlightSearch  />
        <FlightList />
      </div>
      <div className="image-gallery">
        <ImageGallery />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
