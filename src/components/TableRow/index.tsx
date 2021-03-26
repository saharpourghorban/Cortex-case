import { User } from "api";
import styles from "./TableRow.module.css";

export default function TableRow({ id, name, email }: User) {
  return (
    <tr className={styles.tableRow}>
      <td className={styles.id}>{id}</td>
      <td className={styles.name}>{name}</td>
      <td className={styles.email}>{email}</td>
    </tr>
  );
}
