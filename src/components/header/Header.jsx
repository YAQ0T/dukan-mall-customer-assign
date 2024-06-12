import React from "react";
import { BurgerMenu } from "./../burger-menu/BurgerMenu";
import { Logo } from "./../logo/Logo";
import styles from "./styles/Header.module.css";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <BurgerMenu />
        <Logo />
      </div>
    </header>
  );
};
export { Header };
