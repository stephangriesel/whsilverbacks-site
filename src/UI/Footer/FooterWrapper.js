import React from 'react';
import styles from './FooterWrapper.module.css';
import PropTypes from 'prop-types';

const FooterWrapper = (props) => {
  const children = props.children;
  return (
    <div type={props.type} className={styles.footerwrapper}>
      {children}
    </div>
  )
}

export default FooterWrapper