import React from 'react';
import styles from './Head.module.css';

const Head = (props) => {
  const children = props.children;
  return (
    <div type={props.type} className={styles.head}>
      {children}
    </div>
  )
}

export default Head