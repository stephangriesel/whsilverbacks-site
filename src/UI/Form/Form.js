import React from 'react';
import styles from './Form.module.css';
import PropTypes from 'prop-types';

const Form = (props) => {
  const children = props.children;
  return (
    <form type={props.type} className={styles.form}>
      {children}
    </form>
  )
}

export default Form