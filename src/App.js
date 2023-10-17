import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="c">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <div className="nav">
        <Navbar />
      </div>
    </div>
  );
}

export default App;
