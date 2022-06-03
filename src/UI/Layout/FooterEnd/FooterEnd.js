import React from 'react'
import styles from './FooterEnd.module.css'

const FooterEnd = (props) => {
  const children = props.children;
  return (
    <div type={props.type} className={styles.footerEnd}>
      {children}
    </div>
  )
}

export default FooterEnd;