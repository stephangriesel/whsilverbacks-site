import React from 'react';
import styles from './ContentCopy.module.css';
import PropTypes from 'prop-types';

const ContentCopy = (props) => {
  const children = props.children;
  return (
    <section type={props.type} className={styles.contentCopy}>
      {children}
    </section>
  )
}

export default ContentCopy;