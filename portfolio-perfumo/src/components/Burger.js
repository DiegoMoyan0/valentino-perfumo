import React, { useState, useEffect, useRef } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import '../static/css/burger.css'

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const node = useRef();
  
    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
  
    const handleClick = e => {
      if (node.current.contains(e.target)) {
        return;
      }
      setIsOpen(false);
    };
  
    useEffect(() => {
      document.addEventListener('mousedown', handleClick);
      return () => {
        document.removeEventListener('mousedown', handleClick);
      };
    }, []);
  
    return (
      <div ref={node} className="burger-menu-container">
        <div className="burger-icon" onClick={handleToggle}>
          {isOpen ? (
            <>
              <a href="#home">
                <FaHome size={24} />
              </a>
              <a href="#about">
                <FaUser size={24} />
              </a>
              <a href="#project">
                <FaProjectDiagram size={24} />
              </a>
              <a href="#contact">
                <FaEnvelope size={24} />
              </a>
            </>
          ) : (
            <GiHamburgerMenu size={24} />
          )}
        </div>
      </div>
    );
  };
  
  export default BurgerMenu;