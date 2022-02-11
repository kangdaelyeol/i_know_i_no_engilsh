import React from 'react';
import styles from "./header.module.css";

const Header = () => {
  console.log("Header Comp has rendered");
 return (<div className={styles.main}>
   <h4>header</h4>
   <h4>Please make quickly!</h4>
 </div>) 
}



export default Header;