import React, { useRef, useState } from 'react'

import { Link } from 'react-router-dom';

import Flex from '../../UI/Layout/Flex/Flex'
import ListItem from '../../UI/List/ListItem'

import './styles.css'

// Navbar Styles
import Nav from '../../UI/Nav/Nav'

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <Nav>
      <div className={isMobile ? "nav-links-mobile" : "nav-links"}
      onClick={() => setIsMobile(false)}
      >
        <Flex>
          <ListItem><Link to="/">HOME</Link></ListItem>
          <ListItem><Link to="/about">ABOUT</Link></ListItem>
          <ListItem><Link to="/eventconstruction">EVENT CONSTRUCTION</Link></ListItem>
          <ListItem><Link to="/stretchtents">STRETCH TENTS</Link></ListItem>
          <ListItem><Link to="/temporarystructures">TEMPORARY STRUCTURES</Link></ListItem>
          <ListItem><Link to="/contact">CONTACT</Link></ListItem>
        </Flex>
        <button className='mobile-menu-icon'
        onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? <i className='fas fa-times'></i> : <i className='fas fa-bars'></i>}
        </button>
      </div>
    </Nav>
  )
}

export default Navbar