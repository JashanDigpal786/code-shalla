import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Footer from './Footer';
import './customStyles.css';

const Tutorial = () => {
  const topics = [
    {
      name: "HTML",
      tutorials: [
        { id: 1, title: "Introduction to HTML", video: "https://www.youtube.com/embed/it1rTvBcfRg?si=q8eC4CgNb5xDSSDa" },
        { id: 2, title: "HTML Elements", video: "https://www.youtube.com/embed/UB1O30fR-EE" },
        { id: 3, title: "HTML Attributes", video: "https://www.youtube.com/embed/yMX901oVtn8?si=sU0GzyaBoyU0zq17" },
        { id: 4, title: "HTML Forms", video: "https://www.youtube.com/embed/VLeERv_dR6Q?si=CVEPBaAR1yWGyYcL" },
        { id: 5, title: "HTML Tables", video: "https://www.youtube.com/embed/-QuK8taGLCs?si=MqiJMEODKqTQtm2n" },
        { id: 6, title: "HTML Media", video: "https://www.youtube.com/embed/e62D-aayveY" },
        { id: 7, title: "HTML APIs", video: "https://www.youtube.com/embed/kMrXG5EuJP0?si=eDmbfvy4D5tsc30V" },
        { id: 8, title: "Semantic HTML", video: "https://www.youtube.com/embed/Nmaf4ir3QkM?si=LlDNUCOQ0NvDI_ow" },
        { id: 9, title: "HTML5 Overview", video: "https://www.youtube.com/embed/b37JZSWSZXc?si=FZRB_Qf7U5_wRxZAhttps://www.youtube.com/embed/b37JZSWSZXc?si=FZRB_Qf7U5_wRxZA" },
        { id: 10, title: "HTML Best Practices", video: "https://www.youtube.com/embed/Q33KBiDriJY" },
      ],
    },
    {
      name: "CSS",
      tutorials: [
        { id: 1, title: "Introduction to CSS", video: "https://www.youtube.com/embed/1PnVor36_40" },
        { id: 2, title: "CSS Selectors", video: "https://www.youtube.com/embed/Edsxf_NBFrw" },
        { id: 3, title: "CSS Box Model", video: "https://www.youtube.com/embed/rIO5326FgPE" },
        { id: 4, title: "CSS Flexbox", video: "https://www.youtube.com/embed/JJSoEo8JSnc" },
        { id: 5, title: "CSS Grid", video: "https://www.youtube.com/embed/jV8B24rSN5o" },
        { id: 6, title: "CSS Animations", video: "https://www.youtube.com/embed/CBQGl6zokMs" },
        { id: 7, title: "CSS Variables", video: "https://www.youtube.com/embed/5wLrz_zUwoU?si=TwBzOq8hSau9-jOa" },
        { id: 8, title: "CSS Positioning", video: "https://www.youtube.com/embed/YEmdHbQBCSQ?si=cNPbIB-kVeCdqfP2" },
        { id: 9, title: "CSS Media Queries", video: "https://www.youtube.com/embed/P_vkS4UJNDk?si=CG9KGigYOt4ZuhnS" },
        { id: 10, title: "Responsive Design", video: "https://www.youtube.com/embed/srvUrASNj0s" },
      ],
    },
    {
      name: "JavaScript",
      tutorials: [
        { id: 1, title: "JavaScript Basics", video: "https://www.youtube.com/embed/W6NZfCO5SIk" },
        { id: 2, title: "DOM Manipulation", video: "https://www.youtube.com/embed/0ik6X4DJKCc" },
        { id: 3, title: "ES6 Features", video: "https://www.youtube.com/embed/AfWYO8t7ed4" },
        { id: 4, title: "JavaScript Async", video: "https://www.youtube.com/embed/PoRJizFvM7s" },
        { id: 5, title: "JavaScript Functions", video: "https://www.youtube.com/embed/eis11j_iGMs" },
        { id: 6, title: "Object-Oriented JS", video: "https://www.youtube.com/embed/PFmuCDHHpwk" },
        { id: 7, title: "JavaScript Events", video: "https://www.youtube.com/embed/V33eTgLl1BM" },
        { id: 8, title: "JavaScript Debugging", video: "https://www.youtube.com/embed/HbBZ2ZvKJqU" },
        { id: 9, title: "Promises in JavaScript", video: "https://www.youtube.com/embed/DHvZLI7Db8E" },
        { id: 10, title: "Fetch API", video: "https://www.youtube.com/embed/Oive66jrwBs" },
      ],
    },
    {
      name: "ReactJS",
      tutorials: [
        { id: 1, title: "React Introduction", video: "https://www.youtube.com/embed/QFaFIcGhPoM?si=6BX8tABHIu6UIblm" },
        { id: 2, title: "React Components", video: "https://www.youtube.com/embed/QFaFIcGhPoM" },
        { id: 3, title: "React State Management", video: "https://www.youtube.com/embed/O6P86uwfdR0" },
        { id: 4, title: "React Lifecycle Methods", video: "https://www.youtube.com/embed/dpw9EHDh2bM" },
        { id: 5, title: "React Hooks", video: "https://www.youtube.com/embed/dpw9EHDh2bM" },
        { id: 6, title: "React Context API", video: "https://www.youtube.com/embed/35lXWvCuM8o" },
        { id: 7, title: "React Router", video: "https://www.youtube.com/embed/Law7wfdg_ls" },
        { id: 8, title: "React and APIs", video: "https://www.youtube.com/embed/NINe-xu5PcQ" },
        { id: 9, title: "Performance Optimization", video: "https://www.youtube.com/embed/8myhYTQJaxU" },
        { id: 10, title: "React Deployment", video: "https://www.youtube.com/embed/G0bBLvWXBvc" },
      ],
    },
    {
      name: "NodeJS",
      tutorials: [
        { id: 1, title: "Introduction to NodeJS", video: "https://www.youtube.com/embed/TlB_eWDSMt4" },
        { id: 2, title: "NodeJS Modules", video: "https://www.youtube.com/embed/RLtyhwFtXQA" },
        { id: 3, title: "NodeJS File System", video: "https://www.youtube.com/embed/2wOI62gjzmc?si=5BjlPVcEFRNhhUn_" },
        { id: 4, title: "NodeJS Events", video: "https://www.youtube.com/embed/g64BZXOTGu8?si=n1fQAh1AsP4yAzwk" },
        { id: 5, title: "NodeJS HTTP Module", video: "https://www.youtube.com/embed/2wOI62gjzmc?si=5BjlPVcEFRNhhUn_" },
        { id: 6, title: "NodeJS Express Basics", video: "https://www.youtube.com/embed/L72fhGm1tfE" },
        { id: 7, title: "NodeJS Middleware", video: "https://www.youtube.com/embed/ot2-MXKoB6A" },
        { id: 8, title: "NodeJS with MongoDB", video: "https://www.youtube.com/embed/rfscVS0vtbw" },
        { id: 9, title: "NodeJS REST APIs", video: "https://www.youtube.com/embed/eB9Fq9I5ocs" },
        { id: 10, title: "NodeJS Deployment", video: "https://www.youtube.com/embed/SccSCuHhOw0" },
      ],
    },
    {
      name: "Python",
      tutorials: [
        { id: 1, title: "Introduction to Python", video: "https://www.youtube.com/embed/_uQrJ0TkZlc" },
        { id: 2, title: "Python Data Types", video: "https://www.youtube.com/embed/tKTZoB2Vjuk" },
        { id: 3, title: "Python Control Flow", video: "https://www.youtube.com/embed/Bd8_vO5zrjo" },
        { id: 4, title: "Functions in Python", video: "https://www.youtube.com/embed/9Os0o3wzS_I" },
        { id: 5, title: "Classes and Objects", video: "https://www.youtube.com/embed/Rq_3gA2h1RA?si=D2gkuYNKNkkAeO4z" },
        { id: 6, title: "File Handling in Python", video: "https://www.youtube.com/embed/UJwK6jA5LEk" },
        { id: 7, title: "Python Modules", video: "https://www.youtube.com/embed/I_1_uhRZJ0I" },
        { id: 8, title: "Python Exception Handling", video: "https://www.youtube.com/embed/pzKcwoD5l7k" },
        { id: 9, title: "Python Libraries Overview", video: "https://www.youtube.com/embed/zgGzntA8HR8" },
        { id: 10, title: "Python for Data Science", video: "https://www.youtube.com/embed/z0gjCQepb3Q" },
      ],
    },
    {
      name: "C",
      tutorials: [
        { id: 1, title: "Introduction to C", video: "https://www.youtube.com/embed/KJgsSFOSQv0" },
        { id: 2, title: "Data Types in C", video: "https://www.youtube.com/embed/PDzKufPL51Q?si=LWxSg8WilOfsRvHu" },
        { id: 3, title: "C Operators", video: "https://www.youtube.com/embed/xHoGGbtFZCo?si=Acn0XU932RieKtHs" },
        { id: 4, title: "Control Flow in C", video: "https://www.youtube.com/embed/ZSPZob_1TOk" },
        { id: 5, title: "Functions in C", video: "https://www.youtube.com/embed/SK5gBnwN4dg?si=UAjKEgSaJEJbiO8a" },
        { id: 6, title: "Pointers in C", video: "https://www.youtube.com/embed/mcLdrRy7eSA" },
        { id: 7, title: "Arrays in C", video: "https://www.youtube.com/embed/B9XGUpQZY38" },
        { id: 8, title: "Structures in C", video: "https://www.youtube.com/embed/XQDiP_mHDT0" },
        { id: 9, title: "Memory Management", video: "https://www.youtube.com/embed/vXnddgIHKPA" },
        { id: 10, title: "File Handling in C", video: "https://www.youtube.com/embed/szLBt6BBn5I" },
      ],
    },
    {
      name: "C++",
      tutorials: [
        { id: 1, title: "Introduction to C++", video: "https://www.youtube.com/embed/dCNSDeeKCfs?si=vhTzVLIKeO-VGY3T" },
        { id: 2, title: "Variables & Data Types", video: "https://www.youtube.com/embed/MiK5tamc-HE?si=upSuNi9XOJpPQ4jg" },
        { id: 3, title: "Control Structures", video: "https://www.youtube.com/embed/0YS8mLNrqhw?si=TIvhI50OpMlkFheS" },
        { id: 4, title: "Functions in C++", video: "https://www.youtube.com/embed/TcNBtrG1We4?si=cUiXkVidd3dinBiq" },
        { id: 5, title: "Classes and Objects", video: "https://www.youtube.com/embed/i2OOPAvCDK0?si=nmQ2v35-ViO5QKJU" },
        { id: 6, title: "Inheritance in C++", video: "https://www.youtube.com/embed/HGWYmvGD19k" },
        { id: 7, title: "Polymorphism", video: "https://www.youtube.com/embed/-FgzYFQRh2g" },
        { id: 8, title: "Templates in C++", video: "https://www.youtube.com/embed/HWJVRKdqls4" },
        { id: 9, title: "Exception Handling", video: "https://www.youtube.com/embed/y9WdpG-KBD0" },
        { id: 10, title: "File Handling in C++", video: "https://www.youtube.com/embed/qOTU9gRH94g" },
      ],
    },
  ];


  return (
    <>
      <div className="pt-36  bg-[#353922] text-white min-h-screen p-6">
        <h2 className="text-3xl font-bold text-[#99ff00] text-center ">Tutorials</h2>
        {topics.map((topic) => (
          <div key={topic.name} className="mb-12">
            <h3 className="text-3xl font-semibold mb-6">{topic.name} Tutorials</h3>
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={20}
              slidesPerView={5}
              className="w-full"
            >
              {topic.tutorials.map((tutorial) => (
                <SwiperSlide key={tutorial.id}>
                  <div className="bg-[#2A2D1A] static p-5 rounded-lg shadow-lg text-center">
                    <iframe
                      className="w-full h-40 rounded-lg"
                      src={tutorial.video}
                      title={tutorial.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                    <h4 className="text-xl font-bold mt-2">{tutorial.title}</h4>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))}
      </div>

      <Footer />

    </>
  );
};

export default Tutorial;
