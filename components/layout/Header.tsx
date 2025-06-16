import React from "react";

const Header: React.FC = () => {
  const categories = ["Rooms", "Mansion", "Countryside", "Beachfront", "Mountain View", "City Center"];

  return (
    <header className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">StayFinder</div>

        {/* Search Bar */}
        <div className="flex-grow max-w-md w-full">
          <input
            type="text"
            placeholder="Search for places..."
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-2">
          <button className="text-blue-600 font-semibold hover:underline">Sign In</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
            Sign Up
          </button>
        </div>
      </div>

      {/* Accommodation Types */}
      <nav className="mt-4 flex flex-wrap gap-3 justify-center text-sm text-gray-600">
        {categories.map((category) => (
          <span
            key={category}
            className="px-3 py-1 border border-gray-300 rounded-full hover:bg-blue-100 cursor-pointer transition"
          >
            {category}
          </span>
        ))}
      </nav>
    </header>
  );
};

export default Header;
