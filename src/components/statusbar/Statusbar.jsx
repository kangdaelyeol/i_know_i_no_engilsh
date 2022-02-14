import React, { memo } from "react"
import styles from './statusbar.module.css';
import def_Logo from "../../img/logo192.png";

const Statusbar = ({avatar, userName}) => {
 return (<div className={styles.main}>
   <div className={styles.left}>
    <img className={styles.avatar} src={avatar || def_Logo} alt="avatar" />
    <span className={styles.userName}>{userName || ""}</span>
   </div>
   <div className={styles.right}></div>
   <button className={styles.navBtn}>Setting</button>
 </div>)
}

export default memo(Statusbar);