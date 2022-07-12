import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import './styles.css'
import styles from './Navbar.modules.scss';

const Navbar = () => {
  return (
    <div className={styles.navigation}>
      <div className={styles.navigation__content}>
        <div>
          <div>
            <nav className={styles.navlinks}>
              <a className={styles.navlinks__item} href="/">Home</a>
              <a className={styles.navlinks__item} href="/">Event Construction</a>
              <a className={styles.navlinks__item} href="/">Stretch Tents</a>
              <a className={styles.navlinks__item} href="/">Temporary Structures</a>
              <a className={styles.navlinks__item} href="/">Contact</a>
            </nav>
          </div>
          <div>
            <button className={styles.navigation__toggler}></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar