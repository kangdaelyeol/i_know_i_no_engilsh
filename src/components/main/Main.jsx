import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"
import styles from './main.module.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Statusbar from '../statusbar/Statusbar';
import Items from '../items/items';
import myItems from '../fakeDB';

const getToday = () => new Date().toISOString(0, 10);

const Main = ({ login, setLogin }) => {
  const [items, setItems] = useState(myItems);
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
      <Items onCreateItem={createItem} items={items} />
      <Footer />
    </div>
  );
};

export default Main;
