import { useState } from "react";

interface NavbarProps {
  logo: string;
}

const Navbar: React.FC<NavbarProps> = ({ logo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-white p-4 border-b-4 border-blue-600">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="/">
            <img
              src={logo}
              className="w-32 md:w-12 lg:w-32 max-w-xs lg:ml-20"
              alt="Logo"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <a
              href="/"
              className="text-gray-700 hover:text-blue-600 active:text-blue-600"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 active:text-blue-600"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 active:text-blue-600"
            >
              How it Works
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 active:text-blue-600"
            >
              Features
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 active:text-blue-600"
            >
              Clinics
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 active:text-blue-600"
            >
              Products
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 active:text-blue-600"
            >
              Testimonial
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 active:text-blue-600"
            >
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
    </div>
  );
};

export default Navbar;
