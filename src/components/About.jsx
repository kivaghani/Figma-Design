import React from 'react';
import bannerImage from '../assets/banner.png'; 
import backgroundImage from '../assets/Rectangleabout-bg.png'; 
import Footer from './Footer';

const AboutUs = () => {
  return (
    <div
      className="flex h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-1/2 flex flex-col justify-center items-start p-12">
        <h2 className="text-4xl font-bold mb-6">About Us</h2>
        <p className="text-gray-600 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <button className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600">
          Learn More
        </button>
      </div>

      <div className=" flex items-center justify-end">
        <img
          src={bannerImage} 
          alt="Side Image"
          className="rounded-lg shadow-lg"
        />
      </div>
      <Footer/>
    </div>
  );
};

export default AboutUs;