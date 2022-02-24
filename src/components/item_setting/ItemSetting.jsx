import React, { useEffect, useRef } from 'react';
import styles from './itemSetting.module.css';
import Question from '../question/Question';

const ItemSetting = ({ settingInfo, setStateQuestions, onSave }) => {
  const { title, id, questions } = settingInfo;
  const titleRef = useRef();



  /* Setting -> 다른 itemSetting 바로 넘어갈 때 Value Check */
  // defalutValue값 -> Render마다 변경되지 않더라
  // useEffect로 Ref를 잡아서 값이 같지 않으면 
  // input의 value값을 변경시켜서 동기화 시킴. 
  useEffect(() => {
    // console.log("RefVal: ", titleRef.current.value);
    // console.log("itemTitle: ", itemTitle);
    
    // change refValue
    if(titleRef.current.value !== title);
      titleRef.current.value = title;
  },[title]);

  // Add Item
  const onAddItem = () => {
    const id = Date.now();
    const newQuestion = {
      id,
      question: '',
      answer: '',
    };
    setStateQuestions((state) => {
      const newState = {...state};
      // questions - false인 경우
      if(!newState.questions){
        newState.questions = {
          id: newQuestion
        };
      } 
      else
        newState.questions[id] = newQuestion;
      return newState;
    });
  };

  // ChangeInput
  const onChangeInput = (questionId, question, answer) => {
    setStateQuestions((state) => {
      const newState = {...state};
      newState.questions[questionId] = {
        id: questionId,
        question,
        answer
      }
      return newState;
    });
  };

  const onDeleteQuestion = (id) => {
    setStateQuestions((state) => {
      const newState = {...state};
      delete newState.questions[id];
      // 삭제후 length가 0인 경우
      if(Object.keys(newState.questions).length === 0)
        newState.questions = false;
      return newState;
    });
  };

  const onSaveBtnClick = () => {
    onSave(id);
  };

  const onBackBtnClick = () => {
    setStateQuestions(false);
  };

  const changeTitle = () => {
    const title = titleRef.current.value;
    setStateQuestions((state) => {
      return { ...state, title};
    });
  };

  return (
    <div className={styles.main}>
      <input
        onChange={changeTitle}
        ref={titleRef}
        type='text'
        placeholder='title'
      />
      { questions &&
      Object.keys(questions).map((key) => (
        <Question
          question={questions[key].question}
          answer={questions[key].answer}
          key={key}
          id={key}
          onChangeInput={onChangeInput}
          onDeleteQuestion={onDeleteQuestion}
        />
      ))}
      <button className={styles.addBtn} onClick={onAddItem}>
        Add
      </button>
      <div className={styles.btnBox}>
        <button onClick={onSaveBtnClick}>Save</button>
        <button onClick={onBackBtnClick}>Back</button>
      </div>
    </div>
  );
};

export default ItemSetting;
