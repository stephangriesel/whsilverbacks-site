import React from 'react';
import styles from './Nav.module.css';
// import PropTypes from 'prop-types';

const Nav = (props) => {
  const children = props.children;
  return (
    <Nav type={props.type} className={styles.nav}>
      {children}
    </Nav>
  )
}

export default Nav