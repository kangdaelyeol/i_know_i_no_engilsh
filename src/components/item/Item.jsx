import React from 'react';
import styles from './item.module.css';

const Item = ({date, length, id, currentFocus, setFocus}) => {

  const onSetFocus = (e) => {
    if(Number(id) === currentFocus) setFocus(false);
    else setFocus(Number(id));
  }
  
  const onButtonClick = (e) => {
    console.log(e.currentTarget.name);
  }
  
  const isFocus = Number(id) === currentFocus;

  return (<div className={`${styles.main} ${isFocus ? styles.focus : ""}`} onClick={onSetFocus}>
    <div className={styles.descriptionBox}>
      <span>{date || ""}</span>
      <span>{length || ""}</span>
    </div>
    <div className={styles.selectBox}>
      <button onClick={onButtonClick} name='add' className={styles.btn}>add</button>
      <button onClick={onButtonClick} name='start' className={styles.btn}>start</button>
    </div>
  </div>);
};

export default Item;
