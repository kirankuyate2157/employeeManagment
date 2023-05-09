import React, { useState } from "react";
import Tabs from "./Tabs";
import { HiChevronLeft, HiChevronDown } from "react-icons/hi";
import Table from "./Table";

const Usrdata = () => {
  const [open, setOpen] = useState(false);
  const [adminAccess, setAdminAccess] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
  };
  const toggleAdminAccess = () => {
    setAdminAccess(!adminAccess);
  };
  return (
    <>
      <div className='w-full'>
        <div className='m-5'>
          <div className='flex flex-row justify-between bg-gray-100 border-none rounded px-3'>
            <div className='bg-red-200 flex gap-5 px-6 py-4 my-2  items-center border rounded-2xl'>
              <h1
                className={`${adminAccess ? "font-semibold" : "font-normal"}`}
                onClick={toggleAdminAccess}
              >
                Members
              </h1>
              <span className='w-[1px] bg-black h-4/5' />
              <h1
                className={`${adminAccess ? "font-normal" : "font-semibold"}`}
                onClick={toggleAdminAccess}
              >
                Admin
              </h1>
            </div>
            <div className='flex flex-col justify-center text-gray-500 font-medium items-end'>
              <h1>
                Total members: <span className='text-gray-600'>2000</span>
              </h1>
              <h1>
                Current used : <span className='text-gray-600'>1897</span>
              </h1>
            </div>
          </div>
          <div className='gap-5 flex justify-between'>
            <div className='flex'>
              <h1 className='text-3xl flex justify-center items-center p-2 px-5'>
                Members
              </h1>
              <Tabs title='Add User' />
              <Tabs title='Import members' />
              <Tabs title='export members(Excel)' />
            </div>
            <div
              className={`hover:cursor-pointer py-1 px-3 pr-4  m-2 border rounded-2xl flex justify-center items-center text-xl font-medium bg-red-300`}
              onClick={toggleOpen}
            >
              {open ? <HiChevronLeft /> : <HiChevronDown />}
              <h1 className=' flex items-center pl-1'>Filter</h1>
            </div>
          </div>
        </div>
        {/* tables */}
        <div className='bg-purple-100 mx-5 p-1 border-none rounded'>
          <Table />
        </div>
      </div>
    </>
  );
};

export default Usrdata;
