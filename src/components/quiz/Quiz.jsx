import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./quiz.module.css";


const Quiz = () => {
  const location = useLocation();
  console.log(location);
  return(<div className={styles.main}>
    <h1>QUIZ!!!</h1>
  </div>)
}


export default Quiz;