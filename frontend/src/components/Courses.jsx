import React from "react";
import Footer from "./Footer";

const Courses = () => {
    return (
        <>
            <div className=" pt-36 bg-[#353922] text-[#99ff00] py-3 px-10">
                <div id="topic" className="">
                    <h2 className="text-center text-3xl font-bold text-[#99ff00] mb-10"> Recommended Courses </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        <div className="bg-[#2A2D1A] border-2 border-gray-400 text-[#E5E7EB] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                            <div className=''> <img src="https://media.geeksforgeeks.org/wp-content/uploads/20240701150349/CSS-Tutorial-copy.webp" alt="" /></div>
                            <div className="p-4">
                                <h3 className="text-sm text-gray-500 font-bold uppercase"> Free Course </h3>
                                <h2 className="text-xl text-white mt-2 font-semibold"> CSS Tutorials For Beginners </h2>
                                <p className="text-gray-300 mt-2 leading-relaxed"> CSS is used to design and style websites. This course will guide you through CSS fundamentals, tips, and tricks to build beautiful web pages! </p>
                               <a href="/css"><button className="mt-4 px-4 py-2 bg-[#353922] font-semibold text-white rounded-lg border-2 border-white hover:hover:bg-[#2A2D1A] hover:text-[#99ff00] transition-colors duration-300"> Start Watching </button></a> 
                            </div>
                        </div>

                        <div className="bg-[#2A2D1A] border-2 border-gray-400 text-[#E5E7EB] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                            <div className=''> <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230629123647/Best-C-Programming-Courses-For-Beginners.png" alt="" /></div>
                            <div className="p-4">
                                <h3 className="text-sm text-gray-500 font-bold uppercase"> Free Course </h3>
                                <h2 className="text-xl text-white mt-2 font-semibold"> C Programming Tutorials For Beginners </h2>
                                <p className="text-gray-300 mt-2 leading-relaxed"> C is a powerful general-purpose programming language. This series will help you build a strong foundation in C from scratch! </p>
                               <a href="/c"> <button className="mt-4 px-4 py-2 bg-[#353922] font-semibold text-white rounded-lg border-2 border-white hover:hover:bg-[#2A2D1A] hover:text-[#99ff00] transition-colors duration-300"> Start Watching </button>
                               </a></div>
                        </div>

                        <div className="bg-[#2A2D1A] border-2 border-gray-400 text-[#E5E7EB] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                            <div className=""><img src="https://media.geeksforgeeks.org/wp-content/uploads/20230629144356/Best-CPP-Courses-with-Certificates.png" width={480} alt="" /></div>
                            <div className="p-4">
                                <h3 className="text-sm text-gray-500 font-bold uppercase"> Free Course </h3>
                                <h2 className="text-xl text-white mt-2 font-semibold"> C++ Tutorials For Beginners </h2>
                                <p className="text-gray-300 mt-2 leading-relaxed"> C++ is a versatile programming language widely used in game development, system software, and more. Learn from the basics to advanced concepts in this series. </p>
                                <a href="/cpp"><button className="mt-4 px-4 py-2 bg-[#353922] font-semibold text-white rounded-lg border-2 border-white hover:hover:bg-[#2A2D1A] hover:text-[#99ff00] transition-colors duration-300"> Start Watching </button>
                                </a></div>
                        </div>

                        <div className="bg-[#2A2D1A] border-2 border-gray-400 text-[#E5E7EB] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                            <div className=""><img src="https://ultimatecourses.com/assets/share/courses/javascript-51f65a000ac5f98e707cac1fbdf54c209529157ff399544518dba9c47b1f31da.png" alt="" /></div>
                            <div className="p-4">
                                <h3 className="text-sm text-gray-500 font-bold uppercase"> Free Course </h3>
                                <h2 className="text-xl text-white mt-2 font-semibold"> Ultimate JavaScript Course </h2>
                                <p className="text-gray-300 mt-2 leading-relaxed"> Latest JavaScript course comes with a premium curriculum that covers everything from basics to advanced.Surprisingly, it is equally easy to learn and master JS. Tap below burron foe more. </p>
                                <a href="/js"><button className="mt-4 px-4 py-2 bg-[#353922] font-semibold text-white rounded-lg border-2 border-white hover:hover:bg-[#2A2D1A] hover:text-[#99ff00] transition-colors duration-300"> Start Watching </button>
                                </a>  </div>
                        </div>

                        <div className="bg-[#2A2D1A] border-2 border-gray-400 text-[#E5E7EB] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                            <div className=""><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2lMn-HK93mL9Fx4SZHSqRErsy9ZB9lzn3Dg&s" width={450} alt="" /></div>
                            <div className="p-4">
                                <h3 className="text-sm text-gray-500 font-bold uppercase"> Free Course </h3>
                                <h2 className="text-xl text-white mt-2 font-semibold"> React JS Tutorials For Beginners </h2>
                                <p className="text-gray-300 mt-2 leading-relaxed"> React is a free and open-source front-end JavaScript library.This series will cover React from starting to the end.Surprisingly, it is equally easy to learn and master ReactJS. Tap below burron foe more. </p>
                               <a href="/react"> <button className="mt-4 px-4 py-2 bg-[#353922] font-semibold text-white rounded-lg border-2 border-white hover:hover:bg-[#2A2D1A] hover:text-[#99ff00] transition-colors duration-300"> Start Watching </button>
                               </a> </div>
                        </div>

                        <div className="bg-[#2A2D1A] border-2 border-gray-400 text-[#E5E7EB] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                            <div className=""><img src="https://media.geeksforgeeks.org/wp-content/uploads/20240304152903/python-tutorial-2.webp" alt="" /></div>
                            <div className="p-4">
                                <h3 className="text-sm text-gray-500 font-bold uppercase"> Free Course </h3>
                                <h2 className="text-xl text-white mt-2 font-semibold "> Python Tutorials - 100 Days of Code </h2>
                                <p className="text-gray-300 mt-2 leading-relaxed"> Python is one of the most demanded programming languages in the job market. Surprisingly, it is equally easy to learn and master Python. Let's commit our 100 days of code to Python! tap the below button for more about programming in python. </p>
                               <a href="/python"> <button className="mt-4 px-4 py-2 bg-[#353922] font-semibold text-white rounded-lg border-2 border-white hover:hover:bg-[#2A2D1A] hover:text-[#99ff00] transition-colors duration-300"> Start Learning </button>
                               </a>  </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Courses;
