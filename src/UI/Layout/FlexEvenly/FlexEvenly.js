import React from 'react'
import styles from './FlexEvenly.module.css'

const FlexEvenly = (props) => {
  const children = props.children;
  return (
    <div type={props.type} className={styles.flexEvenly}>
      {children}
    </div>
  )
}

export default FlexEvenly