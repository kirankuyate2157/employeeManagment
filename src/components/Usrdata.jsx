import { useState, useEffect } from "react";
import axios from "axios";
import Tabs from "./Tabs";
import { HiChevronLeft, HiChevronDown } from "react-icons/hi";
import Table from "./Table";

const data = [
  {
    _id: "64497e4f19500643bc59892c",
    ID: "12345",
    firstName: "John",
    lastName: "Doe",
    companyName: "Acme Corp",
    email: "john.doe@acme.com",
    password: "password123",
    __v: 0,
  },
  {
    _id: "645b46168fa2aef949e73170",
    ID: "546",
    firstName: "tejas",
    lastName: "jullyal",
    companyName: "dule corp plt..",
    email: "teajs@gmail.com",
    password: "12343545pass",
    __v: 0,
  },
  {
    _id: "645b4c5de74b92b35c1018eb",
    ID: "679",
    firstName: "ganesh",
    lastName: "jullyal",
    companyName: "dulerwr3rt..",
    email: "utuhe@gmail.com",
    password: "vdvdcdscass",
    __v: 0,
  },
  {
    _id: "645b4ed6e74b92b35c1018f1",
    ID: "119",
    firstName: "suresh",
    lastName: "marshe",
    companyName: "dulerwr3rt..",
    email: "utuhe@gmail.com",
    password: "vdvdcdscass",
    __v: 0,
  },
  {
    _id: "645b50a6e74b92b35c1018ff",
    ID: "111",
    firstName: "kkmkd",
    lastName: "wdwdqqd",
    companyName: "dwdwdwedwd",
    email: "dwdwd@cece.com",
    password: "111111",
    __v: 0,
  },
  {
    _id: "645b52e4e74b92b35c101909",
    ID: "1213",
    firstName: "kkmkd",
    lastName: "kkkkk",
    companyName: "dwdwdwedwd",
    email: "dwdwd@cece.com",
    password: "111111",
    __v: 0,
  },
  {
    _id: "645b5382e74b92b35c10190b",
    ID: "777",
    firstName: "kiran",
    lastName: "kuyate",
    companyName: "kways tech.com",
    email: "kwaysa@gmail.com",
    password: "123",
    __v: 0,
  },
  {
    _id: "645b53fce74b92b35c10190d",
    ID: "12y5",
    firstName: "keshav",
    lastName: "kumavat",
    companyName: "loksha plt.",
    email: "loksha.plt@gmail.com",
    password: "123456",
    __v: 0,
  },
  {
    _id: "645b545be74b92b35c10190f",
    ID: "122",
    firstName: "Natasha",
    lastName: "shinde",
    companyName: "supermal PVT.LTD",
    email: "supermal.ptl@gmail.com",
    password: "123456",
    __v: 0,
  },
];
const Usrdata = ({ activeTab, handleTabClick }) => {
  const [data1, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [adminAccess, setAdminAccess] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
  };
  const toggleAdminAccess = () => {
    setAdminAccess(!adminAccess);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from API
        const response = await axios.get("http://localhost:8080/api/v1/users");
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        // Handle error, if needed
        console.log(error);
      }
    };

    fetchData();
  }, []);
  if (data1) {
    console.log("data is here : ", data.length);
  }
  return (
    <>
      <div className='w-full'>
        <div className='m-5'>
          <div className='flex flex-row justify-between bg-gray-100 border-none rounded px-3'>
            <div className='bg-red-200 flex gap-5 px-6 py-4 my-2  items-center border rounded-2xl'>
              <h1
                className={`${adminAccess ? "font-semibold" : "font-normal"}`}
                onClick={toggleAdminAccess}
              >
                Members
              </h1>
              <span className='w-[1px] bg-black h-4/5' />
              <h1
                className={`${adminAccess ? "font-normal" : "font-semibold"}`}
                onClick={toggleAdminAccess}
              >
                Admin
              </h1>
            </div>
            <div className='flex flex-col justify-center text-gray-500 font-medium items-end'>
              <h1>
                Total members:{" "}
                <span className='text-gray-600'>{data.length}</span>
              </h1>
              <h1>
                Current used : <span className='text-gray-600'>1897</span>
              </h1>
            </div>
          </div>
          <div className='gap-5 flex justify-between'>
            <div className='flex'>
              <h1 className='text-3xl flex justify-center items-center p-2 px-5'>
                Members
              </h1>
              <Tabs
                title='Add User'
                activeTab={activeTab}
                handleTabClick={handleTabClick}
                tabName='Add User'
              />
              <Tabs title='Import members' />
              <Tabs title='export members(Excel)' />
            </div>
            <div
              className={`hover:cursor-pointer py-1 px-3 pr-4  m-2 border rounded-2xl flex justify-center items-center text-xl font-medium bg-red-300`}
              onClick={toggleOpen}
            >
              {open ? <HiChevronLeft /> : <HiChevronDown />}
              <h1 className=' flex items-center pl-1'>Filter</h1>
            </div>
          </div>
        </div>
        {/* tables */}
        <div className='bg-gray-100 mx-5 p-1 border-none rounded'>
          <Table data={data} />
        </div>
      </div>
    </>
  );
};

export default Usrdata;
