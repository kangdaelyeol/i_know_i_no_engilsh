import React, {useRef, useEffect} from 'react';
import styles from './question.module.css';

const Question = ({ question, answer, id, onChangeInput, onDeleteQuestion }) => {
  const questionRef = useRef();
  const answerRef = useRef();

  const changeQuestion = () => {
    const questionValue = questionRef.current.value;
    const answerValue = answerRef.current.value;
    onChangeInput(
      id, questionValue, answerValue
    );
  }
  const deleteQuestion = () => {
    onDeleteQuestion(id);
  }

  useEffect( () => {
    if(question !== questionRef.current.value)
    questionRef.current.value = question;
    if(answer !== answerRef.current.value)
    answerRef.current.value = answer;
    console.log("useEffect -> question, answer");
  }, [question, answer]); 

  return (
    <div className={styles.main}>
      <input
        ref={questionRef}
        className={styles.input}
        type='text'
        placeholder='Question'
        defaultValue={question || ''}
        onChange={changeQuestion}
        />
      <input
        ref={answerRef}
        className={styles.input}
        type='text'
        placeholder='Answer'
        defaultValue={answer || ''}
        onChange={changeQuestion}
      />
      <button onClick={deleteQuestion} className={styles.button}>Delete</button>
    </div>
  );
};

export default Question;
