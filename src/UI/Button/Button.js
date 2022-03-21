import React from 'react';
import styles from './Button.module.css';
// import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <button type={props.type} className={styles.button}>
      {props.children}
    </button>
  )
}

Button.defaultProps = {
// TODO: PropTypes
//   buttonText: 'Learn React'
// }

// Button.propTypes = {
//   buttonText: PropTypes.string
}

export default Button