import React, { useRef, useState } from 'react';
import styles from './login_page.module.css';
import Alert from './flesh_message/Alert';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ requestLogin }) => {
  const [alert, setAlert] = useState(false);
  const [timerId, setTimerId] = useState(false);
  const userNameRef = useRef();
  const navigate = useNavigate();
  const invokeAlert = (userName) => {
    setAlert(userName);
    if (timerId) clearTimeout(timerId);
    setTimerId(
      setTimeout(() => {
        hideAlert();
      }, 2000),
    );
  };

  const hideAlert = () => setAlert(false);

  const onLogin = (e) => {
    e.preventDefault();
    const userName = userNameRef.current.value;
    if (!userName) return;

    userNameRef.current.value = '';
    const result = requestLogin(userName);
    // flashMessage를 표시할 지 말지 결정
    if (!result) invokeAlert(userName);
    else {
      // if successful login -> go to Main
      navigate("/main");

      /* 
        LoginState처리는 
        App.jsx 안에 있는 requestLogin 메서드가 처리
      */
    }
  };

  return (
    <div className={styles.main}>
      <h3>Hello!!</h3>
      <form onSubmit={onLogin} className={styles.loginForm}>
        <input ref={userNameRef} type='text' placeholder='yourName' />
        <input className={styles.loginBtn} type='button' value='Join!!' />
      </form>
      {alert ? <Alert userName={alert} /> : null}
    </div>
  );
};

export default LoginPage;
