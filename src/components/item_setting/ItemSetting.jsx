import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './itemSetting.module.css';
import Question from '../question/Question';

const ItemSetting = ({ login, settingInfo, setStateQuestions, onSave }) => {
  const navigate = useNavigate();
  const { onSettingQuestions, itemId } = settingInfo;

  // use Effect
  useEffect(() => {
    if (!login) {
      navigate('/');
    }
  }, [navigate, login]);

  // Add Item
  const onAddItem = () => {
    const newQuestions = {};
    const newQuestion = {
      id: Date.now(),
      question: '',
      answer: '',
    };

    Object.keys(onSettingQuestions).forEach((key) => {
      newQuestions[key] = { ...onSettingQuestions[key] };
    });
    newQuestions[newQuestion.id] = newQuestion;
    setStateQuestions({ itemId, onSettingQuestions: newQuestions });
  };

  const onChangeInput = (questionId, question, answer) => {
    const newQuestions = {};
    const changedQuestions = {
      id: questionId,
      question,
      answer,
    };
    Object.keys(onSettingQuestions).forEach((key) => {
      newQuestions[key] = { ...onSettingQuestions[key] };
    });
    newQuestions[questionId] = changedQuestions;
    setStateQuestions({ itemId, onSettingQuestions: newQuestions });
  };
  
  const onDeleteQuestion = (id) => {
    const newQuestions = {};
    delete onSettingQuestions[id];
    Object.keys(onSettingQuestions).forEach((key) => {
      newQuestions[key] = { ...onSettingQuestions[key] };
    });
    setStateQuestions({ id, onSettingQuestions: newQuestions });
  };

  const onSaveBtnClick = () => {
    onSave();
  }

  const onBackBtnClick = () => {
    setStateQuestions(false);
  }

  return (
    <div className={styles.main}>
      {Object.keys(onSettingQuestions).map((key) => (
        <Question
          question={onSettingQuestions[key].question}
          answer={onSettingQuestions[key].answer}
          key={key}
          id={key}
          onChangeInput={onChangeInput}
          onDeleteQuestion={onDeleteQuestion}
        />
      ))}
      <button className={styles.addBtn} onClick={onAddItem}>Add</button>
      <div className={styles.btnBox}>
        <button onClick={onSaveBtnClick}>Save</button>
        <button onClick={onBackBtnClick}>Back</button>
      </div>
    </div>
  );
};

export default ItemSetting;
