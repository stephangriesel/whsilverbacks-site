import React from 'react';
import styles from './Button.module.css'

const Button = () => {
  return (
    <button type={props.type} className={styles.button}>
      {props.children}
    </button>
  )
}

export default Button