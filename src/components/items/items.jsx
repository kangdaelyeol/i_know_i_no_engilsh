import React, { useState } from 'react';
import Item from '../item/Item';
import styles from './items.module.css';
import CreateForm from '../create_form/CreateForm';
const Items = ({ items, setCreateModel, onCreateItem, setQuestions }) => {
  const [focus, setFocus] = useState(false);

  return (
    <div className={styles.main}>
      <div clasName={styles.gridTemplate}>
        {Object.keys(items).map((key) => {
          return <Item
            key={key}
            id={key}
            title={items[key].title}
            currnetFocus={focus}
            setFocus={setFocus}
            date={items[key].date}
            length={items[key].length}
            setQuestions={setQuestions}
          />;
        })}
        <CreateForm onCreateItem={onCreateItem} setCreateModel={setCreateModel}/>
      </div>
    </div>
  );
};

export default Items;
