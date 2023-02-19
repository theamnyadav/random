import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`bg-gray-900 h-screen w-64 flex-none ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="px-4 py-6">
        <button
          className="text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
          type="button"
          onClick={toggleMenu}
        >
          Menu
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
