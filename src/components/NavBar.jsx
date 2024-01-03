import React, { useState } from "react";

function NavBar() {
  // Array containing navigation items
  const navItems = [
    { id: 1, label: "About", href: "#", current: true },
    { id: 2, label: "Works", href: "#", current: false },
    { id: 3, label: "Skills", href: "#", current: false },
    { id: 4, label: "Educations", href: "#", current: false },
    { id: 5, label: "Career", href: "#", current: false },
    { id: 6, label: "Connect", href: "#", current: false },
  ];

  return (
    <div className="invisible md:visible bg-black flex flex-col items-center h-24 pt-3 text-white">
      {/* Desktop Navigation */}
      <ul className="flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-3 hover:bg-[#00df9a] rounded-md m-2 cursor-pointer duration-300 hover:text-black"
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavBar;
