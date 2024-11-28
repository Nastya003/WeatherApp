import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
        setActiveIndex(index);
  };
  return (
    <div className='menu'>
      <Link to='/' onClick={() => handleClick(0)} className={activeIndex === 0 ? 'active' : ''}>Current weather</Link>  
      <Link to='/cities' onClick={() => handleClick(1)} className={activeIndex === 1 ? 'active' : ''}>Weather in the world</Link> 
    </div>
  )
}

export default NavBar;