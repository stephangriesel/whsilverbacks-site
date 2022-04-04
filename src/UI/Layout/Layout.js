import React from 'react'
import styles from './Layout.module.scss'

const Layout = (props) => {
  const children = props.children;
  return (
    <div type={props.type} className={styles.layoutWrapper}>
      {children}
    </div>
  )
}

export default Layout