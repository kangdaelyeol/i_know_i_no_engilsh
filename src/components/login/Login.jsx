import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import styles from './login.module.css';
import LoginPage from '../login_page/LoginPage';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Login = ({loginInfo, requestLogin}) => {
  const navigate = useNavigate();
  // Login 상태에 따라서 넘김
  useEffect(() => {
    if(loginInfo.state){
      navigate("/main"); 
    }
  }, [loginInfo, navigate]);
  return (
    <div className={styles.main}>
      <Header />
      <LoginPage requestLogin={requestLogin}/>
      <Footer />
    </div>
  );
};

export default Login;
