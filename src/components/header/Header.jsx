import React from "react";
import { BurgerMenu } from "./../burger-menu/BurgerMenu";
import { Logo } from "./../logo/Logo";
import styles from "./styles/Header.module.css";
import { Box } from "@mui/material";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <BurgerMenu />
        <Logo />
        <Box className={styles.emptyBox}> </Box>
      </div>
    </header>
  );
};
export { Header };
