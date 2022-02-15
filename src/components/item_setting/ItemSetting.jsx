import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './itemSetting.module.css';
import Question from '../question/Question';

const ItemSetting = ({ login, questions, setStateQuestions }) => {
  const navigate = useNavigate();

  // Add Item
  const onAddItem = () => {
    const itemId = Object.keys(questions).length + 1;
    const newQuestion = {
      id: itemId,
      question: "",
      answer: ""
    };
    const newQuestions = {};
    Object.keys(questions).forEach(key => {
      newQuestions[key] = {...questions[key]}
    });
    newQuestions[itemId] = newQuestion;
    setStateQuestions(newQuestions);
  };

  useEffect(() => {
    if (!login) {
      navigate('/');
    }
  }, [navigate, login]);

  return (
    <div className={styles.main}>
      {Object.keys(questions).map((key) => (
        <Question
          question={questions[key].question}
          answer={questions[key].answer}
          key={key}
          id={key}
        />
      ))}
      <CreateForm onAddItem={onAddItem} />
    </div>
  );
};

const CreateForm = ({ onAddItem }) => {
  return (
    <div className={styles.createForm}>
      <div onClick={onAddItem} className={styles.createBtn}>
        +
      </div>
    </div>
  );
};

export default ItemSetting;
