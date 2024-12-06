import React from "react";
import layersImage from "../assets/backphoto.jpg";
import bitmap from "../assets/Bitmaplogo.png";
const Homepage = () => {
  return (
    <div
      className="bg-gray-100 min-h-screen"
      style={{
        backgroundImage: `url(${layersImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 py-8">
        <header
          className="shadow-md"
          style={{
            boxShadow: "none",
          }}
        >
          <div className="container mx-auto flex justify-between items-center py-4 px-6">
            <div className="flex items-center logo1">
              <img src={bitmap} alt="Gecko Accountancy Logo" className="h-10" />
            </div>
            <div
              className="set-nav"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "56px",
              }}
            >
              <nav className="hidden md:flex space-x-6">
                <a href="/services" className=" hover:text-xl font-bold">
                  Services
                </a>
                <a href="/about" className=" hover:text-xl font-bold">
                  About us
                </a>
                <a href="/blogs" className=" hover:text-xl font-bold">
                  Blogs
                </a>
                <a href="#" className=" hover:text-xl font-bold">
                  Case Studies
                </a>
              </nav>
              <a
                href="/contact"
                className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
              >
                Contact Us
              </a>
            </div>
          </div>
        </header>

        <main
          className="px-6 flex flex-col lg:flex-row lg:justify-start"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "8px",
            height: "500px",
          }}
        >
          <div className="lg:w-1/2 text-left text-black mb-12 mt-20 ml-10">
            <h2
              className="text-4xl font-bold"
              style={{
                fontSize: "47px",
                fontWeight: "700",
                lineHeight: "60px",
              }}
            >
              HOW MUCH
            </h2>
            <h2
              className="text-4xl font-bold"
              style={{
                fontSize: "47px",
                fontWeight: "700",
                lineHeight: "60px",
              }}
            >
              COULD YOU SAVE?
            </h2>
            <p
              className="mt-2"
              style={{
                fontSize: "18px",
                fontWeight: "400",
                lineHeight: "22.59px",
                maxWidth: "485px",
              }}
            >
              Answer the questions below to get a fixed price quotation for us
              to take your accountancy hassles away from you.
            </p>

            <div
              className="bg-white rounded-lg shadow-md  mt-8"
              style={{
                padding: "34px 28px 37px 48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <p
                className="text-lg font-medium text-gray-700"
                style={{
                  fontSize: "28px",
                  fontWeight: "600",
                  lineHeight: "35.14px",
                  textAlign: "center",
                }}
              >
                Is your turnover expected to be more than £85k?
              </p>
              <div className="flex justify-start mt-6 space-x-4">
                <button
                  className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600"
                  style={{
                    borderRadius: "35px",
                  }}
                >
                  Yes
                </button>
                <button
                  className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600"
                  style={{
                    borderRadius: "35px",
                  }}
                >
                  No
                </button>
              </div>
            </div>
            <p className="mt-4 text-gray-500">Takes less than 30 seconds</p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Homepage;
