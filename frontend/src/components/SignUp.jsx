import { useState } from "react";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";


export default function Signup() {
  const [log, setLog] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const navigate=useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    if (!log.name || !log.email || !log.password || !log.confirmPassword) {
      alert("Please fill out all fields.");
      return;
    }
    if (log.password !== log.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const response = await fetch("http://localhost:5000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: log.name,
          email: log.email,
          password: log.password,
        }),
      });
      const json = await response.json();
      console.log(json);
      if (json.success) {
        localStorage.setItem("token", json.authtoken);
        alert("Signup Successful!");
        navigate('/')
      } else {
        console.log(json)
        alert("Signup failed. Please check your input or try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred during Signup.");
    }
  };

  return (
    <>
      <div className={`bg-[#353922] text-white pt-20 h-screen flex items-center justify-center`}>
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-4">

          <div className="lg:w-1/2 flex justify-center lg:mb-0 transform transition duration-700 hover:scale-105">
            <img className="w-3/4" src="https://cdni.iconscout.com/illustration/premium/thumb/login-page-4468581-3783954.png" alt="Signup Illustration" />
          </div>

          <div className="lg:w-1/2">
            <div className={`p-8 mr-10 rounded-lg shadow-md transform transition duration-700 hover:scale-105 rounded-xl border-gray-500 border-2 px-20 py-8 hover:shadow-md bg-[#2A2D1A] border-[#2A2D1A]`} >
              <p className="text-3xl text-[#99ff00] font-semibold text-center mb-6">Sign Up</p>
             
              <form className="space-y-6">
                <div className="relative group">
                <svg className="absolute left-3 top-4 w-5 h-5 text-gray-400 group-hover:text-[#99ff00] " xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" >
                    <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
                  </svg>
                  <input type="text" className="w-full pl-10 p-3  rounded-md border-2 border-gray-500 bg-[#353922] text-white  transition duration-300" placeholder="Username" value={log.name} onChange={(e) => setLog({ ...log, name: e.target.value })} />
                </div>

                <div className="relative group">
                <svg className="absolute left-3 top-4 w-5 h-5 text-gray-400 group-hover:text-[#99ff00] " xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" >
                    <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
                  </svg>
                  <input type="email" className="w-full pl-10 p-3  rounded-md border-2 border-gray-500 bg-[#353922] text-white  transition duration-300" placeholder="Email" value={log.email} onChange={(e) => setLog({ ...log, email: e.target.value })} />
                </div>

                <div className="relative group">
                <svg className="absolute left-3 top-4 w-5 h-5 text-gray-400 group-hover:text-[#99ff00] " xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" >
                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
                  </svg>
                  <input type="password" className="w-full pl-10 p-3  rounded-md border-2 border-gray-500 bg-[#353922] text-white  transition duration-300" placeholder="Password" value={log.password} onChange={(e) => setLog({ ...log, password: e.target.value })} />
                </div>

                <div className="relative group">
                <svg className="absolute left-3 top-4 w-5 h-5 text-gray-400 group-hover:text-[#99ff00] " xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" >
                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
                  </svg>
                  <input type="password" className="w-full pl-10 p-3  rounded-md border-2 border-gray-500 bg-[#353922] text-white  transition duration-300" placeholder="Confirm Password" value={log.confirmPassword} onChange={(e) => setLog({ ...log, confirmPassword: e.target.value })} />
                </div>
                <button type="submit" className="px-12 ml-48 font-bold rounded-md border-2 border-gray-400 bg-[#353922] text-white hover:bg-[#2A2D1A] hover:text-[#99ff00] font-bold py-3 " onClick={handleClick } ><a href="/"> Submit </a> </button>
                <a href="/login" className="block text-center text-blue-500 hover:underline " > Already have account? </a>

              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}