import React from 'react'
import styles from './JustifyCenter.module.css'

const JustifyCenter = (props) => {
  const children = props.children;
  return (
    <div type={props.type} className={styles.justifyCenter}>
      {children}
    </div>
  )
}

export default JustifyCenter;