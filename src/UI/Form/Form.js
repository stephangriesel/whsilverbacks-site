import React from 'react';
import styles from './Form.module.css';

const Form = (props) => {
  const children = props.children;
  return (
    <form type={props.type} className={styles.form}>
      {children}
    </form>
  )
}

export default Form