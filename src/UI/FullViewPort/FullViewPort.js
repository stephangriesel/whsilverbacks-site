import React from 'react';
import styles from './FullViewPort.module.css';

const FullViewPort = (props) => {
  const children = props.children;
  return (
    <div type={props.type} className={styles.fullviewport}>
      {children}
    </div>
  )
}

export default FullViewPort