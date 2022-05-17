import React, {useRef, useState} from 'react'

import Flex from '../../UI/Layout/Flex/Flex'
import ListItem from '../../UI/List/ListItem'

// Navbar Styles
import Nav from '../../UI/Nav/Nav'

const Navbar = () => {
  return (
    <Nav>
      <Flex>
        <ListItem>Home</ListItem>
        <ListItem>Projects</ListItem>
        <ListItem>Contact</ListItem>
      </Flex>
    </Nav>
  )
}

export default Navbar