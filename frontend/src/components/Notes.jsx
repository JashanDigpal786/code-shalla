import React from 'react';
import { FaDownload, FaFolder } from 'react-icons/fa';
import Footer from './Footer';

const Notes = () => {
  const topics = [
    { id: 1, name: "HTML", link: "/notes/html-notes.pdf" },
    { id: 2, name: "CSS", link: "/notes/css-notes.pdf" },
    { id: 3, name: "JavaScript", link: "/notes/js-notes.pdf" },
    { id: 4, name: "ReactJS", link: "/notes/reactjs-notes.pdf" },
    { id: 5, name: "NodeJS", link: "/notes/nodejs-notes.pdf" },
    { id: 6, name: "C", link: "/notes/c-notes.pdf" },
    { id: 7, name: "C++", link: "/notes/cpp-notes.pdf" },
    { id: 8, name: "Python", link: "/notes/python-notes.pdf" },
  ];

  return (
    <>
    <div className=" pt-36 bg-[#353922] text-white min-h-screen p-8">
      <h2 className="text-3xl font-bold text-[#99ff00] text-center mb-6">Download Notes</h2>
      <p className="text-lg text-center mb-8"> Select a topic below to download the corresponding notes. </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
        {topics.map((topic) => (
          <div key={topic.id} className="flex items-center justify-between p-6 bg-[#2A2D1A] rounded-lg shadow-lg border-2 border-gray-400 hover:border-2 hover:border-[#99ff00] transition" >
            <div className="flex items-center space-x-3">
              <FaFolder className="text-yellow-500 text-2xl" />
              <span className="text-lg font-semibold">{topic.name}</span>
            </div>
            <a href={topic.link} download className="text-gray-300 hover:text-[#99ff00]" target="_blank" title={`Download ${topic.name} notes`} > <FaDownload size={24} /> </a>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Notes;
