import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import styles from './main.module.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Main = ({ login, setLogin }) => {
  const { id, userName } = login;
  console.log(id, userName);
  const navigate = useNavigate();
  useEffect(() => {
    if (!login) navigate('/');
  }, [login]);

  return (
    <div className={styles.main}>
      <Header setLogin={setLogin}/>
      <h1>Main!</h1>
      <h2>hello{userName}!</h2>
      <h2>your Id: {id}</h2>
      <Footer />
    </div>
  );
};

export default Main;
