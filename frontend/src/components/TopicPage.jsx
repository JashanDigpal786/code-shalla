import React, { useState } from 'react';
import Footer from './Footer';

const TopicsPage = ({ data }) => {
  const [selectedTopic, setSelectedTopic] = useState(data[0]);

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
  };

  return (
    <>
    <div className="flex pt-28 bg-[#2A2D1A]">
      <div className="w-1/4 p-4  bg-[#2A2D1A] shadow-mb  h-screen overflow-y-auto">
        <h2 className="text-xl font-semibold ml-2 mb-4 text-white">Topics</h2>
        <ul>
          {data.map((topic) => (
            <li
              key={topic.id}
              className={`cursor-pointer py-2 px-4 rounded-md mb-2 text-white ${
                selectedTopic.id === topic.id
                  ? 'bg-[#2A2D1A]  text-white border-2'
                  : 'bg-[#353922] '
              }`}
              onClick={() => handleTopicClick(topic)}
            >
              {topic.topic_name}
            </li>
          ))}
        </ul>
      </div>

      <div className="w-3/4 p-8 bg-[#2A2D1A] ">
        <h3 className="text-4xl font-semibold mb-4 text-white">{selectedTopic.topic_name}</h3>
        <p className="mb-4 text-white">{selectedTopic.description}</p>

        <div className="w-full mb-6">
          <h4 className="text-xl font-semibold text-white mb-2">Watch Video</h4>
          <div className="mb-4">
          <iframe width="600" height="300" src={selectedTopic.video_link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="font-semibold text-white">Code Example:</h4>
          <pre className="bg-black text-white w-full shadow-sm p-4 rounded-lg mt-2 overflow-x-auto">
            <code>{selectedTopic.some_code_example}</code>
          </pre>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default TopicsPage;
