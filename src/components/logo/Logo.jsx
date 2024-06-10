import React from "react";
import styles from "./Logo.module.css";
import logo from "./../../assets/images/logo/logo.png";
export const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="logo" />
    </div>
  );
};
