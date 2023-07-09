import React from "react";

const NavItem = ({ label }) => {
  return (
    <div className="text-white cursor-pointer hover:text-gray-300 transition">
      {label}
    </div>
  );
};

export default NavItem;
