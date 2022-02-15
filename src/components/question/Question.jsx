import React, {useRef} from 'react';
import styles from './question.module.css';

const Question = ({ question, answer, id, onChangeQuestion }) => {
  const questionRef = useRef();
  const answerRef = useRef();

  const changeQuestion = () => {
    const questionValue = questionRef.current.value;
    const answerValue = answerRef.current.value;
    onChangeQuestion(
      id, questionValue, answerValue
    );
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
      />
      <button className={styles.button}>Delete</button>
    </div>
  );
};

export default Question;
