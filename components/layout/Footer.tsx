import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-center py-6 mt-10 border-t border-gray-200">
      <p className="text-sm text-gray-600">
        &copy; {new Date().getFullYear()} StayFinder. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
