import React from 'react';
import styles from './item.module.css';

const Item = ({title, date, length, id, currentFocus, setFocus, setQuestions}) => {

  const onSetFocus = (e) => {
    if(Number(id) === currentFocus) setFocus(false);
    else setFocus(Number(id));
  }
  
  const onButtonClick = (e) => {
    const buttonName = e.currentTarget.name;
    switch (buttonName) {
      case "setting":
        // set question
        setQuestions(id);
        break;
      case "start":
        // TO DO: Start Quiz
        console.log("State Quiz!");
        break;
      default:
        throw new Error("item - onButtonClick");
        break;
    }
  }
  
  const isFocus = Number(id) === currentFocus;

  return (<div className={`${styles.main} ${isFocus ? styles.focus : ""}`} onClick={onSetFocus}>
    <h3 className={styles.title}>{title}</h3>
    <div className={styles.descriptionBox}>
      <span>CreateAt: {date || ""}</span>
      <span>Quiz: {length || ""}</span>
    </div>
    <div className={styles.selectBox}>
      <button onClick={onButtonClick} name='setting' className={styles.btn}>setting</button>
      <button onClick={onButtonClick} name='start' className={styles.btn}>start</button>
    </div>
  </div>);
};

export default Item;
