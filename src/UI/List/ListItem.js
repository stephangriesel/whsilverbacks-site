import React from 'react';
import styles from './ListItem.module.css';

const ListItem = (props) => {
  const children = props.children;
  return (
      <div type={props.type} className={styles.listItem}>
        {children}
      </div>
  )
}

export default ListItem