import LoginForm from "components/LoginForm";
import styles from "./Auth.module.css";

export default function Auth() {
  return (
    <main className={styles.main}>
      <LoginForm />
    </main>
  );
}
