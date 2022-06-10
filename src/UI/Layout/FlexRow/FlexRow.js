import React from 'react'
import styles from './FlexRow.module.css'

const FlexRow = (props) => {
  const children = props.children;
  return (
    <div type={props.type} className={styles.flexRow}>
      {children}
    </div>
  )
}

export default FlexRow