import { useState } from "react";
import NavLinks from "./NavLinks";
import classes from './Navbar.module.css';
import {GiHamburgerMenu} from 'react-icons/gi';
import {FaWindowClose} from 'react-icons/fa';

const MobileNavigation = () => {
  const [open,setOpen] = useState(false);

  const hamburgerIcon = <GiHamburgerMenu className={classes.Hamburger} size='40px' color="white" onClick={() => setOpen(!open)}/>
  const hamburgerClose = <FaWindowClose className={classes.Hamburger} size='40px' color="white" onClick={() => setOpen(!open)}/>

  const closeMobileMenu = () => setOpen(false);

  return (
    <nav className={classes.MobileNavigation}>
      {open ? hamburgerClose : hamburgerIcon}
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </nav>
  );
}

export default MobileNavigation;