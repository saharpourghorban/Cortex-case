import { GlobalContext } from "components/GlobalContext";
import { useContext, useState } from "react";
import { MdPerson } from "react-icons/md";
import { useHistory } from "react-router";
import styles from "./UserMenu.module.css";

function Menu({ showMenu }: { showMenu: boolean }) {
  const { setUser, setLogin } = useContext(GlobalContext);

  return (
    <div className={`${styles.menu} ${showMenu ? "flex" : "hidden"}`}>
      <button
        className={styles.logout}
        onClick={() => {
          setUser(undefined);
          setLogin(false);
          window.localStorage.removeItem("email");
        }}
      >
        Log out
      </button>
    </div>
  );
}

export default function UserMenu() {
  const history = useHistory();
  const { login } = useContext(GlobalContext);

  const [showMenu, setShowMenu] = useState<boolean>(false);

  const loginClick = () => history.push("/auth");

  return login ? (
    <div
      className={styles.userMenu}
      onClick={() => setShowMenu((prev) => !prev)}
    >
      <MdPerson />

      <Menu showMenu={showMenu} />
    </div>
  ) : (
    <button className={styles.loginButton} onClick={loginClick}>
      Login
    </button>
  );
}
