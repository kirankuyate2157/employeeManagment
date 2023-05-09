import React, { useState } from "react";
import Datarow from "./Datarow";

const data = [
  {
    id: 1,
    name: "John Doe",
    company: "Acme Inc.",
    email: "john.doe@example.com",
  },
  {
    id: 2,
    name: "Jane Smith",
    company: "XYZ Corp.",
    email: "jane.smith@example.com",
  },
  // Add more data objects as needed
];

const Table = () => {
  const [tableData, setTableData] = useState(data);

  const handleUpdate = (updatedData) => {
    const updatedTableData = tableData.map((item) => {
      if (item.id === updatedData.id) {
        return { ...item, ...updatedData };
      }
      return item;
    });
    setTableData(updatedTableData);
  };

  return (
    <div className='w-full'>
      <table className='w-full flex flex-col'>
        <thead>
          <tr className='flex flex-row mx-1 py-1 border-b-[1px] border-gray-400 text-lg font-semibold gap-1 rounded-lg'>
            <th className='font-semibold w-[5%]'>ID</th>
            <th className='font-semibold w-[15%]'>Member Name</th>
            <th className='font-semibold w-[15%]'>Company Name</th>
            <th className='font-semibold w-[20%]'>Email</th>
            <th className='font-semibold w-[15%]'>Password</th>
            <th className='font-semibold w-[15%]'>Status</th>
            <th className='font-semibold w-[15%]'>Actions</th>
          </tr>
        </thead>
        <tbody className='max-h-screen overflow-y-auto'>
          {tableData.map((item) => (
            <Datarow key={item.id} data={item} onUpdate={handleUpdate} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
