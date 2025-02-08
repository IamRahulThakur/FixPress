import React from 'react'
import { useState } from 'react';

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    {/* NavBar  */}
      <nav className="bg-[#a8d2f6] text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-blue-700 text-2xl font-bold">FixPress</a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#" className="text-black hover:text-blue-700">Home</a></li>
          <li><a href="#" className="text-black hover:text-blue-700">About</a></li>
          <li><a href="#" className="text-black hover:text-blue-700">Services</a></li>
          <li><a href="#" className="text-black hover:text-blue-700">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="text-black md:hidden focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu (Hidden by default) */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2 bg-[#a8d2f6]">
          <a href="#" className="block text-black hover:text-blue-700">Home</a>
          <a href="#" className="block text-black hover:text-blue-700">About</a>
          <a href="#" className="block text-black hover:text-blue-700">Services</a>
          <a href="#" className="block text-black hover:text-blue-700">Contact</a>
        </div>
      )}
    </nav>

    <div className='bg-[#a8d2f6] p-4 justify-between flex-wrap'>
      <div className='text-blue-700 text-2xl font-bold ' >How can i help</div>
      <div>
        <img src="images/slider-img.png" alt="image" />
      </div>

    </div>

    </>
  )
}

export default HomePage
