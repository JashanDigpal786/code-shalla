import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaLocationArrow } from 'react-icons/fa';
import Footer from './Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! We will get back to you soon.');
  };

  return (
    <>
      <div className="pt-36 bg-[#353922] text-white p-8 min-h-screen">
        <h2 className="text-4xl font-semibold text-[#99ff00] text-center mb-6">Contact Us</h2>

        <p className="text-center text-lg mb-6">
          We had love to hear from you! Whether you have a question, suggestion, or feedback.<br />What are you waiting for ? Feel free to reach out to us through the form below.
        </p>
        <div className="flex flex-col justify-center lg:flex-row lg:space-x-16">
          <div className="lg:w-1/2 rounded-xl border-gray-500 border-2 px-20 py-8 hover:shadow-md bg-[#2A2D1A] border-[#2A2D1A]">
            <form onSubmit={handleSubmit} className=" space-y-4">
              <div>
                <label htmlFor="name" className="font-semibold block pl-1 text-lg">Your Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full p-3 bg-[#353922] border-gray-500 hover:border-[#99ff00] border-2 text-white rounded-lg" placeholder="Enter your name" required />
              </div>
              <div>
                <label htmlFor="email" className="font-semibold pl-1 block text-lg">Your Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 bg-[#353922] border-gray-500 hover:border-[#99ff00] border-2 text-white rounded-lg" placeholder="Enter your email" required />
              </div>
              <div>
                <label htmlFor="message" className="font-semibold pl-1 block text-lg">Your Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="w-full p-3 bg-[#353922] border-gray-500 hover:border-[#99ff00] border-2 text-white rounded-lg" placeholder="Write your message" rows="5" required />
              </div>
              <button type="submit" className="ml-44 px-6  md-[-2] py-3 font-bold rounded-md border-2 border-white bg-[#353922] text-white hover:bg-[#2A2D1A] hover:text-[#99ff00] font-bold"> Send Your Message </button>
            </form>
          </div>

        </div>

        <div className="mt-12">
          <h3 className="text-4xl font-semibold text-[#99ff00] text-center mb-4">Find Us Here</h3>


          <div className=" mt-5 mb-8  lg:mb-0">


            <div className="space-y-4 flex justify-between items-center pb-10 px-40">
              <div className="flex items-center space-x-3 ">
                <FaEnvelope className="text-xl mt-4 text-blue-400" />
                <p className="text-lg mt-4">Email : <a href="mailto:jashan8847683268@gmail.com" className="text-gray-200">jashan143@codeshalla.com</a></p>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhoneAlt className="text-xl text-green-400" />
                <p className="text-lg">Phone : <a href="tel:8847683268" className="text-blue-500">+91 884 768 3268</a></p>
              </div>
              <div className="flex items-center space-x-3">
                <FaLocationArrow className="text-xl text-yellow-400" />
                <p className="text-lg">Location : 143 Code Street, Gurdaspur City, 143530</p>
              </div>
            </div>

            <div className="w-full pl-40 mr-40 overflow-hidden text-white ">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27055.862800081442!2d75.3878159339746!3d32.042655634630435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b926db4af6e6d%3A0x2fda9aabada0f98b!2sGurdaspur%2C%20Punjab%20143521!5e0!3m2!1sen!2sin!4v1732479959912!5m2!1sen!2sin" width="1150" height="400" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
