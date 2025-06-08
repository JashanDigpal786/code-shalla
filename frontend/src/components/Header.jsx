import React from 'react';
import Logo from "../Images/logo.png";

const Header = () => {
  return (
    <>
      <div className='fixed z-10'>

        <nav className="bg-[#2A2D1A] text-white px-10 py-3 flex border-b-2 border-[#2A2210] items-center shadow-md top-0 z-0">
          <img src={Logo} alt="Code-Shalla Logo" className="h-10 bg-[#2A2D1A]  " />

          <div className="flex  bg-[#2A2D1A] px-8 pt-2 ml-80 pl-28 py-1">
            <ul className="hidden md:flex space-x-10 ">
              <li><a href="/" className="text-lg font-semibold hover:text-[#99ff00]">Home</a></li>
              <li><a href="/courses" className="text-lg font-semibold hover:text-[#99ff00]">Courses</a></li>
              <li><a href="/tutorial" className="text-lg font-semibold hover:text-[#99ff00]">Tutorial</a></li>
              <li><a href="/notes" className="text-lg font-semibold hover:text-[#99ff00]">Notes</a></li>
              <li><a href="/about" className="text-lg font-semibold hover:text-[#99ff00]">About</a></li>
              <li><a href="/contact" className="text-lg font-semibold hover:text-[#99ff00]">Contact</a></li>
            </ul>{/* <i className="fa-solid fa-moon text-white ml-4 cursor-pointer md:ml-8 hover:text-gray-400"></i> */}
          </div>
          <div className="hidden md:flex ml-0 pr-4 space-x-2">

          <a href="/login" className="px-4  py-1 rounded-md border-2 border-white bg-[#353922] text-white hover:bg-[#352] hover:text-[#fff] font-bold">Login</a>
            <a href="/signup" className="px-4  py-1 rounded-md border-2 border-white bg-[#353922] text-white hover:bg-[#352] hover:text-[#fff] font-bold">Signup</a>
          </div>

        </nav>

        <div className='bg-[#353922] shadow-md'>
          <div className=" bg-[#2A2D1A] shadow-md text-[#99ff00] py-1 px-10">
            <div className="flex items-center mb-1 ml-0 ">
              <a href="/" className="text-lg"><i className="fa-solid fa-house text-white"></i></a>

              <div className="flex items-center ml-10 mr-10">
                <input type="text" className="search text-lg px-1 py-1 bg-transparent text-white border-b-2 border-[#fff] focus:outline-none focus:border-[#99ff00]" placeholder="Search" />
                <i className="fa-solid fa-magnifying-glass pb-2 pt-3 border-b-2 border-white text-white text-xs hover:border-[#99ff00] hover:text-[#99ff00]"></i>
              </div>

              <ul className="ml-80  mr-0 flex space-x-10">
                <li><a href="/html" className="text-white text-lg font-semibold hover:text-[#99ff00]">HTML</a></li>
                <li><a href="/css" className="text-white text-lg font-semibold hover:text-[#99ff00]">CSS</a></li>
                <li><a href="/js" className="text-white text-lg font-semibold hover:text-[#99ff00]">JS</a></li>
                <li><a href="/react" className="text-white text-lg font-semibold hover:text-[#99ff00]">REACT JS</a></li>
                <li><a href="/node" className="text-white text-lg font-semibold hover:text-[#99ff00]">NODE JS</a></li>
                <li><a href="/c" className="text-white text-lg font-semibold hover:text-[#99ff00]">C</a></li>
                <li><a href="/cpp" className="text-white text-lg font-semibold hover:text-[#99ff00]">C++</a></li>
                <li><a href="/python" className="text-white text-lg font-semibold hover:text-[#99ff00]">PYTHON</a></li>
                <li><a href="/java" className="text-white text-lg font-semibold hover:text-[#99ff00]">JAVA</a></li>
              </ul>

            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Header;
