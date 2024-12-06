import React from 'react';
import Homepage from './HomePage';
import Services from './Service';
import AboutUs from './About';
import ProcessAndTestimonials from './Testimonial';
import Blog from './Blog';
import ContactForm from './Contact';
import Footer from './Footer';

const MainPage = () => {
  return (
    <div>
      <Homepage />
      <Services />
      <AboutUs />
      <ProcessAndTestimonials />
      <Blog />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default MainPage;
