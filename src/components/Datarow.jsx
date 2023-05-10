import React, { useState } from "react";
import { TiEdit } from "react-icons/ti";
import { MdDelete } from "react-icons/md";

const Datarow = ({ data, onUpdate, onDelete }) => {
  const {
    ID,
    firstName: initialFirstName,
    lastName: initialLastName,
    companyName: initialCompanyName,
    email: initialEmail,
  } = data;
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState(initialFirstName);
  const [lastName, setLastName] = useState(initialLastName);
  const [companyName, setCompanyName] = useState(initialCompanyName);
  const [email, setEmail] = useState(initialEmail);
  const [name, setName] = useState(`${firstName} ${lastName}`);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    const [editedFirstName, ...editedLastNameArr] = name.split(" ");
    const editedLastName = editedLastNameArr.join(" ");
    setFirstName(editedFirstName);
    setLastName(editedLastName);
    onUpdate({
      ID,
      firstName: editedFirstName,
      lastName: editedLastName,
      companyName,
      email,
    });
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    // Reset the edited values back to their original values
    setName(`${firstName} ${lastName}`);
    setCompanyName(initialCompanyName);
    setEmail(initialEmail);
  };

  const handleDeleteClick = () => {
    if (window.confirm("Are you sure you want to delete this row?")) {
      onDelete(ID);
    }
  };

  return (
    <tr className='flex justify-between px-3 border-b text-md  mt-[1px] mx-1 gap-2 rounded-lg items-center align-mIDdle'>
      <td className='font-normal flex flex-wrap justify-center px-2 p-1 rounded w-[5%]'>
        {ID}
      </td>
      <td className='font-normal overflow-auto px-2 p-1 rounded w-[15%]'>
        {isEditing ? (
          <input
            type='text'
            className='w-full focus:outline-none'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        ) : (
          <div className='overflow-x-auto whitespace-nowrap truncate'>
            {name}
          </div>
        )}
      </td>
      <td className='font-normal overflow-auto px-2 p-1 rounded w-[15%]'>
        {isEditing ? (
          <input
            type='text'
            className='w-full focus:outline-none'
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        ) : (
          <div className='overflow-x-auto whitespace-nowrap truncate'>
            {companyName}
          </div>
        )}
      </td>
      <td className='font-normal overflow-auto px-2 p-1 rounded w-[20%]'>
        {isEditing ? (
          <input
            type='text'
            className='w-full focus:outline-none'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        ) : (
          <div className='overflow-x-auto whitespace-nowrap truncate'>
            {email}
          </div>
        )}
      </td>
      <td className='font-normal px-2 p-1 text-2xl rounded w-[15%]'>
        ********
      </td>
      <td className='font-normal flex justify-center px-2 rounded w-[15%]'>
        <div className='bg-green-200 text-green-600 items-center align-mIDdle pb-1 rounded-xl px-4 text-sm'>
          active
        </div>
      </td>
      <td className='font-normal px-2 p-1 rounded w-[15%]'>
        {isEditing ? (
          <div className='flex gap-4 justify-center'>
            <button
              className='hover:cursor-pointer text-blue-500'
              onClick={handleSaveClick}
            >
              Save
            </button>
            <button
              className='hover:cursor-pointer text-red-500'
              onClick={handleCancelClick}
            >
              Cancel
            </button>
          </div>
        ) : (
          <div className='flex gap-4 justify-center'>
            <TiEdit
              className='hover:cursor-pointer'
              onClick={handleEditClick}
            />
            <MdDelete
              className='hover:cursor-pointer'
              onClick={handleDeleteClick}
            />
          </div>
        )}
      </td>
    </tr>
  );
};

export default Datarow;
