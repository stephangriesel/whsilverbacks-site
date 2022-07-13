import React, { useRef, useState } from 'react';

import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';

import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={classes.Navbar}>
      <MobileNavigation />
      <Navigation />
    </div>
  )
}

export default Navbar;