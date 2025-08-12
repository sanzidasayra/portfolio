import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black to-purple-900 text-gray-300 py-6 text-center mt-10">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Sanzida Akter. All rights reserved.
      </p> 
    </footer>
  );
};

export default Footer;
