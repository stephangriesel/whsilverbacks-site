import React from 'react';
import styles from './Nav.module.css';
// import PropTypes from 'prop-types';

const Nav = (props) => {
  const children = props.children;
  return (
    <nav type={props.type} className={styles.nav}>
      {children}
    </nav>
  )
}

export default Nav