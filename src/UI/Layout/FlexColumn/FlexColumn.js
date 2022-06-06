import React from 'react'
import styles from './FlexColumn.module.css'

const FlexColumn = (props) => {
  const children = props.children;
  return (
    <div type={props.type} className={styles.flexColumn}>
      {children}
    </div>
  )
}

export default FlexColumn