import React from 'react';
import styles from './Content.module.css';
import PropTypes from 'prop-types';

const Content = (props) => {
  const children = props.children;
  return (
    <section type={props.type} className={styles.content}>
      {children}
    </section>
  )
}

export default Content;