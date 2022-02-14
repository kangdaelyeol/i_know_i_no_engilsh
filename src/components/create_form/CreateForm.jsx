import React, { useRef, useState } from 'react';
import styles from './createForm.module.css';

const CreateForm = ({ onCreateItem }) => {
  const [createMode, setCreateMode] = useState(false);
  const titleRef = useRef();

  const onBtnClick = () => {
    setCreateMode(true);
  };

  const onCancelClick = (e) => {
    e.preventDefault();
    console.log("onCancel!")
    setCreateMode(false);
  };

  const onCreateClick = (e) => {
    e.preventDefault();
    console.log("onCreate!");
    const titleValue = titleRef.current.value;
    if (!titleValue) return;
    titleRef.current.value = '';
    onCreateItem(titleValue);
  };

  return (
    <div className={styles.main}>
      {createMode ? (
        <div className={styles.active}>
          <form onSubmit={onCreateClick}>
            <input
              ref={titleRef}
              type='text'
              name='title'
              placeholder='title'
            />
            <div className={styles.buttonBox}>
              <button>Create!</button>
              <button onClick={onCancelClick}>Cancel</button>
            </div>
          </form>
        </div>
      ) : (
        <div className={styles.noActive} onClick={onBtnClick}>
          <div className={styles.addBtn}>
            +
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateForm;
