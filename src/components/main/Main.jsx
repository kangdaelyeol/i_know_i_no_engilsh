import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './main.module.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Statusbar from '../statusbar/Statusbar';
import Items from '../items/items';
import myItems from '../fakeDB';
import ItemSetting from '../item_setting/ItemSetting';

const getToday = () => new Date().toISOString().substring(0, 10);

const Main = ({ login, setLogin }) => {
  const [user, setUser] = useState(myItems);
  const [settingInfo, setStateQuestions] = useState(false);

  const setQuestions = (itemId) => {
    const myQuestions = user[itemId].questions;
    // settingInfo -> { itemId, onSettingQuestions}
    const onSettingQuestions = {};
    Object.keys(myQuestions).forEach((key) => {
      onSettingQuestions[key] = { ...myQuestions[key] };
    });
    const newSettingInfo = { itemId, onSettingQuestions };
    setStateQuestions(newSettingInfo);
  };

  const onSave = () => {
    const newUser = {};
    const { itemId, onSettingQuestions } = settingInfo;
    Object.keys(user).forEach((key) => {
      newUser[key] = user[key];
    });
    newUser[itemId].questions = {...onSettingQuestions};
    console.log(newUser);
    setUser(newUser);
  };

  const { id, userName } = login;
  console.log(id, userName);
  const navigate = useNavigate();
  useEffect(() => {
    if (!login) navigate('/');
  }, [login, navigate]);

  const createItem = (title) => {
    // TO DO -> make item
    const id = Date.now();
    const newUser = {};
    const newItem = {
      id,
      title,
      length: 0,
      date: getToday(),
    };

    Object.keys(user).forEach((key) => {
      newUser[key] = { ...user[key] };
    });

    newUser[id] = newItem;
    setUser(newUser);
  };

  return (
    <div className={styles.main}>
      <Header setLogin={setLogin} />
      <Statusbar avatar={null} userName={userName} />
      <h1>My Quiz</h1>
      settingInfo
      {settingInfo ? (
        <ItemSetting
          onSave={onSave}
          setStateQuestions={setStateQuestions}
          settingInfo={settingInfo}
          login={login}
        />
      ) : (
        <Items
          setQuestions={setQuestions}
          onCreateItem={createItem}
          items={user}
        />
      )}
      <Footer />
    </div>
  );
};

export default Main;
