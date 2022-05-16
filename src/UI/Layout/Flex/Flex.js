import React from 'react'
import styles from './Flex.module.css'

const Flex = (props) => {
  const children = props.children;
  return (
    <div type={props.type} className={styles.flex}>
      {children}
    </div>
  )
}

export default Flex