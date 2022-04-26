import React, {useRef, useState} from 'react'
import {
  ControlledMenu,
  MenuItem,
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

// Navbar Styles
import Nav from '../../UI/Nav/Nav'

const Navbar = () => {
  const ref = useRef(null);
  const [isOpen, setOpen] = useState();
  return (
    <Nav>
      <div ref={ref} className="btn" onMouseEnter={() => setOpen(true)}>
        Hover to Open
      </div>
      <ControlledMenu
        state={isOpen ? 'open' : 'closed'}
        anchorRef={ref}
        onMouseLeave={() => setOpen(false)}
        onClose={() => setOpen(false)}
      >
        <MenuItem>Home</MenuItem>
        <MenuItem>Projects</MenuItem>
        <MenuItem>Contact</MenuItem>
      </ControlledMenu>
    </Nav>
  )
}

export default Navbar