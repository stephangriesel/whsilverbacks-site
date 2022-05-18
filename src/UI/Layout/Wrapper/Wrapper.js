import React from 'react'
import styles from './Wrapper.module.css'

const Wrapper = (props) => {
  const children = props.children;
  return (
    <div type={props.type} className={styles.wrapper}>
      {children}
    </div>
  )
}

export default Wrapper