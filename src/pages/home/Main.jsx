import React from "react";
import styles from "./styles/main.module.css";
import { LoyaltyCustomerForm } from "../../components/loyality-customer-form/LoyaltyCustomerForm";
export const Main = () => {
  return (
    <main className={styles.main}>
      <div className="container">
        <LoyaltyCustomerForm />
      </div>
    </main>
  );
};
