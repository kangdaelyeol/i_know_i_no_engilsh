import React, { useState } from 'react';
import Item from '../item/Item';
import styles from './items.module.css';

const Items = ({ item }) => {
  const [focus, setFocus] = useState(false);

  return (
    <div className={styles.main}>
      <div clasName={styles.gridTemplate}>
        {Object.keys(item).maps((key) => {
          <Item
            key={key}
            id={key}
            currnetFocus={focus}
            setFocus={setFocus}
            date={item[key].date}
            length={item[key].length}
          />;
        })}
      </div>
    </div>
  );
};

export default Items;
