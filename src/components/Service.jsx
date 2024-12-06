import React from 'react';

const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Services</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path
                  fillRule="evenodd"
                  d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mt-4">Audit & Account</h3>
            <p className="text-gray-600 text-center mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam
            </p>
          </div>

        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
              <path
                fillRule="evenodd"
                d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold mt-4">Budget & Projections</h3>
          <p className="text-gray-600 text-center mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.433 12.633a.75.75 0 00.114 1.052l3.992 3.07a.75.75 0 001.084-.838l-1.516-4.385a.75.75 0 00-.933-.442l-3.45 1.372a.75.75 0 00-.292 1.21z" />
              <path
                fillRule="evenodd"
                d="M21 12.75a.75.75 0 000-1.5h-.783a8.22 8.22 0 00-.237-1.357l.16-.062a.75.75 0 10-.484-1.421l-.204.08a6.996 6.996 0 00-.303-.748.75.75 0 00-1.167-.ืืื5l-.203.18a6.967 6.967 0 00-.744-.222.75.75 0 00-.682-1.02h-.307a.75.75 0 000 1.5h.181a7.007 7.007 0 00-.704.458.75.75 0 101.006 1.113l.252-.22a6.952 6.952 0 00.91.24.75.75 0 00.842.516l.475-.1a.75.75 0 00.381-1.269 6.972 6.972 0 00-.737-.507.75.75 0 10-.84 1.263c.069.098.14.192.214.282a8.254 8.254 0 01.249 1.37H3a.75.75 0 000 1.5h18z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold mt-4">Payroll & Bookkeeping</h3>
          <p className="text-gray-600 text-center mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            labore et dolore magna aliqua. Ut enim ad minim veniam
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
              <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
              <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mt-4">Software Training & IT</h3>
          <p className="text-gray-600 text-center mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mt-4">Tax planning & Returns</h3>
          <p className="text-gray-600 text-center mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
              <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mt-4">Management Information</h3>
          <p className="text-gray-600 text-center mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna. Ut enim ad
            minim veniam
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Services;