import React from "react";
import { IoChevronDownCircleSharp } from "react-icons/io5";

const Profile = () => {
  return (
    <div className='w-40 flex flex-row '>
      <div className='flex w-full text-xs items-center  p-2'>
        <img
          src='https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
          alt='user'
          className='rounded-xl h-8 w-8 mr-2'
        />
        <div className='flex flex-col'>
          <h3 className=' text-sm font-medium overflow-x-auto whitespace-nowrap truncate'>
            kiran kuyate
          </h3>
          <h3 className=' text-xs overflow-x-auto whitespace-nowrap truncate'>
            Admin for all
          </h3>
        </div>
      </div>
      <IoChevronDownCircleSharp className=' self-center' />
    </div>
  );
};

export default Profile;
