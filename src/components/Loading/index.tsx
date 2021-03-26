import { SyncLoader } from "react-spinners";
import styles from "./Loading.module.css";

export default function Loading() {
  return (
    <div className={styles.loading}>
      <SyncLoader color="#ddd" size="8px" />
    </div>
  );
}
