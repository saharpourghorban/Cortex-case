import UserMenu from "components/UserMenu";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <Link to="/campaigns">Testing App</Link>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.links}>
          <li>
            <Link to="/campaigns">Campaigns</Link>
          </li>
          <li>
            <Link to="/clients">Clients</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.user}>
        <UserMenu />
      </div>
    </header>
  );
}
