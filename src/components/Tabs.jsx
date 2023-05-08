import React from "react";

const Tabs = ({ title, status = false }) => {
  return (
    <div
      className={`hover:cursor-pointer py-2  m-2 border rounded-2xl flex justify-center items-center text-xl font-medium ${
        status ? "bg-blue-400" : "bg-yellow-100"
      }`}
    >
      <h1 className='px-4'>{title}</h1>
    </div>
  );
};

export default Tabs;
