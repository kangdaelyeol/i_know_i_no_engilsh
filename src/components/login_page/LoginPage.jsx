import React, { useRef, useState } from 'react';
import styles from './login_page.module.css';
import Alert from './flesh_message/Alert';

const LoginPage = ({ requestLogin }) => {
  const [alert, setAlert] = useState(false);
  const userNameRef = useRef();

  const invokeAlert = (userName) => {
    setAlert(userName)
    if (!alert) {
      setTimeout(() => {
        setAlert(false);
      }, 1500);
    }
  };
  const onLogin = () => {
    const userName = userNameRef.current.value;
    const result = requestLogin(userName);
    if (!result) invokeAlert(userName);
  };

  return (
    <div className={styles.main}>
      <h3>Hello!!</h3>
      <div className={styles.loginForm}>
        <input ref={userNameRef} type='text' placeholder='yourName' />
        <input
          onClick={onLogin}
          className={styles.loginBtn}
          type='button'
          value='Join!!'
        />
      </div>
        {alert ? <Alert userName={alert} /> : null}
    </div>
  );
};

export default LoginPage;
