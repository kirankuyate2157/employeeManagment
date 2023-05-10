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
  {
    id: 3,
    name: "Michael Johnson",
    company: "ABC Co.",
    email: "michael.johnson@example.com",
  },
  {
    id: 4,
    name: "Emily Brown",
    company: "PQR Ltd.",
    email: "emily.brown@example.com",
  },
  {
    id: 5,
    name: "David Wilson",
    company: "LMN Group",
    email: "david.wilson@example.com",
  },
  {
    id: 6,
    name: "Emma Davis",
    company: "XYZ Corp.",
    email: "emma.davis@example.com",
  },
  {
    id: 7,
    name: "William Taylor",
    company: "Acme Inc.",
    email: "william.taylor@example.com",
  },
  {
    id: 8,
    name: "Olivia Thomas",
    company: "ABC Co.",
    email: "olivia.thomas@example.com",
  },
  {
    id: 9,
    name: "James Anderson",
    company: "PQR Ltd.",
    email: "james.anderson@example.com",
  },
  {
    id: 10,
    name: "Sophia Martinez",
    company: "XYZ Corp.",
    email: "sophia.martinez@example.com",
  },
  {
    id: 11,
    name: "Benjamin Clark",
    company: "Acme Inc.",
    email: "benjamin.clark@example.com",
  },
  {
    id: 12,
    name: "Ava Rodriguez",
    company: "LMN Group",
    email: "ava.rodriguez@example.com",
  },
  {
    id: 13,
    name: "Lucas Lee",
    company: "ABC Co.",
    email: "lucas.lee@example.com",
  },
  {
    id: 14,
    name: "Mia Adams",
    company: "PQR Ltd.",
    email: "mia.adams@example.com",
  },
  {
    id: 15,
    name: "Alexander Wright",
    company: "XYZ Corp.",
    email: "alexander.wright@example.com",
  },
  {
    id: 6,
    name: "Emma Davis",
    company: "XYZ Corp.",
    email: "emma.davis@example.com",
  },
  {
    id: 7,
    name: "William Taylor",
    company: "Acme Inc.",
    email: "william.taylor@example.com",
  },
  {
    id: 8,
    name: "Olivia Thomas",
    company: "ABC Co.",
    email: "olivia.thomas@example.com",
  },
  {
    id: 9,
    name: "James Anderson",
    company: "PQR Ltd.",
    email: "james.anderson@example.com",
  },
  {
    id: 10,
    name: "Sophia Martinez",
    company: "XYZ Corp.",
    email: "sophia.martinez@example.com",
  },
  {
    id: 11,
    name: "Benjamin Clark",
    company: "Acme Inc.",
    email: "benjamin.clark@example.com",
  },
  {
    id: 12,
    name: "Ava Rodriguez",
    company: "LMN Group",
    email: "ava.rodriguez@example.com",
  },
  {
    id: 13,
    name: "Lucas Lee",
    company: "ABC Co.",
    email: "lucas.lee@example.com",
  },
  {
    id: 14,
    name: "Mia Adams",
    company: "PQR Ltd.",
    email: "mia.adams@example.com",
  },
  {
    id: 15,
    name: "Alexander Wright",
    company: "XYZ Corp.",
    email: "alexander.wright@example.com",
  },
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

  const handleDelete = (id) => {
    const updatedTableData = tableData.filter((item) => item.id !== id);
    setTableData(updatedTableData);
  };

  return (
    <div className='w-full'>
      <table className='w-full'>
        <thead className=' '>
          <tr className='  flex flex-row  mx-1 py-1 border-b-[1px] border-gray-400 text-gray-600 text-lg font-semibold gap-1 rounded-lg '>
            <th className='font-semibold  w-[5%]'>ID</th>
            <th className='font-semibold  w-[15%]'>Member Name</th>

            <th className='font-semibold  w-[15%]'>Company Name</th>
            <th className='font-semibold  w-[20%]'>Email</th>
            <th className='font-semibold  w-[15%]'>Password</th>
            <th className='font-semibold  w-[15%]'>status</th>
            <th className='font-semibold  w-[15%]'>Actions</th>
          </tr>
        </thead>

        <tbody>
          {" "}
          <div className=' w-full overflow-y-auto max-h-[80vh]'>
            {tableData.map((item) => (
              <Datarow
                key={item.id}
                data={item}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
              />
            ))}
          </div>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
