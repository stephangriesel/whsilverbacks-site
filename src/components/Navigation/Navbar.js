import React, {useRef, useState} from 'react'

// Navbar Styles
import Nav from '../../UI/Nav/Nav'

const Navbar = () => {
  return (
    <Nav>
      <ul>
        <li>Home</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </Nav>
  )
}

export default Navbar