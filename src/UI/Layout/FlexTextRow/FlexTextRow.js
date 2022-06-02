import React from 'react'
import styles from './FlexTextRow.module.css'

const FlexTextRow = (props) => {
  const children = props.children;
  return (
    <div type={props.type} className={styles.flexTextRow}>
      {children}
    </div>
  )
}

export default FlexTextRow