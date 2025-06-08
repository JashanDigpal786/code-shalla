import React from 'react';
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Header from './components/Header';
import Home from './components/Home';
import Courses from './components/Courses';
import Notes from './components/Notes';
import Tutorial from './components/Tutorial';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import SignUp from './components/SignUp';
import Login from './components/Login';

import TopicsPage from './components/TopicPage';
import html from './files/html.json';
import css from './files/css.json';
import js from './files/js.json';
import java from './files/java.json';
import react from './files/react.json';
import node from './files/node.json';
import c from './files/c.json';
import cpp from './files/cpp.json'
import python from './files/python.json';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home  />} />
        <Route path='/courses' element={<Courses  />} />
        <Route path='/tutorial/' element={<Tutorial />} />
        <Route path='/notes' element={<Notes />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />

        <Route path='/html' element={<TopicsPage data={html}/>}/>
        <Route path='/css' element={<TopicsPage data={css}/>}/>
        <Route path='/js' element={<TopicsPage data={js}/>}/>
        <Route path='/react' element={<TopicsPage data={react}/>}/>
        <Route path='/node' element={<TopicsPage data={node}/>}/>
        <Route path='/c' element={<TopicsPage data={c}/>}/>
        <Route path='/cpp' element={<TopicsPage data={cpp}/>}/>
        <Route path='/python' element={<TopicsPage data={python}/>}/>
        <Route path='/java' element={<TopicsPage data={java}/>}/>
      </Routes>
      
    </>
  );
};

export default App;