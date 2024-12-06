import React from 'react';
import profilePic1 from '../assets/banner.png';
import profilePic2 from '../assets/Group 13.png';

const ProcessAndTestimonials = () => {
  const processSteps = [
    { title: 'Step 1', text: 'Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor.' },
    { title: 'Step 2', text: 'Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor.' },
    { title: 'Step 3', text: 'Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor.' },
  ];

  const testimonials = [
    {
      name: 'Josh Brollins',
      profilePicture: profilePic1,
      text: 'Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    },
    {
      name: 'Jane Doe',
      profilePicture: profilePic2,
      text: 'Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    },
  ];

  return (
    <div className="bg-white py-16">
      {/* Process Section */}
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 animate-fade-in-down">Our Process</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center w-72 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative flex items-center justify-center w-40 h-40 mb-6 animate-bounce-slow">
                <svg
                  className="absolute w-full h-full text-orange-500 animate-spin-slow"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="#FF5722"
                    strokeWidth="5"
                  />
                </svg>
                <span className="text-3xl font-bold text-orange-500">{index + 1}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 animate-fade-in-up">Testimonials</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-96 bg-gray-50 shadow-lg rounded-lg p-6 text-center transform hover:rotate-1 hover:shadow-2xl transition-transform duration-300"
            >
              <div className="flex flex-col items-center mb-4">
                <img
                  src={testimonial.profilePicture}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full shadow-lg mb-4 transition-transform duration-300 hover:scale-110"
                />
                <span className="text-lg font-semibold text-gray-900">{testimonial.name}</span>
              </div>
              <p className="text-gray-600">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessAndTestimonials;
