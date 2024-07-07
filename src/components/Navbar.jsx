import React from 'react';
import { useTheme } from './ThemeContext';


function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="text-xl font-bold px-24">Nexcent</div>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#">Home</a></li>
          <li><a href="#">Service</a></li>
          <li><a href="#">Feature</a></li>
          <li><a href="#">Product</a></li>
          <li><a href="#">Testimonial</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>
      </nav>
      <div className="space-x-4 px-24">
        <button className="text-green-500">Login</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded">Sign up</button>
        <button onClick={toggleTheme} className="mb-6 px-4 py-2 bg-blue-500 text-white rounded">
          {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>
      </div>
    </header>
  );
}

export default Navbar;
