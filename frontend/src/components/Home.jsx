import React from 'react';
import TypingEffect from './TypingEffect';
import Footer from './Footer';

const HomePage = () => {
    return (
        <>
            <div className="w-full pt-32 flex  bg-[#353922]">

                <div className="w-1/2 h-[370px] ml-10 mt-5 ml-10 mr-3 bg-[#282b19] p-6">
                    <h1 className="text-4xl text-white">Welcome to <span className="text-[#99ff00]">Code-Shalla</span></h1><br />
                    <h6 className="text-lg text-gray-400 mt-2">
                        <TypingEffect className="Typinganimation px-1" typeSpeed={50} backSpeed={50} loop
                            strings={[" C Programming ", " C++", " DSA", " Java", " Python", " Data Science", " Machine Learning", " Web Development", " App Development",]}
                        />
                    </h6>
                    <p className="text-gray-400 text-lg mt-2">
                        <br />Confused on which course to take?
                        <br />I have got you covered. Browse courses and find out the best course for you.
                        <br />It's free! Code-Shalla is my attempt to teach coding techniques that took me ages to learn in a short time.
                    </p>
                    <div className="mt-6">
                        <button className="px-4 py-2 bg-[#353922] border-2 border-white text-white hover:bg-[#2A2D1A] hover:text-[#99ff00] font-bold rounded-lg text-sm mr-4">Free Courses</button>
                        <button className="px-4 py-2 bg-[#353922] border-2 border-white text-white hover:bg-[#2A2D1A] hover:text-[#99ff00] font-bold rounded-lg text-sm">Explore More</button>
                    </div>
                </div>

                <div className="w-1/2 h-[370px] bg-[#282b19] mr-10 mt-5 p-4 ">
                    <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80" alt="" className="w-full h-full object-cover" />
                </div>

            </div>

            <div className="bg-[#353922] text-[#99ff00] py-10 px-10">

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
                                </a>
                            </div>
                        </div>
                    </div>

                    <section section className="pt-2 pb-14  px-10 bg-[#353922] text-white" >
                        <h2 className="text-center text-3xl font-bold text-[#99ff00] mt-10 mb-10">Why Choose Us?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {[
                                { title: "Learn HTML", description: "HTML is the backbone of every website!", icon: "fa-code" },
                                { title: "Master CSS", description: "Style your pages with CSS for desigining!", icon: "fa-paint-brush" },
                                { title: "Build Apps with React", description: "Learn React JS with ease for interactive UI!", icon: "fa-react" },
                            ].map((item, index) => (
                                <div key={index} className="p-10 text-center bg-[#2A2D1A] border-2 border-gray-400 text-[#E5E7EB] rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                                    <i className={`fa ${item.icon} text-[#99ff00] text-4xl mb-4`}></i>
                                    <h3 className="text-xl font-semibold">{item.title}</h3>
                                    <p className="mt-2 text-lg text-gray-300">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </section >

                </div>
            </div>
            <Footer />
        </>
    );
};

export default HomePage;
