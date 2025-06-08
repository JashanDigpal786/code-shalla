import React from 'react';
import { FaUser, FaLaptopCode, FaRegLightbulb } from 'react-icons/fa';
import Footer from './Footer';

const AboutPage = () => {
  return (
    <>
    <div className=" pt-36 bg-[#353922] text-white pb-5 px-10 min-h-screen">
      <h2 className=" text-3xl font-bold text-[#99ff00] text-center mb-6">About Code-Shalla</h2>

      <div className="flex flex-col lg:flex-row lg:space-x-10">

        <div className="px-8 py-5 bg-[#2A2D1A] lg:w-1/2  lg:mb-0">
          <p className="text-lg leading-relaxed mb-4">Welcome to <strong>Code-Shalla</strong>, your ultimate guide to learning and mastering coding languages! Our mission is to make coding accessible to everyone, from beginners to advanced programmers. Whether you're starting your coding journey or expanding your skill set, we've got you covered.</p>
          <p className="text-lg leading-relaxed mb-4">At <b>Code-Shalla</b>, we believe in interactive learning. Our platform offers easy-to-understand tutorials, real-world coding examples, and practical exercises. Join our community of passionate learners and start building your coding skills today! Our mission is to make coding accessible to everyone, from beginners to advanced programmers.</p>
          <p className="text-lg leading-relaxed mb-4"> Our mission is to make coding accessible to everyone, from beginners to advanced programmers. Whether you're starting your coding journey or expanding your skill set, we've got you covered.Our platform offers easy-to-understand tutorials, real-world coding examples, and practical exercises. Join our community of passionate learners and start building your coding skills today!</p>
          <p className="text-lg leading-relaxed mb-4"> Our platform offers easy-to-understand tutorials, real-world coding examples, and practical exercises. Join our community of passionate learners and start building your coding skills today! Our mission is to make coding accessible to everyone, from beginners to advanced programmers. Whether you're starting your coding journey or expanding your skill set, we've got you covered.</p>
          <p className="text-lg leading-relaxed ">Thankyou for your valuable time. <br/><br/><b>Keep learning...Keep growing...!</b></p>
        </div>

        <div className="lg:w-1/2 px-5 bg-[#2A2D1A] flex flex-col items-center space-y-5">

          <FaUser className="text-6xl text-blue-500 mt-4 items-center" />
          <div className="text-center shadow-md pb-5" >
            <h3 className="text-2xl font-semibold pb-4">About Me</h3>
            <p className="text-lg">
              Hi, I'm <strong>Jashan Digpal</strong>, the creator of Code-Shalla. I'm passionate about coding and education. I've spent years honing my skills and learning different programming languages, and now I'm sharing that knowledge to help others achieve their goals.
            </p>
          </div>

          <FaLaptopCode className="text-6xl text-green-500 mb-4" />
          <div className="text-center shadow-md pb-5" >
            <h3 className="text-2xl font-semibold pb-4">Our Mission</h3>
            <p className="text-lg">
              Code-Shalla aims to make coding accessible and fun. We focus on providing quality content that empowers learners to build real-world projects and become proficient in coding languages.
            </p>
          </div>

          <FaRegLightbulb className="text-6xl text-yellow-500 mb-4" />
          <div className="text-center shadow-md pb-10" >
            <h3 className="text-2xl font-semibold pb-3">Our Vision</h3>
            <p className="text-lg pb-1">
              We envision a world where anyone, regardless of their background, can learn coding and unlock new opportunities in technology. We strive to inspire and equip the next generation of developers.
            </p>
          </div>

        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default AboutPage;
