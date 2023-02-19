import React from 'react';

function Dropdown() {
  return (
    <div className="relative">
      <button className="btn-dropdown font-semibold py-2 px-4 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-50 focus:text-gray-900 transition duration-150 ease-in-out">
        Dropdown
      </button>
      <div className="origin-top-right absolute right-0 mt-2 w-24 rounded-md shadow-lg">
        <div className="py-1 rounded-md bg-white shadow-xs">
          <a href="#" className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">Option 1</a>
          <a href="#" className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">Option 2</a>
          <a href="#" className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">Option 3</a>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
