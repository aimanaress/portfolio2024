import React, { useRef } from "react";
import { Link, animateScroll as scroll, scrollSpy } from "react-scroll";

function NavBar() {
  // Array containing navigation items
  const navItems = [
    { id: 1, label: "About" },
    { id: 2, label: "Works" },
    { id: 3, label: "Skills" },
    { id: 4, label: "Educations" },
    { id: 5, label: "Career" },
    { id: 6, label: "Connect" },
  ];

  return (
    <div className="invisible md:visible bg-black flex flex-col items-center p-3 text-white fixed w-full top-0 left-0">
      <ul className="flex">
        {navItems.map((item) => (
          <Link
            key={item.id}
            activeClass="active"
            to={item.id}
            spy={true}
            isDynamic={true}
            offset={-50}
            smooth="easeInOutQuint"
            duration={1000}
            className="px-3 py-1 hover:bg-[#dfff06] rounded-md m-2 cursor-pointer duration-300 hover:text-black"
          >
            {item.label}
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default NavBar;
