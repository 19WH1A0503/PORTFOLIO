import React from 'react';
import { Link } from "react-router-dom";
import { FaTwitterSquare } from 'react-icons/fa';
import { FaInstagram  } from 'react-icons/fa';
import { FaGithub  } from 'react-icons/fa';
import { FaLinkedin  } from 'react-icons/fa';
import sections from './Navdata.json';
import './Navbar.css';

function Navbar() {
  return (
    <div className="Navbar">
      <div className="content">
        <div className="menu_items">
        {sections.map((section) => (
          <Link to={`/${section.src}`} key={section.id}>
            {section.title}
          </Link>
        ))} 
        </div>
        <div className="socials">
          <ul>
        <li>
          <Link to="https://twitter.com/PragnaB2">< FaTwitterSquare style={{ color: "#FFFFFF" }} size={30}/> </Link></li>
        <li>
        <Link to="https://twitter.com/PragnaB2"><FaInstagram style={{ color: "#FFFFFF" }} size={30}/></Link></li>
        <li>
        <Link to="https://github.com/19WH1A0503"><FaGithub style={{ color: "#FFFFFF" }} size={30}/>
        </Link></li>
        <li>
        <Link to="https://www.linkedin.com/in/pragna-bairu-9bba601a5/"><FaLinkedin style={{ color: "#FFFFFF" }} size={30}/>
        </Link></li>
        </ul>

        </div>
        </div>
    </div>
  );
}

export default Navbar;
