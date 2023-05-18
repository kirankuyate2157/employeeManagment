import React, { useState } from "react";
import axios from "axios";
import img1 from "../images/Website designer-amico.png";
import img2 from "../images/Digitize-Your-Pen-and-Paper-Forms-and-Checklists.png";
import img3 from "../images/Track-Time-With-The-1-Time-Clock.png";
import img4 from "../images/comanies.png";
const Home = () => {
  const handleSubmit = async () => {
    try {
      const userData = {
        ID: "679",
        firstName: "ganesh",
        lastName: "jullyal",
        companyName: "dulerwr3rt..",
        email: "utuhe@gmail.com",
        password: "vdvdcdscass",
      };

      // Send data to API
      const response = await axios.post(
        "http://localhost:8080/api/v1/users",
        userData
      );

      // Handle successful response, if needed
      console.log(response.data);

      // Reset form fields
      // ...
    } catch (error) {
      // Handle error, if needed
      console.log(error);
    }
  };

  return (
    <div className='flex flex-col'>
      <div className='w-full py-10 flex  bg-gradient-to-r from-cyan-500 to-blue-500'>
        <div className='w-1/2'>
          <div className=' h-full flex flex-col justify-center  items-center  space-y-4'>
            <h1 className="font-[800] text-[45px]  text-white  font-['GintoNord'] m-4 pt-3">
              Enhance Productivity with Employee Management System
            </h1>

            <p className="font-[380] text-[19px]  text-white text-slate-100  m-4 leading-[32px] font-['gg sans'] gap-x-1">
              With Pocket HRMS Get Advanced Tools For Employee Management And
              Inspire The Best Performance In Your Staff.
            </p>

            <a
              href='#'
              className='bg-blue-600 text-white p-2 px-5 rounded-full hover:shadow-2xl '
            >
              <p>Learn More</p>
            </a>
          </div>
        </div>
        <div className=''>
          <img src={img1} alt='img3' width='550px' />
        </div>
        {/* <span
          style='background: linear-gradient(0deg, #f4f8ff, #fff0 );'
          class='absolute w-full h-[150px] bottom-0 z-50'
        /> */}
      </div>

      <div className='w-full relative bg-white '>
        <div className='flex flex-row  gap-4 justify-between items-center m-3 pt-8'>
          <div className='w-full'>
            <img src={img2} alt='img 2' />
          </div>

          <div className='flex flex-col justify-between space-y-3'>
            <h1 className="font-[800] text-[40px] font-['GintoNord'] mt-4 pt-3">
              Employee Scheduling Made Easy
            </h1>

            <p className="font-[500] text-[19px]  text-slate-500  leading-[32px] font-['gg sans'] gap-x-1">
              Save more time than you can imagine by simplifying your scheduling
            </p>
            <p className="font-[380] text-[17px] mt-3 pt-5 leading-[32px] font-['gg sans'] gap-x-1">
              Schedule and dispatch shifts faster than ever! With a simple user
              interface & drag and drop capabilities , you’ll be able to spend
              less time on scheduling, and more time on growing your business.
            </p>
          </div>
        </div>
      </div>
      {/* ...... */}
      <div className='w-full relative  bg-gradient-to-r from-cyan-500 to-blue-500 '>
        <div className='flex flex-row justify-between items-center m-3 pt-8'>
          <div className='flex w-[50%] flex-col m-3 justify-between space-y-3'>
            <h1 className="font-[800] text-[40px] text-white font-['GintoNord'] mt-4 pt-3">
              Simple and Effective Time Tracking
            </h1>

            <p className="font-[500] text-[19px] text-white leading-[32px] font-['gg sans'] gap-x-1">
              Track and manage work hours on jobs and projects like never before
            </p>
            <p className="font-[380] text-[17px] mt-3 pt-5 text-white leading-[32px] font-['gg sans'] gap-x-1">
              Track your workforce time and location with a precise and
              easy-to-use GPS time clock, ensure employees arrive on time to the
              right location, simplify your payroll process, and create
              data-driven reports to scale your business.
            </p>
          </div>

          <img src={img3} alt='img3' width='700px' />
        </div>
      </div>
      {/* ---------------- */}

      <div className='w-full relative  bg-[#f5f8fe] '>
        <div className='flex flex-row justify-between items-center m-3 pt-8'>
          <div className='relative w-[50%]  h-[500px] overflow-y-hidden mx-auto'>
            <div className='absolute  h-auto object-cover '>
              <img src={img4} alt='' />
            </div>
          </div>

          <div className='flex flex-col m-3 justify-between space-y-3'>
            <h1 className="font-[900] text-[50px] text-center font-['GintoNord'] mt-4 pt-3">
              Trusted By Over 36,000 Companies Worldwide
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
