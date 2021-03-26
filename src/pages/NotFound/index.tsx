import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";
import { MdKeyboardBackspace } from "react-icons/md";

export default function NotFound() {
  return (
    <main className={styles.page}>
      <h1 className={styles.title}>This page is not found!</h1>
      <Link to="/" className={styles.link}>
        <MdKeyboardBackspace className={styles.icon} />
        <span>Back to Home</span>
      </Link>
    </main>
  );
}
