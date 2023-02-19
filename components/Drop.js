import React, { useState } from "react";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="rounded-sm bg-blue-300 text-white px-2 py-1 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        Menu
      </button>
      {isOpen && (
        <div className="absolute mt-2 py-2 w-48 bg-white rounded-md shadow-xl">
          <a
            href="#"
            className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
          >
            Account settings
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
          >
            Support
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
          >
            Log out
          </a>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
