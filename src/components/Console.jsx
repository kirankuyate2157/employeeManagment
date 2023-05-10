import React, { useState } from "react";

import Nav from "./Nav";
import Usrdata from "./Usrdata";
import Adduser from "./Adduser";
import Home from "./Home";

const Console = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderComponent = () => {
    if (activeTab === "Home") {
      return <Home />; // Replace with the component you want to render for the "Home" tab
    } else if (activeTab === "Console") {
      return <Usrdata />;
    } else if (activeTab === "Add User") {
      return <Adduser />;
    } else {
      return null;
    }
  };

  return (
    <>
      <Nav />
      <div className='flex h-screen '>
        {/* Sidebar */}
        <div className='w-1/6 bg-red-300'>
          <div className='h-screen overflow-y-auto'>
            <ul className='flex flex-col gap-1 my-5'>
              <li
                className={`flex items-center justify-start p-2 pl-7 ${
                  activeTab === "Home"
                    ? "bg-red-700 border-r-4 border-gray-600"
                    : ""
                }`}
                onClick={() => handleTabClick("Home")}
              >
                <a href='#' className='text-white'>
                  Home
                </a>
              </li>
              <li
                className={`flex items-center justify-start p-2 pl-7 ${
                  activeTab === "Console"
                    ? "bg-red-700 border-r-4 border-gray-600"
                    : ""
                }`}
                onClick={() => handleTabClick("Console")}
              >
                <a href='#' className='text-white'>
                  Console
                </a>
              </li>
              <li
                className={`flex items-center justify-start p-2 pl-7 ${
                  activeTab === "Add User"
                    ? "bg-red-700 border-r-4 border-gray-600"
                    : ""
                }`}
                onClick={() => handleTabClick("Add User")}
              >
                <a href='#' className='text-white'>
                  Add User
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className='w-5/6 overflow-y-auto'>
          {/* Rendered Component */}
          {renderComponent()}
        </div>
      </div>
    </>
  );
};

export default Console;
