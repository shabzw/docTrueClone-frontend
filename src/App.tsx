import { useState } from "react";
import docimg from "./assets/HeroImage.webp";
import health from "./assets/Healthcare.webp";
import logo from "./assets/NavLogo.webp";
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-white p-4 border-b-4 border-blue-600">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <img
            src={logo}
            className="w-32 md:w-12 lg:w-32 max-w-xs lg:ml-20"
            alt="Logo"
          />

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-gray-700 hover:text-blue-600">
              About Us
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              How it Works
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Features
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Clinics
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Products
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Testimonial
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Prices
            </a>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex space-x-4 text-md font-bold mr-20">
            <button className="bg-white text-blue-600 border border-blue-600 px-4 py-2 rounded-full hover:bg-blue-200 transform transition duration-300 ease-in-out">
              Contact Us
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-700 transform transition duration-300 ease-in-out">
              Book A Demo
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden lg:mr-10">
            <button
              onClick={toggleMenu}
              className="outline-none text-gray-600 focus:text-gray-800"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${isOpen ? "block" : "hidden"} md:hidden mt-4`}>
          <div className="flex flex-col items-center">
            <a
              href="#"
              className="block text-gray-700 hover:text-blue-600 px-4 py-2"
            >
              About Us
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:text-blue-600 px-4 py-2"
            >
              How it Works
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:text-blue-600 px-4 py-2"
            >
              Features
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:text-blue-600 px-4 py-2"
            >
              Clinics
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:text-blue-600 px-4 py-2"
            >
              Products
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:text-blue-600 px-4 py-2"
            >
              Testimonial
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:text-blue-600 px-4 py-2"
            >
              Prices
            </a>
            <div className="flex mt-2 space-x-4 text-sm font-bold">
              <button className="bg-white text-blue-600 border border-blue-600 px-4 py-2 rounded-full hover:bg-blue-200 transform transition duration-300 ease-in-out">
                Contact Us
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transform transition duration-300 ease-in-out">
                Book A Demo
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex flex-col lg:flex-row p-4 lg:p-20 justify-center items-center bg-gray-100 mx-auto">
        {/* Left Content */}
        <div className="w-full lg:w-2/3 p-4 justify-center lg:justify-start">
          <span className="relative text-lg border-2 border-blue-700 text-blue-600 px-4 py-2 ml-1">
            Welcome to DocTrue
            <span className="absolute top-[-8px] left-0 w-2 h-2 bg-blue-700 rounded-full transform translate-x-[-50%] -translate-y-[-50%]"></span>
            <span className="absolute top-[-8px] right-0 w-2 h-2 bg-blue-700 rounded-full transform translate-x-[50%] -translate-y-[-50%]"></span>
            <span className="absolute bottom-0 left-0 w-2 h-2 bg-blue-700 rounded-full transform translate-x-[-50%] translate-y-[50%]"></span>
            <span className="absolute bottom-0 right-0 w-2 h-2 bg-blue-700 rounded-full transform translate-x-[50%] translate-y-[50%]"></span>
          </span>

          <div className="text-3xl lg:text-6xl font-bold mt-4 lg:mt-6">
            <div className="flex items-center">
              An A-Z OPD{" "}
              <img
                className="w-xs lg:w-auto lg:max-w-sm ml-3"
                src={health}
                alt="Health Icon"
              />
            </div>
            <span className="text-2xl lg:text-5xl font-bold text-blue-700 my-0">
              Automation Software
            </span>
            <br />
            for your Practice
          </div>
          <div className="text-md lg:text-lg mt-4 lg:mt-6 text-gray-600">
            Helping clinics & Hospital Staffs to Operate Efficiently
          </div>
          <div className="mt-6 lg:mt-10">
            <button className="bg-blue-600 text-white px-4 lg:px-8 py-2 rounded-full hover:bg-blue-700 mr-2 lg:mr-4 transform transition duration-300 ease-in-out">
              Start Your Free Trial Today!
            </button>
            <button className="bg-white text-blue-600 border border-blue-600 px-4 lg:px-7 mt-3 py-2 rounded-full hover:bg-blue-200 transform transition duration-300 ease-in-out">
              Watch Video
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:w-1/3 p-4 flex justify-center">
          <img
            src={docimg}
            alt="Doctor Image"
            className="w-full lg:w-auto lg:max-w-lg mt-[-20px] ml-[-20px]"
          />
        </div>
      </div>
    </>
  );
}

export default App;
