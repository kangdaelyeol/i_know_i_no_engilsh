import React, {useRef} from 'react';
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
