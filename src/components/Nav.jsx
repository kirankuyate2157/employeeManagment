import React, { useState } from "react";
import logo from "../assets/kways.png";
import { IoSearch, IoNotifications } from "react-icons/io5";
import Profile from "./Profile";

const Nav = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    // Perform search logic here
    console.log("Search query:", searchQuery);
  };

  return (
    <div className='bg-red-400 flex flex-row w-full'>
      <div className='w-[60%] flex flex-row items-center justify-start mx-5'>
        <div className='w-[25%] rounded p-2'>
          <img src={logo} alt='logo' className='rounded-full' />
        </div>
        <div className='w-full ml-7'>
          <div className='relative w-[60%]'>
            <input
              type='text'
              placeholder='Search names,company..'
              value={searchQuery}
              onChange={handleInputChange}
              className='w-full text-xl pl-3 p-1 pr-9 rounded'
            />
            <div
              className='absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer'
              onClick={handleSearch}
            >
              <IoSearch className='text-gray-400' />
            </div>
          </div>
        </div>
      </div>
      <div className=' w-[40%] pr-4 flex flex-row justify-end items-center'>
        <IoNotifications className='w-5 mx-3 h-auto' />
        <Profile />
      </div>
    </div>
  );
};

export default Nav;
