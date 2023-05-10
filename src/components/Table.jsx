import { useState } from "react";
import Datarow from "./Datarow";

const Table = ({ ...props }) => {
  const [tableData, setTableData] = useState(props.data);
  console.log("tableData", tableData);
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
