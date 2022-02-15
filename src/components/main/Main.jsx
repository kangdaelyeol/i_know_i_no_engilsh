import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"
import styles from './main.module.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Statusbar from '../statusbar/Statusbar';
import Items from '../items/items';
import myItems from '../fakeDB';
import ItemSetting from "../item_setting/ItemSetting"

const getToday = () => {
  const today = new Date();
  return today.toISOString(0, 10);
}

const Main = ({ login, setLogin }) => {
  const [items, setItems] = useState(myItems);
  const [questions, setStateQuestions] = useState(false);

  const setQuestions = (id) => {
    const myQuestions = items[id].questions;
    const newQuestions = {};
    Object.keys(questions).forEach(key => {
      newQuestions[key] = {...myQuestions[key]};
    }); 
    setStateQuestions(newQuestions);
  }

  const { id, userName } = login;
  console.log(id, userName);
  const navigate = useNavigate();
  useEffect(() => {
    if (!login) navigate('/');
  }, [login, navigate]);
  
  const createItem = (title) => {
    // TO DO -> make item
    const id = Date.now();
    const newItems = {};
    const newItem = {
      id,
      title,
      length: 0,
      date: getToday(),
    }

    Object.keys(items).forEach(key => {
      newItems[key] = {...items[key]};
    });

    newItems[id] = newItem;
    setItems(newItems);
  }
  return (
    <div className={styles.main}>
      <Header setLogin={setLogin}/>
      <Statusbar avatar={null} userName={userName} />
      <h1>My Quiz</h1>
      {questions
       ? <ItemSetting setStateQuestions={setStateQuestions} questions={questions} login={login} />
       : <Items setQuestions={setQuestions} onCreateItem={createItem} items={items} />
      }
      <Footer />
    </div>
  );
};

export default Main;
