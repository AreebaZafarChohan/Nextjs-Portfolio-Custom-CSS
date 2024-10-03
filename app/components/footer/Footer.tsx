"use client";
import React from "react";
import { FaGithub, FaEnvelope, FaLinkedin, FaInstagram } from "react-icons/fa";
import NavLink from "../navLink/NavLink";
import { navbarLinks } from "../navbar/Navbar";

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">

        {/* Social Links */}
        <div className="footer-social-links">
            <a href="https://github.com/AreebaZafarChohan/Node-Projects.git" target="_blank" rel="nooper noreferrer" className="social-icon github">
            <FaGithub />
          </a>
          <a href="mailto:areebazafar715@gmail.com" className="social-icon email">
            <FaEnvelope />
            </a>
            <a href="https://www.instagram.com/arenab_bazar?igsh=YmNtamVhNGlhaDY0" target="_blank" rel="nooper noreferrer" className="social-icon instagram">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/areeba-zafar-973917303/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BIJHCvgutQCKAZjoSHjrRig%3D%3D" target="_blank" rel="nooper noreferrer" className="social-icon linkedin">
            <FaLinkedin />
          </a>
        </div>
        
        {/* Navigation Links */}
        <div className="footer-nav">
            <ul className='footer-nav-links'>
               {
                navbarLinks.map((link, index) => (
                    <li key={index}>
                        <NavLink href={link.path} title={link.title} isFooter={true}/>
                    </li>
                ))
               }
            </ul>
        </div>
        
        {/* Rights Reserved */}
        <p className="footer-rights"> &copy; {new Date().getFullYear()} Areeba Zafar | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;