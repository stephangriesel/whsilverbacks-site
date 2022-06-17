import React from 'react';
import styles from './Inline.module.css';

const Inline = (props) => {
  const children = props.children;
  return (
    <div type={props.type} className={styles.inline}>
      {children}
    </div>
  )
}

export default Inline