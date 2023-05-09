import React from "react";
import { TbEdit } from "react-icons/tb";
import { MdOutlineDelete } from "react-icons/md";
const Datarow = () => {
  return (
    <>
      <tr className='flex justify-between px-3 border text-md bg-gray-100 mt-[1px] mx-1 gap-2 rounded-lg items-center align-middle'>
        <td className='font-normal  flex flex-wrap justify-center px-2 p-1 rounded w-[5%]'>
          1
        </td>
        <td className='font-normal  overflow-auto px-2 p-1 rounded w-[15%]'>
          <div className='overflow-x-auto whitespace-nowrap truncate'>
            Kiran kuyate dvdfyvbhgvxgwxvgwvxghwvgh
          </div>
        </td>
        <td className='font-normal  overflow-auto px-2 p-1 rounded w-[15%]'>
          <div className='overflow-x-auto whitespace-nowrap truncate'>
            Acme Inc.
          </div>
        </td>

        <td className='font-normal  overflow-auto px-2 p-1 rounded w-[20%]'>
          <div className='overflow-x-auto whitespace-nowrap truncate'>
            john.doe@example.com
          </div>
        </td>
        <td className='font-normal   px-2 p-1 text-2xl  rounded w-[15%]'>
          ********
        </td>
        <td className='font-normal  flex justify-center px-2  rounded  w-[15%]'>
          <div className=' bg-green-200 text-green-600 items-center align-middle pb-1 rounded-xl px-4 text-sm'>
            active
          </div>
        </td>
        <td className='font-normal  px-2 p-1 rounded w-[15%]'>
          <div className='flex gap-4 justify-center text-xl'>
            <TbEdit className='hover:cursor-pointer' />
            <MdOutlineDelete className='hover:cursor-pointer' />
          </div>
        </td>
      </tr>
    </>
  );
};

export default Datarow;
