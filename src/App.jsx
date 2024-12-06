import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BlogsPage from './components/BlogPage';
import MainPage from './components/MainPage';
import AboutUs from './components/About';
import Services from './components/Service';
import BlogList from './components/Blog';
import ContactForm from './components/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactForm />} />

          <Route path="/" element={<MainPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;



// import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Homepage from './components/HomePage';
// import Services from './components/Service';
// import AboutUs from './components/About';
// import ProcessAndTestimonials from './components/Testimonial';
// import Blog from './components/Blog';
// import BlogsPage from './components/BlogPage';
// import ContactForm from './components/Contact';
// import Footer from './components/Footer';

// const App = () => {
//   return (
//     <BrowserRouter>
//       <div>
//         <Routes>
//           <Route path="/" element={<Homepage />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/about-us" element={<AboutUs />} />
//           <Route path="/process-and-testimonials" element={<ProcessAndTestimonials />} />
//           <Route path="/blog" element={<Blog />} />
//           <Route path="/blogs" element={<BlogsPage />} />
//           <Route path="/contact" element={<ContactForm />} />
//         </Routes>

//         <Footer />
//       </div>
//     </BrowserRouter>
//   );
// };

// export default App;
