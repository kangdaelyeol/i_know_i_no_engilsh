import React, { useState } from 'react';
import Item from '../item/Item';
import styles from './items.module.css';
import CreateForm from '../create_form/CreateForm';
const Items = ({ items, onCreateItem, onDeleteItem, onStartQuiz, setQuestions }) => {
  const [focus, setFocus] = useState(false);

  return (
    <div className={styles.main}>
      {Object.keys(items).map((key) => {
        return (
          <Item
            key={key}
            id={key}
            title={items[key].title}
            currentFocus={focus}
            setFocus={setFocus}
            date={items[key].date}
            length={items[key].length}
            setQuestions={setQuestions}
            onDeleteItem={onDeleteItem}
            onStartQuiz={onStartQuiz}
          />
        );
      })}
      <CreateForm onCreateItem={onCreateItem} />
    </div>
  );
};

export default Items;
