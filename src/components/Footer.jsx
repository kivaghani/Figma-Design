import React from "react";
import logo from "../assets/Bitmaplogo.png";

const Footer = () => {
  return (
    <footer className="bg-[#e0f7fa] border-t py-12 relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col justify-center space-y-4">
          <p className="text-gray-700 text-sm">
            Tagline will go here. Lorem ipsum dolor sit amet...
          </p>
          <a
            href="mailto:user@email.com"
            className="text-blue-600 text-sm hover:underline"
          >
            user@email.com
          </a>
        </div>

        <div className="flex flex-col space-y-2">
          <h4 className="text-gray-800 font-medium text-sm">Address</h4>
          <p className="text-gray-700 text-sm">
            101 Office No.
            <br />
            Road name,
            <br />
            India
          </p>
        </div>

        <div className="flex flex-col space-y-2">
          <h4 className="text-gray-800 font-medium text-sm">Contacts</h4>
          <a
            href="mailto:user@email.com"
            className="text-gray-700 text-sm hover:underline"
          >
            user@email.com
          </a>
          <a
            href="tel:(276) 341-7690"
            className="text-gray-700 text-sm hover:underline"
          >
            (276) 341-7690
          </a>
        </div>
      </div>

      <nav className="mt-24 flex justify-center space-x-8 text-gray-700 text-sm">
        <a href="/about" className="hover:text-gray-900 transition">
          About
        </a>
        <a href="/blogs" className="hover:text-gray-900 transition">
          Blogs
        </a>
        <a href="/contact" className="hover:text-gray-900 transition">
          Contact
        </a>
        <a href="/services" className="hover:text-gray-900 transition">
          Services
        </a>
      </nav>

      <div className="mt-8 flex justify-between items-center max-w-7xl mx-auto px-6">
        <img
          src={logo}
          alt="Gecko Accountancy Logo"
          className="h-12 w-40"
        />

        <div className="text-gray-500 text-sm">
          &copy; 2022. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
