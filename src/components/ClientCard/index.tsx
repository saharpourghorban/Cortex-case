import { Client } from "api";
import React from "react";
import styles from "./ClientCard.module.css";

interface Props extends Client {
  logo: string;
}

export default function ClientCard({ name, logo }: Props) {
  return (
    <section className={styles.card}>
      <div className={styles.logo}>
        <img src={logo} alt={name} />
      </div>
      <footer className={styles.info}>Compony: {name}</footer>
    </section>
  );
}
