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
      <table className='w-full flex flex-col'>
        <thead>{/* ... */}</thead>
        <tbody className='max-h-screen overflow-y-auto'>
          {tableData.map((item) => (
            <Datarow
              key={item.id}
              data={item}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
