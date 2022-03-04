import React, { useEffect, useRef } from 'react';
import styles from './board_item.module.css';

const BoardItem = ({ id, style }) => {
  const itemRef = useRef();

  useEffect(() => {
    const itemDom = itemRef.current;
    itemDom.dataset.id = id;
    Object.keys(style).forEach(key => {
      itemDom.style[key] = style[key];
    })
    return;
  });

  return <div ref={itemRef} className={styles.main}>item</div>;
};

export default BoardItem;
