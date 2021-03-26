import styles from "./TableHeader.module.css";

export default function TableHeader() {
  return (
    <tr>
      <th className={styles.id}>ID</th>
      <th className={styles.name}>Name</th>
      <th className={styles.email}>Email</th>
    </tr>
  );
}
