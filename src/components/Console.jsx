import React, { useState } from "react";

import Nav from "./Nav";
import Usrdata from "./Usrdata";
import Adduser from "./Adduser";

const Console = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderComponent = () => {
    if (activeTab === "Home") {
      return null; // Replace with the component you want to render for the "Home" tab
    } else if (activeTab === "Console") {
      return <Usrdata />;
    } else if (activeTab === "Add User") {
      return <Adduser />;
    } else {
      return null;
    }
  };

  return (
    <div className=''>
      {/* tabs */}
      <Nav />
      <div className='flex flex-row w-full'>
        <div className='bg-red-300 w-[13%]'>
          <div className='h-[89vh]'>
            <ul className='gap-1 flex flex-col my-5 '>
              <li
                className={`w-full drop-shadow-xl flex p-2 justify-starts pl-7 ${
                  activeTab === "Home"
                    ? "bg-red-700 border-r-4 border-gray-600"
                    : ""
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
        </div>
        <div className='w-[87%]'>{renderComponent()}</div>
      </div>
    </div>
  );
};

export default Console;
