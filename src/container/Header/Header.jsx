import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="My name is"/>
      <h1 className="app__header-h1">Amarachukwu Stephanie Alex-Okenwa</h1>
      <p className="p__opensans" style={{ margin:'2rem 0'}}>Dedicated to empowering individuals new to the tech industry by providing guidance and support to navigate the tech industry.
I talk about Tech, Developer Tips, Public Speaking, Tech Enthusiasts, and OpenSource Contribution.
      </p>
      <div className='custom__button-container'>
        <button type='button' className='custom__button'><a href='https://sites.google.com/view/amyyalex?usp=sharing' >About Me</a></button>
        <button type='button' className='custom__button'><a href='https://www.linkedin.com/in/stephaniealexokenwa/'>LinkedIn</a></button>
        <button type='button' className='custom__button'><a href='https://github.com/amyyalex'>Github</a></button>
        <button type='button' className='custom__button'><a href='https://medium.com/@stephanieamy'>Blog</a></button>
      </div>
      
    </div>

    <div className="app__wrapper_img">
      <img src={images.amyy} alt="header image" />
    </div>

  </div>
);

export default Header;