import React,  {useState} from 'react';
import styles from './Accordion.module.css';
// import PropTypes from 'prop-types';

const Accordion = (props) => {
  const children = props.children;
  const [isActive, setIsActive] = useState(false);
  return (
    <div type={props.type} className={styles.accordion}>
      <div className='accordion-item'>
        <div
          className='accordion-title'
          onClick={() => setIsActive(!isActive)}
        >
          <div>Accordion Title</div>
          <div>{isActive ? '-' : '+'}</div>
        </div>
        {isActive && (
          <div className='accordion-content'>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Accordion