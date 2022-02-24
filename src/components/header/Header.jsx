import React from 'react';
import styles from './header.module.css';

const Header = ({ setLogin }) => {
  const onLogout = () => {
    setLogin && setLogin(false);
    // render -> Main-useEffect -> navigate()
  };
  console.log('Header Comp has rendered');
  return (
    <div className={styles.main}>
      <h4>header</h4>
      <h4>Please make quickly!</h4>
      {setLogin && (
        <button className={styles.logoutBtn} onClick={onLogout}>
          logout
        </button>
      )}
    </div>
  );
};

export default Header;
