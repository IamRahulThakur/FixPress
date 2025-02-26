import React from "react";
import { useState } from "react";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* NavBar  */}
      <nav className="bg-[#cfe2f2] text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="text-blue-700 text-2xl font-bold">
            FIXPERSS
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <a href="#" className="text-black hover:text-blue-700">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-blue-700">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-blue-700">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-blue-700">
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black md:hidden focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu (Hidden by default) */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-2 bg-[#a8d2f6]">
            <a href="#" className="block text-black hover:text-blue-700">
              Home
            </a>
            <a href="#" className="block text-black hover:text-blue-700">
              About
            </a>
            <a href="#" className="block text-black hover:text-blue-700">
              Services
            </a>
            <a href="#" className="block text-black hover:text-blue-700">
              Contact
            </a>
          </div>
        )}
      </nav>

      {/*How can I help */}
      <div className="bg-[#cfe2f2] p-4 flex flex-col lg:flex-row lg:pl-[35px] lg:pt-20 flex-wrap justify-between gap-8 items-center">
        {/* Left Content */}
        <div className="lg:pl-40 flex-1">
          <h1 className="text-blue-700 text-2xl font-bold">How can I help</h1>
          <p className="w-[80%] md:w-[60%] lg:w-[40%] mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui harum
            voluptatem adipisci. Quos molestiae saepe dicta nobis pariatur,
            tempora iusto, ad possimus soluta hic praesentium mollitia
            consequatur beatae, aspernatur culpa.
          </p>
          <button className="bg-orange-400 text-xl font-bold text-white p-2 px-5 mt-2 rounded-md">
            CONTACT US
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="/images/slider-img.png"
            alt="image"
            className="w-full max-w-sm"
          />
        </div>
      </div>

      {/*Buttons section */}
      <div className="flex flex-wrap justify-center lg:gap-32 ">
        <div className="hover:bg-orange-400 hover:cursor-pointer rounded-md py-10 px-20 transition-colors duration-300">
          <img
            src="/images/tools.svg"
            alt="Repairing"
            className="h-24 w-24  hover:sepia transition-all duration-300"
          />
          <h1 className="flex justify-center mt-2 font-bold">REPAIR</h1>
        </div>

        <div className="hover:bg-orange-400 hover:cursor-pointer rounded-md py-10 px-20 transition-colors duration-300">
          <img
            src="/images/construction.svg"
            alt="Repairing"
            className="h-24 w-24  hover:sepia transition-all duration-300"
          />
          <h1 className="flex justify-center mt-2 font-bold">IMPROVE</h1>
        </div>

        <div className="hover:bg-orange-400 hover:cursor-pointer rounded-md py-10 px-20 transition-colors duration-300">
          <img
            src="/images/maintenance.svg"
            alt="Repairing"
            className="h-24 w-24  hover:sepia transition-all duration-300"
          />
          <h1 className="flex justify-center mt-2 font-bold ">MANTAIN</h1>
        </div>
      </div>


      {/*About Us */}
      <div className="p-10 flex flex-col lg:flex-row lg:pl-[35px] lg:pt-20 flex-wrap justify-between gap-8 items-center">
        {/* Left Content */}
        <div className="lg:pl-40 flex-1">
          <h1 className="text-2xl font-bold">ABOUT US</h1>
          <p className="w-[80%] md:w-[60%] lg:w-[40%] mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui harum
            voluptatem adipisci. Quos molestiae saepe dicta nobis pariatur,
            tempora iusto, ad possimus soluta hic praesentium mollitia
            consequatur beatae, aspernatur culpa.
          </p>
          <button className="bg-blue-700 text-xl text-white p-2 px-5 mt-2 rounded-md">
            READ MORE
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img src="/images/about-img.jpg" alt="image" className="" />
        </div>
      </div>


      {/*Professional Work */}
      <div className="bg-[#cfe2f2] p-4 flex flex-col lg:flex-row-reverse lg:pl-[35px] lg:pt-20 flex-wrap justify-between gap-8 items-center">
        {/* Left Content (Now on the right in large screens) */}
        <div className="lg:pl-12 flex-1">
          <h1 className="text-blue-700 text-2xl font-bold">WE PROVIDE PROFESSIONAL HOME SERVICES</h1>
          <p className="w-[80%] md:w-[60%] lg:w-[40%] mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui harum
            voluptatem adipisci. Quos molestiae saepe dicta nobis pariatur,
            tempora iusto, ad possimus soluta hic praesentium mollitia
            consequatur beatae, aspernatur culpa.
          </p>
          <button className="bg-orange-400 text-xl text-white p-2 px-5 mt-2 rounded-md">
            READ MORE
          </button>
        </div>

        {/* Right Image (Now on the left in large screens) */}
        <div className="flex-1 flex justify-center">
          <img
            src="/images/professional-img.png"
            alt="image"
            className="w-full max-w-sm"
          />
        </div>
      </div>
      
      {/*Our Services */}
      <div className="flex justify-center text-3xl font-bold my-8">
        OUR SERVICES
      </div>

      {/*Below our Services Button */}
      <div className="flex flex-wrap justify-center lg:gap-32 ">
        <div className="hover:bg-orange-400 hover:cursor-pointer shadow shadow-black rounded-md py-10 px-20 transition-colors duration-300">
          <img
            src="/images/s1.png"
            alt="Repairing"
            className="h-24 w-24  hover:sepia transition-all duration-300"
          />
          <h1 className="flex justify-center mt-2 font-bold">REPAIR</h1>
        </div>

        <div className="hover:bg-orange-400 hover:cursor-pointer  shadow shadow-black rounded-md py-10 px-20 transition-colors duration-300">
          <img
            src="/images/s2.png"
            alt="Repairing"
            className="h-24 w-24  hover:sepia transition-all duration-300"
          />
          <h1 className="flex justify-center mt-2 font-bold">IMPROVE</h1>
        </div>

        <div className="hover:bg-orange-400 hover:cursor-pointer shadow shadow-black rounded-md py-10 px-20 transition-colors duration-300">
          <img
            src="/images/s3.png"
            alt="Repairing"
            className="h-24 w-24  hover:sepia transition-all duration-300"
          />
          <h1 className="flex justify-center mt-2 font-bold ">MANTAIN</h1>
        </div>
      </div>

      {/*View More Button */}
      <div className="flex justify-center my-7">
      <button className="bg-blue-700 text-xl font-bold text-white p-2 px-5 mt-2 rounded-md">
            VIEW MORE
          </button>
      </div>
    </>
  );
};

export default HomePage;
