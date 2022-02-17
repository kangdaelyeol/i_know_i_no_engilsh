import React, { useState } from 'react';
import Item from '../item/Item';
import styles from './items.module.css';
import CreateForm from '../create_form/CreateForm';
const Items = ({ items, setCreateModel, onCreateItem, setQuestions }) => {
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
          />
        );
      })}
      <CreateForm onCreateItem={onCreateItem} setCreateModel={setCreateModel} />
    </div>
  );
};

export default Items;
