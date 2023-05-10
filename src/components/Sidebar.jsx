import React, { useState } from "react";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='h-[89vh] fixed'>
      <ul className='gap-1 flex flex-col my-5 '>
        <li
          className={`w-full drop-shadow-xl flex p-2 justify-starts pl-7 ${
            activeTab === "Home" ? "bg-red-700 border-r-4 border-gray-600" : ""
          } items-center`}
          onClick={() => handleTabClick("Home")}
        >
          <a href='#' className='text-white'>
            Home
          </a>
        </li>
        <li
          className={`w-full drop-shadow-xl flex p-2 justify-starts pl-7 ${
            activeTab === "Console"
              ? "bg-red-700 border-r-4 border-gray-600"
              : ""
          } items-center`}
          onClick={() => handleTabClick("Console")}
        >
          <a href='#' className='text-white'>
            Console
          </a>
        </li>
        <li
          className={`w-full drop-shadow-xl flex p-2 justify-starts pl-7 ${
            activeTab === "Add User"
              ? "bg-red-700 border-r-4 border-gray-600"
              : ""
          } items-center`}
          onClick={() => handleTabClick("Add User")}
        >
          <a href='#' className='text-white'>
            Add User
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
