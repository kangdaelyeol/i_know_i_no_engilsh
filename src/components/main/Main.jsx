import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './main.module.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Statusbar from '../statusbar/Statusbar';
import Items from '../items/items';
import myItems from '../fakeDB';
import ItemSetting from '../item_setting/ItemSetting';
import Converter from '../../factory/converter';

const Copier = new Converter();

const Main = ({ loginInfo, setLogin }) => {
  const [user, setUser] = useState(myItems);
  const [settingInfo, setStateQuestions] = useState(false);
  const navigate = useNavigate();

  const { id, userName } = loginInfo;
  const setQuestions = (itemId) => {
    setStateQuestions((state) => {
      return Copier.copyItem(user[itemId]);
    });
  };
  const startQuiz = (itemId) => {
    console.log('onStartQuiz', itemId);
    console.log(user[itemId]);
    const newQuestions = Copier.copyQuestions(user[itemId].questions);
    navigate('/quiz', {
      state: newQuestions,
    });
  };
  const consoleUser = () => {
    console.log('user', user);
    console.log('settingInfo', settingInfo);
  };
  useEffect(() => {
    if (!loginInfo) navigate('/');
  }, [loginInfo, navigate]);

  const onSave = (id) => {
    // user[id](Item) <- settingInfo(Item)
    const newItem = Copier.copyItem(settingInfo);
    setUser((state) => {
      const newUser = { ...state };
      newUser[id] = newItem;
      return newUser;
    });
  };

  const createItem = (title) => {
    // TO DO -> make item
    const newItem = Copier.createNewItem(title);
    setUser((state) => {
      const newUser = { ...state };
      newUser[newItem.id] = newItem;
      return newUser;
    });
  };
  const deleteItem = (id) => {
    setUser((state) => {
      const newUser = { ...state };
      delete newUser[id];
      return newUser;
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
            onDeleteItem={deleteItem}
            onStartQuiz={startQuiz}
            items={user}
          />
        </div>
        <div className={styles.settingRight}>
          {settingInfo ? (
            <ItemSetting
              onSave={onSave}
              setStateQuestions={setStateQuestions}
              settingInfo={settingInfo}
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
