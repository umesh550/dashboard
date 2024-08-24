import React from "react";
import { FaSearch } from "react-icons/fa";
import { MdNotificationsActive } from "react-icons/md";

interface NavbarProps {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar: React.FC<NavbarProps> = ({ setSearchQuery }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <nav className="flex justify-between items-center bg-white px-4 py-2 md:px-10 md:py-4">
      <p className="text-sm md:text-base text-indigo-500 font-bold">
        <span className="text-gray-400">Home &gt;</span> Dashboard V2
      </p>
      <div className="flex gap-4 md:gap-8 items-center">
        <div className="flex items-center bg-blue-50 border border-blue-200 rounded-lg py-1 px-2">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            onChange={handleInputChange}
            className="ml-2 bg-transparent outline-none text-gray-700 placeholder-gray-400"
            placeholder="Search anything"
          />
        </div>
        <MdNotificationsActive
          size={24}
          className="text-blue-500 hidden sm:block"
        />
        <div className="hidden md:flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full">
          <p className="font-bold">UT</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
