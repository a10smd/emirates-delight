import React from "react";

const Footer = () => {
  return (
    <footer className="p-8 text-center text-gray-500 mt-96">
      <div className="border-t p-8 text-center text-gray-500 mt-96">
        <p>
          &copy; {new Date().getFullYear()} Emirates Delight. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
