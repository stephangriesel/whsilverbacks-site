import React, {useRef, useState} from 'react'

import { Link } from 'react-router-dom';

import Flex from '../../UI/Layout/Flex/Flex'
import ListItem from '../../UI/List/ListItem'

// Navbar Styles
import Nav from '../../UI/Nav/Nav'

const Navbar = () => {
  return (
    <Nav>
      <Flex>
        <ListItem><Link to="/">HOME</Link></ListItem>
        <ListItem><Link to="/about">ABOUT</Link></ListItem>
        <ListItem><Link to="/eventconstruction">EVENT CONSTRUCTION</Link></ListItem>
        <ListItem><Link to="/stretchtents">STRETCH TENTS</Link></ListItem>
        <ListItem><Link to="/temporarystructures">TEMPORARY STRUCTURES</Link></ListItem>
        <ListItem><Link to="/contact">CONTACT</Link></ListItem>
      </Flex>
    </Nav>
  )
}

export default Navbar