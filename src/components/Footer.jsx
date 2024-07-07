import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-0">
        <div className="flex flex-col items-start mb-8 md:mb-0">
          <div className="flex items-center mb-4">
            <div className="bg-green-500 rounded-full p-2 mr-2">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <span className="text-white text-2xl font-bold">Nexcent</span>
          </div>
          <p className="mb-4">Copyright © 2020 Nexcent ltd.<br />All rights reserved</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <div className="mb-8 md:mb-0">
          <h5 className="text-white font-semibold mb-4">Company</h5>
          <ul>
            <li className="mb-2"><a href="#" className="hover:underline">About us</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Blog</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Contact us</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Pricing</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Testimonials</a></li>
          </ul>
        </div>
        <div className="mb-8 md:mb-0">
          <h5 className="text-white font-semibold mb-4">Support</h5>
          <ul>
            <li className="mb-2"><a href="#" className="hover:underline">Help center</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Terms of service</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Legal</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Privacy policy</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Status</a></li>
          </ul>
        </div>
        
        <div>
          <h5 className="text-white font-semibold mb-4">Stay up to date</h5>
          <form className="flex">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="px-4 py-2 w-full rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
            />
            <button className="bg-green-500 text-white px-4 py-2 rounded-r-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
