import React from "react";
import Datarow from "./Datarow";

const Table = () => {
  return (
    <div className='w-full'>
      <table className='w-full flex flex-col'>
        <thead className=' '>
          <tr className='  flex flex-row  mx-1 py-1 border-b-[1px] border-gray-400 text-lg font-semibold gap-1 rounded-lg '>
            <th className='font-semibold  w-[5%]'>ID</th>
            <th className='font-semibold  w-[15%]'>Member Name</th>

            <th className='font-semibold  w-[15%]'>Company Name</th>
            <th className='font-semibold  w-[20%]'>Email</th>
            <th className='font-semibold  w-[15%]'>Password</th>
            <th className='font-semibold  w-[15%]'>status</th>
            <th className='font-semibold  w-[15%]'>Actions</th>
          </tr>
        </thead>
        <tbody className='max-h-screen overflow-y-auto'>
          <Datarow />
          <Datarow />
          <Datarow />
          <Datarow />
          <Datarow />
          <Datarow />
          <Datarow />
          <Datarow />
          <Datarow />
          <Datarow />
          <Datarow />
          <Datarow />
          <Datarow />
          <Datarow />
          <Datarow />
          <Datarow />
          <Datarow />
          <Datarow />
          <Datarow />
          <Datarow />
          <Datarow />
          <Datarow />
          <Datarow />
          <Datarow />
        </tbody>
      </table>
    </div>
  );
};

export default Table;
