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
  
  const { id, userName } = login;
  const setQuestions = (itemId) => {
    setStateQuestions((state) => {
      const newItem = {
        ...state[itemId]
      }
      // newQuestions
      let newQuestions = {};
      // 모든 객체 Ref값 변경후 넘기기
      const length = newItem.length;
      // length = 0 -> questions = false
      if(length !== "0"){
        Object.keys(newItem.questions).forEach(key => {
          newQuestions[key] = {
            // newQuestion
            ...newItem.questions[key]
          }
        })
      } else {
        newQuestions = false;
      }
      newItem[itemId].questions = newQuestions;
      return newItem
    });
  };

  const consoleUser = () => {
    console.log("user", user);
    console.log("settingInfo", settingInfo);

  }

  const onSave = (id) => {
    // length => questions의 길이
    // questions -> false인 경우 keys 안먹힘
    
    // TO Do -> object Ref값 재생성 -> 넘김
    const length = settingInfo.questions ? Object.keys(settingInfo.questions).length : "0";
    setUser((state) => {
      const newUser = {...state};
      newUser[id] = {
        ...settingInfo,
        length
      }
      console.log(newUser[id]);
      return newUser;
    })
  };

  console.log(id, userName);
  const navigate = useNavigate();
  useEffect(() => {
    if (!login) navigate('/');
  }, [login, navigate]);

  const createItem = (title) => {
    // TO DO -> make item
    const id = Date.now();
    const newItem = {
      id,
      title,
      length: 0,
      date: getToday(),
      questions: false
    };
    setUser((state) => {
      const newUser = {...state};
      newUser[id] = newItem;
      return newUser
    });
  };

  return (
    <div className={styles.main}>
      <Header setLogin={setLogin} />
      <Statusbar avatar={null} userName={userName} />
      <h1>My Quiz</h1>
      settingInfo
      <div className={styles.setting}>
        <div className={styles.settingLeft}>
          <Items
            setQuestions={setQuestions}
            onCreateItem={createItem}
            items={user}
          />
        </div>
        <div className={styles.settingRight}>
          {settingInfo ? (
            <ItemSetting
              onSave={onSave}
              setStateQuestions={setStateQuestions}
              settingInfo={settingInfo}
              login={login}
            />
          ) : (
            ''
          )}
        </div>
      </div>
      <button onClick={consoleUser}>console</button>
      <Footer />
    </div>
  );
};

export default Main;
