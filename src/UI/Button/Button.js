import React from 'react';
import styles from './Button.module.css';
import PropTypes from 'prop-types';

const Button = (props) => {
  const children = props.children;
  return (
    <button type={props.type} className={styles.button}>
      {children}
    </button>
  )
}

export default Button