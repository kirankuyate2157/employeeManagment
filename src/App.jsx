import "./App.css";

function App() {
  return (
    <>
      <div
        className='w-[100%] flex
      '
      >
        <div className='w-[15%] ml-3 bg-cyan-600'>
          <h1 className='text-3xl text-red-200 bg-red-500'>Hello world!</h1>
          <h1 className='text-2xl mt-4 '>Home</h1>
          <h1 className='text-2xl mt-4 '>Console</h1>
          <h1 className='text-2xl mt-4 '>Add employee</h1>
          <h1 className='text-2xl mt-4 '>Profiles</h1>
        </div>
        <div className='w-[85%]'>
          <h1 className='text-3xl text-red-200 bg-green-500'>Hello world!</h1>
        </div>
      </div>
    </>
  );
}

export default App;
