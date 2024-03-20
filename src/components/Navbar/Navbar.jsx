import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';




import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <h1>Amyy Alex</h1>
      </div>

      <div className="app__navbar-contact">
        <a href="mailto:alexokews@gmail.com" className="p__opensans">Contact Me</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={26} onClick={() => setToggleMenu(true)}/>
       
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={26} className="overlay__close" onClick={() => setToggleMenu(false)}/>
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans"><a href="#home">Home</a></li>
              <li className="p__opensans"><a href="#links">Links</a></li>
              <li className="p__opensans"><a href="#contact">Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar;