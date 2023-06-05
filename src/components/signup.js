import React from 'react'
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh] gap-5 ">
      <h1 className="text-[30px] font-arialBold text-200 font-bold">
        Welcome back
      </h1>
      <p className="text-[16px] font-sans font-thin">Create your account</p>

      <form className="flex flex-col gap-6 w-full sm:w-[400px]">
        <div className="w-full flex gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="border-2 border-310 w-full h-[50px] pl-4 focus:outline-none  focus:border-200"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border-2 border-310 w-full h-[50px] pl-4 focus:outline-none  focus:border-200"
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Phone number"
            className="border-2 border-310 w-full h-[50px] pl-4 focus:outline-none  focus:border-200"
          />
        </div>
        <div>
          <input
            type="date"
            placeholder="Date of birth (DD/MM/YYYY)"
            className="border-2 border-310 w-full h-[50px] pl-4 focus:outline-none  focus:border-200  text-gray-400"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            className="border-2 border-310 w-full h-[50px] pl-4 focus:outline-none  focus:border-200  text-gray-400"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            className="border-2 border-310 w-full h-[50px] pl-4 focus:outline-none  focus:border-200  text-gray-400"
          />
        </div>
        <div className="w-full bg-320 flex justify-center items-center h-[50px]">
          <button className="text-[14px] font-arialBold text-200 font-semibold">
            LOGIN
          </button>
        </div>

       
      </form>
    </div>
  );
}

export default SignUp;