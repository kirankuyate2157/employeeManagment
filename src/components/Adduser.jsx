import React, { useState } from "react";
import axios from "axios";
import Usrdata from "./Usrdata";

const Adduser = () => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    company: "",
    email: "",
    password: "",
    confirmPassword: "",
    status: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Perform validation
    if (
      !user.id ||
      !user.name ||
      !user.email ||
      !user.password ||
      !user.confirmPassword
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    const [firstName, ...lastNameArr] = user.name.split(" ");
    const lastName = lastNameArr.join(" ");

    try {
      const userData = {
        ID: user.id,
        firstName: firstName,
        lastName: lastName,
        companyName: user.company,
        email: user.email,
        password: user.password,
      };

      // Send data to API
      const response = await axios
        .post("http://localhost:8080/api/v1/users", userData)
        .then((response) => {
          // Handle successful response, if needed
          // console.log(response.data);
          // Reset form fields
          setUser({
            id: "",
            name: "",
            company: "",
            email: "",
            password: "",
            confirmPassword: "",
            status: "",
          });
        });
    } catch (error) {
      // Handle error, if needed
      alert("duplicate data entry");
      console.log(error.message);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
    >
      <div className='mb-4'>
        <label htmlFor='id' className='block text-gray-700 font-bold mb-2'>
          ID
        </label>
        <input
          type='text'
          name='id'
          id='id'
          value={user.id}
          onChange={handleChange}
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />
      </div>
      <div className='mb-4'>
        <label htmlFor='name' className='block text-gray-700 font-bold mb-2'>
          Member Name
        </label>
        <input
          type='text'
          name='name'
          id='name'
          value={user.name}
          onChange={handleChange}
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />
      </div>
      <div className='mb-4'>
        <label htmlFor='company' className='block text-gray-700 font-bold mb-2'>
          Company Name
        </label>
        <input
          type='text'
          name='company'
          id='company'
          value={user.company}
          onChange={handleChange}
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />
      </div>
      <div className='mb-4'>
        <label htmlFor='email' className='block text-gray-700 font-bold mb-2'>
          Email
        </label>
        <input
          type='email'
          name='email'
          id='email'
          value={user.email}
          onChange={handleChange}
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />
      </div>
      <div className='mb-4'>
        <label
          htmlFor='password'
          className='block text-gray-700 font-bold mb-2'
        >
          Password
        </label>
        <input
          type='password'
          name='password'
          id='password'
          value={user.password}
          onChange={handleChange}
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />
      </div>
      <div className='mb-4'>
        <label
          htmlFor='confirmPassword'
          className='block text-gray-700 font-bold mb-2'
        >
          Confirm Password
        </label>
        <input
          type='password'
          name='confirmPassword'
          id='confirmPassword'
          value={user.confirmPassword}
          onChange={handleChange}
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />
      </div>
      <div className='mb-4'>
        <label htmlFor='status' className='block text-gray-700 font-bold mb-2'>
          Status
        </label>
        <input
          type='text'
          name='status'
          id='status'
          value={user.status}
          onChange={handleChange}
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />
      </div>
      <div className='flex items-center justify-end'>
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
        >
          Add User
        </button>
      </div>
    </form>
  );
};

export default Adduser;
