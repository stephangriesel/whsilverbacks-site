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
        <ListItem><Link to="/">Home</Link></ListItem>
        <ListItem><Link to="/about">About</Link></ListItem>
        <ListItem><Link to="/eventconstruction">Event Construction</Link></ListItem>
        <ListItem><Link to="/stretchtents">Stretch Tents</Link></ListItem>
        <ListItem><Link to="/temporarystructures">Temporary Structures</Link></ListItem>
        <ListItem><Link to="/contact">Contact</Link></ListItem>
      </Flex>
    </Nav>
  )
}

export default Navbar