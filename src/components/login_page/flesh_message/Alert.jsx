import React from 'react';
import styles from './alert.module.css';

const Alert = ({ userName }) => {
  return (
    <div className={styles.main}>
      <span>{userName}is not existing user!!</span>
    </div>
  );
};

export default Alert;
