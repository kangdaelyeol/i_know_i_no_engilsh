import React from 'react';
import styles from './item.module.css';

const Item = ({
  title,
  date,
  length,
  id,
  currentFocus,
  setFocus,
  setQuestions,
  onDeleteItem,
  onStartQuiz,
}) => {
  const isFocus = Number(id) === currentFocus;
  const onSetFocus = (e) => {
    if (Number(id) === currentFocus) setFocus(false);
    else setFocus(Number(id));
  };

  const onButtonClick = (e) => {
    e.stopPropagation();
    const buttonName = e.currentTarget.name;
    switch (buttonName) {
      case 'setting':
        setQuestions(id);
        break;
      case 'start':
        onStartQuiz(id);
        break;
      case 'delete':
        onDeleteItem(id);
        break;
      default:
        throw new Error('item - onButtonClick Error');
    }
  };

  return (
    <div
      className={`${styles.main} ${isFocus ? styles.focus : ''}`}
      onClick={onSetFocus}
    >
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.descriptionBox}>
        <span>CreateAt: {date || ''}</span>
        <span>Quiz: {length || '0'}</span>
      </div>
      <div className={styles.selectBox}>
        <button onClick={onButtonClick} name='setting' className={styles.btn}>
          setting
        </button>
        <button onClick={onButtonClick} name='delete' className={styles.btn}>
          delete
        </button>
        {length ? (
          <button onClick={onButtonClick} name='start' className={styles.btn}>
            start
          </button>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Item;
