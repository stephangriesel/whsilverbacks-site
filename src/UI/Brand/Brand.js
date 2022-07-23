import React from 'react';
import styles from './Brand.module.css';

const Brand = (props) => {
  const children = props.children;
  return (
    <nav type={props.type} className={styles.brand}>
      {children}
    </nav>
  )
}

export default Brand