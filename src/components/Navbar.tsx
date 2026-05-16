import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <h1 className="text-2xl font-bold">Rent-a-Car</h1>
      <ul className="flex items-center space-x-4">
        <li><a href="#" className="hover:text-gray-300">Home</a></li>
        <li><a href="#" className="hover:text-gray-300">About</a></li>
        <li><a href="#" className="hover:text-gray-300">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;